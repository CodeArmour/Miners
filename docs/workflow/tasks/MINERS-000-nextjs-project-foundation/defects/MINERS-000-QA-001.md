# MINERS-000-QA-001 — Playwright teardown did not terminate

- **Defect ID:** MINERS-000-QA-001
- **Title:** Playwright production E2E command failed to terminate cleanly.
- **Severity:** High (blocking until verified).
- **Source/reproduction:** `npm.cmd run test:e2e` previously reached all three viewport tests but timed out with exit 124 during Windows process teardown.
- **Affected criteria:** AC-10, AC-11, AC-12.
- **Root cause:** The prior Playwright/npm lifecycle retained a process handle after the browser tests completed.
- **Developer correction:** Replaced Playwright-managed server lifecycle with `tests/e2e/run-tests.mjs`, which owns the Next process, waits for readiness, runs Playwright, kills only its owned process tree, removes listeners, and calls `unref()` on the child handle.
- **Changed files:** `package.json`, `playwright.config.ts`, `tests/e2e/run-tests.mjs`.
- **Independent QA verification date:** 2026-07-31.
- **Independent verification commands and results:**
  - `npm.cmd run test:e2e` — exit 0; Playwright 3 passed, 0 failed, 0 skipped in 9.1 seconds.
  - Viewports: 375×812, 768×1024, 1440×900.
  - Axe violations: 0; browser console errors: 0; page errors: 0; horizontal overflow failures: 0.
  - `Get-NetTCPConnection -LocalPort 3100 -State Listen` — 0 listeners after completion.
  - Recent validation Node-process check — 0 new validation processes remained.
- **Evidence paths:** `tests/e2e/run-tests.mjs`, `tests/e2e/foundation.spec.ts`, `test-results/MINERS-000/mobile-375x812.png`, `test-results/MINERS-000/tablet-768x1024.png`, `test-results/MINERS-000/desktop-1440x900.png`.
- **Final disposition:** `VERIFIED_CLOSED`.

