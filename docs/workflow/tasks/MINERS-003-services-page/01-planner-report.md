# MINERS-003 — Services Page from Figma
## Planner Report

### Task and repository context

MINERS-003 defines an implementation-ready plan for a dedicated Miners Group Services page using Figma node `33:6`, completed MINERS-001 brand foundations, and MINERS-002 homepage conventions.

Observed state:

- Authoritative/current branch: `task/miners-003-services-page`.
- MINERS-000, MINERS-001, and MINERS-002 are recorded as `PASSED`.
- Application: Next.js 16.2.12, React 19.2.8, TypeScript, Tailwind CSS 4.3.3, App Router, and `src/`.
- Existing homepage includes shared navigation, icons, glass, carousel, CTA, social, footer, and accessibility conventions.
- Pre-existing modified governance files include `.wolf/hooks/_session.json` and `docs/workflow/task-registry.md`.
- MINERS-003 task files are currently untracked.
- No application code or tests were modified by the Planner.

### Included scope

1. Add a Services route, expected at `/services` and `src/app/services/page.tsx`.
2. Reuse MINERS-001 tokens and MINERS-002 components/conventions.
3. Implement navigation, Services hero, capability map, capability overview, product design/consulting, engagement models, delivery process, related work, dual conversion, footer, and Ask Miners control.
4. Preserve evidenced copy, hierarchy, visual treatments, links, and states.
5. Add responsive behavior, route-level tests, E2E coverage, accessibility checks, screenshots, and runtime validation.
6. Preserve the homepage and all prior task/governance records.
7. Do not commit or push.

### Excluded scope

- Backend, CMS, API, authentication, database, real project data, new brand tokens, Figma editing, unrelated homepage redesign, unnecessary dependencies, test-infrastructure replacement, governance changes outside this report, commits, pushes, or destructive Git commands.
- Inventing destinations for links marked `URL TBD`.

### Assumptions

1. `/services` is the new route and `/` remains unchanged.
2. MINERS-001 CSS variables and MINERS-002 shared patterns remain canonical.
3. Desktop measurements become fluid responsive rules.
4. Repeated capability, engagement, process, and proof content is typed and data-driven.
5. CSS compositions are acceptable where no stable Figma asset is required.
6. Existing local icon/asset and reduced-motion conventions remain preferred.

### Dependencies

Existing dependencies are sufficient: Next.js `16.2.12`, React `19.2.8`, Tailwind `4.3.3`, TypeScript `5.9.3`, ESLint `9.39.5`, Vitest `4.1.10`, Playwright `1.62.1`, and axe-core Playwright integration. No new runtime dependency is required.

### Figma evidence

Source file key: `19xdM0pHN5I1Nbl4F88115`; target node `33:6`.

The mandatory `figma-design-to-code` skill was loaded before `get_design_context`.

- Request ID `fe7bc2af-5859-49dc-aebd-7616d6cdef15`: successful context with reference code, metadata, screenshot, and six asset constants.
- Request ID `d2109fa0-f1a3-46ce-a54f-b33cb4194860`: successful follow-up extraction confirming section names and copy.
- Asset categories: moon, Facebook, WhatsApp, Instagram, X, and Ask Miners icons. Temporary Figma URLs must not be left in production code unintentionally.

### Figma sections and content

Navigation includes Miners Group, Services, Projects, About, Careers, Contact, theme toggle, Coffee chat, and Start a project.

Services hero includes:

- `SERVICES`
- `Software built around the way your business works.`
- `From websites and mobile apps to custom platforms, Miners Group turns complex needs into clear, reliable digital products.`
- `Start a Project →` and `Free Coffee Chat`
- `ONE PARTNER · FIVE CAPABILITIES`
- Web platforms, Mobile products, Custom systems, Product design, Technical guidance

Capability overview includes:

- `WHAT WE BUILD`
- `Focused expertise across the product lifecycle.`
- Websites & web apps — `Fast, accessible experiences designed to convert and scale.` — `Strategy · UX · Frontend · Backend`
- Mobile applications — `Thoughtful iOS and Android products people enjoy using.` — `Product design · Native · Cross-platform`
- Custom software — `Operational platforms shaped around your unique workflows.` — `Automation · Portals · Internal tools`

Product design/consulting includes `BEYOND THE BUILD`, `Good software starts before the first line of code.`, UI/UX & product design, and Software consulting.

Engagement models include `WAYS TO WORK TOGETHER`, `The right shape for your stage.`, Launch a new product, Extend your team, and Improve existing software, each with its evidenced description and best-for label.

