# MINERS-002-QA-002 — Improvised iconography diverges from Figma

- **Severity:** High.
- **Affected criteria:** AC-003, AC-006, AC-009.
- **Reproduction:** Inspect `src/app/page.tsx` controls and run `npm.cmd run test:e2e`.
- **Expected:** Navbar, theme/menu, social, carousel, CTA, and Ask Miners icons use faithful stable assets or an approved icon library, with consistent sizing and alignment.
- **Actual:** Controls use improvised Unicode/text glyphs (`☾`, `☰`, `×`, arrows, `f`, `◉`, `◎`, `𝕏`, and `✦`). They visibly differ in stroke, baseline, and visual weight from the Figma iconography and are inconsistent across controls.
- **Root cause:** No stable icon assets or approved icon library was integrated; glyph placeholders were used instead.
- **Evidence:** `src/app/page.tsx` (`ArrowButton`, `.theme-toggle`, `.menu-toggle`, `.social`, `.ask-miners`); screenshots under `test-results/MINERS-002/`.
- **Correction:** Replaced improvised glyphs with a shared inline SVG `Icon` component covering theme, menu, close, arrows, social marks, and Ask Miners.
- **Independent verification:** `src/app/page.tsx` contains the shared SVG icon paths; E2E exit 0 with 3/3 passes and Axe/console/page-error failures 0.
- **Status:** VERIFIED_CLOSED.
