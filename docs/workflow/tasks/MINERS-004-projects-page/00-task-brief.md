# MINERS-004 — Projects Page from Figma

## Objective

Implement the Miners Group Projects page from the supplied Figma design in the existing Next.js application, reusing the completed brand foundations, homepage, and Services page conventions while preserving all prior task, Git, OpenWolf, workflow, agent, and documentation records.

## Figma source

`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=51-10&t=hUc9LHRcyGZl0kGK-1`

- File key: `19xdM0pHN5I1Nbl4F88115`
- Target node: `51:10`

## Required planning scope

- Inspect node `51:10` using the mandatory Figma design-to-code workflow.
- Define Projects page sections, copy, assets, interactions, responsive behavior, accessibility requirements, and implementation files.
- Reuse MINERS-001 tokens and MINERS-002/MINERS-003 shared navigation, footer, theme, interaction, and testing conventions without duplicating foundations or regressing `/` and `/services`.
- Preserve MINERS-000 through MINERS-003, Git, OpenWolf, workflow, agent, and documentation records.
- Do not commit or push unless separately authorized.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

Each role runs in a separate user-controlled CLI window. The Coordinator validates reports and prepares only the next permitted prompt.

## Canonical paths

- Planner: `docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-004-projects-page/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-004-projects-page/05-status-report.md`
- Prompts: `docs/workflow/tasks/MINERS-004-projects-page/prompts/`
- Defects: `docs/workflow/tasks/MINERS-004-projects-page/defects/`

## Repository state at initialization

- Authoritative branch: `task/miners-004-projects-page`
- MINERS-000, MINERS-001, MINERS-002, and MINERS-003 are complete with lifecycle `PASSED`.
- Existing homepage, Services page, shared layout, and brand foundations are the starting point.
- Pre-existing worktree modifications must be preserved.

## Constraints

- Planner is read-only with respect to application code/tests and owns only its Planner report.
- Developer is the only role allowed to modify application code/tests and owns only its Developer report.
- QA, Reviewer, and Status follow role-specific ownership rules in `AGENTS.md`.
- Every gate requires exact, reproducible evidence.
- No destructive Git commands and no commit/push.
