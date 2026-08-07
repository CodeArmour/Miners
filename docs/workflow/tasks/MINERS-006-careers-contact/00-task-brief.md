# MINERS-006 — Careers, Contact, and Global UI States from Figma

## Objective

Implement the Miners Group Careers and Contact pages plus the globally reusable styles/components and interaction states shown in the supplied Figma designs, including notifications, inquiry inputs, loading/success/error states, and safe error handling. Preserve all prior task, Git, OpenWolf, workflow, agent, and documentation records.

## Figma sources

Careers:
`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=70-120&t=hUc9LHRcyGZl0kGK-1`

Contact:
`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=72-124&t=hUc9LHRcyGZl0kGK-1`

Global styles/components:
`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=0-1&t=hUc9LHRcyGZl0kGK-1`

- File key: `19xdM0pHN5I1Nbl4F88115`
- Careers node: `70:120`
- Contact node: `72:124`
- Global styles/components node: `0:1`

## Required planning scope

- Inspect both nodes with the mandatory Figma design-to-code workflow.
- Inspect node `0:1` for reusable global styles/components and state patterns.
- Define Careers and Contact sections, copy, assets, interactions, responsive behavior, accessibility, forms/CTA behavior, and implementation files.
- Define reusable global button/input/card/notification primitives, validation states, loading/success/error states, and error-handling behavior; apply them consistently across all existing and new routes without regressions.
- Reuse existing shared navigation, footer, theme, tokens, typography, icon, and testing conventions without duplicating foundations or regressing `/`, `/services`, `/projects`, and `/about`.
- Preserve MINERS-000 through MINERS-005, Git, OpenWolf, workflow, agent, and documentation records.
- Do not commit or push unless separately authorized.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

## Canonical paths

- Planner: `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-006-careers-contact/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-006-careers-contact/05-status-report.md`
- Prompts: `docs/workflow/tasks/MINERS-006-careers-contact/prompts/`
- Defects: `docs/workflow/tasks/MINERS-006-careers-contact/defects/`

## Repository state at initialization

- Authoritative branch: `task/miners-006-careers-contact`
- MINERS-000 through MINERS-005 are complete with lifecycle `PASSED`.
- Existing shared layout, homepage, Services, Projects, About, and brand foundations are the baseline.
- Pre-existing worktree modifications must be preserved.

## Constraints

- Planner is read-only with respect to application code/tests and owns only its Planner report.
- Developer is the only role allowed to modify application code/tests and owns only its Developer report.
- QA, Reviewer, and Status follow role-specific ownership rules in `AGENTS.md`.
- Every gate requires exact, reproducible evidence.
- No destructive Git commands and no commit/push.