Delivery process includes `HOW DELIVERY WORKS`, `Clear decisions. Visible progress. No black box.`, and Discover, Define, Design, Develop, Launch with their evidenced sublabels.

Related work includes `SELECTED PROOF`, `Different problems. Thoughtful products.`, Campus community hub, and RoutinIQ workspace.

Contact/footer includes `Ready when you are.`, Start a project, Free 30-minute chat, `Build better. Launch smarter.`, `Friendly technology. Serious outcomes.`, `hello@miners.group`, Company, Services, Connect, legal copy, social links, and `Ask Miners`.

### Responsive behavior

Follow MINERS-002 conventions:

- Collapse navigation into the existing mobile menu.
- Stack hero copy and capability map.
- Scale typography without overflow.
- Convert capability/proof cards to responsive grid or accessible horizontal scrolling where appropriate.
- Stack product-design lanes, engagement lanes, process steps, and contact panels.
- Collapse footer columns.
- Keep Ask Miners available without covering essential content.
- No inaccessible horizontal scrolling.

Required viewports:

- `375 × 812`
- `768 × 1024`
- `1440 × 900`

### Mapping to existing application

Expected application files:

| Area | File | Purpose |
|---|---|---|
| Route | `src/app/services/page.tsx` | Services page composition |
| Styles | `src/app/globals.css` | Reuse tokens; add only page utilities |
| Shared components | `src/components/` | Navigation, cards, process, CTA, footer, icons, Ask Miners |
| Hooks | `src/hooks/` | Menu/carousel behavior only if needed |
| Types | `src/types/` | Typed Services page data |
| Unit test | `src/app/services/page.test.tsx` or equivalent | Route smoke coverage |
| E2E | `tests/e2e/services.spec.ts` or existing suite | Responsive/accessibility/runtime evidence |
| Evidence | `test-results/MINERS-003/` | Screenshots and results |

Do not duplicate MINERS-001 tokens or fork homepage behavior unnecessarily.

### Accessibility requirements

Use semantic `header`, `nav`, `main`, `section`, and `footer`; one page-level `h1`; logical headings; real links/buttons; accessible theme/menu/Ask Miners controls; visible focus; keyboard-safe interactions; meaningful or empty alt text; WCAG AA contrast; no color-only state; reduced-motion support; and no keyboard trap.

### Risks and mitigations

1. Large scope becoming monolithic — use typed reusable section components.
2. Desktop-only layout — test all required viewports and use fluid rules.
3. Placeholder links — preserve `URL TBD` explicitly.
4. Content drift — use typed data arrays.
5. Glass overuse — apply only to intended focal surfaces.
6. Accessibility regression — semantic controls and keyboard/E2E checks.
7. Homepage regression — rerun existing homepage tests.
8. Asset performance — stable assets, dimensions, and lazy loading where appropriate.

### Acceptance criteria

**AC-001 — Figma traceability:** Report identifies node `33:6`, request IDs, metadata, screenshot, assets, and limitations.

**AC-002 — Services route:** `/services` works and does not regress `/`.

**AC-003 — Section completeness:** Navigation, hero, capability map, overview, design/consulting, engagement, process, related work, contact, footer, and Ask Miners are implemented.

**AC-004 — Content fidelity:** Required headings, labels, CTAs, service names, engagement names, process steps, proof, contact, and footer content are accurate.

**AC-005 — Foundation reuse:** MINERS-001 tokens and MINERS-002 conventions/components are reused without a duplicate system.

**AC-006 — Responsive layout:** At `375×812`, `768×1024`, and `1440×900`, no overflow, clipping, overlap, unreadable text, or broken control exists.

**AC-007 — Interaction:** Navigation, theme toggle, menu, CTAs, social links, contact links, and Ask Miners have accessible behavior.

**AC-008 — Accessibility:** Axe has no critical/serious violations; landmarks, heading order, keyboard, focus, contrast, alt, reduced motion, and menu behavior pass.

**AC-009 — Visual fidelity:** Screenshots show the Figma Services composition, glass treatments, hierarchy, cards, process, proof, conversion panels, and footer.

**AC-010 — Regression:** Homepage and Services tests, lint, type-check, build, production startup/HTTP, console/page-error, overflow, and E2E pass.

**AC-011 — Asset stability:** Implemented assets are stable, documented, dimensioned, and correctly labelled; no unintended temporary Figma URL remains.

**AC-012 — Preservation:** MINERS-000/001/002, Git, OpenWolf, workflow, agent, docs, and unrelated changes remain preserved; no unauthorized governance change, commit, or push.

### Validation strategy

