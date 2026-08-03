# Developer Correction Prompt — MINERS-004 Round 01

You are Developer in the manual multi-window correction workflow. Modify only application code/tests within the validated defect scope and your canonical Developer report. Do not modify the registry, task brief, prompts, QA report, defect record, prior reports, or OpenWolf records. Do not commit or push.

## Task and gate

- Task: `MINERS-004 — Projects Page from Figma`
- Branch: `task/miners-004-projects-page`
- Task directory: `docs/workflow/tasks/MINERS-004-projects-page/`
- QA gate: `STATUS: FAIL`
- Blocking defect: `MINERS-004-QA-001`
- Failed criteria: AC-005, AC-008, AC-009
- QA must independently revalidate before Reviewer; Status remains blocked.

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, and `.wolf/cerebrum.md`
3. `docs/workflow/README.md`
4. `docs/workflow/tasks/MINERS-004-projects-page/00-task-brief.md`
5. `docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md`
6. `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md`
7. `docs/workflow/tasks/MINERS-004-projects-page/03-qa-report.md`
8. `docs/workflow/tasks/MINERS-004-projects-page/defects/MINERS-004-QA-001.md`
9. Existing homepage and Services icon implementations for the established SVG convention

## Required correction

Replace the literal Unicode/mojibake glyph in the Projects Ask Miners control in `src/app/projects/page.tsx` with the established shared inline SVG icon convention used by the homepage and Services page. Preserve the accessible text label, button/link semantics, visual sizing, focus state, theme behavior, and responsive placement. Do not use another Unicode glyph or an external/temporary asset. Prefer reusing or extracting the existing icon implementation without an unrelated refactor.

Add or update a focused assertion where appropriate so the Projects Ask Miners control contains the expected SVG/icon structure and does not render the improvised Unicode glyph. Keep all existing homepage, Services, filter, footer, accessibility, and interaction behavior intact.

## Required validation

Run and record exact commands, exit codes, counts, warnings, and limitations:

- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Projects Ask Miners icon/source or DOM assertion
- HTTP checks for `/projects`, `/`, and `/services`
- Axe, console/page-error, failed-request, responsive, screenshot, and overflow checks at 375×812, 768×1024, and 1440×900
- Verify exactly one footer/contentinfo per route
- Port/process cleanup
- `git diff --check`

Rerun the full regression suite, not only the targeted assertion. Keep npm audit limitations explicit if the advisory endpoint remains unavailable. Preserve unrelated Git/OpenWolf/workflow/agent changes.

## Developer report requirements

Update `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md` with a correction-round section containing:

- Defect ID `MINERS-004-QA-001`
- Root cause
- Correction and changed files
- Icon implementation/assertion evidence
- Full regression evidence
- Limitations
- Disposition `FIXED_PENDING_VERIFICATION`

Retain the complete report structure and inventory. Read the saved report back from disk and return the complete persisted report. Do not mark the QA defect closed; QA owns independent verification.

End with:

```text
AGENT: Developer
STATUS: PASS
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md
EVIDENCE: <defect correction, changed files, exact commands, exit codes, counts, screenshots, cleanup, and limitations>
HANDOFF: QA — independently revalidate MINERS-004-QA-001 and AC-001 through AC-012, especially icon convention, accessibility, visual consistency, and full regression checks.
```
