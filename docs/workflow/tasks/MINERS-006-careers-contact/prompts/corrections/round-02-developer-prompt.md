# MINERS-006 - Developer Correction Round 02

You are the Developer for **MINERS-006 - Careers, Contact, and Global UI States from Figma**. Planner is PASS. QA report `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md` is FAIL, and QA defect `docs/workflow/tasks/MINERS-006-careers-contact/defects/MINERS-006-QA-001.md` is OPEN.

## Defect to fix

`MINERS-006-QA-001` affects AC-006, AC-007, and AC-011. On `/contact`, filling Email with `bad`, blurring, and waiting for validation produces `aria-invalid="true"`, `aria-describedby=null`, two matching `Enter a valid email address.` messages, and duplicate alert/status semantics. The outer `.field-feedback-error` contains nested `.field-state-error`.

## Required correction

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, Developer report, QA report, QA-001, and this prompt. Modify only application code/tests and your own Developer report. Keep the existing visual/state behavior, but ensure every invalid field has exactly one concise feedback node, a stable unique ID referenced by the input's `aria-describedby`, correct `aria-invalid`, and one intended live-region announcement without nested duplicate alerts. Apply the shared fix to all relevant fields, not only Email. Add or update focused unit/E2E assertions for feedback cardinality and association.

Rerun affected and full regression checks: lint, type-check, unit tests, production build, E2E at 375x812/768x1024/1440x900, direct invalid/valid/loading/confirmation form interactions, Axe/runtime/overflow/broken-image checks, six HTTP route probes, screenshots, port/process cleanup, `git diff --check`, and audit with any endpoint limitation disclosed. Do not modify QA records, Planner report, task brief, registry, prompts, or unrelated workflow/OpenWolf files.

Update `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md` with Defect ID, root cause, correction, changed files, validation evidence, and `FIXED_PENDING_VERIFICATION`. Read it back and verify one final EVIDENCE and HANDOFF block. Return the complete persisted report with `STATUS: PASS` only when the correction and regression evidence are complete.

## Required final handoff block

```text
AGENT: Developer
STATUS: PASS
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md
EVIDENCE: MINERS-006-QA-001 root cause/correction, changed files, exact form association/cardinality assertions, regression commands and results, cleanup, and limitations
HANDOFF: Coordinator - validate the corrected Developer report, then prepare QA revalidation of QA-001 and AC-001 through AC-014
```
