# MINERS-003 — QA Prompt

You are QA for MINERS-003 — Services Page from Figma.

Developer gate is PASS on `task/miners-003-services-page`. Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, corrected Developer report, completed MINERS-000/001/002 reports relevant to preservation, current Git state, and all changed application/configuration files.

You are read-only with respect to application code/tests and must not repair defects. You may create/update only the canonical QA report and QA-owned defect records. Do not modify earlier reports, task brief, registry, prompts, OpenWolf files, or other role records.

Independently validate AC-001 through AC-012:

- Figma node `33:6`, request IDs, section/copy/assets evidence, and no unintended temporary Figma URLs.
- `/services` and `/` production HTTP behavior and route separation.
- Navigation, shared footer, theme/menu, CTAs, social links, Ask Miners, and homepage regression after shared layout extraction.
- All Services sections: hero, capability map/overview, packages, product design/consulting, engagement, process, selected proof, conversions, footer, and responsive transformations.
- Responsive behavior and screenshots at 375×812, 768×1024, and 1440×900; no overflow, clipping, overlap, or unreadable content.
- Accessibility: landmarks, one h1, heading order, labels, focus, keyboard, contrast, reduced motion, menu/theme behavior, and Axe.
- Package carousel autoplay/transition behavior, card/process hover states, proof-art effects, and Ask Miners interaction.
- Changed-file inventory including `src/app/page.tsx`, layout, shared header/footer/theme components, Services route/tests, globals, E2E tests, and preserved governance/OpenWolf files.
- Lint, type-check, unit tests, production build, E2E (Services plus homepage regression), HTTP, console/page errors, `git diff --check`, cleanup, and both npm audits. If advisory endpoint failures persist, record exact errors and classify audits as unavailable; do not claim audit PASS.

If any defect is found, assign `MINERS-003-QA-###`, create a QA-owned defect record, and return `STATUS: FAIL`. QA must not report PASS while any blocking defect remains open.

Canonical report:

`docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md`

Write, read back, and verify the complete QA report with task/Developer prerequisite, AC-001–AC-012 matrix, environment, exact commands/results, responsive/visual/accessibility evidence, Git preservation, defects, limitations, persistence verification, and decision.

End with:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-003 — Services Page from Figma
REPORT: docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md
EVIDENCE: <exact Figma/files, commands, exit codes, counts, warnings, viewports, screenshots, assets, audit results, and findings>
HANDOFF: Reviewer if PASS; Developer with exact defects if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
