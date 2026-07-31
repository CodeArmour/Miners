# MINERS-002 — QA Revalidation Round 01

You are QA for MINERS-002 — Home Page from Figma.

Additional Coordinator visual requirements must also be verified against the Figma nodes: social-media icons must be the updated faithful icons; the desktop navbar should be slightly narrower while preserving its hierarchy; the navbar must remain sticky/visible during page scroll; and the Selected Work project cards must match the Figma card composition, geometry, imagery/art, spacing, and hierarchy.

The Developer reports Correction Round 01 complete. Independently revalidate all four open QA defects and AC-001 through AC-012. Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, updated Developer report, current QA report, all four QA defect records, correction prompt, and current Git state.

Defects to verify:

- `MINERS-002-QA-001`: compare display typography to both Figma nodes; verify a non-serif deterministic loaded/fallback stack, family, weight, size, line-height, tracking, and responsive rendering. Inspect screenshots and relevant CSS selectors.
- `MINERS-002-QA-002`: inspect every navbar/theme/menu/social/carousel/CTA/Ask Miners icon. Verify stable faithful assets or a coherent approved icon implementation, consistent size/alignment, accessible labels, and no improvised Unicode/text glyphs remain.
- `MINERS-002-QA-003`: compare service/project cards and product visual against Figma geometry, spacing, radii, borders, shadows, glass treatment, accent surfaces, hierarchy, and responsive detail. Inspect screenshots directly.
- `MINERS-002-QA-004`: compare desktop/mobile navbar composition, brand treatment, spacing, hierarchy, controls, glass treatment, and primary/secondary actions against nodes `10:2` and `17:2`.
- Confirm social-media icons are updated faithful implementations rather than stale or improvised glyphs.
- Scroll the production page and verify the navbar remains sticky/visible with correct width, spacing, contrast, and no overlap.
- Compare the Selected Work project cards directly against Figma, including art/imagery, card geometry, labels, spacing, and content hierarchy at desktop and responsive widths.

Run affected and regression checks independently: lint, type-check, unit tests, build, production HTTP, E2E at 375×812/768×1024/1440×900, Axe, console/page-error, overflow, keyboard/menu/carousel interactions, screenshot inspection, `git diff --check`, server/port cleanup, and both npm audits. If audits remain unavailable, record the exact endpoint error and classify them as skipped/unavailable; do not claim they passed.

Verify no unauthorized application/governance changes, commits, or pushes. QA must not repair application code/tests. Update only the canonical QA report and QA-owned defect records. Mark each defect `VERIFIED_CLOSED` only when independently verified; otherwise mark it `STILL_FAILING`. QA must not report PASS while any blocking defect remains open.

Canonical report:

`docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md`

Read back the report and defect records, then return the complete report with one final decision and handoff:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md
EVIDENCE: <exact Figma/files, commands, exit codes, counts, warnings, viewports, screenshots, audit results, and findings>
HANDOFF: Reviewer if PASS; Developer with exact still-failing defects if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
