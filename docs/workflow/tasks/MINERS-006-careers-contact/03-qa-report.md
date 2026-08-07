# MINERS-006 - Careers, Contact, and Global UI States from Figma
## QA Report

### Task and prerequisites

Round-02 independent QA revalidation follows Developer `STATUS: PASS` for `MINERS-006-QA-001` on branch `task/miners-006-careers-contact`. QA remained read-only for application/tests/configuration.

### Test environment and repository scope

Windows PowerShell, Node/npm, Next.js production server, Chromium/Playwright; viewports 375x812, 768x1024, 1440x900. Branch and Git inventories matched expected Careers/Contact/global changes with prior/OpenWolf/workflow state preserved. No commit, push, reset, clean, unauthorized dependency, secret, or temporary Figma URL was introduced.

### Acceptance-criteria results

| Criterion | Independent validation | Evidence | Result |
|---|---|---|---|
| AC-001 | Figma traceability reconciled | Planner requests for Careers/Contact/global candidates | PASS |
| AC-002 | Six-route global style regression | Build/E2E all routes | PASS |
| AC-003 | Shared state primitives inspected | `feedback.tsx`, `field.tsx` | PASS |
| AC-004 | Careers sections/content verified | Source/screenshots | PASS |
| AC-005 | Contact fields/form structure verified | Source/screenshots | PASS |
| AC-006 | Every required field state/feedback association verified | Stable IDs, one node/message each | PASS |
| AC-007 | Validation announcements and focus association verified | `aria-invalid`, `aria-describedby`, no nesting | PASS |
| AC-008 | Valid/invalid/loading/confirmation/mailto lifecycle verified | Direct production Playwright | PASS |
| AC-009 | Careers CTAs and Ask Miners verified | E2E/runtime | PASS |
| AC-010 | Shared header/footer/logo/theme/icons verified | Six-route DOM/screenshots | PASS |
| AC-011 | Responsive/accessibility/runtime checks verified | E2E 15/15; Axe/runtime/overflow/broken images 0 | PASS |
| AC-012 | Static/runtime/error checks verified | Commands/HTTP/cleanup | PASS |
| AC-013 | Automated/visual/security evidence recorded | Full regression/screenshots/audit | PASS |
| AC-014 | Preservation/security verified | Git/source review | PASS |

### Contact form correction verification

Direct production Playwright invalid-state checks returned:

- Name: `aria-invalid=true`, `aria-describedby=name-feedback`, one feedback node, one message.
- Email: `aria-invalid=true`, `aria-describedby=email-feedback`, one feedback node, one message.
- Project brief: `aria-invalid=true`, `aria-describedby=brief-feedback`, one feedback node, one message.
- Consent: `aria-invalid=true`, `aria-describedby=consent-feedback`, one feedback node, one message.

No nested or duplicate alert/status messages remained. Valid completion opened exactly one confirmation dialog with Keep editing and Send inquiry actions. `MINERS-006-QA-001` is independently `VERIFIED_CLOSED`; AC-006/007/011 pass and AC-012 remains unaffected/pass.

### Installation, lint, type-check, test, build, and E2E results

`npm.cmd install --no-audit --no-fund` exit 0 (one package removed; npm emitted an allow-scripts warning for `unrs-resolver@1.12.2`). `npm.cmd run lint` exit 0, warnings/errors 0. `npm.cmd run type-check` exit 0, diagnostics 0. `npm.cmd test -- --run` exit 0, 7 files/7 tests passed. `npm.cmd run build` exit 0; generated all six routes plus `/_not-found`. `npm.cmd run test:e2e` exit 0, 15/15 passed at all three viewports. `git diff --check` exit 0 with normal line-ending warnings.

### Production, accessibility, responsive, and visual validation

Production HTTP probes for `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact` returned 200. Each route had exactly one footer/contentinfo, one h1, no overflow, no broken images, and no residual listener. E2E Axe violations, console errors, page errors, failed requests, overflow, and broken-image counts were all 0. Screenshots inspected:

- `test-results/MINERS-006/careers-mobile-375x812.png`, `careers-tablet-768x1024.png`, `careers-desktop-1440x900.png`.
- `test-results/MINERS-006/contact-mobile-375x812.png`, `contact-tablet-768x1024.png`, `contact-desktop-1440x900.png`.

Careers/Talent Pathway, Contact form, confirmation states, shared logo/footer, light-only theme, responsive stacking, focus styles, reduced motion, and visual hierarchy were intact.

### Security, audits, preservation, and limitations

No secrets, unsafe remote assets, fabricated backend delivery, or temporary Figma URLs were found. Contact uses explicit mailto behavior without persistence. `npm.cmd audit --json` exit 1 because the advisory endpoint failed; no severity counts are claimed. Ports 3000/3100 were released. Prior task/OpenWolf/workflow records were preserved.

### Defects

`MINERS-006-QA-001` - `VERIFIED_CLOSED`: stable field feedback IDs and `aria-describedby` associations now produce one concise feedback message per invalid field; valid confirmation flow also verified.

### Limitations and skipped checks

Only npm advisory audit lookup was unavailable due registry endpoint failure. No other required check was skipped.

### Report persistence verification

This report was written to `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md`, read back, and verified for the complete matrix, correction evidence, decision, exactly one final EVIDENCE field, and exactly one final HANDOFF field.

### QA decision

All AC-001 through AC-014 pass and QA-001 is verified closed. QA reports PASS.

### Evidence

Commands/results: install 0; lint 0; type-check 0; unit 7/7; build 0; E2E 15/15; six-route HTTP 200; direct field IDs/association/cardinality pass; confirmation dialog pass; Axe/runtime/overflow/broken-image 0; exact-one-footer pass; diff-check 0; audit 1/unavailable; ports 3000/3100 released. Screenshots: six Careers/Contact files under `test-results/MINERS-006/` at 375x812, 768x1024, 1440x900.

AGENT: QA
STATUS: PASS
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md
EVIDENCE: AC-001-AC-014 pass; QA-001 VERIFIED_CLOSED; Name/Email/Brief/Consent each have one stable feedback ID, aria-describedby association, one concise message, and invalid aria state; valid confirmation/Keep editing/Send inquiry verified; install/lint/type/unit 7/7/build/E2E 15/15/diff exit 0; six routes HTTP 200; Axe/runtime/overflow/broken-image clean; screenshots, audit limitation, Git preservation, and cleanup recorded.
HANDOFF: Coordinator - validate this persisted QA report and QA-001 VERIFIED_CLOSED, then route MINERS-006 to Reviewer.
PASSED_CRITERIA: AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-007, AC-008, AC-009, AC-010, AC-011, AC-012, AC-013, AC-014
FAILED_CRITERIA: NONE
DEFECTS: MINERS-006-QA-001 VERIFIED_CLOSED
