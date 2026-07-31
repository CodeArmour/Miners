# MINERS-002 — Home Page from Figma
## Developer Report

### Task and Planner prerequisite

Planner report `01-planner-report.md` is persisted with `STATUS: PASS`. Implementation was performed on `task/miners-002-home-page` after refreshing Figma design context for file `19xdM0pHN5I1Nbl4F88115`, nodes `10:2` (desktop) and `17:2` (responsive), using the required `figma-design-to-code` skill.

### Implementation summary

Replaced the foundation placeholder homepage with a responsive Miners Group marketing homepage matching the approved Figma section order: liquid-glass navigation, hero/product composition, audience rail, services, projects, process, internship, customer story, dual conversion panels, footer, and persistent Ask Miners control. Added mobile navigation semantics, theme toggle state, Escape-to-close behavior, labelled carousel controls, mailto/contact destinations, reduced-motion CSS, visible focus styles, responsive layouts, and CSS-rendered product/internship visuals without unstable remote assets.

### Acceptance-criteria implementation matrix

| Criterion | Implementation | Evidence |
|---|---|---|
| AC-001 | Desktop structure and Figma section order implemented. | `src/app/page.tsx`; Figma nodes `10:2`, `17:2` |
| AC-002 | Responsive 375/768/1440 layouts and mobile stacked flow. | `src/app/globals.css`; E2E 3 viewports |
| AC-003 | Navigation links, theme toggle, menu button, focus states, Escape close. | `src/app/page.tsx` |
| AC-004 | Hero copy, CTAs, audience note and social URL-TBD labels. | `src/app/page.tsx` |
| AC-005 | CSS glass product visual with accessible role/label and floating cards. | `src/app/page.tsx`, `globals.css` |
| AC-006 | Audience rail, services cards and labelled service carousel controls. | `src/app/page.tsx` |
| AC-007 | Projects, process steps and responsive project carousel controls. | `src/app/page.tsx` |
| AC-008 | Internship/mentorship visual and opportunities CTA. | `src/app/page.tsx`, `globals.css` |
| AC-009 | Customer story and dual conversion panels with working mailto links. | `src/app/page.tsx` |
| AC-010 | Footer navigation and persistent Ask Miners chat popover. | `src/app/page.tsx` |
| AC-011 | Semantic landmarks, one h1, labelled controls, contrast fixes, reduced motion and no horizontal overflow. | Axe/E2E pass; `globals.css` |
| AC-012 | Existing token system reused; no new dependency or backend/API scope. | `globals.css`, `package.json` unchanged dependencies |

### Changed files

