# MINERS-004 — Projects Page from Figma
## QA Report

### Task and prerequisites

Round-01 QA revalidation follows Developer `STATUS: PASS` for `MINERS-004-QA-001` on branch `task/miners-004-projects-page`. Previous QA failed AC-005/008/009 for a Unicode Ask Miners glyph. QA remained read-only for application/tests/configuration.

### Repository and scope verification

Branch and Git inventory matched the Developer scope plus preserved OpenWolf, agent, governance, and prior task changes. No commit, push, reset, clean, unauthorized dependency, secret, or temporary Figma URL was introduced. QA modified only this report and its QA-owned defect record.

### Acceptance-criteria results

| Criterion | Independent validation | Evidence | Result |
|---|---|---|---|
| AC-001 | Figma node/request IDs reconciled | Node 51:10; Developer request IDs | PASS |
| AC-002 | `/projects`, `/`, `/services` production probes | All HTTP 200; build routes generated | PASS |
| AC-003 | Planned Projects sections inspected | Source and screenshots | PASS |
| AC-004 | Sample case study labels/content verified | Source/unit tests | PASS |
| AC-005 | Shared conventions and corrected SVG Ask Miners icon verified | `Spark` component; source/DOM assertion | PASS |
| AC-006 | Filter buttons and `aria-pressed` behavior verified | Mobile Products 1 card; All work 4 cards | PASS |
| AC-007 | Responsive behavior at all required viewports verified | E2E 9/9; screenshots | PASS |
| AC-008 | Axe, landmarks, headings, focus, icon semantics verified | Axe 0; one h1/footer; SVG aria-hidden | PASS |
| AC-009 | Visual composition and icon consistency inspected | Three screenshots; SVG matches shared convention | PASS |
| AC-010 | Full regression passed | lint/type/unit/build/E2E/diff exit 0 | PASS |
| AC-011 | Stable CSS assets and no remote Figma URLs verified | Source search | PASS |
| AC-012 | Preservation and no unauthorized changes verified | Git status/diff review | PASS |

### Correction verification

Source assertion: `SOURCE_SPARK:True`, `SOURCE_UNICODE:False`. Production DOM at `/projects` returned `.ask-miners svg` count `1`, visible text `Ask Miners`, and the SVG had `aria-hidden="true"`. The homepage and Services Ask Miners controls also returned one SVG each. `MINERS-004-QA-001` is independently `VERIFIED_CLOSED`.

### Lint, type-check, test, and build results

`npm.cmd run lint` exit 0 (warnings/errors 0). `npm.cmd run type-check` exit 0 (diagnostics 0). `npm.cmd test` exit 0 (3 files/3 tests passed, 0 failed/skipped). `npm.cmd run build` exit 0; generated `/`, `/services`, `/projects`, `/_not-found`. `npm.cmd run test:e2e` exit 0 (9/9: homepage, Services, Projects at 375x812, 768x1024, 1440x900). `git diff --check` exit 0 with normal line-ending warnings.

### Production, accessibility, responsive, and visual validation

Direct production probes returned HTTP 200 for all routes; each had exactly one footer/contentinfo, one h1, and no horizontal overflow. E2E reported Axe violations 0, console errors 0, page errors 0, failed requests 0, and overflow 0 at all required viewports. Filter, Ask Miners dialog, mobile menu, and theme behavior remained functional. Screenshots inspected:

- `test-results/MINERS-004/projects-mobile-375x812.png` — 375x812.
- `test-results/MINERS-004/projects-tablet-768x1024.png` — 768x1024.
- `test-results/MINERS-004/projects-desktop-1440x900.png` — 1440x900.

Visual hierarchy, sample cards, conversion panels, footer, and corrected SVG Ask Miners icon were intact with no clipping or overlap.

### Security, audits, preservation, and limitations

No secrets or temporary Figma assets were found. `npm.cmd audit --omit=dev --json` and `npm.cmd audit --json` each exited 1 because the npm advisory bulk endpoint failed; no severity counts are claimed. Ports 3000 and 3100 were released and no owned validation server remained. Prior tasks/OpenWolf/workflow records were preserved.

### Defects

`MINERS-004-QA-001` — `VERIFIED_CLOSED`: Unicode Ask Miners glyph replaced by inline SVG `Spark`; source and production DOM verified.

### Limitations and skipped checks

Only npm advisory audits were unavailable due the registry endpoint failure. No other required check was skipped.

### Report persistence verification

This report was written to `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md`, read back, and verified for the matrix, correction evidence, decision, and final handoff.

### QA decision

All AC-001 through AC-012 pass and the blocking QA defect is verified closed. QA reports PASS.

### Evidence

Commands/results: lint 0; type-check 0; unit 3/3; build 0; E2E 9/9; HTTP `/projects`, `/`, `/services` 200; source `Spark=True`, Unicode=False; DOM `.ask-miners svg=1`, text `Ask Miners`, `aria-hidden=true`; footer/contentinfo 1 per route; Axe/console/page-error/failed-request/overflow 0; diff-check 0; audits 1/unavailable; ports 3000/3100 0 listeners. Screenshots: `test-results/MINERS-004/projects-mobile-375x812.png`, `projects-tablet-768x1024.png`, `projects-desktop-1440x900.png`.

AGENT: QA
STATUS: PASS
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md
EVIDENCE: AC-001–AC-012 pass; MINERS-004-QA-001 verified closed; source and production DOM confirm inline SVG Spark with aria-hidden semantics and no Unicode glyph; lint/type/unit/build/E2E/diff exit 0; E2E 9/9; Axe/runtime/overflow clean; screenshots, HTTP, exact-one-footer, cleanup, and audit limitation recorded.
HANDOFF: Coordinator — validate this persisted report and `MINERS-004-QA-001 VERIFIED_CLOSED`, then route to Reviewer.
PASSED_CRITERIA: AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-007, AC-008, AC-009, AC-010, AC-011, AC-012
FAILED_CRITERIA: NONE
DEFECTS: MINERS-004-QA-001 VERIFIED_CLOSED
