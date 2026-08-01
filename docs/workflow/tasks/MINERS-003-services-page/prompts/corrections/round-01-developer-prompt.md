# Developer Correction Prompt — MINERS-003 Round 01

You are the Developer in the manual multi-window correction workflow. Work only on the validated Reviewer defect below. You may modify application code and tests, and you may create/update only your canonical Developer report at `docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md`. Do not modify the task brief, registry, prompts, QA/Reviewer/Planner/Status reports, or defect records. Do not commit or push.

## Task and gate

- Task: `MINERS-003 — Services Page from Figma`
- Branch: `task/miners-003-services-page`
- Task directory: `docs/workflow/tasks/MINERS-003-services-page/`
- Reviewer gate: `STATUS: FAIL`, `REVIEW_DECISION: REQUEST_CHANGES`
- Blocking defect: `MINERS-003-REV-001`
- QA must independently revalidate after this correction; Status remains blocked.

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md` and relevant context files
3. `docs/workflow/README.md`
4. `docs/workflow/tasks/MINERS-003-services-page/00-task-brief.md`
5. `docs/workflow/tasks/MINERS-003-services-page/01-planner-report.md`
6. `docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md`
7. `docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md`
8. `docs/workflow/tasks/MINERS-003-services-page/04-reviewer-report.md`
9. `docs/workflow/tasks/MINERS-003-services-page/defects/MINERS-003-REV-001.md`

## Required correction

Correct `MINERS-003-REV-001`: `src/app/layout.tsx` renders the shared `SiteFooter`, while both `src/app/page.tsx` and `src/app/services/page.tsx` also render page-local footer markup. Each route must render exactly one shared footer with unambiguous ownership. Preserve the intended footer content, styling, navigation, accessibility, and responsive behavior. Remove the duplicate page-local markup or otherwise establish one clear owner. Do not hide the duplicate with CSS.

Add or update a regression assertion where appropriate so the homepage and Services route each expose exactly one footer landmark. Keep the existing Services and homepage behavior intact.

## Required validation

Run and record exact commands, exit codes, counts, warnings, and limitations:

- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Production HTTP probes for `/services` and `/`
- Accessibility, console/page-error, responsive, and overflow checks
- Verify each route has exactly one footer landmark
- Verify ports/processes are released
- `git diff --check`

Rerun all affected regression checks, not only the new assertion. Keep npm audit limitations explicit if the advisory endpoint remains unavailable. Preserve unrelated Git/OpenWolf/workflow changes and do not revert other work.

## Developer report requirements

Update `docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md` with a correction-round section containing:

- Defect ID `MINERS-003-REV-001`
- Root cause
- Correction and changed files
- Regression assertion and exact validation evidence
- Any limitations
- Disposition `FIXED_PENDING_VERIFICATION`

The report must retain the complete implementation inventory and prior evidence, contain exactly one final `EVIDENCE:` field and one final `HANDOFF:` field, and end with:

```text
AGENT: Developer
STATUS: PASS
TASK: MINERS-003 — Services Page from Figma
REPORT: docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md
EVIDENCE: <correction, changed files, exact commands, exit codes, counts, warnings, and results>
HANDOFF: QA — independently revalidate MINERS-003-REV-001 and AC-001 through AC-012, including exactly one footer per route and all affected regression/accessibility/responsive checks.
```

Write the report, read it back from disk, verify it matches the repository state, and return the complete persisted report. Do not mark the Reviewer defect `VERIFIED_CLOSED`; QA owns independent verification.
