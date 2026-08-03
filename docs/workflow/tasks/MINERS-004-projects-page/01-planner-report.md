# MINERS-004 — Projects Page from Figma
## Planner Report

### Task and repository context

MINERS-004 adds the Miners Group Projects / case-studies page represented by Figma file `19xdM0pHN5I1Nbl4F88115`, node `51:10` (desktop page composition). The authoritative branch is `task/miners-004-projects-page`, which is confirmed as the current branch. The repository is a Next.js 16.2.12, React 19.2.8, TypeScript project using the App Router and `src` directory. MINERS-000 through MINERS-003 are recorded as passed prerequisites; the existing homepage, Services page, shared layout, theme, and brand tokens are the implementation baseline.

The Figma design-to-code skill was loaded before inspection. `get_design_context` succeeded for node `51:10`: request IDs `ea3ec381-6f44-4db5-a940-96593da560f4` and the forced-code trace `a72fc153-9fac-4c73-a5ca-a2227c9cdfcf`. The returned context includes the desktop navigation, Projects hero, outcome map, filters, featured-work grid, proof framework, delivery approach, dual conversion contact paths, footer, and floating “Ask Miners” control. The generated code is design reference only; it must be adapted to the existing conventions and must not be pasted as-is.

### Included scope

- Add the `/projects` App Router page and its page-specific components/styles while preserving existing routes.
- Implement the Figma section order and copy hierarchy: navigation, hero, outcome map (Discover/Build/Improve), work filters, featured work/project cards, proof framework (business impact/user experience/technical quality), delivery approach, dual conversion paths, footer content, and Ask Miners floating affordance.
- Use the existing `SiteHeader`, `SiteFooter`, `ThemeContext`, global tokens, typography, focus styles, and shared icon conventions. Keep the layout as the sole footer owner.
- Implement deterministic sample-case-study data and cards (Challenge/Product/Outcome metadata, Strategy/Design/Engineering tags, stable visual treatment) with a documented path for replacing samples with verified project evidence.
- Make controls usable by keyboard and pointer, including filter state, theme toggle, navigation/mobile behavior, CTA links, social links, and any Ask Miners action that is actually supported by the application.
- Match the supplied visual language: sky/mint accents, canvas and glass surfaces, graphite text, rounded cards, borders/shadows, spacing, Manrope/Inter hierarchy, and reduced-motion behavior where motion is introduced.
- Add or update focused unit/E2E coverage and screenshot evidence for the new route and regressions.

### Excluded scope

- No unrelated redesign of `/`, `/services`, global branding, OpenWolf files, workflow records, agent configuration, or documentation.
- No real client case-study claims, metrics, CMS, API, authentication, chat backend, analytics, form submission, or external social destinations beyond explicitly configured placeholders.
- No new dependency or asset package unless the Developer documents a necessary, approved exception. No installation, commit, push, or destructive Git operation.
- No copying of temporary Figma MCP asset URLs into production. Any image asset used must be downloaded/checked into an approved public asset location or replaced with an existing stable asset/CSS composition, with provenance recorded.

### Assumptions

- `/projects` is the canonical route; header navigation and CTAs use route-aware links and do not create duplicate footer/contentinfo landmarks.
- The Figma desktop node is the source of truth for content and desktop geometry. Mobile/tablet behavior is an implementation decision constrained by the existing brand system and must preserve order, readability, and interaction; no uninspected Figma mobile node is assumed.
- “Sample case studies” remain clearly labeled as samples until verified source material exists. Filters may be client-side presentation state with an accessible “All work” default; they must not imply unavailable data.
- Existing Tailwind v4/PostCSS setup and CSS variables are sufficient. Developer will inspect current tokens and extend them only when a missing, reusable token is evidenced by the design.
- Shared social assets in `public/` and existing icon mechanisms may be reused where they match; decorative images require empty alt text, while informative project visuals require meaningful alt text.

### Dependencies

- Existing `next`, React, TypeScript, Tailwind/PostCSS, ESLint, Vitest, and Playwright/Axe scripts in `package.json`.
- Existing shared files: `src/app/layout.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/components/theme-context.tsx`, and established page/icon patterns.
- Existing test harnesses `tests/e2e/foundation.spec.ts`, `tests/e2e/services.spec.ts`, and `tests/e2e/run-tests.mjs`; Developer should add Projects coverage without weakening prior assertions.
- Figma context above is the design dependency. The Figma-generated asset URLs expire after seven days, so production implementation must not depend on them.

### Existing-state and preservation requirements

- `task/miners-004-projects-page` is confirmed by `git branch --show-current` (exit 0). `git status --short` shows pre-existing modifications to `.wolf/*`, agent/config files, `AGENTS.md`, workflow registry, `src/app/globals.css`, `src/app/services/page.tsx`, and untracked `.cursor/`, `GEMINI.md`, `.wolf/hooks/symbol-extractor.js`, and the MINERS-004 task directory. These changes are outside Planner scope and must be preserved verbatim.
- Preserve every MINERS-000–003 report, prompt, brief, defect record, Git/OpenWolf/agent/workflow/documentation file, existing public asset, homepage, Services page, and shared layout behavior.
- The Developer owns only application code/tests and `02-developer-report.md`; Coordinator owns governance routing. No scaffolding command may overwrite the repository or regenerate existing governance artifacts.

