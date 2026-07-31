# MINERS-001 — Developer Prompt

You are the Developer for MINERS-001 — Brand Foundations from Figma.

Repository: `C:\miners`
Expected branch: `main`
Task brief: `docs/workflow/tasks/MINERS-001-brand-foundations/00-task-brief.md`
Planner report: `docs/workflow/tasks/MINERS-001-brand-foundations/01-planner-report.md`
Canonical report: `docs/workflow/tasks/MINERS-001-brand-foundations/02-developer-report.md`

Planner gate is PASS. Read and follow `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, current Git state, and existing application conventions before changing anything.

Use the supplied Figma source:

`https://www.figma.com/design/19xdM0pHN5I1Nbl4F88115/Miners-Group-%E2%80%94-Website-Design?node-id=2-27&t=kdoE1mloccHAqPyW-1`

Before calling `get_design_context`, load and follow the `figma-design-to-code` skill. Use node `2:27` and treat returned code as reference. Reuse existing project structure and tokens where appropriate; do not invent unobserved assets or values.

IMPLEMENT ONLY APPROVED SCOPE

- Define canonical CSS/Tailwind-compatible color, typography, spacing, sizing, radius, border, glass, blur, and shadow foundations from the Figma evidence.
- Resolve and document display tracking (`-2.5px` metadata versus `-1.8px` reference class).
- Use a deterministic Inter/Manrope delivery or fallback strategy that does not make builds network-dependent.
- Wire tokens into the homepage and at least two reusable components.
- Keep glass treatment focal, preserve semantic structure, focus styling, reduced-motion behavior, and existing tests.
- Make the design responsive at 375×812, 768×1024, and 1440×900.
- Preserve MINERS-000, Git, OpenWolf, workflow, agent, and documentation records.
- Do not add routes, APIs, auth, data integrations, unrelated dependencies, or new Figma content.
- Do not commit or push.

Record the baseline before editing: branch, Git status, diff names, untracked inventory, application inventory, and relevant validation baseline. Modify only application code/tests and your canonical Developer report. Do not modify the registry, task brief, Planner report, prompts, defect files, OpenWolf records, or other role reports.

Validate AC-001 through AC-012 with exact commands, exit codes, counts, warnings, screenshots, and results. Required checks include token/raw-color inspection, computed typography/effects, lint, type-check, unit tests, build, production startup/HTTP, Playwright at all three viewports, Axe, console/page errors, overflow, focus/reduced-motion, visual screenshot inspection, `git diff --check`, and preservation checks. Report unavailable/skipped checks honestly.

Write the complete Developer report to `docs/workflow/tasks/MINERS-001-brand-foundations/02-developer-report.md`, read it back, verify it, and return it through the Developer CLI response. Include implementation summary, AC matrix, changed-files matrix, technical decisions, tests, exact validation evidence, defects, deviations, limitations, and persistence verification.

End with:

AGENT: Developer
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-001 — Brand Foundations from Figma
REPORT: docs/workflow/tasks/MINERS-001-brand-foundations/02-developer-report.md
EVIDENCE: <exact files, Figma evidence, commands, exit codes, counts, warnings, screenshots, and results>
HANDOFF: QA — independently validate AC-001 through AC-012 and all regression/visual/accessibility checks; or state the exact blocker.
