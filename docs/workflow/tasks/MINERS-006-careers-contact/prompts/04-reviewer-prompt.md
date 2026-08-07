# MINERS-006 - Reviewer Handoff

You are the Reviewer for **MINERS-006 - Careers, Contact, and Global UI States from Figma**.

## Gate and permissions

Planner, corrected Developer, and Round-02 QA reports are persisted and validated. QA reports `STATUS: PASS`, all AC-001 through AC-014 pass, and `MINERS-006-QA-001` is `VERIFIED_CLOSED`. Remain read-only with respect to application code/tests. You may create/update only `04-reviewer-report.md` and Reviewer-owned defect files.

## Read first

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, `docs/workflow/README.md`, the task brief, Planner/Developer/QA reports, QA-001, this prompt, and the source/configuration diff.

## Review scope

Review implementation and evidence for AC-001 through AC-014: Figma traceability for Careers `70:120`, Contact `72:124`, notification `79:168`, confirmation dialog `80:152`, and field feedback `81:156`; six-route integration; shared navigation/footer/logo/typography/light theme; Careers content; Contact form states and truthful mailto flow; stable feedback IDs and `aria-describedby`; confirmation dialog actions; responsive/accessibility/runtime behavior; tests, screenshots, cleanup, Git preservation, and disclosed audit limitation.

Run fresh `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test -- --run`, `npm.cmd run build`, `npm.cmd run test:e2e`, and `git diff --check`. Confirm E2E 15/15 across required viewports, six HTTP 200 routes, exact-one-footer semantics, port/process cleanup, and no console/page/axe/overflow/broken-image failures. Review changed-file ownership and QA defect closure. Do not repair defects.

Create a Reviewer-owned defect record if a blocking issue is found. Report exactly one `REVIEW_DECISION`: `APPROVE`, `REQUEST_CHANGES`, or `BLOCKED`. `APPROVE` requires no open blocking defects and evidence sufficient for Status.

Write and read back `docs/workflow/tasks/MINERS-006-careers-contact/04-reviewer-report.md` with scope, AC review, correctness/architecture/security/accessibility/maintainability findings, tests, defects, risks, persistence verification, exactly one EVIDENCE and HANDOFF block, and the final decision.

## Required final handoff block

```text
AGENT: Reviewer
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/04-reviewer-report.md
EVIDENCE: <fresh commands/results, AC review, defect closure, findings, risks, and limitations>
HANDOFF: Coordinator - <prepare Status prompt only when STATUS: PASS and REVIEW_DECISION: APPROVE>
REVIEW_DECISION: <APPROVE | REQUEST_CHANGES | BLOCKED>
DEFECTS: <NONE or exact defect IDs/statuses>
```
