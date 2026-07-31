# MINERS-001 — Brand Foundations from Figma
## Planner Report

### Task and repository context

MINERS-001 translates the supplied Miners Group Figma brand-foundations board into reusable tokens and foundation primitives in the completed Next.js/Tailwind application.

Observed state:

- Branch: `main`, tracking `origin/main`.
- MINERS-000 is recorded as `PASSED`; MINERS-001 is `DRAFT`.
- The application is Next.js 16.2.12 / React 19.2.8 / TypeScript / Tailwind CSS 4.3.3 with App Router and `src/`.
- Existing application files include `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, reusable components, hooks, utilities, and types.
- Pre-existing modified governance files are `.wolf/hooks/_session.json` and `docs/workflow/task-registry.md`.
- MINERS-001 task files are currently untracked under `docs/workflow/tasks/MINERS-001-brand-foundations/`.
- No application code was changed by the Planner.

### Included scope

1. Translate the Figma brand values into canonical CSS/Tailwind-compatible tokens.
2. Establish light canvas, text, brand color, border, glass, radius, spacing, shadow, blur, and typography foundations.
3. Adapt the existing homepage and reusable components to demonstrate the tokens.
4. Preserve the Next.js architecture, scripts, tests, accessibility conventions, and MINERS-000 records.
5. Make the desktop reference responsive at mobile, tablet, and desktop widths.
6. Validate token wiring, lint, type-check, tests, build, startup, accessibility, responsive behavior, screenshots, console state, and visual fidelity.
7. Do not commit or push.

### Excluded scope

- New product features, routes, data integrations, authentication, APIs, or deployment changes.
- A full website redesign beyond the supplied brand-foundations treatment.
- Replacing the existing architecture or testing strategy.
- New component-library dependencies without direct task justification.
- Editing Figma, creating Figma assets, or writing back to Figma.
- Inventing unobserved colors, typography, imagery, icons, or motion.
- Modifying task registry, task brief, OpenWolf records, MINERS-000 reports, or other governance files.
- Removing validation coverage, committing, or pushing.

### Assumptions

1. Tailwind v4 CSS-first configuration remains the styling system.
2. The existing homepage is the representative consumer of the new foundations.
3. Desktop measurements must become fluid responsive rules, not literal fixed mobile widths.
4. Returned Figma palette values are authoritative for initial token names and values.
5. The Developer must resolve any Figma metadata/reference-code discrepancy explicitly.
6. Font loading must be deterministic for the repository build environment.
7. Existing governance/OpenWolf changes are unrelated and must be preserved exactly.

### Dependencies

Existing relevant dependencies are Next.js `16.2.12`, React `19.2.8`, Tailwind CSS and `@tailwindcss/postcss` `4.3.3`, TypeScript `5.9.3`, ESLint `9.39.5`, Vitest `4.1.10`, Playwright `1.62.1`, and axe-core Playwright integration. No new runtime dependency is required. The Developer must verify whether Inter and Manrope can be loaded deterministically; network-sensitive font fetching must not make build validation nondeterministic.

### Figma evidence

Source file key: `19xdM0pHN5I1Nbl4F88115`; target node: `2:27`.

The mandatory `figma-design-to-code` skill was loaded before `get_design_context`. The call succeeded and returned reference React/Tailwind code, design metadata, and a screenshot. Request ID: `e21f95a7-6b33-43ce-9365-94f563c9d859`.

Observed tokens:

| Token | Value | Use |
|---|---|---|
| `surface-canvas` | `#F5FAFA` | Light canvas |
| `brand-sky` | `#55C7F3` | Primary accent surface |
| `brand-mint` | `#73E6C2` | Secondary accent surface |
| `neutral-graphite` | `#20262B` | Dark brand surface |
| `text-primary` | `#161B1F` | Main text |
| `text-secondary` | `#66727A` | Supporting text |
| `border-frost` | `#D8EBEB` | Borders/dividers |
| Glass fill | `rgba(255,255,255,0.62)` | Focal glass layer |
| Glass shadow | `rgba(32,38,43,0.10)` | Glass elevation |

Typography evidence:

- Label: Inter Semi Bold, 14px, 600, line-height 1.20, tracking 0.
- Display: Manrope Extra Bold, 72px, 800, line-height 1.04. Metadata reports `-2.5px` tracking while the reference class reports `-1.8px`; this must be resolved and documented.
- Body: Inter Regular, 18px, 400, line-height 1.55, tracking 0.

Geometry/effects evidence:

- Canvas padding `96px`; main gap `56px`.
- Palette cards gap `24px`, desktop size `390px × 220px`, padding `28px`.
- Glass panel desktop size `1248px × 190px`, horizontal padding `36px`, vertical padding `32px`, internal gap `12px`.
- Radius `28px`; glass border `1px solid border-frost`; backdrop blur `14px`; shadow `0 16px 40px rgba(32,38,43,0.10)`.
- Glass is a focal layer for navigation, previews, and conversion panels, not the entire interface.
- No explicit motion is evidenced; do not invent motion and retain reduced-motion behavior.

### Existing-state and preservation requirements

Before editing, the Developer must record `git status --short --branch`, `git diff --name-status`, `git ls-files --others --exclude-standard`, application inventory, and validation baseline. Preserve `.git/`, `.wolf/`, `.claude/`, `.codex/`, `agents/`, `docs/workflow/`, all MINERS-000 records, root documentation, scripts, and tests. Only application code/tests and the canonical Developer report are in implementation scope. No destructive Git commands, commits, or pushes.

### Affected systems and expected files

Expected application files are `src/app/globals.css` for tokens and global styles, `src/app/layout.tsx` for deterministic font/metadata wiring if required, `src/app/page.tsx` for representative usage, `src/components/feature-card.tsx` and `src/components/foundation-status.tsx` for reusable consumers, and only genuinely necessary shared types or new primitive files. Do not create unused token modules, empty directories, duplicate class systems, or unrelated abstractions.

### Risks and mitigations

1. **Fixed desktop values break mobile:** use fluid containers, responsive grids, and breakpoint typography/padding.
2. **Light redesign regresses accessibility:** preserve semantic structure, focus styles, keyboard behavior, reduced motion, and test assertions.
3. **Mixed accidental theme:** deliberately restyle the representative homepage and verify every surface/text combination.
4. **Tracking discrepancy:** inspect the source style and document the selected value.
5. **Font network dependency:** use deterministic local or supported fallback strategy and document fidelity limits.
6. **Glass overuse:** restrict glass to focal surfaces; keep core content crisp.
7. **Contrast failures:** run axe/contrast checks on canvas, glass, sky, mint, and graphite combinations.
8. **Token drift:** define canonical variables once and avoid repeated raw hex values.
9. **Governance churn:** classify the baseline and limit Developer edits to application scope and its own report.

### Acceptance criteria

**AC-001 — Figma evidence:** Report traces implementation to file `19xdM0pHN5I1Nbl4F88115`, node `2:27`, including context evidence and discrepancies.

**AC-002 — Color tokens:** Canonical tokens exist for all observed colors and repeated raw component hex values are removed or justified.

**AC-003 — Typography:** Reusable label, display, and body styles match observed family, size, weight, line-height, and resolved tracking; font loading is deterministic.

**AC-004 — Shape/elevation:** Radius, frost border, glass fill, blur, and shadow are reusable and not duplicated inconsistently.

**AC-005 — Wiring:** Homepage plus at least two reusable components consume the foundation tokens.

**AC-006 — Glass restraint:** Glass is limited to focal/interactive surfaces and core content remains crisp/readable.

**AC-007 — Responsive:** At `375×812`, `768×1024`, and `1440×900`, there is no overflow, clipping, overlap, or unreadable fixed-width content.

**AC-008 — Accessibility:** No critical/serious automated violations; implemented text and controls meet WCAG AA contrast; focus and reduced-motion behavior work.

**AC-009 — Visual fidelity:** Screenshots demonstrate light frosted canvas, sky/mint/graphite palette, typography hierarchy, rounded cards, restrained glass, and coherent spacing.

**AC-010 — Regression:** Lint, type-check, unit tests, build, production startup/HTTP smoke, browser console/page-error checks, and affected E2E assertions pass.

**AC-011 — Preservation:** Only authorized application changes and the Developer report are introduced; MINERS-000/governance records and unrelated changes remain preserved.

**AC-012 — Maintainability:** Future components can consume canonical variables/utilities without copying raw design values; token sources and consumers are documented.

### Validation strategy

