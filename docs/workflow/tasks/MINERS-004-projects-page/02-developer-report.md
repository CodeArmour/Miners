# MINERS-004 — Projects Page from Figma
## Developer Report

### Task and Planner prerequisite

Implemented MINERS-004 on branch `task/miners-004-projects-page`. Planner report `01-planner-report.md` was validated with `STATUS: PASS`. Figma node `51:10` was traced with request IDs `ea3ec381-6f44-4db5-a940-96593da560f4` and `a72fc153-9fac-4c73-a5ca-a2227c9cdfcf`.

### Implementation summary

Added `/projects` with the planned section order: hero, Discover/Build/Improve outcome map, accessible work filters, clearly labelled sample case studies, proof framework, delivery approach, dual conversion paths, and Ask Miners. The page reuses the shared layout navigation, footer, theme context, tokens, typography, focus styles, and icon conventions. Project visuals are CSS compositions with no temporary Figma URLs or external assets. Applied the established visual language with colored section labels, large plain outcome/proof numbers, card lift/slide interactions, reduced-motion safeguards, hero CTA spacing, and a Projects navbar section dropdown.

### Acceptance-criteria implementation matrix

| Criterion | Implementation | Evidence |
|---|---|---|
| AC-001 | `/projects` follows node 51:10 section order and copy intent. | `src/app/projects/page.tsx`; Figma IDs above |
| AC-002 | `/projects` added while `/` and `/services` remain intact. | Build, HTTP probes, 9-test E2E |
| AC-003 | Four deterministic sample case studies include category, challenge, product, outcome, tags, and sample labels. | Projects source and unit test |
| AC-004 | CSS-only visuals; no remote or temporary Figma assets. | Source and asset inspection |
| AC-005 | Shared SiteHeader, SiteFooter, ThemeContext, tokens, icons, and typography reused. | Shared components and layout |
| AC-006 | Filter buttons expose `aria-pressed`, work by keyboard/pointer, and preserve All work. | Projects E2E filter assertion |
| AC-007 | Responsive hero, grids, cards, and conversion sections at all required viewports. | 3 Projects E2E viewport runs |
| AC-008 | One h1, ordered headings, semantic sections, labelled controls, focus classes, and one footer landmark. | Axe/E2E |
| AC-009 | Contrast-safe theme surfaces and reduced-motion hover safeguards. | Axe/E2E and CSS |
| AC-010 | No console/page errors, failed requests, overflow, or visual clipping in E2E. | Projects E2E |
| AC-011 | Lint, type-check, unit tests, build, E2E, and production HTTP checks passed. | Validation below |
| AC-012 | No dependencies, secrets, destructive Git commands, or governance changes introduced. | Git/diff evidence |

### Changed files

- `src/app/projects/page.tsx` — Projects route, filters, sample cards, proof, delivery, conversion, and Ask Miners.
- `src/app/projects/page.test.tsx` — Focused content/unit assertions.
- `src/components/site-header.tsx` — Projects navigation now routes to `/projects` and exposes a hover/focus section dropdown.
- `src/app/globals.css` — Projects layout, cards, filters, responsive rules, theme styling, and reduced-motion rules.
- `tests/e2e/projects.spec.ts` — Three viewport Projects accessibility/filter/runtime/screenshot coverage.
- `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md` — This report.

Pre-existing OpenWolf, agent, workflow, task, documentation, homepage, Services, and unrelated worktree changes were preserved.

### Technical decisions, assets, and tests

- Sample case studies are explicitly labelled and contain no real-client claims or invented metrics.
- Visuals use stable CSS gradients and decorative compositions; no public asset or temporary Figma URL was added.
- Filters are client-side presentation state with an accessible All work default.
- Ask Miners remains a mailto-backed affordance already used by the application; no unsupported chat backend was introduced.
- Added `src/app/projects/page.test.tsx` and `tests/e2e/projects.spec.ts`; existing homepage and Services E2E suites remain unchanged and passed.

### Validation results

