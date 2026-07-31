# MINERS-002 — Home Page from Figma
## Planner Report

### Task and repository context

MINERS-002 plans implementation of the complete Miners Group home page from the supplied desktop and responsive Figma designs, reusing completed MINERS-001 brand tokens and primitives.

Observed state:

- Authoritative branch: `task/miners-002-home-page`.
- Current branch: `task/miners-002-home-page`.
- MINERS-000 and MINERS-001 are recorded as `PASSED`.
- Existing application: Next.js 16.2.12, React 19.2.8, TypeScript, Tailwind CSS 4.3.3, App Router, and `src/`.
- Existing modules include `src/app/`, `src/components/`, `src/hooks/`, `src/lib/`, and `src/types/`.
- Pre-existing modified governance files are `.wolf/hooks/_session.json` and `docs/workflow/task-registry.md`; existing MINERS-001/task artifacts must remain preserved.
- No application files were modified by the Planner.

The corrected task brief confirms `task/miners-002-home-page` as authoritative, so the prior branch-gate blocker is resolved.

### Included scope

1. Implement the complete home page represented by both Figma nodes.
2. Reuse MINERS-001 semantic tokens and primitives without duplicating foundations.
3. Implement desktop navigation, hero/product visual, audience rail, services, projects, process, internship, reviews, conversion panels, footer, and floating AI-chat affordance.
4. Implement responsive navigation/menu, stacked hero, mobile visual, carousels, process list, internship, reviews, conversion, footer, and AI-chat affordance.
5. Preserve evidenced copy, hierarchy, links/states, and supplied assets where available.
6. Make interactions keyboard accessible and responsive.
7. Validate lint, type-check, unit tests, build, production startup/HTTP, E2E, accessibility, console/page errors, overflow, screenshots, and visual fidelity.
8. Preserve MINERS-000, MINERS-001, Git, OpenWolf, workflow, agent, and documentation records.
9. Do not commit or push.

### Excluded scope

- Backend/API/database/authentication or real CMS/data integration.
- Inventing destinations for links marked `URL TBD`.
- New brand tokens already supplied by MINERS-001.
- Figma edits, unrelated routes/dependencies/infrastructure, test-infrastructure replacement, governance changes outside the Planner report, commits, or pushes.

### Assumptions

1. `src/app/page.tsx` remains the home route.
2. MINERS-001 tokens in `src/app/globals.css` are canonical.
3. Figma code is reference material and must be adapted to existing conventions.
4. Desktop fixed widths become fluid responsive layouts.
5. Figma placeholder imagery and `URL TBD` labels remain explicitly documented until approved production content/destinations exist.
6. Local deterministic Inter/Manrope fallback strategy remains unless exact local assets are available.
7. Carousels support keyboard/touch and respect reduced motion.

### Dependencies

Existing dependencies are sufficient: Next.js `16.2.12`, React `19.2.8`, Tailwind CSS `4.3.3`, TypeScript `5.9.3`, ESLint `9.39.5`, Vitest `4.1.10`, Playwright `1.62.1`, and axe-core Playwright integration. No new runtime dependency is required. Figma assets must be downloaded into stable application-owned files if used; temporary remote URLs expire.

### Figma evidence

Source file key: `19xdM0pHN5I1Nbl4F88115`.

Both nodes were inspected after loading the mandatory `figma-design-to-code` skill:

- Desktop node `10:2`: request ID `3d0f0923-b53c-4206-8eef-57a780487fb4`; returned reference code, metadata, screenshot, and 11 asset constants.
- Responsive node `17:2`: request ID `45119197-77c6-4888-af9e-de38358fa828`; returned reference code, metadata, screenshot, and 9 asset constants.

Desktop evidence includes:

- Liquid-glass navigation with Miners Group brand, Services, Projects, About, Careers, Contact, theme toggle, Coffee chat, and Start a project.
- Hero eyebrow `SOFTWARE FOR IDEAS WITH MOMENTUM`, heading `We build software that moves ideas forward.`, supporting copy, two CTAs, audience microcopy, four social links, interactive glass product composition, and floating Web/Mobile glass cards.
- Audience rail, services overview (Web platforms, Mobile apps, Custom software, Product design), selected projects (Campus Flow, Atlas Workspace), five-step process (Discover, Define, Design, Develop, Improve), internship feature, customer stories, dual conversion panels, footer, and `Ask Miners` floating control.

Responsive evidence includes:

- Mobile brand header with theme toggle and menu button.
- Stacked badge, hero heading/copy, full-width CTAs, social links, and mobile glass visual.
- Compact audience rail; horizontal services, projects, and reviews carousels with pagination; stacked process steps; internship card; stacked conversion paths; compact footer; persistent AI-chat control.

