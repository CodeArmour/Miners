# QA Revalidation Prompt — MINERS-004 Round 01

You are QA in the manual multi-window correction workflow. Validate the Developer correction independently. You are read-only with respect to application code, tests, configuration, snapshots, and other roles' records. You may update only `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md` and QA-owned defect records. Do not repair code or modify the QA-owned defect record from another role (there is no such record here); record the independent disposition in your QA report.

## Task and gate

- Task: `MINERS-004 — Projects Page from Figma`
- Branch: `task/miners-004-projects-page`
- Previous QA result: `STATUS: FAIL`
- Correction: Developer reports `MINERS-004-QA-001` as `FIXED_PENDING_VERIFICATION`
- Failed criteria: AC-005, AC-008, AC-009
- Current lifecycle: `CHANGES_REQUESTED`; QA revalidation is required before Reviewer.

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, and `.wolf/cerebrum.md`
3. `docs/workflow/README.md`
4. `docs/workflow/task-registry.md`
5. `docs/workflow/tasks/MINERS-004-projects-page/00-task-brief.md`
6. `docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md`
7. `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md`
8. `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md`
9. `docs/workflow/tasks/MINERS-004-projects-page/defects/MINERS-004-QA-001.md`
10. Existing homepage and Services icon implementations for comparison

## Revalidation scope

Independently revalidate AC-001 through AC-012 and all regression checks. Specifically verify that the Projects Ask Miners control no longer contains a literal Unicode/mojibake glyph and instead uses the established inline SVG convention with `aria-hidden` icon semantics and an accessible text label. Confirm the icon is visually consistent, keyboard/focus/theme/responsive behavior is preserved, and no external or temporary asset was introduced.

Run and record exact commands, exit codes, counts, warnings, skipped checks, and limitations:

- `git branch --show-current`, `git status --short --branch`, diff and untracked inventory
- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Direct source/DOM assertion for SVG Ask Miners icon and absence of the Unicode glyph
- HTTP checks for `/projects`, `/`, and `/services`
- Axe, console/page-error, failed-request, responsive, screenshot, and overflow checks at 375×812, 768×1024, and 1440×900
- Exactly one footer/contentinfo per route
- Port/process cleanup
- `git diff --check`
- npm audits if available; disclose advisory endpoint failures rather than claiming passes

Inspect `test-results/MINERS-004/projects-mobile-375x812.png`, `projects-tablet-768x1024.png`, and `projects-desktop-1440x900.png`. Confirm no unauthorized files, secrets, dependencies, temporary Figma URLs, commit, or push were introduced. QA must report FAIL if the icon defect remains or any other blocking defect is found.

## QA report requirements

Update `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md` with the complete correction-round evidence, AC-001 through AC-012 matrix, exact commands/results, runtime/accessibility/responsive/visual/regression/Git evidence, limitations, report persistence verification, and QA decision. Record `MINERS-004-QA-001` as `VERIFIED_CLOSED` only with independent evidence; otherwise `STILL_FAILING` and report FAIL. Create any new QA defect with severity and reproduction details.

Read the saved report back from disk and return it completely.

End with:

```text
AGENT: QA
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md
EVIDENCE: <correction-round commands, exit codes, counts, icon verification, screenshots, accessibility, cleanup, and limitations>
HANDOFF: Coordinator — validate this QA report; if PASS and MINERS-004-QA-001 is VERIFIED_CLOSED, route to Reviewer; otherwise prepare the next correction or blocker.
PASSED_CRITERIA: <exact AC IDs>
FAILED_CRITERIA: <NONE or exact AC IDs>
DEFECTS: MINERS-004-QA-001 <VERIFIED_CLOSED | STILL_FAILING> and any QA-owned defect IDs
```
