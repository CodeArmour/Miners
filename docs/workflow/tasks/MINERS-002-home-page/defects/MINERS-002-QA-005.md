# MINERS-002-QA-005 — Navbar is not sticky during scroll

- **Severity:** High.
- **Affected criteria:** AC-005, AC-006, AC-010.
- **Reproduction:** Start the production server, open at 1440×900, record `.site-header` bounding box, scroll to 1800px, and record it again.
- **Expected:** The navbar remains visible near its sticky top offset without overlapping content.
- **Actual:** Bounding box moved from `y=32` to `y=-1768` after scroll; the header left the viewport.
- **Root cause:** `.site-header` declares `position: sticky`, but the `.home` ancestor uses `overflow: hidden`, preventing effective sticky behavior in the page scroll context.
- **Evidence:** `src/app/globals.css` `.home` and `.site-header`; targeted Playwright interaction output `{sticky:false,beforeY:32,afterY:-1768}` at 1440×900; port 3200 released after the check.
- **Correction verification:** Production Playwright at 1440x900 measured `.site-header` y=32 before scroll and y=20 after `scrollTo(0,1800)`; sticky remained effective, controls remained present, and port 3000 was released. `npm.cmd run test:e2e` exit 0, 3/3 passed.
- **Status:** VERIFIED_CLOSED.