- `git branch --show-current`: exit `0`, `task/miners-004-projects-page`.
- `npm.cmd run lint`: exit `0`.
- `npm.cmd run type-check`: exit `0`.
- `npm.cmd run test`: exit `0`, 3 test files / 3 tests passed.
- `npm.cmd run build`: exit `0`; `/`, `/services`, `/projects`, and `/_not-found` generated.
- `npm.cmd run test:e2e`: exit `0`, 9/9 passed (3 homepage, 3 Services, 3 Projects), including the corrected SVG Ask Miners control.
- Final visual/navigation regression after Projects style and dropdown refinements: build `0`, E2E `9/9`, diff-check `0`.
- Projects E2E at 375×812, 768×1024, and 1440×900: Axe violations `0`, console errors `0`, page errors `0`, failed requests `0`, horizontal overflow `0`, exactly one contentinfo landmark per route, filter interaction passed.
- Screenshots: `test-results/MINERS-004/projects-mobile-375x812.png`, `projects-tablet-768x1024.png`, and `projects-desktop-1440x900.png`.
- Production HTTP probes after `npm.cmd run start`: `/projects` `200`, `/` `200`, `/services` `200`; start process stopped and port released.
- `git diff --check`: exit `0`.
- npm audit was not rerun because prior task evidence records the advisory endpoint unavailable; no audit pass is claimed.

### Defects addressed

#### MINERS-004-QA-001 — Unicode Ask Miners glyph

- **Root cause:** Projects used a literal Unicode sparkle glyph instead of the established inline SVG icon convention.
- **Correction:** Added a local `Spark` inline SVG component and replaced the glyph in the Projects Ask Miners control.
- **Changed file:** `src/app/projects/page.tsx`.
- **Validation:** lint `0`, type-check `0`, unit tests `3/3`, build `0`, E2E `9/9`, Axe/runtime/overflow checks `0`, diff-check `0`.
- **Disposition:** `FIXED_PENDING_VERIFICATION`; QA owns independent closure.

### Deviations and limitations

The Figma node supplied temporary visual asset URLs; CSS compositions were used instead. Case studies remain samples until verified project evidence is provided. Social and contact destinations remain the existing non-misleading placeholders.

### OpenWolf/project tracking evidence

Read `.wolf/anatomy.md` before repository inspection and `.wolf/cerebrum.md` before code generation. Existing OpenWolf and governance modifications were preserved. No commit or push was performed.

### Services anchor correction

Stable IDs are now present in server-rendered `src/app/services/page.tsx` for `packages`, `beyond-build`, `engagement`, `delivery`, and `proof`. The previous client-only alias effect was removed because it could run after browser hash navigation. `tests/e2e/services.spec.ts` asserts `/services#packages` and `/services#delivery` across 375×812, 768×1024, and 1440×900; the full E2E suite passed 9/9.

Additional changed files for this correction: `src/app/services/page.tsx` and `tests/e2e/services.spec.ts`.

### Report persistence verification

This report was written to `docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md`, read back from disk, and verified to contain all required sections plus exactly one final `EVIDENCE:` and `HANDOFF:` field.

### Developer decision

Implementation is complete and ready for independent QA validation. `STATUS: PASS`.

AGENT: Developer
STATUS: PASS
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/02-developer-report.md
EVIDENCE: Corrected MINERS-004-QA-001 in `src/app/projects/page.tsx` by replacing the Unicode Ask Miners glyph with inline SVG `Spark`; fixed Services hash navigation with stable IDs in `src/app/services/page.tsx` and href assertions in `tests/e2e/services.spec.ts`; lint 0; type-check 0; unit tests 3/3; build 0; E2E 9/9; Projects Axe/console/page-error/failed-request/overflow checks all 0; exactly one footer per tested route; screenshots 3 under `test-results/MINERS-004`; HTTP `/projects`, `/`, `/services` all 200; production process stopped and port released; diff-check 0; audit limitation disclosed.
HANDOFF: QA — independently revalidate MINERS-004-QA-001 and AC-001 through AC-012, including SVG icon provenance and all regression, responsive, accessibility, visual, runtime, asset, and Git-preservation checks.
