# MINERS-002-QA-004 — Navbar composition and hierarchy diverge

- **Severity:** High.
- **Affected criteria:** AC-002, AC-005, AC-009, AC-010.
- **Reproduction:** Inspect `src/app/page.tsx`/`.site-header` and the desktop screenshot at 1440×900.
- **Expected:** Figma navbar has balanced brand treatment, navigation hierarchy, glass spacing, controls, and clear primary/secondary actions.
- **Actual:** The rendered desktop navbar is a compressed thin strip with a small brand mark, tightly packed links, and low-contrast/weakly differentiated controls. The visual hierarchy does not match the Figma composition.
- **Root cause:** Navbar geometry and typography were reduced to a generic compact flex row instead of reproducing the reference composition and spacing.
- **Evidence:** `.site-header`, `.main-nav`, `.header-actions` in `src/app/globals.css`; `src/app/page.tsx`; `test-results/MINERS-002/desktop-1440x900.png`.
- **Correction:** Rebalanced header glass padding, centered navigation, brand treatment, action grouping, mobile menu target, and control sizing.
- **Independent verification:** Desktop and mobile screenshots inspected; menu/theme controls are visible and labelled; E2E exit 0 with 3/3 passes and Axe 0 violations.
- **Status:** VERIFIED_CLOSED.