Figma asset categories include moon/theme, status, social icons, sky/mint light effects, product topbar, internship visual, carousel pagination, and AI-chat icon. Social destinations are marked `URL TBD`.

### Mapping to existing application

Expected application changes:

| Area | Purpose |
|---|---|
| `src/app/page.tsx` | Compose full page in Figma section order |
| `src/app/globals.css` | Use existing MINERS-001 tokens; add only necessary page utilities |
| `src/components/` | Navigation, hero, product visual, cards, carousels, process, conversions, footer, social links, AI chat |
| `src/hooks/` | Menu/carousel interaction hooks only where needed |
| `src/types/` | Typed data for nav, services, projects, process, reviews, social links, footer |
| `public/` or app asset directory | Stable downloaded Figma assets with provenance |
| `src/app/page.test.tsx` | Meaningful home-page smoke coverage |
| `tests/e2e/` | Responsive, interaction, accessibility, console, overflow, and screenshot checks |

Do not duplicate MINERS-001 tokens, create unused abstractions, or leave expiring asset URLs unintentionally.

### Responsive and accessibility requirements

Desktop uses a glass navigation bar, two-column hero, four-column audience rail, multi-column content/cards, and footer columns. Mobile replaces links with a menu, stacks hero/actions/visual, uses accessible horizontal carousels for services/projects/reviews, stacks process/conversion content, and collapses the footer.

Use semantic landmarks and one page-level `h1`; real links/buttons; accessible theme/menu controls; `aria-expanded`/`aria-controls` and Escape handling for the menu; labelled carousel controls and pagination; meaningful or empty alt text; WCAG AA contrast; visible focus; no color-only state; and reduced-motion-safe behavior.

### Risks and mitigations

1. Large scope becoming monolithic — split into typed reusable section components.
2. Desktop/mobile divergence — map both nodes explicitly and test both.
3. Expiring Figma URLs — download exact assets and record provenance.
4. Placeholder links/content mistaken for production — document every unresolved item.
5. Inaccessible carousels/menu — keyboard/touch controls, labels, focus, Escape, and reduced-motion tests.
6. Fixed widths causing overflow — responsive grid/flex and overflow assertions.
7. Token duplication — reuse MINERS-001 semantic variables/primitives.
8. Asset performance regressions — optimize assets, set dimensions, lazy-load below-fold media.
9. Wrong-branch implementation — preserve the corrected authoritative branch and verify it before Developer start.

### Acceptance criteria

**AC-001 — Both Figma sources are traceable:** Report identifies nodes `10:2` and `17:2`, request IDs, metadata/screenshots/assets, and limitations.

**AC-002 — Complete section coverage:** All evidenced desktop and responsive sections are implemented.

**AC-003 — Content fidelity:** Evinced headings, labels, CTAs, services, projects, process, reviews, contact, footer, and legal copy are represented without accidental omissions or invented claims.

**AC-004 — MINERS-001 reuse:** Existing semantic tokens/primitives are consumed; no duplicate brand foundation system is introduced.

**AC-005 — Responsive behavior:** Navigation, hero, CTAs, visual, carousels, process, conversions, and footer transform as evidenced by node `17:2`.

**AC-006 — Interaction behavior:** Navigation, theme/menu, CTAs, social links, carousel controls, internship, and AI-chat affordance have defined accessible behavior; `URL TBD` destinations are documented.

**AC-007 — Carousel usability:** Services, projects, and reviews support keyboard/touch interaction, labelled pagination/state, focus visibility, and reduced motion.

**AC-008 — Asset fidelity:** Implemented assets are stable application-owned files with dimensions, alt text, and provenance; no unintended expiring remote URL remains.

**AC-009 — Accessibility:** Axe has no critical/serious violations; semantic headings/landmarks, keyboard, focus, menu, contrast, alt text, and reduced motion pass.

**AC-010 — Responsive visual quality:** At `375×812`, `768×1024`, and `1440×900`, no overflow, clipping, overlap, unreadable text, or broken control exists; screenshots are captured and inspected.

**AC-011 — Regression/runtime:** Lint, type-check, unit tests, build, production startup/HTTP, E2E, console/page-error, and relevant audits pass.

**AC-012 — Preservation/scope:** MINERS-000, MINERS-001, Git, OpenWolf, workflow, agent, documentation, and unrelated worktree changes remain preserved; no unauthorized governance change, commit, or push occurs.

### Validation strategy

