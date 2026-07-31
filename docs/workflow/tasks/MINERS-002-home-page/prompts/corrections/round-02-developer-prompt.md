# MINERS-002 — Developer Correction Round 02

You are the Developer for MINERS-002 — Home Page from Figma.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, current Developer report, current QA report, all QA defect records, and current Git state. QA remains `STATUS: FAIL`; Reviewer is blocked.

Resolve only these open defects:

- `MINERS-002-QA-005` — Sticky navbar failure. QA measured `.site-header` y=32 before scroll and y=-1768 after `scrollTo(0,1800)`, despite `position: sticky`. Root cause is `.home` `overflow: hidden` preventing sticky behavior. Correct the page overflow strategy so the navbar remains visible at its Figma top offset during desktop/mobile page scroll without overlap, clipping, or horizontal overflow. Preserve menu/theme behavior.
- `MINERS-002-QA-006` — Reduced navbar width failure. Add the centered reduced-width/max-width/outer-margin constraint matching the Figma desktop composition while preserving responsive mobile behavior, glass treatment, spacing, hierarchy, and accessible controls.

Do not modify or reopen the already verified QA-001 through QA-004 defects. Preserve the updated SVG icons and Selected Work card treatment.

Rules:

- Modify only application code/tests, necessary configuration, and the canonical Developer report.
- Do not modify the registry, task brief, Planner report, QA report, defect files, prompts, OpenWolf records, or other role reports.
- Record QA-005 and QA-006 IDs, root causes, corrections, changed files, and validation; mark both `FIXED_PENDING_VERIFICATION` only when supported.
- Run targeted production scroll tests at 1440×900 and responsive viewports; verify header bounding box remains near its sticky top offset after scroll, reduced width/centering matches Figma, menu/theme interactions remain correct, and no overflow occurs.
- Rerun lint, type-check, unit tests, build, production HTTP, E2E at 375×812/768×1024/1440×900, Axe, console/page-error, overflow, screenshots, `git diff --check`, server/port cleanup, and both npm audit attempts. Record unavailable audit endpoint errors honestly.

Update, read back, and return:

`docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`

End with:

AGENT: Developer
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md
EVIDENCE: <exact files, targeted scroll/width results, commands, exit codes, counts, screenshots, and defect dispositions>
HANDOFF: QA — independently revalidate QA-005 and QA-006 and all affected/regression checks; or state the exact blocker.
