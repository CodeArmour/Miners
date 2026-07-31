# MINERS-002 — Developer Prompt

You are the Developer for MINERS-002 — Home Page from Figma.

Repository: `C:\miners`
Authoritative branch: `task/miners-002-home-page`
Task brief: `docs/workflow/tasks/MINERS-002-home-page/00-task-brief.md`
Planner report: `docs/workflow/tasks/MINERS-002-home-page/01-planner-report.md`
Canonical report: `docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`

Planner gate is PASS. Read and follow `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, completed MINERS-001 reports, current Git state, and existing application conventions.

MANDATORY FIGMA WORKFLOW

Before calling `get_design_context`, load and follow the `figma-design-to-code` skill. Use both approved sources:

- Desktop: file `19xdM0pHN5I1Nbl4F88115`, node `10:2`
- Responsive: file `19xdM0pHN5I1Nbl4F88115`, node `17:2`

Treat returned code as reference material. Download and commit stable application-owned assets if used; do not leave expiring remote Figma URLs in the implementation.

IMPLEMENT ONLY APPROVED SCOPE

- Implement the complete home page in Figma section order, reusing MINERS-001 semantic tokens/primitives without duplication.
- Cover navigation, hero/product visual, audience rail, services, projects, process, internship, reviews, conversion panels, footer, and Ask Miners control as evidenced.
- Implement responsive navigation/menu, stacked hero, mobile visual, accessible services/projects/reviews carousels, process, internship, conversions, footer, and chat affordance as evidenced by node `17:2`.
- Preserve evidenced copy and hierarchy; document `URL TBD` destinations and placeholder content rather than inventing production claims.
- Use semantic landmarks, one page-level h1, real links/buttons, visible focus, Escape/menu semantics, labelled carousel controls, contrast, alt text, and reduced-motion behavior.
- Preserve MINERS-000, MINERS-001, Git, OpenWolf, workflow, agent, documentation, and unrelated worktree changes.
- Do not add backend/API/auth/CMS, unrelated routes/dependencies, or replace test infrastructure.
- Do not commit or push.

Before editing, record branch, status, diff names, untracked inventory, MINERS-001 state, and validation baseline. Modify only application code/tests and your canonical Developer report. Do not modify the registry, task brief, Planner report, prompts, defect files, OpenWolf records, or other role reports.

Validate AC-001 through AC-012 with exact commands, exit codes, counts, warnings, screenshots, and results. Required checks include stable asset/provenance review, content/section coverage, lint, type-check, unit tests, production build/startup/HTTP, E2E interaction/accessibility/console/page-error/overflow at 375×812, 768×1024, and 1440×900, screenshot inspection under `test-results/MINERS-002/`, audits, `git diff --check`, and preservation checks. Report skipped/unavailable checks honestly.

Write, read back, and verify:

`docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`

The report must include task/Planner prerequisite, implementation summary, AC matrix, changed-files matrix, technical decisions, tests, exact validation evidence, assets/provenance, defects, deviations, limitations, and persistence verification.

End with:

AGENT: Developer
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md
EVIDENCE: <Figma node evidence, exact files, commands, exit codes, counts, warnings, screenshots, and results>
HANDOFF: QA — independently validate AC-001 through AC-012 and all regression, interaction, responsive, accessibility, visual, asset, HTTP, audit, and Git-preservation checks; or state the exact blocker.