### Affected systems and expected files

Expected implementation changes (Developer-owned, subject to inspection) are:

- `src/app/projects/page.tsx` — route entry and page composition.
- One or more `src/components/projects/*` components or colocated components for project cards, outcome/proof/approach sections, filters, and contact paths, only where reuse and testability justify them.
- `src/app/globals.css` or a Projects-specific stylesheet for missing responsive/token rules; prefer existing variables and utility conventions.
- `tests/e2e/projects.spec.ts` and, if needed, focused unit tests for filter/state behavior.
- `public/*` only for stable, licensed/project-approved visuals that cannot be represented by existing assets/CSS; record dimensions, alt handling, and consumers in the Developer report.

No expected changes to governance records, prior task reports, registry, or OpenWolf files are authorized by this plan.

### Risks and mitigations

- **Temporary Figma assets / provenance:** URLs expire. Download only approved assets or use stable existing files/CSS; verify dimensions, loading, broken-image behavior, and licensing.
- **Sample content misrepresentation:** Keep “SAMPLE CASE STUDY” and explanatory evidence note visible; do not invent client names or metrics.
- **Footer duplication:** `layout.tsx` is the sole footer owner. Page content must not render a second footer or contentinfo landmark.
- **Responsive overflow:** Long hero text, tag rows, navigation actions, and cards can overflow at 375px. Use wrapping/stacking and test 375×812, 768×1024, and 1440×900 with horizontal-overflow assertions.
- **Accessibility regressions:** Use semantic headings/sections, labelled filter controls, real links/buttons, visible focus, 44px touch targets where practical, meaningful alt text, contrast checks, and `prefers-reduced-motion` handling. Run Axe and keyboard checks.
- **Unsupported Ask Miners interaction:** If no chat capability exists, make the affordance a non-misleading link or inert, clearly labelled control; do not fabricate a backend.
- **Theme mismatch:** Wire all new surfaces/text to existing theme tokens and test light/dark or available theme modes without hard-coded unreadable colors.
- **Regression and process drift:** Run existing lint/type/unit/build/E2E suites, inspect `/` and `/services`, and use `git diff --check`; preserve unrelated dirty-tree changes.
- **Audit availability:** `npm audit` may be unavailable because of registry/advisory network restrictions, as recorded by prior QA. Report the exact command/result and limitation; do not claim a pass without evidence.

### Acceptance criteria

1. **AC-001 — Figma traceability and order:** `/projects` visibly follows node `51:10` section order and copy intent (navigation, hero, outcome map, filters, featured work, proof, approach, contact paths, footer, Ask Miners), with Figma node/request IDs recorded in the Developer report.
2. **AC-002 — Route and regression:** `/projects` returns HTTP 200 and renders through the App Router; `/` and `/services` remain HTTP 200 and retain their existing primary content, shared header, theme control, and single footer.
3. **AC-003 — Project content/cards:** Featured work contains deterministic sample cards with category, title, challenge/product/outcome framing, Strategy/Design/Engineering tags, and explicit sample/evidence messaging; no unverified client claims are presented.
4. **AC-004 — Asset safety:** Every visual has stable local/CSS provenance, explicit dimensions where applicable, appropriate alt text, and a tested fallback; no expiring Figma MCP URL remains in shipped source.
5. **AC-005 — Shared integration:** Header, mobile navigation, theme toggle, footer, social links, typography, tokens, and icon conventions are reused or intentionally extended without duplicate implementations or duplicate landmarks.
6. **AC-006 — Filters and interactions:** Filter controls expose their selected state to assistive technology, work by keyboard and pointer, preserve a usable “All work” state, and do not create broken links or misleading unavailable actions.
7. **AC-007 — Responsive fidelity:** At 375×812, 768×1024, and 1440×900 the page remains readable and visually aligned to the design intent, with intentional stacking/wrapping and no horizontal overflow.
8. **AC-008 — Semantics and keyboard access:** There is one logical `h1`, ordered headings, semantic landmarks, labelled controls, keyboard-reachable links/buttons, visible focus indicators, and no keyboard trap; interactive targets meet the project’s established touch-size convention.
9. **AC-009 — Accessibility and motion:** Text/background contrast is acceptable, images have correct alt behavior, Axe reports no critical/serious violations, and any animation honors `prefers-reduced-motion`.
10. **AC-010 — Runtime quality:** Browser console/page errors, failed image requests, and unexpected navigation errors are absent on `/projects`; screenshot review finds no clipping, overlap, broken assets, or footer duplication.
11. **AC-011 — Automated validation:** Developer records successful `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, and `npm.cmd run test:e2e` results, plus production-start HTTP checks for `/projects`, `/`, and `/services`; failures and justified skips are disclosed.
12. **AC-012 — Preservation and security:** `git diff --check` passes; no secrets, unsafe HTML injection, unapproved dependencies, or destructive commands are introduced; all prior governance/OpenWolf/workflow/agent/documentation files and unrelated worktree changes remain intact.

### Validation strategy

Developer should provide exact commands, exit codes, elapsed time where useful, and artifacts:

- **Static/project checks:** inspect `git diff --stat`, `git diff --check`; run `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, and `npm.cmd run build`.
- **Browser/E2E:** extend the existing Playwright harness with `/projects` assertions for status, headings, landmarks, filters, theme/mobile navigation, links, no horizontal overflow, console/page errors, and failed requests. Run at 375×812, 768×1024, and 1440×900. Save screenshots under `test-results/MINERS-004/` with names identifying route/viewport/state.
- **Accessibility:** run Axe against default and relevant theme/interactive states; manually tab through header, filters, CTAs, social links, and Ask Miners; verify heading order, labels, focus, contrast, reduced motion, and alt handling.
- **Regression:** run the same route/status/console/overflow smoke checks for `/` and `/services`, including existing E2E suites.
- **Production:** start with the observed `npm.cmd run start` script after build, verify HTTP 200 for `/projects`, `/`, and `/services`, then stop the server cleanly and record port/process cleanup. `npm.cmd audit` or equivalent may be attempted only if available; record network/advisory limitations exactly.
- **Visual review:** compare screenshots to Figma node `51:10` section order, proportions, colors, typography, radii, borders, shadows, and responsive composition. Do not treat generated Figma code as proof of implementation.

