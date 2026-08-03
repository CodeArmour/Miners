# Status Prompt — MINERS-004 Projects Page from Figma

You are Status in the manual multi-window workflow. Perform only the final lifecycle audit. You are read-only with respect to application code, tests, and other roles' records. You may create/update only `docs/workflow/tasks/MINERS-004-projects-page/05-status-report.md`. Do not repair or rewrite prior records.

## Task and gate

- Task: `MINERS-004 — Projects Page from Figma`
- Branch: `task/miners-004-projects-page`
- Task directory: `docs/workflow/tasks/MINERS-004-projects-page/`
- Planner: `STATUS: PASS`
- Developer: `STATUS: PASS`, including correction round for QA-001
- QA: `STATUS: PASS`; AC-001 through AC-012 passed; QA-001 `VERIFIED_CLOSED`
- Reviewer: `STATUS: PASS`; `REVIEW_DECISION: APPROVE`; no Reviewer defects
- Current lifecycle: `QA_PASSED`; Status audit is authorized.

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, and `.wolf/cerebrum.md`
3. `docs/workflow/README.md`
4. `docs/workflow/task-registry.md`
5. `docs/workflow/tasks/MINERS-004-projects-page/00-task-brief.md`
6. `docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md`
7. `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md`
8. `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md`
9. `docs/workflow/tasks/MINERS-004-projects-page/04-reviewer-report.md`
10. `docs/workflow/tasks/MINERS-004-projects-page/defects/MINERS-004-QA-001.md`
11. Current Git branch/status/diff/untracked inventory

## Final audit scope

Audit report paths, handoffs, statuses, acceptance coverage, correction history, defect dispositions, changed-file authorization, branch identity, Git preservation, and evidence consistency. Confirm AC-001 through AC-012 passed, QA-001 is `VERIFIED_CLOSED`, Reviewer decision is exactly `APPROVE`, and no blocking or contradictory state remains.

Reconcile evidence for lint, type-check, unit 3/3, build, E2E 9/9, `/projects`/`/`/`/services` HTTP 200, inline SVG Spark semantics, exact-one-footer/contentinfo checks, Axe/console/page-error/failed-request/overflow checks, responsive screenshots at 375×812, 768×1024, and 1440×900, filter/theme/menu interactions, port cleanup, and `git diff --check`. Verify npm audit failures are explicitly disclosed as advisory-endpoint limitations, not passes. Verify no commit/push occurred for MINERS-004 and prior task/OpenWolf/workflow/agent records remain preserved.

Run and record these read-only Git commands from `C:\miners`:

```text
git branch --show-current
git status --short --branch
git diff --name-status
git ls-files --others --exclude-standard
git log -1 --oneline
git diff --check
```

Distinguish historical commits from any MINERS-004 commit. Use `LIFECYCLE: CHANGES_REQUESTED` or `BLOCKED` if any required evidence is missing, contradictory, or unsupported. Use `LIFECYCLE: PASSED` only when every lifecycle gate is valid.

Decision rules:

- Report `STATUS: PASS` and `LIFECYCLE: PASSED` only when all gates and
  AC-001 through AC-012 are supported, QA-001 is verified closed, and no
  contradiction remains.
- Report `STATUS: FAIL` and `LIFECYCLE: CHANGES_REQUESTED` for a failed gate,
  unresolved defect, unsupported conclusion, or required correction.
- Report `STATUS: BLOCKED` and `LIFECYCLE: BLOCKED` when a missing report,
  dependency, permission, environment capability, or decision prevents a valid
  audit conclusion.
- Never repair earlier records or infer a pass from missing evidence.

## Status report requirements

Write `docs/workflow/tasks/MINERS-004-projects-page/05-status-report.md` with:

- Task identity and branch
- Planner, Developer, QA, and Reviewer results
- Report-path and handoff audit
- AC-001 through AC-012 and defect audit
- Validation evidence audit
- Complete changed-file and authorization audit
- Remaining non-blocking notes and limitations
- Final lifecycle
- Report persistence verification

Use exactly one lifecycle value: `PASSED`, `CHANGES_REQUESTED`, or `BLOCKED`. Read the saved report back and return the complete persisted report.

End with:

```text
AGENT: Status
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/05-status-report.md
EVIDENCE: <complete report-path, gate, acceptance, defect, Git, validation, cleanup, and limitation audit evidence>
HANDOFF: Coordinator — validate this Status report and record the final lifecycle only if it declares PASSED.
LIFECYCLE: <PASSED | CHANGES_REQUESTED | BLOCKED>
```
