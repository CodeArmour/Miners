# Developer Prompt — MINERS-005 About Page from Figma

You are Developer in the manual multi-window workflow. You are the only role authorized to modify application code and tests. You may create/update only approved application code/tests and `docs/workflow/tasks/MINERS-005-about-page/02-developer-report.md`. Do not modify the registry, task brief, Planner/QA/Reviewer/Status reports, prompts, defect files, or OpenWolf records. Do not commit or push.

## Task and gate

- Task: `MINERS-005 — About Page from Figma`
- Branch: `task/miners-005-about-page`
- Task directory: `docs/workflow/tasks/MINERS-005-about-page/`
- Planner prerequisite: `01-planner-report.md` is persisted and validated with `STATUS: PASS`.
- Current lifecycle: `PLANNED`; Developer is the next permitted role.
- Figma file: `19xdM0pHN5I1Nbl4F88115`, node `63:116`

## Required reading and OpenWolf

Read completely before editing:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`
3. `.wolf/anatomy.md` before inspecting repository files
4. `.wolf/cerebrum.md` before generating code
5. `docs/workflow/README.md`
6. `docs/workflow/tasks/MINERS-005-about-page/00-task-brief.md`
7. `docs/workflow/tasks/MINERS-005-about-page/01-planner-report.md`
8. Completed MINERS-000 through MINERS-004 reports relevant to shared conventions and preservation
9. Current Git branch/status/diff/untracked inventory and existing shared components/tokens/tests

Follow OpenWolf tracking only within the permissions granted by `AGENTS.md`. Record the baseline before editing and preserve all unrelated worktree changes.

## Approved implementation scope

Implement the `/about` App Router page from Figma node `63:116`, adapting the design context to the existing architecture rather than pasting generated code. Implement the planned section order: shared navigation, About hero/story, mission, operating principles, collaboration model/culture map, talent pathway, dual conversion paths, shared footer ownership, and Ask Miners affordance as evidenced by the Planner report.

Reuse `SiteHeader`, `SiteFooter`, `ThemeContext`, global tokens, typography, focus styles, and existing icon conventions. Keep `layout.tsx` as the sole footer owner. Use truthful story/value/talent content and non-misleading placeholders for careers, social, contact, and Ask Miners destinations. Use stable local assets or CSS compositions only; never ship temporary Figma MCP URLs. Support keyboard access, responsive layouts at 375×812, 768×1024, and 1440×900, semantic landmarks/headings, visible focus, contrast, reduced motion, no overflow, and no duplicate footer/contentinfo landmarks. Do not introduce dependencies unless essential and documented.

## Required validation and evidence

Run and record exact commands, exit codes, counts, warnings, skipped checks, and limitations:

- `git branch --show-current`, `git status --short --branch`, `git diff --name-status`, and untracked inventory before/after
- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Production HTTP checks for `/about`, `/`, `/services`, and `/projects`
- Playwright at 375×812, 768×1024, and 1440×900 with screenshots under `test-results/MINERS-005/`
- Axe, landmarks, heading count/order, keyboard/focus, theme/mobile navigation, CTA/link destinations, console/page errors, failed requests, broken images, and overflow checks
- Verify exactly one footer/contentinfo per route
- Port/process cleanup
- `git diff --check`
- npm audit if available; disclose advisory endpoint failures rather than claiming a pass

Add focused unit/E2E coverage without weakening existing homepage, Services, or Projects assertions. Preserve all prior task, Git, OpenWolf, workflow, agent, and documentation files. No destructive Git commands.

## Developer report

Write the complete report to `docs/workflow/tasks/MINERS-005-about-page/02-developer-report.md`. It must include:

- Task and Planner prerequisite
- Implementation summary
- AC-001 through AC-012 implementation matrix
- Complete changed-files inventory and reasons
- Technical decisions, content/assets provenance, and tests added/updated
- Exact validation evidence
- Defects addressed
- Deviations and limitations
- OpenWolf/project tracking evidence
- Report persistence verification
- Developer decision

On correction rounds, document each defect ID, root cause, correction, changed files, validation, and `FIXED_PENDING_VERIFICATION` without marking defects closed. Report `STATUS: PASS` only when all criteria and required checks pass; `FAIL` for an implementation/validation failure; `BLOCKED` for a missing dependency, permission, environment capability, or unresolved material decision.

Write the report, read it back from disk, verify its evidence matches the repository, and return the complete persisted report.

End with:

```text
AGENT: Developer
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-005 — About Page from Figma
REPORT: docs/workflow/tasks/MINERS-005-about-page/02-developer-report.md
EVIDENCE: <changed files, exact commands, exit codes, counts, screenshots, cleanup, limitations, and OpenWolf evidence>
HANDOFF: QA — independently validate AC-001 through AC-012 and all regression, responsive, accessibility, visual, runtime, asset, and Git-preservation checks.
```