Application/test files changed by this stage:

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/page.test.tsx`
- `tests/e2e/foundation.spec.ts`
- `playwright.config.ts`
- `public/facebook.png` — 512×513 PNG, stable local Facebook mark used by the hero social anchor.
- `public/instagram.png` — 512×512 PNG, stable local Instagram mark used by the hero social anchor.
- `public/twitter.png` — 512×512 PNG, stable local X/Twitter mark used by the hero social anchor.
- `public/whatsapp.png` — 512×512 PNG, stable local WhatsApp mark used by the hero social anchor.
- `docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`
- `docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md`

Pre-existing or unrelated files were preserved unchanged: `bash.exe.stackdump` (unrelated shell diagnostic artifact), `.wolf/cron-state.json`, `.wolf/hooks/_session.json`, `.wolf/token-ledger.json`, `docs/workflow/task-registry.md`, MINERS-001 task files, and `.wolf/hooks/_precompact-snapshot.json`.

### Dependencies and versions

No dependency changes were required. Existing stable versions remain in `package.json` and `package-lock.json` (Next 16.2.12, React 19.2.8, TypeScript 5.9.3, Tailwind 4.3.3, Playwright 1.62.1, Vitest 4.1.10). `npm.cmd ci` was attempted and exited `-4048` because Windows denied unlinking a locked native `lightningcss` binary. `npm.cmd install --no-audit --no-fund` then restored the lockfile dependency tree and exited `0`; npm emitted cleanup warnings for the same locked native binaries.

### Validation results

- `npm.cmd run lint`: exit `0`, ESLint clean.
- `npm.cmd run type-check`: exit `0`, TypeScript clean.
- `npm.cmd run test`: final exit `0`, Vitest `1` file / `1` test passed.
- `npm.cmd run build`: final exit `0`, Next production build completed; `/` static route generated.
- `npm.cmd run test:e2e`: final exit `0`, Playwright `3 passed` in `12.6s`; all three viewport tests completed and teardown succeeded.
- Production startup: `npm.cmd start`; `Invoke-WebRequest http://127.0.0.1:3000/`; HTTP `200`; process stopped and `PORT_3000_LISTENERS:0`.
- Browser console/runtime: E2E collected console and page errors at each viewport; both arrays were empty for all three tests.
- Accessibility: Axe Playwright violations `0` at 375×812, 768×1024, and 1440×900.
- Responsive/visual: no horizontal overflow at all three required viewports; full-page screenshots captured.
- Screenshots: `test-results/MINERS-002/mobile-375x812.png`, `tablet-768x1024.png`, `desktop-1440x900.png` (count `3`).
- `git diff --check`: exit `0`; only Git line-ending warnings were reported.
- Dependency audit: `npm.cmd audit --omit=dev --json` and `npm.cmd audit --json` both exited `1` because the npm security endpoint returned an error; no severity counts were available, so audit is explicitly skipped/unavailable rather than claimed passed.
- Server shutdown: confirmed production process stopped and port 3000 released (`0` listeners).

### Accessibility, responsive, and visual evidence

The page uses `header`, `nav`, `main`, `section`, `footer`, one level-one heading, labelled navigation/menu/carousel/chat controls, real anchors, visible `:focus-visible` rings, Escape handling for the mobile menu, and `prefers-reduced-motion` handling. Axe and overflow checks passed across all required viewport sizes. Screenshots are full-page and stored under `test-results/MINERS-002/`.

### Deviations and limitations

Figma image assets were intentionally not copied from temporary URLs. The product and mentorship visuals are stable CSS compositions, avoiding expiring remote asset dependencies. Social destinations remain explicit `URL TBD` placeholders as specified by the design. npm audit could not reach its advisory endpoint in this environment. The first post-edit E2E attempt used a stale production build and exposed contrast findings; after rebuilding and applying darker semantic text colors, the final E2E run passed all three tests.

### Open defects or blockers

None blocking implementation. Dependency audit remains an environment-level skipped check due unavailable npm advisory service.

### Correction round 01 — QA-001 through QA-004

| Defect | Root cause | Correction | Disposition |
|---|---|---|---|
| MINERS-002-QA-001 | Unavailable Manrope allowed a serif fallback. | Added deterministic Arial/Helvetica non-serif display stack while preserving Figma sizing, weight, tracking, and responsive behavior. | FIXED_PENDING_VERIFICATION |
| MINERS-002-QA-002 | Controls used Unicode glyphs. | Added a consistent inline SVG icon component for moon, menu, close, arrows, social marks, and Ask Miners. | FIXED_PENDING_VERIFICATION |
| MINERS-002-QA-003 | Cards and product composition were overly generic. | Reworked glass cards, project art, product window, borders, accent surfaces, shadows, radii, spacing, and hierarchy toward the Figma reference. | FIXED_PENDING_VERIFICATION |
| MINERS-002-QA-004 | Header hierarchy and spacing were compressed. | Rebalanced glass header padding, centered navigation, brand treatment, action grouping, mobile menu target, and control sizing. | FIXED_PENDING_VERIFICATION |

Correction validation: lint exit 0 with no warnings; type-check 0; Vitest 1/1; build 0; Playwright 3/3 at 375×812, 768×1024, and 1440×900; Axe violations, console errors, page errors, and overflow failures all 0; production HTTP 200; port 3000 released; screenshots regenerated under `test-results/MINERS-002/`; `git diff --check` 0. Both npm audits were rerun and exited 1 because `https://registry.npmjs.org/-/npm/v1/security/advisories/bulk` was unavailable; no severity counts are claimed.