| Criterion | Validation |
|---|---|
| AC-001 | Record Figma request IDs, node metadata, screenshot, assets, and limitations. |
| AC-002 | Request `/services` and `/`; verify HTTP 200 and route separation. |
| AC-003 | Component inventory and section-label assertions. |
| AC-004 | Unit/E2E content assertions against Figma copy. |
| AC-005 | Source review for existing semantic variables/components and no duplicate tokens. |
| AC-006 | Playwright at 375×812, 768×1024, 1440×900 with overflow assertions/screenshots. |
| AC-007 | Keyboard/menu/theme/CTA/social/Ask Miners interaction checks. |
| AC-008 | Axe, landmarks/headings, focus, contrast, alt, menu, and reduced-motion checks. |
| AC-009 | Full-page screenshots under `test-results/MINERS-003/` inspected against Figma. |
| AC-010 | `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, production HTTP, E2E, console/page-error, and homepage regression. |
| AC-011 | Asset inventory, provenance, dimensions, alt handling, and remote URL search. |
| AC-012 | Before/after Git status, diffs, untracked inventory, `git diff --check`, and protected-file comparison. |

Required screenshots:

- `test-results/MINERS-003/services-mobile-375x812.png`
- `test-results/MINERS-003/services-tablet-768x1024.png`
- `test-results/MINERS-003/services-desktop-1440x900.png`

### Implementation sequence

1. Capture branch, worktree, untracked paths, and homepage baseline.
2. Identify reusable homepage extraction boundaries.
3. Create typed Services data.
4. Implement `/services` with shared navigation, icons, glass, CTA, footer, and accessibility conventions.
5. Add responsive behavior.
6. Add unit and E2E tests.
7. Add/download only stable required assets with provenance.
8. Run lint, type-check, tests, build, startup/HTTP, E2E, accessibility, console/page-error, responsive, visual, and audit validation.
9. Confirm homepage regression and final diff preservation.
10. Return the Developer report without commit/push.

### Definition of Done

All AC-001 through AC-012 have objective evidence; `/services` works without regressing `/`; all Figma sections/copy and responsive behavior are implemented; MINERS-001/002 conventions are reused; interactions and assets are accessible/stable; all required checks and screenshots pass; no blocking defect or preservation violation remains; and Developer, QA, Reviewer, and Status complete through `LIFECYCLE: PASSED`.

### Open decisions or blockers

No blocker prevents implementation.

Non-blocking decisions:

1. Destinations for links marked `URL TBD`.
2. Native grid versus accessible carousel below desktop breakpoint.
3. Shared theme-toggle state behavior.
4. CSS compositions versus downloaded Figma assets.
5. Homepage navigation linking strategy for `/services`.

### Evidence

Files inspected: `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/STATUS.md`, `docs/workflow/README.md`, `docs/workflow/task-registry.md`, `docs/workflow/tasks/MINERS-003-services-page/00-task-brief.md`, `package.json`, `src/app/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`, existing `src/components/`, `src/hooks/`, `src/lib/`, and `src/types/`.

Commands/results:

- Required file reads — exit code 0.
- `git status --short --branch` — exit code 0; current branch `task/miners-003-services-page`; pre-existing governance/task changes preserved.
- Application inventory — exit code 0.
- `get_design_context` for file key `19xdM0pHN5I1Nbl4F88115`, node `33:6`, after loading `figma-design-to-code` — successful; request ID `fe7bc2af-5859-49dc-aebd-7616d6cdef15`; reference code, metadata, screenshot, and six asset constants returned.
- Follow-up context extraction — successful; request ID `d2109fa0-f1a3-46ce-a54f-b33cb4194860`; section names and copy confirmed.
- No application files or tests were modified by the Planner.

AGENT: Planner
STATUS: PASS
TASK: MINERS-003 — Services Page from Figma
REPORT: docs/workflow/tasks/MINERS-003-services-page/01-planner-report.md
EVIDENCE: Inspected required OpenWolf/workflow files, task brief, registry, completed task context, package/configuration files, and existing application files; confirmed branch `task/miners-003-services-page` with Git status exit code 0; successfully inspected Figma file `19xdM0pHN5I1Nbl4F88115`, node `33:6` using the mandatory `figma-design-to-code` workflow, receiving request IDs `fe7bc2af-5859-49dc-aebd-7616d6cdef15` and `d2109fa0-f1a3-46ce-a54f-b33cb4194860`, reference code, metadata, screenshot, and six asset constants; no application files modified.
HANDOFF: Coordinator — validate this report and prepare the Developer prompt if PASS; otherwise resolve the stated failure or blocker.
