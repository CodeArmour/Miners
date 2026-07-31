# MINERS-002 — QA Evidence Correction Round 02

The current QA report verifies QA-001 through QA-004, but it does not explicitly evidence the later Coordinator-requested visual requirements. Reviewer handoff remains blocked until these are independently checked and recorded.

Read `AGENTS.md`, the task brief, Planner/Developer/QA reports, all QA defect records, prior correction prompts, and current Git state. Do not modify application code/tests. Update only the QA report and QA-owned defect records.

Independently inspect both Figma nodes and the rendered implementation for:

1. Social-media icons: confirm every social icon is the updated faithful implementation, consistently sized/aligned, accessible, and not stale or improvised.
2. Navbar width: confirm the desktop navbar width/outer margins are reduced to match the Figma reference while preserving hierarchy and responsive behavior.
3. Sticky navbar: scroll the production page at desktop and mobile; confirm the navbar remains sticky/visible, does not overlap content, preserves contrast, and behaves correctly after menu/theme interactions.
4. Selected Work cards: compare project-card geometry, art/imagery, labels, spacing, radius, borders, shadows, and content hierarchy against the Figma Selected Work section at desktop/tablet/mobile.

Capture concrete evidence: selectors/symbols, viewport, scroll steps, screenshot paths, expected/actual observations, and any remaining mismatch. Rerun affected E2E, Axe, console/page-error, overflow, screenshot, lint/type/unit/build/HTTP, `git diff --check`, and audit attempts as needed. Record audit endpoint failures precisely if still unavailable.

If any requirement fails, create/update an appropriate QA defect record with severity, reproduction, expected/actual result, and status `OPEN` or `STILL_FAILING`; QA must not report PASS. If all pass, update the QA report with an explicit validation section and preserve exactly one final PASS handoff. Read back the report and defect records.

Canonical report:

`docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md`

End with:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/03-qa-report.md
EVIDENCE: <social icon, navbar width/sticky, Selected Work card, commands, viewports, scroll checks, screenshots, and results>
HANDOFF: Reviewer if PASS; Developer with exact remaining defects if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
