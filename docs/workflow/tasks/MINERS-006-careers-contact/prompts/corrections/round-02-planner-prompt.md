# MINERS-006 - Planner Correction Round 02

You are the Planner for MINERS-006 - Careers, Contact, and Global UI States from Figma.

## Current gate and blocker

The persisted Planner report at `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md` is `STATUS: BLOCKED`. Careers node `70:120` and Contact node `72:124` were successfully inspected, but global node `0:1` returned a no-layer-selected error. Developer implementation is paused. The user has now supplied selectable global-context candidates `79:168`, `80:152`, and `81:156`.

## Required action

Remain read-only with respect to application code and tests. Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, `docs/workflow/README.md`, the task brief, the current Planner report, and this correction prompt.

Inspect Figma candidates `79:168`, `80:152`, and `81:156` with the mandatory Figma design-to-code workflow. Record successful request IDs and concrete token, component, notification, input, loading, success, error, and accessibility-state evidence. Map which candidate(s) satisfy the global styles/components scope while preserving Careers/Contact request IDs.

If the supplied candidates do not provide sufficient global evidence, keep the task `BLOCKED`; do not infer design evidence from screenshots or existing code. Only an explicit user-approved scope revision may replace the inaccessible global-node requirement, and that revision must update assumptions, risks, acceptance criteria, and validation plan.

## Required report

Update only `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`. Preserve the 14-criterion structure unless a user-approved scope revision explicitly justifies a change. Write the complete report, read it back from disk, and verify task identity, branch, Figma request IDs, blocker or resolution, acceptance criteria, test plan, Definition of Done, exactly one final `EVIDENCE:` field, and exactly one final `HANDOFF:` field.

Use `STATUS: PASS` only when global design context or an approved scope revision makes Developer implementation-ready. Otherwise use `STATUS: BLOCKED` and state the actionable dependency. Do not create a Developer prompt or modify application files, registry, brief, defect files, or other role-owned reports.

## Required final handoff block

```text
AGENT: Planner
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md
EVIDENCE: <exact Figma requests, branch, scope, commands, and blocker or resolution>
HANDOFF: Coordinator - revalidate this report; Developer remains paused unless STATUS: PASS
```
