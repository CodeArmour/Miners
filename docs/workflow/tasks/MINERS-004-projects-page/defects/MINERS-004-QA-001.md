# MINERS-004-QA-001 — Projects Ask Miners control uses improvised Unicode iconography

- **Severity:** Medium (visual/accessibility consistency regression).
- **Affected criteria:** AC-005, AC-008, AC-009.
- **Reproduction:** Open `src/app/projects/page.tsx` and inspect the persistent Ask Miners control, or load `/projects` and inspect `.ask-miners`.
- **Expected:** Reuse the established shared inline SVG icon convention used by the homepage and Services page, with the text label exposed accessibly.
- **Actual:** Projects renders literal Unicode glyph text (`✦ Ask Miners`, represented as `âœ¦ Ask Miners` in the current file encoding) rather than the shared SVG `Icon` component. The homepage and Services implementations use SVG icon markup.
- **Evidence:** `src/app/projects/page.tsx` Ask Miners button; `src/app/page.tsx` and `src/app/services/page.tsx` shared icon implementations; Projects screenshots and source comparison. Lint/type/unit/build/E2E pass but do not assert icon implementation.
- **Correction verification:** `src/app/projects/page.tsx` now defines and renders inline SVG `Spark` with `aria-hidden="true"`; source assertion found `SOURCE_SPARK:True` and `SOURCE_UNICODE:False`. Production DOM at `/projects` returned `.ask-miners svg` count 1 and visible text `Ask Miners`; full lint/type/unit/build/E2E/diff regression passed.
- **Status:** VERIFIED_CLOSED.
