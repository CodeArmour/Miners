# Developer Prompt — MINERS-006 Careers and Contact Pages from Figma

You are Developer in the manual multi-window workflow. You are the only role authorized to modify application code and tests. You may create/update only approved application code/tests and `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md`. Do not modify the registry, task brief, Planner/QA/Reviewer/Status reports, prompts, defect files, or OpenWolf records. Do not commit or push.

## Task and gate

- Task: `MINERS-006 — Careers and Contact Pages from Figma`
- Branch: `task/miners-006-careers-contact`
- Task directory: `docs/workflow/tasks/MINERS-006-careers-contact/`
- Planner prerequisite: `01-planner-report.md` is persisted and validated with `STATUS: PASS`.
- Current lifecycle: `PLANNED`; Developer is the next permitted role.
- Figma nodes: Careers `70:120`, Contact `72:124`
- Figma requests: Careers `06f2b244-ac4d-4237-8806-9ef5442dd40e`; Contact `7bbfc6e4-72b5-40cf-91b3-bcf8fa0925bd`

## Required reading and OpenWolf

Read completely before editing:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`
3. `.wolf/anatomy.md` before inspecting repository files
4. `.wolf/cerebrum.md` before generating code
5. `docs/workflow/README.md`
6. `docs/workflow/tasks/MINERS-006-careers-contact/00-task-brief.md`
7. `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`
8. Completed MINERS-000 through MINERS-005 reports relevant to shared conventions and preservation
9. Current Git branch/status/diff/untracked inventory and existing shared components/tokens/tests

Follow OpenWolf tracking only within the permissions granted by `AGENTS.md`. Record the baseline before editing and preserve all unrelated worktree changes.

## Approved implementation scope

Implement `/careers` from node `70:120` in its planned order: navigation, hero/story, principles, culture map, why join, expectations, hiring journey, roles/internships, dual conversion paths, shared footer, and Ask Miners. Implement `/contact` from node `72:124` in its planned order: navigation, hero/response promise, project inquiry form, alternative paths, working agreement, shared footer, and Ask Miners.

Reuse `SiteHeader`, `SiteFooter`, `ThemeContext`, tokens, typography, focus styles, and existing inline SVG conventions. Keep `layout.tsx` as the sole footer owner. Use truthful careers content and clearly labelled placeholders for roles/social links. Contact submission must use the existing `hello@miners.group` mailto/direct-contact path or remain explicitly presentation-only; never claim fabricated server delivery. Use stable local/CSS assets only; never ship temporary Figma URLs. Support keyboard-accessible form labels/validation, responsive layouts at 375×812, 768×1024, and 1440×900, semantic landmarks/headings, visible focus, contrast, reduced motion, no overflow, no broken images, and no duplicate footer/contentinfo landmarks.

## Required validation and evidence

Run and record exact commands, exit codes, counts, warnings, skipped checks, and limitations:

- `git branch --show-current`, `git status --short --branch`, `git diff --name-status`, and untracked inventory before/after
- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Production HTTP checks for `/careers`, `/contact`, `/`, `/services`, `/projects`, and `/about`
- Playwright at 375×812, 768×1024, and 1440×900 with screenshots under `test-results/MINERS-006/`
- Axe, landmarks, heading order, keyboard/focus, theme/mobile navigation, CTA/link destinations, form labels/validation/fallback behavior, console/page errors, failed requests, broken images, and overflow checks
- Verify exactly one footer/contentinfo per route
- Port/process cleanup
- `git diff --check`
- npm audit if available; disclose advisory endpoint failures rather than claiming a pass

Add focused unit/E2E coverage for both routes without weakening existing route assertions. Preserve all prior task, Git, OpenWolf, workflow, agent, and documentation files. No destructive Git commands.

## Developer report

Write the complete report to `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md`. It must include:

- Task and Planner prerequisite
- Implementation summary for both routes
- AC-001 through AC-012 implementation matrix
- Complete changed-files inventory and reasons
- Technical decisions, form behavior, content/assets provenance, and tests added/updated
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
TASK: MINERS-006 — Careers and Contact Pages from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md
EVIDENCE: <changed files, exact commands, exit codes, counts, screenshots, form/CTA behavior, cleanup, limitations, and OpenWolf evidence>
HANDOFF: QA — independently validate AC-001 through AC-012 and all Careers/Contact regression, responsive, accessibility, visual, runtime, form, asset, and Git-preservation checks.
```
