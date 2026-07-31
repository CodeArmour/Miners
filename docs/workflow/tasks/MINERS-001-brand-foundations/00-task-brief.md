# MINERS-001 — Brand Foundations from Figma

## Objective

Establish the application’s reusable brand foundations from the supplied Miners Group Figma design, translating the approved visual language into maintainable project tokens and foundation primitives without disturbing the completed MINERS-000 foundation.

## Figma source

`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=2-27&t=kdoE1MloccHAqPyW-1`

- File key: `19xdM0pHN5I1Nbl4F88115`
- Target node: `2:27`

## Required planning scope

- Inspect the referenced Figma node using the mandated Figma design-to-code workflow.
- Identify brand colors, typography, spacing, radii, shadows, borders, motion/accessibility expectations, and reusable foundation primitives supported by the design.
- Map the design foundations to the existing Next.js/Tailwind codebase and identify exact implementation files.
- Preserve the completed MINERS-000 application foundation and all existing Git, OpenWolf, workflow, agent, and documentation records.
- Do not commit or push.

The Planner must define the precise included scope; no application implementation is authorized until Planner PASS.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

Each role runs in a separate user-controlled CLI window. The Coordinator validates each persisted report and prepares only the next permitted prompt.

## Canonical paths

- Planner: `docs/workflow/tasks/MINERS-001-brand-foundations/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-001-brand-foundations/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-001-brand-foundations/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-001-brand-foundations/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-001-brand-foundations/05-status-report.md`
- Prompts: `docs/workflow/tasks/MINERS-001-brand-foundations/prompts/`
- Defects: `docs/workflow/tasks/MINERS-001-brand-foundations/defects/`

## Repository state at handoff

- Branch: `main`
- MINERS-000 is complete with lifecycle `PASSED`.
- The working tree was clean at task creation.

## Constraints

- Planner is read-only with respect to application code and tests and may only create/update its own canonical Planner report.
- Developer is the only role allowed to modify application code/tests and may persist only its own canonical Developer report.
- QA, Reviewer, and Status follow their role-specific ownership rules in `AGENTS.md`.
- Evidence is required for every gate.
- No destructive Git commands.

## Post-validation resolution

After implementation, QA, and Reviewer passed, the user explicitly approved the existing archival commit/push as an exception to the original no-commit/no-push constraint. The original constraint remains the historical implementation requirement; Status must document this user-authorized exception and assess AC-011 accordingly. No history rewrite or force-push is authorized.
