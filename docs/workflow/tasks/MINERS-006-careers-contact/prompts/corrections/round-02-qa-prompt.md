# MINERS-006 - QA Revalidation Round 02

You are QA revalidating **MINERS-006 - Careers, Contact, and Global UI States from Figma** after Developer correction of `MINERS-006-QA-001`.

## Gate and permissions

The corrected Developer report is persisted at `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md` with `STATUS: PASS` and defect disposition `FIXED_PENDING_VERIFICATION`. Read it, the Planner report, the prior QA report, QA-001, the task brief, this prompt, and required OpenWolf/governance files. Remain read-only with respect to application code/tests. Update only `03-qa-report.md` and the QA-owned defect record.

## Required verification

Independently revalidate QA-001 and AC-001 through AC-014. For `/contact`, exercise invalid Email and every other field state. Confirm each invalid input has `aria-invalid="true"`, a stable `aria-describedby` pointing to exactly one feedback node, one concise error message, and no nested/duplicate alert or status announcement. Verify the IDs `name-feedback`, `email-feedback`, `brief-feedback`, and `consent-feedback` where applicable. Recheck valid, loading, confirmation, Keep editing, Send inquiry/mailto, and error behavior.

Repeat the full regression suite and record exact commands/results: install or justified equivalent, lint, type-check, unit tests, production build, E2E at 375x812/768x1024/1440x900, Axe/runtime/overflow/broken-image checks, six HTTP route probes, screenshots under `test-results/MINERS-006/`, port/process cleanup, `git diff --check`, Git preservation inventories, and audit with any advisory-endpoint limitation disclosed. Do not accept the Developer’s prior evidence without independent verification.

If the correction passes, update QA-001 to `VERIFIED_CLOSED`, mark AC-006/007/011 passed, retain AC-012 as unaffected/pass, and set the QA report `STATUS: PASS`. If any issue remains, keep QA-001 `STILL_FAILING` or `OPEN`, document exact evidence, and set `STATUS: FAIL`. Never report PASS with a blocking defect.

Write, read back, and verify `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md` with the complete AC matrix, environment, exact evidence, defects, limitations, persistence verification, exactly one final EVIDENCE field, and exactly one final HANDOFF field.

## Required final handoff block

```text
AGENT: QA
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md
EVIDENCE: <independent association/cardinality results, exact regression commands/results, screenshots, cleanup, defects, and limitations>
HANDOFF: Coordinator - <route Reviewer only if STATUS: PASS and QA-001 is VERIFIED_CLOSED>
```
