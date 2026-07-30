# Workflow Operations

## Start a task

1. Find the highest ID in `task-registry.md` and `tasks/`.
2. Assign the next unused `MINERS-###`.
3. Create `tasks/MINERS-###-short-title/`, `defects/`, and `00-task-brief.md`.
4. Add the task to the registry as `DRAFT`.
5. Invoke Planner.

## Run gates

Persist each complete agent response verbatim before evaluating its gate. Use report names `01` through `05`. Run no dependent stages concurrently. Independent read-only investigation may be parallel only when it does not bypass a gate.

Failures use `correction-round.md`. Keep authoritative reports at canonical names; archive superseded rounds with unambiguous suffixes such as `.round-1.md` before replacing them. Never erase defect history.

## Registry

Update the lifecycle after every valid gate. `PASSED` is written only after Status declares it.

## Runtime layout

```text
tasks/MINERS-###-short-title/
├── 00-task-brief.md
├── 01-planner-report.md
├── 02-developer-report.md
├── 03-qa-report.md
├── 04-reviewer-report.md
├── 05-status-report.md
├── correction-round-01.md
└── defects/
```
