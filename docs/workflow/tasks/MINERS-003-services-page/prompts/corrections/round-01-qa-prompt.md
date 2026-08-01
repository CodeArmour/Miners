# QA Revalidation Prompt — MINERS-003 Round 01

You are QA in the manual multi-window correction workflow. Validate the Developer correction independently and do not modify application code, tests, or Reviewer-owned records. You may create/update only `docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md` and QA-owned defect records.

## Task and gate

- Task: `MINERS-003 — Services Page from Figma`
- Branch: `task/miners-003-services-page`
- Task directory: `docs/workflow/tasks/MINERS-003-services-page/`
- Previous Reviewer result: `STATUS: FAIL`, `REVIEW_DECISION: REQUEST_CHANGES`
- Correction: Developer reports `MINERS-003-REV-001` as `FIXED_PENDING_VERIFICATION`
- Current lifecycle: `CHANGES_REQUESTED`; QA revalidation is required before Reviewer re-review and Status.

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md` and relevant context files
3. `docs/workflow/README.md`
4. `docs/workflow/task-registry.md`
5. `docs/workflow/tasks/MINERS-003-services-page/00-task-brief.md`
6. `docs/workflow/tasks/MINERS-003-services-page/01-planner-report.md`
7. `docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md`
8. `docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md`
9. `docs/workflow/tasks/MINERS-003-services-page/04-reviewer-report.md`
10. `docs/workflow/tasks/MINERS-003-services-page/defects/MINERS-003-REV-001.md`

## Validation scope

Independently revalidate AC-001 through AC-012 and all affected regression checks. Specifically verify that `/` and `/services` each render exactly one `footer`/`contentinfo` landmark, that `SiteFooter` in `src/app/layout.tsx` is the sole rendered footer owner, and that no page-local footer remains in the DOM. Confirm footer content, navigation, styling, accessibility, responsiveness, and homepage/Services behavior remain intact.

Run and record exact commands, exit codes, counts, warnings, and limitations:

- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Production HTTP probes for `/services` and `/`
- Direct DOM footer-cardinality checks for both routes
- Axe, console, page-error, responsive, and overflow checks at 375×812, 768×1024, and 1440×900
- Screenshot inspection under `test-results/MINERS-003/`
- Port/process cleanup verification
- `git diff --check`

Audit commands should be run if possible. If npm advisory endpoints remain unavailable, disclose the exact exit code and limitation; do not claim an audit pass. Verify no unauthorized files were modified and that no commit or push occurred.

Do not modify `MINERS-003-REV-001.md`; it is Reviewer-owned. Record the independent disposition in the QA report as `VERIFIED_CLOSED` only if the duplicate footer is demonstrably resolved, otherwise `STILL_FAILING` and create/update a QA-owned defect if needed. QA must report `FAIL` while any blocking issue remains.

## QA report requirements

Update `docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md` with the complete correction-round evidence, including:

- Developer prerequisite and correction round
- AC-001 through AC-012 validation matrix
- Exact commands/results and test environment
- Footer-cardinality evidence for both routes
- Regression, accessibility, responsive, screenshot, runtime, and Git evidence
- Defect disposition for `MINERS-003-REV-001`
- Limitations/skipped checks
- Report persistence verification
- QA decision

Read the saved report back from disk and return it completely. End with:

```text
AGENT: QA
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-003 — Services Page from Figma
REPORT: docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md
EVIDENCE: <exact correction-round commands, exit codes, counts, footer cardinality, accessibility, runtime, screenshots, cleanup, and limitations>
HANDOFF: Coordinator — validate this persisted QA report; if PASS and MINERS-003-REV-001 is VERIFIED_CLOSED, route to Reviewer for re-review; otherwise prepare the next correction or blocker.
PASSED_CRITERIA: <exact AC IDs>
FAILED_CRITERIA: <NONE or exact AC IDs>
DEFECTS: MINERS-003-REV-001 <VERIFIED_CLOSED | STILL_FAILING> and any QA defect IDs
```
