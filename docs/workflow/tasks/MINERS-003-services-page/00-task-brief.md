# MINERS-003 — Services Page from Figma

## Objective

Implement the Miners Group Services page from the supplied Figma design in the existing Next.js application, reusing the completed MINERS-001 brand foundations and MINERS-002 homepage conventions while preserving all prior task and governance records.

## Figma source

`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=33-6&t=kdoE1MloccHAqPyW-1`

- File key: `19xdM0pHN5I1Nbl4F88115`
- Target node: `33:6`

## Required planning scope

- Inspect node `33:6` using the mandatory Figma design-to-code workflow.
- Define the Services page sections, copy, assets, interactions, responsive behavior, accessibility requirements, and implementation files.
- Reuse MINERS-001 tokens/primitives and MINERS-002 conventions without duplicating foundations or unintentionally changing the homepage.
- Preserve MINERS-000, MINERS-001, MINERS-002, Git, OpenWolf, workflow, agent, and documentation records.
- Do not commit or push unless separately authorized; any exception must be documented explicitly.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

Each role runs in a separate user-controlled CLI window. The Coordinator validates reports and prepares only the next permitted prompt.

## Canonical paths

- Planner: `docs/workflow/tasks/MINERS-003-services-page/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-003-services-page/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-003-services-page/05-status-report.md`
- Prompts: `docs/workflow/tasks/MINERS-003-services-page/prompts/`
- Defects: `docs/workflow/tasks/MINERS-003-services-page/defects/`

## Repository state at handoff

- Authoritative branch: `task/miners-003-services-page`
- MINERS-000, MINERS-001, and MINERS-002 are complete with lifecycle `PASSED`.
- Existing homepage and brand foundations are the starting point.

## Constraints

- Planner is read-only with respect to application code/tests and owns only its Planner report.
- Developer is the only role allowed to modify application code/tests and owns only its Developer report.
- QA, Reviewer, and Status follow their role-specific ownership rules in `AGENTS.md`.
- Evidence is required for every gate.
- No destructive Git commands.
