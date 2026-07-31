# MINERS-002 — Developer Correction Round 01

You are the Developer for MINERS-002 — Home Page from Figma.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, current Developer report, QA report, all four QA defect records, and current Git state. The QA gate is `STATUS: FAIL`; Reviewer is blocked.

Resolve only these validated blocking defects:

- `MINERS-002-QA-001` — Display typography mismatch. Implement a deterministic loaded display face or a matching non-serif fallback stack. Match the Figma display family, weight, size, line-height, tracking, and responsive behavior. Do not leave `font-family: Manrope` without a viable fallback.
- `MINERS-002-QA-002` — Improvised iconography. Replace Unicode/text glyph placeholders in navbar, theme/menu, social, carousel, CTA, and Ask Miners controls with faithful stable assets or a coherent approved icon library. If adding an icon dependency, justify it, pin it, and verify production/build/audit implications. Keep icons consistently sized, aligned, labelled, keyboard accessible, and responsive.
- `MINERS-002-QA-003` — Card/product visual divergence. Rework service/project cards and product visual to match the Figma geometry, spacing, radius, borders, shadows, glass treatment, accent surfaces, content hierarchy, and responsive visual detail. Use stable application-owned assets where the Figma reference requires them; do not substitute generic placeholders without documenting an unavoidable limitation.
- `MINERS-002-QA-004` — Navbar hierarchy divergence. Rework desktop and responsive navbar composition, brand treatment, glass spacing, navigation hierarchy, controls, and primary/secondary actions to match nodes `10:2` and `17:2`.

Use the Figma design-to-code workflow: load the `figma-design-to-code` skill before any `get_design_context` call and inspect both nodes as needed. Compare against the Figma screenshots, not only automated assertions.

Rules:

- Modify only application code/tests, necessary approved dependency/configuration files, stable assets, and the canonical Developer report.
- Do not modify the registry, task brief, Planner report, QA report, QA defect files, prompts, OpenWolf records, or other role reports.
- Preserve MINERS-001 tokens and all unrelated changes.
- Record each defect ID, root cause, correction, changed files, and validation evidence. Set each corrected defect to `FIXED_PENDING_VERIFICATION`; QA will verify closure.
- Rerun affected and regression checks: lint, type-check, unit tests, build, production HTTP, E2E at 375×812/768×1024/1440×900, Axe, console/page-error, overflow, keyboard/menu/carousel interactions, screenshots, `git diff --check`, server/port cleanup, and both npm audits. If audit remains unavailable, record the exact endpoint error and limitation.

Update, read back, and return:

`docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`

The report must include a correction matrix for QA-001–QA-004 and end with:

AGENT: Developer
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md
EVIDENCE: <exact files, Figma evidence, commands, exit codes, counts, screenshots, audit results, and defect dispositions>
HANDOFF: QA — independently revalidate QA-001 through QA-004 and all affected/regression checks; or state the exact blocker.
