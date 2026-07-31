# MINERS-000 — Next.js Project Foundation

## Objective

Initialize the current Git repository as a production-ready Next.js project using TypeScript, App Router, a `src` directory, Tailwind CSS, ESLint, and a scalable folder structure.

## Required scope

- Initialize the application in the current repository.
- Use Next.js with TypeScript and the App Router.
- Place application source under `src/`.
- Configure Tailwind CSS and ESLint.
- Establish a scalable folder structure appropriate for future application growth.
- Preserve all existing Git, OpenWolf, workflow, agent, and documentation files.
- Do not commit or push.

## Lifecycle

Planner → Developer → QA → Reviewer → Status

Each role runs in a separate user-controlled CLI window. The Coordinator validates and persists each returned report before preparing the next permitted role prompt.

## Canonical report destinations

- Planner: `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/01-planner-report.md`
- Developer: `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md`
- QA: `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md`
- Reviewer: `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/04-reviewer-report.md`
- Status: `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/05-status-report.md`
- Defects: `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/defects/`

## Repository state at handoff

- Branch: `task/miners-000-nextjs-foundation`
- The task registry contained no rows before this DRAFT entry.
- The user designated this initial foundation task as task zero.
- Existing unrelated working-tree changes were observed in OpenWolf-managed files and must be preserved.

## Constraints

- Planner is strictly read-only and must not create or modify repository files.
- Developer is the only lifecycle role permitted to change application code or tests.
- Evidence is required for every pass.
- No destructive Git commands.
- No commits or pushes.