### Correction round 02 — QA-005 and QA-006

| Defect | Root cause | Correction | Disposition |
|---|---|---|---|
| MINERS-002-QA-005 | `.home` used `overflow: hidden`, creating a scroll container that prevented sticky positioning. | Changed the page overflow strategy to `overflow-x: clip; overflow-y: visible` while preserving horizontal overflow protection. | FIXED_PENDING_VERIFICATION |
| MINERS-002-QA-006 | Header had no reduced-width constraint and stretched to the viewport edges. | Added centered `width: min(calc(100% - 128px), 1312px)` on desktop and `calc(100% - 40px)` at responsive widths. | FIXED_PENDING_VERIFICATION |

Targeted sticky/width assertions were added to `tests/e2e/foundation.spec.ts`: after scrolling to `1800px`, header y remained non-negative at all required viewports; desktop header width stayed ≤1312px with a positive outer margin. Final E2E result was 3/3 passed.

### Final homepage refinements before QA handoff

The current homepage also includes the requested reusable visual patterns: six-card What We Do carousel with page counter and snap scrolling; four-project Selected Work carousel with two cards per page, pagination dots, and five-second rotation; six-review Customer Stories carousel with two pages, dots, keyboard-focusable scroll region, and five-second rotation; dark footer; dark-mode semantic palette; dark/light internship card treatment; local social PNG assets; section-specific hover effects; and the Ready when you are conversion section. These are application refinements within the approved homepage scope and are covered by the final regression run.

Final regression after these refinements: `npm.cmd run lint` exit 0, `npm.cmd run type-check` exit 0, `npm.cmd run test` exit 0 (1/1), `npm.cmd run build` exit 0, and `npm.cmd run test:e2e` exit 0 (3/3). Axe violations, console errors, page errors, and overflow failures were 0. Production startup returned HTTP 200 and port 3000 released with 0 listeners. Screenshots were regenerated under `test-results/MINERS-002/`. `git diff --check` exit 0. npm audit remains unavailable at the registry advisory endpoint.

### Report persistence verification

This report was written to `docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md` and read back for section, acceptance matrix, evidence, and handoff validation. The report path is the only lifecycle file created by the Developer for this task.

### Developer decision

Implementation is complete and ready for independent QA validation. `STATUS: PASS`.

AGENT: Developer
STATUS: PASS
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/02-developer-report.md
EVIDENCE: Correction rounds 01–02 fixed QA-001–QA-006; final homepage refinements include functional What We Do, Selected Work, and Customer Stories carousels, dark footer/mode, internship treatment, local social PNGs, hover states, and conversion panels. Complete implementation inventory: `src/app/page.tsx`, `src/app/globals.css`, `src/app/page.test.tsx`, `tests/e2e/foundation.spec.ts`, `playwright.config.ts`, `public/facebook.png` (512x513), `public/instagram.png` (512x512), `public/twitter.png` (512x512), `public/whatsapp.png` (512x512), and this Developer report. The four PNGs are stable local assets used by hero social anchors; their alt is empty because each anchor supplies the accessible network label. `bash.exe.stackdump` is unrelated and preserved. Figma nodes 10:2/17:2 refreshed; sticky/width assertions pass; lint 0; type-check 0; Vitest 1/1; build 0; Playwright 3/3 at 375x812, 768x1024, 1440x900; Axe 0; console/page errors 0; overflow 0; screenshots 3; production HTTP 200; port released; git diff check 0; npm audits exit 1 because advisory endpoint unavailable.
HANDOFF: QA — independently revalidate QA-005 and QA-006 plus all current homepage refinements, carousel pagination/automatic rotation, keyboard focusability, screenshots, accessibility, production startup, and audit limitation.
