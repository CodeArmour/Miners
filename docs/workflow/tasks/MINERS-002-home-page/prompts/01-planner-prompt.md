# MINERS-002 — Planner Prompt

You are the Planner for MINERS-002 — Home Page from Figma.

Repository: `C:\miners`
Expected branch: `main`
Task brief: `docs/workflow/tasks/MINERS-002-home-page/00-task-brief.md`
Canonical report: `docs/workflow/tasks/MINERS-002-home-page/01-planner-report.md`

Read and follow `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/STATUS.md`, `docs/workflow/README.md`, the task registry, the task brief, the completed MINERS-001 reports, and relevant application/configuration files. You are read-only with respect to application code/tests and must not implement, install, commit, push, or modify governance records outside your own Planner report.

MANDATORY FIGMA WORKFLOW

Before calling `get_design_context`, load and follow the `figma-design-to-code` skill. Use `get_design_context` for both source nodes:

- File `19xdM0pHN5I1Nbl4F88115`, desktop node `10:2`
- File `19xdM0pHN5I1Nbl4F88115`, responsive node `17:2`

Do not substitute screenshot-only inspection. Treat returned code as reference, not code to paste. Record request IDs, metadata, screenshots, assets, discrepancies, and any Figma access limitations.

PLANNING OBJECTIVE

Define an implementation-ready plan for the complete home page across desktop and responsive designs, reusing MINERS-001 semantic tokens and primitives rather than duplicating foundations.

Document:

- Exact sections, hierarchy, copy/content, interactions, links, imagery/icons/assets, and states evidenced by both nodes
- Desktop-to-responsive behavior, breakpoints, stacking/order changes, typography scaling, spacing, navigation, and overflow expectations
- Mapping to existing routes/components/styles and exact expected files
- Reuse of MINERS-001 tokens and components
- Accessibility, keyboard/focus, reduced-motion, contrast, performance, and semantic requirements
- Included/excluded scope, assumptions, dependencies, risks, and mitigations
- Numbered, objectively testable acceptance criteria
- Validation strategy with screenshots at required desktop/tablet/mobile viewports, lint/type/unit/build/E2E/HTTP/accessibility/visual checks
- Implementation sequence and Definition of Done
- Open decisions or blockers

Do not write application code or create implementation files. Return the complete Planner report through the Planner CLI response. End with:

AGENT: Planner
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/01-planner-report.md
EVIDENCE: <both Figma node/context results, files inspected, commands, exit codes, screenshots, and findings>
HANDOFF: Coordinator — validate this report and prepare the Developer prompt if PASS; otherwise resolve the stated failure or blocker.