| Criterion | Validation |
|---|---|
| AC-001 | Record both Figma request IDs, node metadata, screenshots, assets, and access results. |
| AC-002 | Component inventory and E2E assertions for every required section. |
| AC-003 | Source/content assertions against both Figma references. |
| AC-004 | Source inspection proving MINERS-001 reuse and no duplicate tokens. |
| AC-005 | Playwright at `375×812`, `768×1024`, and `1440×900` plus screenshots. |
| AC-006 | Keyboard/interaction checks for menu, theme, links, CTAs, social, and chat. |
| AC-007 | Keyboard/touch/pagination/focus/reduced-motion carousel checks. |
| AC-008 | Asset inventory, provenance, dimensions, alt text, and remote-URL review. |
| AC-009 | Axe, contrast, landmarks/headings, keyboard, focus, menu, and reduced-motion checks. |
| AC-010 | Full-page screenshots and horizontal-overflow assertions at all three viewports. |
| AC-011 | `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, production HTTP, E2E, console/page-error, and audit results. |
| AC-012 | Before/after status, diff names, untracked inventory, `git diff --check`, and preservation comparison. |

Required screenshot paths:

- `test-results/MINERS-002/mobile-375x812.png`
- `test-results/MINERS-002/tablet-768x1024.png`
- `test-results/MINERS-002/desktop-1440x900.png`

### Implementation sequence

1. Confirm the corrected authoritative branch and capture the Git/worktree baseline.
2. Capture Git/worktree baseline and MINERS-001 state.
3. Download/catalog Figma assets with stable names and provenance.
4. Add typed data models and reusable navigation, button, social, card, carousel, visual, conversion, footer, and AI-chat primitives.
5. Compose desktop sections in Figma order.
6. Add responsive rules matching node `17:2`.
7. Implement menu, carousels, pagination, focus, and reduced-motion behavior.
8. Add/update unit and E2E tests.
9. Run complete lint/type/test/build/runtime/accessibility/responsive/visual validation.
10. Compare final diff to baseline and return the Developer report without commit/push.

### Definition of Done

All AC-001 through AC-012 have objective evidence; both nodes are represented; all sections and responsive transformations work; MINERS-001 foundations are reused; assets are stable and accessible; interactions pass; all required checks and screenshots pass; no blocking defect or preservation violation remains; and Developer, QA, Reviewer, and Status gates complete through `LIFECYCLE: PASSED`.

### Open decisions or blockers

Non-blocking decisions:

1. Destinations for Figma links marked `URL TBD`.
2. Whether theme toggle is functional now or an accessible documented placeholder.
3. Native-scroll versus controlled-track carousel implementation.
4. Exact asset optimization format/location.
5. Whether placeholder review/customer content remains explicitly labelled.

### Evidence

Files inspected: `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/STATUS.md`, `.wolf/anatomy.md`, `docs/workflow/README.md`, `docs/workflow/task-registry.md`, `docs/workflow/tasks/MINERS-002-home-page/00-task-brief.md`, completed MINERS-001 Planner/Developer/QA reports, `package.json`, and existing `src/` files.

Commands/results:

- Required repository/workflow reads — exit code 0.
- `git status --short --branch` — exit code 0; observed authoritative branch `task/miners-002-home-page`; pre-existing governance/task changes preserved.
- Corrected task brief branch read — exit code 0; `00-task-brief.md` records `task/miners-002-home-page` as authoritative and states the earlier `main` expectation was superseded.
- Application inventory — exit code 0.
- Desktop `get_design_context` for `10:2` — successful; request ID `3d0f0923-b53c-4206-8eef-57a780487fb4`; code, metadata, screenshot, and assets returned.
- Responsive `get_design_context` for `17:2` — successful; request ID `45119197-77c6-4888-af9e-de38358fa828`; code, metadata, screenshot, and assets returned.
- No application code or tests were modified by the Planner.

AGENT: Planner
STATUS: PASS
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/01-planner-report.md
EVIDENCE: Re-read the corrected task brief and confirmed it records `task/miners-002-home-page` as authoritative; `git branch --show-current` and `git status --short --branch` exited 0 on that branch; preserved the full implementation-ready plan and AC-001 through AC-012; existing successful Figma desktop node `10:2` request ID `3d0f0923-b53c-4206-8eef-57a780487fb4` and responsive node `17:2` request ID `45119197-77c6-4888-af9e-de38358fa828` remain authoritative; no application files modified.
HANDOFF: Coordinator — validate this corrected Planner report and prepare the Developer prompt; Developer may begin only after the Coordinator saves and verifies this PASS report.
