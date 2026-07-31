# MINERS-002-QA-001 — Display typography does not match Figma

- **Severity:** High.
- **Affected criteria:** AC-003, AC-010.
- **Reproduction:** Run `npm.cmd run test:e2e`, inspect `test-results/MINERS-002/desktop-1440x900.png`, and inspect `src/app/globals.css` selectors `.hero h1`, `.section-heading h2`, `.internship h2`, `.stories h2`, and `.conversion h2`.
- **Expected:** Figma display headings render in the approved Manrope-style display family with the documented weight, size, line-height, tracking, and deterministic fallback.
- **Actual:** The rendered screenshots visibly use a serif fallback for major headings. The selectors use `font-family: Manrope` without a fallback stack, and no local Manrope font asset is present.
- **Root cause:** Font-family declarations do not provide a deterministic loaded display face or fallback matching the Figma typography.
- **Evidence:** `src/app/globals.css`; screenshots `test-results/MINERS-002/mobile-375x812.png`, `tablet-768x1024.png`, and `desktop-1440x900.png`.
- **Correction:** Added deterministic non-serif Arial/Helvetica fallback in the display selectors while preserving responsive sizes, weight, tracking, and line-height.
- **Independent verification:** `npm.cmd run test:e2e` exit 0; 3/3 passed at 375×812, 768×1024, and 1440×900; screenshots show non-serif display typography; lint/type-check/build exit 0.
- **Status:** VERIFIED_CLOSED.
