# MINERS-005 — About Page from Figma

## Objective

Implement the Miners Group About page from the supplied Figma design in the existing Next.js application, reusing the completed brand foundations, homepage, Services, and Projects conventions while preserving all prior task, Git, OpenWolf, workflow, agent, and documentation records.

## Figma source

`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=63-116&t=hUc9LHRcyGZl0kGK-1`

- File key: `19xdM0pHN5I1Nbl4F88115`
- Target node: `63:116`

## Required planning scope

- Inspect node `63:116` using the mandatory Figma design-to-code workflow.
- Define About page sections, copy, assets, interactions, responsive behavior, accessibility requirements, and implementation files.
- Reuse MINERS-001 tokens and MINERS-002 through MINERS-004 shared navigation, footer, theme, interaction, icon, and testing conventions without duplicating foundations or regressing existing routes.
- Preserve MINERS-000 through MINERS-004, Git, OpenWolf, workflow, agent, and documentation records.
- Do not commit or push unless separately authorized.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

Each role runs in a separate user-controlled CLI window. The Coordinator validates reports and prepares only the next permitted prompt.

## Canonical paths

- Planner: `docs/workflow/tasks/MINERS-005-about-page/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-005-about-page/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-005-about-page/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-005-about-page/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-005-about-page/05-status-report.md`
- Prompts: `docs/workflow/tasks/MINERS-005-about-page/prompts/`
- Defects: `docs/workflow/tasks/MINERS-005-about-page/defects/`

## Repository state at initialization

- Authoritative branch: `task/miners-005-about-page`
- MINERS-000 through MINERS-004 are complete with lifecycle `PASSED`.
- Existing homepage, Services, Projects, shared layout, and brand foundations are the starting point.
- Pre-existing worktree modifications must be preserved.

## Constraints

- Planner is read-only with respect to application code/tests and owns only its Planner report.
- Developer is the only role allowed to modify application code/tests and owns only its Developer report.
- QA, Reviewer, and Status follow role-specific ownership rules in `AGENTS.md`.
- Every gate requires exact, reproducible evidence.
- No destructive Git commands and no commit/push.
