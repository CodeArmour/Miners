# MINERS-006 - Status Audit

You are Status for **MINERS-006 - Careers, Contact, and Global UI States from Figma**.

## Gate and permissions

Planner, Developer, QA, and corrected Reviewer reports are persisted and Coordinator-validated. Planner/Developer/QA/Reviewer all report PASS; Reviewer decision is APPROVE; `MINERS-006-QA-001` is `VERIFIED_CLOSED`; no Reviewer defects are open. Remain read-only with respect to application code and all other lifecycle records. Create/update only `docs/workflow/tasks/MINERS-006-careers-contact/05-status-report.md`.

## Read first

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, `docs/workflow/README.md`, the task brief, all four lifecycle reports, QA-001, this prompt, the task registry, and current Git state.

## Required audit

Confirm exact task identity/title/report paths/handoffs, role ownership, and lifecycle ordering. Audit AC-001 through AC-014 and QA-001 disposition. Confirm persisted evidence: lint, type-check, unit 7/7, build, E2E 15/15 at 375x812/768x1024/1440x900, six HTTP 200 routes, form feedback IDs and `aria-describedby`, confirmation flow, Axe/runtime/overflow/broken-image/footer checks, screenshots, cleanup/ports, `git diff --check`, branch `task/miners-006-careers-contact`, changed-file and untracked inventories, and audit limitation. Verify no commit/push or unauthorized workflow/report/defect modifications are claimed or present beyond documented Coordinator records and pre-existing state.

Run only read-only audit commands needed to confirm the reports. Do not repair records or application files. If any report path, handoff, evidence, defect, title, permission, or lifecycle state is missing or contradictory, report `LIFECYCLE: CHANGES_REQUESTED` or `BLOCKED`; do not repair earlier records. Report `LIFECYCLE: PASSED` only when every gate is supported and no open blocking defect remains.

Write and read back `docs/workflow/tasks/MINERS-006-careers-contact/05-status-report.md` with task identity, Planner/Developer/QA/Reviewer results, report/handoff audit, AC/defect audit, validation evidence audit, changed files, non-blocking notes, persistence verification, and exactly one final lifecycle declaration.

Decision rules:

- Report `STATUS: PASS` and `LIFECYCLE: PASSED` only when all gates and
  AC-001 through AC-014 are supported, QA-001 is verified closed, and no
  contradiction remains.
- Report `STATUS: FAIL` and `LIFECYCLE: CHANGES_REQUESTED` for a failed gate,
  unresolved defect, unsupported conclusion, or required correction.
- Report `STATUS: BLOCKED` and `LIFECYCLE: BLOCKED` when a missing report,
  dependency, permission, environment capability, or decision prevents a valid
  audit conclusion.
- Never repair earlier records or infer a pass from missing evidence.

## Required final handoff block

```text
AGENT: Status
STATUS: PASS
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/05-status-report.md
EVIDENCE: <complete lifecycle, report-path, AC/defect, Git, validation, cleanup, and limitation audit>
HANDOFF: Coordinator - validate this Status report and record the final lifecycle.
LIFECYCLE: <PASSED | CHANGES_REQUESTED | BLOCKED>
```
