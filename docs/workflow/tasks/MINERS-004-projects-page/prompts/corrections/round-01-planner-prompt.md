# Planner Correction Prompt — MINERS-004 Round 01

You are Planner in the manual multi-window workflow. Correct only your canonical Planner report. You are read-only with respect to application code and tests and may create/update only `docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md`.

## Validated blocker

The persisted report currently states that the authoritative branch is `main` and records `git branch --show-current` as `main`. The Coordinator created the dedicated task branch, and the actual current branch is:

`task/miners-004-projects-page`

Developer must remain blocked until the Planner report is corrected and independently read back.

## Required reading

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, registry, the existing Planner report, and current Git branch/status. Reconcile the report with the current repository state. Do not implement or modify application code/tests.

## Required correction

Update every branch reference in `01-planner-report.md` from `main` to `task/miners-004-projects-page`, including task context, repository-state evidence, validation evidence, and final `EVIDENCE:`. Preserve the Figma node `51:10`, both request IDs, all 12 acceptance criteria, required sections, risks, validation plan, and Definition of Done. Re-run `git branch --show-current` and record the exact exit code and observed branch. Confirm all other evidence remains accurate.

Write the corrected report, read it back from disk, verify all required sections, exactly one final handoff block, and consistency with the current branch. Return the complete persisted report.

Use `STATUS: PASS` only after the branch correction is verified and no material planning blocker remains. Use `BLOCKED` or `FAIL` for any remaining blocker.

End with:

```text
AGENT: Planner
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md
EVIDENCE: Branch command and exit code, corrected branch, preserved Figma request IDs, 12 criteria, required sections, and report read-back evidence
HANDOFF: Coordinator — validate the corrected Planner report; only after PASS may Developer begin.
```
