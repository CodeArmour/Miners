# Miners Agent Workflow Starter

Copy the contents of this folder into the root of your real project. Merge `AGENTS.md` carefully if your project already has repository instructions, and preserve any existing OpenWolf block.

This package establishes a gated delivery lifecycle:

`Planner → Developer → QA → Reviewer → Status`

Only Developer changes application code. The Coordinator saves every returned report verbatim and starts the next stage only after the applicable gate passes. A task is complete only when Status declares `LIFECYCLE: PASSED`.

## Install

1. Copy `.codex/`, `docs/`, `AGENTS.md`, `START-CODEX-PROMPT.md`, and `VALIDATION.md` into the project root.
2. Preserve project-specific instructions and existing hooks.
3. Review `.codex/config.toml`; it intentionally contains only conservative settings.
4. Start a Codex session with the prompt in `START-CODEX-PROMPT.md`.
5. Create tasks from `docs/workflow/templates/`.

Do not copy the example placeholders literally into runtime task paths; replace `MINERS-###-short-title` with the assigned task ID and slug.
# Miners
