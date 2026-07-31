# MINERS-002 — QA Revalidation Round 03

You are QA for MINERS-002 — Home Page from Figma.

The Developer has corrected QA-005/QA-006 and reconciled the complete implementation inventory. Independently validate the final implementation before Reviewer.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, latest Developer report, current QA report, QA-001 through QA-006 defect records, all correction prompts, current Git state, and every listed application/public asset.

Revalidate:

- QA-005: production scroll at 1440×900 and responsive viewports; confirm `.site-header` remains visible near its sticky top offset after scrolling to 1800px, with no overlap or overflow, and menu/theme behavior intact.
- QA-006: confirm desktop navbar is centered and reduced-width (reference max width/outer margin), while responsive widths remain correct.
- Previously closed QA-001 through QA-004: typography, SVG/social icons, card/product visuals, navbar hierarchy.
- Final refinements: What We Do, Selected Work, Customer Stories carousels, pagination/rotation, keyboard focusability, dark footer/mode, internship treatment, hover states, conversion panels, and Ask Miners behavior.
- Stable assets: `public/facebook.png`, `instagram.png`, `twitter.png`, and `whatsapp.png`; verify dimensions, consumers, alt handling, and no unintended remote URLs.

Run exact regression checks: lint, type-check, unit tests, build, production HTTP, E2E at 375×812/768×1024/1440×900, Axe, console/page-error, overflow, keyboard/menu/carousel/scroll interactions, screenshot inspection, `git diff --check`, server/port cleanup, and both npm audit attempts. Record unavailable advisory endpoint errors precisely and do not claim audit PASS.

Verify branch `task/miners-002-home-page`, complete changed-file inventory including `public/*.png`, preservation of unrelated `bash.exe.stackdump`, governance/OpenWolf/MINERS-001 records, and no unauthorized commit/push. QA must not modify application code/tests. Update only the QA report and QA-owned defect records; mark QA-005/QA-006 `VERIFIED_CLOSED` only after independent evidence. If any defect remains, report FAIL with exact defect state.

Canonical report:

`docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md`

Read back the report and records and return one final handoff:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md
EVIDENCE: <exact files, assets, commands, exit codes, counts, scroll results, viewports, screenshots, audits, and findings>
HANDOFF: Reviewer if PASS; Developer with exact still-failing defects if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
