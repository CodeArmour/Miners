# MINERS-002-QA-006 — Desktop navbar width is not reduced to the Figma composition

- **Severity:** Medium.
- **Affected criteria:** AC-002, AC-005, AC-009.
- **Reproduction:** Inspect `.site-header` computed/layout rules and compare the 1440×900 screenshot with the Figma desktop node.
- **Expected:** A reduced-width, centered glass navbar with reference outer margins.
- **Actual:** `.site-header` has no width/max-width/inline-margin constraint and expands across the viewport with only page-edge spacing; the screenshot shows a full-width strip rather than the reduced Figma composition.
- **Root cause:** Header width was not mapped to the Figma reference container; only internal padding was adjusted.
- **Evidence:** `src/app/globals.css` `.site-header` declaration; `test-results/MINERS-002/desktop-1440x900.png`; Figma node `10:2` evidence.
- **Correction verification:** Production Playwright measured 1440x900 header width 1312px with left margin 64px, and 375x812 width 335px with left margin 20px. Screenshot confirms centered reduced-width composition. `npm.cmd run test:e2e` exit 0, 3/3 passed.
- **Status:** VERIFIED_CLOSED.
