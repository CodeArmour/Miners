// Lightweight symbol extraction used by the OpenWolf post-write hook.
// This module intentionally has no external dependencies so hooks remain
// runnable in a fresh project checkout.

export const SYMBOL_MIN_TOKENS = 120;

const SUPPORTED = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".py", ".rs", ".go", ".java", ".c", ".cpp",
]);

export function symbolsSupported(ext) {
  return SUPPORTED.has(String(ext).toLowerCase());
}

export function extractSymbols(content, ext) {
  if (!symbolsSupported(ext) || typeof content !== "string") return [];

  const lines = content.split(/\r?\n/);
  const symbols = [];
  const patterns = [
    /\b(?:export\s+)?(?:default\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/, // JS/TS
    /\b(?:export\s+)?(?:abstract\s+)?class\s+([A-Za-z_$][\w$]*)/, // JS/TS/Java
    /\b(?:export\s+)?(?:interface|type|enum)\s+([A-Za-z_$][\w$]*)/, // TS
    /\b(?:pub\s+)?fn\s+([A-Za-z_]\w*)/, // Rust
    /\b(?:func|def)\s+([A-Za-z_]\w*)/, // Go/Python
  ];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    for (const pattern of patterns) {
      const match = line.match(pattern);
      if (!match) continue;
      const name = match[1];
      const kind = /class/.test(pattern.source)
        ? "class"
        : /interface|type|enum/.test(pattern.source)
          ? "type"
          : "fn";
      const startLine = index + 1;
      let endLine = startLine;
      let depth = 0;
      for (let cursor = index; cursor < lines.length; cursor += 1) {
        depth += (lines[cursor].match(/\{/g) || []).length;
        depth -= (lines[cursor].match(/\}/g) || []).length;
        endLine = cursor + 1;
        if (cursor > index && depth <= 0) break;
      }
      const snippet = lines.slice(startLine - 1, endLine).join("\n");
      symbols.push({
        kind,
        name,
        startLine,
        endLine,
        tokens: Math.ceil(snippet.length / 3.5),
      });
      break;
    }
  }

  return symbols;
}
