# MINERS-006 - QA Reconciliation Round 01

You are QA for **MINERS-006 - Careers, Contact, and Global UI States from Figma**.

Your persisted report is `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md` with `STATUS: FAIL`, and defect `docs/workflow/tasks/MINERS-006-careers-contact/defects/MINERS-006-QA-001.md` is `OPEN`. The defect itself is valid and blocking: invalid Contact email feedback has `aria-invalid="true"`, no `aria-describedby`, and duplicate error messages/announcement nodes.

## Required reconciliation

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, Developer report, current QA report, QA-001, and this prompt. Do not modify application code/tests or any non-QA record.

Reconcile the affected acceptance-criteria list so the QA report and `MINERS-006-QA-001.md` identify the same criteria. The QA report currently says AC-006, AC-007, and AC-011; the defect currently says AC-006, AC-007, and AC-012. Determine the correct mapping from the Planner criteria and evidence. Preserve the defect’s reproduction, expected/actual result, severity, and `OPEN` status. If AC-011 or AC-012 is not affected, remove it consistently from both records; if both are affected, document why consistently.

Update only the QA-owned files `03-qa-report.md` and `defects/MINERS-006-QA-001.md`. Read both back and verify exactly one final QA handoff, one final EVIDENCE field in the report, a `STATUS: FAIL`, and matching defect references/criteria. Do not route to Developer until the records are internally consistent.

## Required final handoff block

```text
AGENT: QA
STATUS: FAIL
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md
EVIDENCE: <reconciled criteria, exact reproduction, commands/results, and defect path>
HANDOFF: Coordinator - validate the reconciled QA report and defect, then prepare Developer correction prompt
```
