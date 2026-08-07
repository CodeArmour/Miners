# Planner Correction Prompt — MINERS-006 Global UI Scope

You are Planner in the manual multi-window workflow. The user expanded MINERS-006 before Developer implementation. You are read-only with respect to application code/tests and may update only `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`.

## Scope change

MINERS-006 now includes a global design-system/state layer in addition to Careers and Contact:

- Figma node `0:1`: global styles and reusable components
- Global application of the updated styles/components across `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact`
- Notifications/feedback UI
- Inquiry form input styling and validation states: default, focus, filled, invalid, valid, disabled, and loading
- Submit states: loading, success, error, retry/recovery, and safe non-fabricated delivery behavior
- Consistent error handling and accessible announcements without inventing a backend

The existing Planner report is no longer sufficient because it covers only nodes `70:120` and `72:124`.

## Required reading

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, registry, existing Planner report, and current branch/status. Reinspect Figma nodes `0:1`, `70:120`, and `72:124` with the mandatory design-to-code workflow. Record all request/context IDs.

## Required correction

Rewrite the Planner report in place with the expanded title and scope. Preserve valid Careers/Contact planning while adding explicit, independently testable criteria for:

1. Global token/style application without regressions.
2. Reusable buttons, inputs, cards, notifications, and feedback primitives.
3. Inquiry input states: default, focus, filled, invalid, valid, disabled, and loading.
4. Accessible validation messages, live-region notifications, focus management, and keyboard behavior.
5. Submission loading, success, error, retry/recovery, and non-fabricated mailto/presentation-only behavior.
6. Error boundaries/fallback handling and no console/page errors across all routes.
7. Responsive and theme consistency across existing and new pages.
8. Visual and screenshot validation of the global states.

Keep at least 12 total criteria, or expand the matrix as needed. Update assumptions, risks, affected files, execution order, validation commands, dependencies, and Definition of Done. Explicitly identify whether any component/state is global and which routes consume it. Do not allow Developer to invent server delivery, notification persistence, or backend behavior.

Re-run `git branch --show-current` and preserve the current branch `task/miners-006-careers-contact`. Write the corrected Planner report, read it back, verify exactly one final `EVIDENCE:` and `HANDOFF:` block, and return the complete persisted report.

Use `STATUS: PASS` only if the expanded scope is implementation-ready. Use `BLOCKED` for unresolved product/backend decisions or inaccessible Figma context.

End with:

```text
AGENT: Planner
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-006 — Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md
EVIDENCE: <Figma nodes 0:1, 70:120, 72:124 and request IDs; expanded criteria; global components/states; commands; risks; report read-back verification>
HANDOFF: Coordinator — validate the revised Planner report; only after PASS may Developer implement the expanded scope.
```
