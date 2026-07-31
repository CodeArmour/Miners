# MINERS-002 — Home Page from Figma

## Objective

Implement the Miners Group home page in the existing Next.js application from the supplied desktop and responsive Figma designs, reusing the completed MINERS-001 brand foundations and preserving the established architecture and validation workflow.

## Figma sources

- Desktop: `https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=10-2&t=kdoE1MloccHAqPyW-1` — node `10:2`
- Responsive: `https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=17-2&t=kdoE1MloccHAqPyW-1` — node `17:2`
- File key: `19xdM0pHN5I1Nbl4F88115`

## Required planning scope

- Inspect both Figma nodes using the mandated Figma design-to-code workflow.
- Define the exact home-page sections, content, assets, interactions, responsive behavior, accessibility requirements, and implementation files.
- Reuse MINERS-001 tokens and primitives; do not duplicate brand foundations.
- Preserve MINERS-000, MINERS-001, Git, OpenWolf, workflow, agent, and documentation records.
- Do not commit or push unless separately authorized by the user; any exception must be explicitly documented.

The Planner must define precise implementation scope and objectively testable acceptance criteria before Developer work begins.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

Each role runs in a separate user-controlled CLI window. The Coordinator validates each report and prepares only the next permitted prompt.

## Canonical paths

- Planner: `docs/workflow/tasks/MINERS-002-home-page/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-002-home-page/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-002-home-page/05-status-report.md`
- Prompts: `docs/workflow/tasks/MINERS-002-home-page/prompts/`
- Defects: `docs/workflow/tasks/MINERS-002-home-page/defects/`

## Repository state at handoff

- Branch: `task/miners-002-home-page`
- MINERS-000 and MINERS-001 are complete with lifecycle `PASSED`.
- The existing MINERS-001 implementation and brand tokens are the starting point.

The user explicitly requested a dedicated `task/miners-002-home-page` branch before beginning this task. This branch is authoritative for the MINERS-002 lifecycle; the earlier `main` expectation in the initial Planner prompt was superseded before implementation.

## Constraints

- Planner is read-only with respect to application code/tests and owns only its Planner report.
- Developer is the only role allowed to modify application code/tests and owns only its Developer report.
- QA, Reviewer, and Status follow their role-specific ownership rules in `AGENTS.md`.
- Evidence is required for every gate.
- No destructive Git commands.