### Implementation sequence

1. Developer re-reads this report, inspects current shared components/tokens and dirty-tree boundaries, and records the baseline.
2. Define Projects content/state model and route boundary; decide which visuals are CSS/existing local assets versus approved new local assets.
3. Build page sections in Figma order, reusing header/footer/theme/icon primitives and keeping layout footer ownership singular.
4. Implement responsive CSS/layout and accessible filter/control states; add reduced-motion behavior only where needed.
5. Add focused unit/E2E assertions and screenshot capture for required viewports and theme/interaction states.
6. Run static, unit, production, browser, accessibility, visual, and preservation checks; fix only in-scope defects.
7. Write `02-developer-report.md`, read it back, verify its contract, and hand off to Coordinator for validation before QA.

### Definition of Done

The `/projects` page is implemented in the existing Next.js/Tailwind architecture, matches the evidenced Figma structure and visual intent at all required viewports, uses stable assets and truthful sample content, integrates shared navigation/footer/theme behavior, passes the numbered acceptance criteria and required automated/manual checks, records all limitations and screenshot evidence, preserves unrelated worktree/governance files, and has a persisted Developer report with `STATUS: PASS`. No commit or push is made.

### Open decisions or blockers

No material blocker is present: Figma context access succeeded, the required branch is current, and prerequisite tasks are passed. Developer must make and document two bounded implementation decisions: (1) which stable local/CSS visual treatment replaces each temporary Figma asset, and (2) the supported destination/behavior for “Ask Miners” and placeholder social/CTA links. If product owners require real case-study data, social URLs, a chat backend, or a mobile-specific Figma node, that scope decision must be resolved before implementation; absent that decision, use clearly labelled samples and non-misleading placeholders.

### Evidence

- Read: `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/STATUS.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, `docs/workflow/README.md`, `docs/workflow/task-registry.md`, this task brief/prompt, completed MINERS-000–003 reports, `package.json`, and relevant `src/`/`tests/` structure.
- `git branch --show-current` → exit 0, `task/miners-004-projects-page`.
- `git status --short` → exit 0; pre-existing modified OpenWolf/agent/workflow/application files and untracked files were observed and are explicitly preserved above.
- Figma `get_design_context` node `51:10` → success, request `ea3ec381-6f44-4db5-a940-96593da560f4`; forced-code trace → success, request `a72fc153-9fac-4c73-a5ca-a2227c9cdfcf`. Returned named sections include `Projects / Hero`, `Projects / Filters`, `Projects / Featured Work`, `Projects / Proof Framework`, `Projects / Delivery Approach`, `Projects / Contact / Dual Conversion`, `Projects / Footer`, and `AI Chat / Floating Toggle`; returned assets include mint/outcome signals, moon, social icons, and AI chat icon as temporary URLs.
- Planner report is written only at the canonical Planner path; read-back and contract checks succeeded (file exists, 17,327 UTF-8 bytes, 12 ACs, all required sections present, replacement-character count 0).

AGENT: Planner
STATUS: PASS
TASK: MINERS-004 — Projects Page from Figma
REPORT: docs/workflow/tasks/MINERS-004-projects-page/01-planner-report.md
EVIDENCE: Figma node 51:10 context succeeded (requests ea3ec381-6f44-4db5-a940-96593da560f4 and a72fc153-9fac-4c73-a5ca-a2227c9cdfcf); required governance, prerequisite reports, package and repository state inspected; `git branch --show-current` exit 0 observed `task/miners-004-projects-page`; 12 numbered acceptance criteria; report read-back exit 0 with all required sections present, exactly one final handoff block, and no replacement characters.
HANDOFF: Coordinator — validate this Planner report; if PASS, prepare the Developer prompt; otherwise identify the exact blocker or correction.
