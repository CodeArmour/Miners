# MINERS-000 — QA Revalidation Round 01

You are QA for MINERS-000 — Next.js Project Foundation.

Do not stop after reading this prompt. You must actually execute the required QA commands and inspect the resulting artifacts. Acknowledging or summarizing this prompt without running the tests is not a QA result.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, the Planner report, the updated Developer report, the prior QA report, this correction prompt, and every QA-owned defect record under `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/defects/`.

The Developer reports `STATUS: PASS` after Correction Round 01. Independently revalidate all AC-01 through AC-14 and specifically verify:

- `MINERS-000-QA-001`: run `npm.cmd run test:e2e`; confirm it terminates with a complete 3-test pass summary, exit 0, zero failures/skips, zero residual Node processes, and zero port 3100 listeners. Confirm the production server is directly owned and no assertions were weakened.
- `MINERS-000-QA-002`: independently reconcile current Git status, diff-name-status, untracked inventory, and relevant governance diffs with the documented provenance. Confirm no unrelated file was reverted or modified by the Developer during Correction Round 01.

Rerun affected and regression validation without modifying application code, tests, governance records, or other role reports. Validation-generated ignored artifacts are allowed. Include installation/CI as needed, lint, type-check, unit tests, build, production HTTP probe, E2E/accessibility/console/page-error/overflow checks at 375×812, 768×1024, and 1440×900, screenshot inspection, audits, `git diff --check`, server shutdown, and port-release checks.

Update and read back your canonical report:

`docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md`

Update QA-owned defect records as needed. Mark each corrected defect `VERIFIED_CLOSED` only when independently verified; mark it `STILL_FAILING` otherwise. QA must not report PASS while any blocking defect remains open.

Return the complete persisted QA report through the CLI response. It must include the acceptance-criteria matrix, exact commands/results, regression evidence, defects, limitations, report persistence verification, and end with:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md
EVIDENCE: <exact files, commands, exit codes, counts, warnings, viewports, screenshots, and results>
HANDOFF: Reviewer if PASS; Developer with exact remaining defects if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
