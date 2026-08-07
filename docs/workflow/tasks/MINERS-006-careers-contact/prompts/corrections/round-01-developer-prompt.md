# MINERS-006 - Developer Report Correction Round 01

You are the Developer for MINERS-006 - Careers, Contact, and Global UI States from Figma. The Planner prerequisite is PASS at `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`.

## Blocking report discrepancy

The persisted Developer report `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md` lists `src/components/site-footer.tsx` and `src/app/layout.tsx` as changed. Independent repository checks show no content delta for either file: `git diff --raw -- src/app/layout.tsx src/components/site-footer.tsx` reports identical index/worktree object IDs, and `git diff --cached --name-status` reports neither file. This makes the changed-files inventory unsupported.

## Required correction

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, the validated Planner report, the current Developer report, and this prompt. Do not modify application code or tests unless an actual implementation discrepancy is found. Reconcile the report's changed-files section and evidence against `git diff --name-status`, `git ls-files --others --exclude-standard`, and exact object/content comparisons. Remove files that have no implementation delta, or provide reproducible evidence for any file that truly changed. Preserve the distinction between Developer-owned implementation files, Coordinator-owned workflow files, and pre-existing/unrelated worktree state.

Rerun the affected preservation/report checks, including `git diff --check`, branch/status/diff inventories, and any relevant static validation if the implementation is untouched. Keep the existing successful validation evidence (lint, type-check, unit 7/7, build, E2E 15/15, six HTTP 200 routes, accessibility/runtime/overflow/broken-image checks, screenshots, port cleanup, and audit limitation) only if it still matches repository state.

Update only `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md`. Read it back and verify all required Developer sections, exact changed-file inventory, one final `EVIDENCE:` field, one final `HANDOFF:` field, and `STATUS: PASS`. Do not modify the task brief, Planner/QA/Reviewer/Status reports, registry, prompts, or defect files.

## Required final handoff block

```text
AGENT: Developer
STATUS: PASS
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md
EVIDENCE: <reconciled changed files, exact preservation commands/results, and retained validation evidence>
HANDOFF: Coordinator - validate the corrected persisted report before routing QA
```