| Criterion | Required validation |
|---|---|
| AC-001 | Record Figma URL, file/node IDs, successful context request ID, returned metadata, and discrepancy handling. |
| AC-002 | Inspect `globals.css` and component source for canonical variables and raw-color duplication. |
| AC-003 | Inspect font setup and computed browser styles; run type-check/build. |
| AC-004 | Inspect declarations and computed radius, border, blur, fill, and shadow values. |
| AC-005 | Run lint/type/tests and inspect at least two reusable consumers. |
| AC-006 | Inspect browser rendering/screenshots to confirm glass is focal rather than page-wide. |
| AC-007 | Run browser checks and screenshots at all three specified viewports; assert no horizontal overflow. |
| AC-008 | Run axe, console/page-error, keyboard/focus, reduced-motion, and contrast checks. |
| AC-009 | Capture and inspect full-page screenshots at all three viewports against the Figma context screenshot. |
| AC-010 | Run `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, production startup/HTTP probe, and affected E2E tests. |
| AC-011 | Compare before/after Git status, diff names, untracked inventory, and `git diff --check`; confirm no commit/push. |
| AC-012 | Review token names, consumers, and absence of unused/raw duplicated foundation values. |

Required browser evidence includes screenshots and console/page-error/overflow/accessibility results for `375×812`, `768×1024`, and `1440×900`. Unavailable checks must be reported as skipped with exact reasons and cannot be claimed as passed.

### Implementation sequence

1. Capture branch, worktree, untracked paths, application inventory, and validation baseline.
2. Recheck the Figma source and resolve the display-tracking discrepancy.
3. Inspect CSS, component conventions, Tailwind v4, font availability, and selectors.
4. Define canonical variables and Tailwind mappings in `src/app/globals.css`.
5. Establish deterministic Inter/Manrope handling if required.
6. Update homepage and reusable components while preserving semantics and behavior.
7. Translate desktop dimensions into responsive rules.
8. Keep glass treatment focal and preserve reduced motion.
9. Run lint, type-check, unit tests, build, startup/HTTP smoke, browser checks, accessibility, screenshots, and audits.
10. Compare the final diff against the baseline, confirm protected files are unchanged, and return the Developer report without commit/push.

### Definition of Done

Implementation is complete when AC-001 through AC-012 have objective evidence; tokens and typography are wired; at least two reusable components consume them; all three viewports render without layout defects; accessibility, contrast, console, page-error, reduced-motion, and E2E checks pass; screenshots are captured and inspected; no blocking visual/runtime/preservation defect remains; MINERS-000 and governance content is preserved; and the later Developer, QA, Reviewer, and Status gates pass through `LIFECYCLE: PASSED`.

### Open decisions or blockers

No blocker prevents implementation. The Developer must resolve or document:

1. Figma display tracking: metadata `-2.5px` versus reference class `-1.8px`.
2. Deterministic Inter/Manrope delivery strategy.
3. Whether the existing homepage is sufficient as the representative consumer; a separate showcase route requires explicit justification.
4. Token naming should follow existing project conventions if one is established, otherwise the semantic names above.

### Evidence

Files inspected: `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/STATUS.md`, `.wolf/anatomy.md`, `docs/workflow/README.md`, `docs/workflow/task-registry.md`, `docs/workflow/tasks/MINERS-001-brand-foundations/00-task-brief.md`, `package.json`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/feature-card.tsx`, `src/components/foundation-status.tsx`, `src/types/foundation.ts`, and `README-APP.md`.

Commands/results:

- Required file reads — exit code 0.
- `git status --short --branch` — exit code 0; branch `main`, upstream `origin/main`, pre-existing governance modifications, and untracked MINERS-001 task directory.
- Recursive application inventory — exit code 0.
- `git diff --name-status` — exit code 0; pre-existing `.wolf/hooks/_session.json` and `docs/workflow/task-registry.md` modifications.
- Existing package/config inspection — exit code 0; confirmed Next.js 16.2.12, React 19.2.8, Tailwind 4.3.3, TypeScript 5.9.3, ESLint 9.39.5, Vitest 4.1.10, and Playwright 1.62.1.
- `get_design_context` for file key `19xdM0pHN5I1Nbl4F88115`, node `2:27`, after loading `figma-design-to-code` — successful; returned reference code, metadata, screenshot, and request ID `e21f95a7-6b33-43ce-9365-94f563c9d859`.
- No application files were modified by the Planner.

AGENT: Planner
STATUS: PASS
TASK: MINERS-001 — Brand Foundations from Figma
REPORT: docs/workflow/tasks/MINERS-001-brand-foundations/01-planner-report.md
EVIDENCE: Figma file `19xdM0pHN5I1Nbl4F88115`, node `2:27`; successful `get_design_context` using the mandatory `figma-design-to-code` skill with request ID `e21f95a7-6b33-43ce-9365-94f563c9d859`; inspected required OpenWolf/workflow files, package/configuration files, and existing application files; read-only Git commands exited 0; no application files modified.
HANDOFF: Coordinator — validate this report and persist it to `docs/workflow/tasks/MINERS-001-brand-foundations/01-planner-report.md`; then prepare the Developer prompt if PASS.
