# MINERS-005 — About Page from Figma
## Planner Report

### Task and repository context

MINERS-005 adds the Miners Group About page represented by Figma file `19xdM0pHN5I1Nbl4F88115`, node `63:116`. The authoritative branch is `task/miners-005-about-page`, confirmed by `git branch --show-current` with exit code 0. The repository is a Next.js 16.2.12, React 19.2.8, TypeScript project using the App Router and `src` directory. MINERS-000 through MINERS-004 are recorded as passed prerequisites. The existing homepage, Services page, Projects page, shared layout, theme, and brand foundations are the implementation baseline.

The mandatory Figma design-to-code skill was read before inspection. `get_design_context` succeeded for node `63:116` with request ID `04346370-b9a7-4a76-88ef-9b76f9d25b01`. The returned reference identifies About navigation, hero/story/principles, culture map (Listen/Make/Grow), mission, operating principles, collaboration model, talent pathway, dual conversion contact paths, footer, and floating Ask Miners control. It also returned temporary moon, social, and AI-chat asset URLs. The generated React/Tailwind output is design reference only and must be adapted to the project’s existing components and tokens.

### Included scope

- Add the `/about` App Router route and About-specific composition/styles.
- Implement the evidenced section order and copy intent: About hero/story, three principles (Human by design, Built for outcomes, Open to new talent), culture map (01 Listen, 02 Make, 03 Grow), mission, operating principles, collaboration model, talent/careers pathway, dual conversion contact paths, shared footer, and Ask Miners affordance.
- Reuse `SiteHeader`, `SiteFooter`, `ThemeContext`, existing global tokens, typography, focus styles, and icon conventions. Keep `layout.tsx` as the sole footer owner.
- Implement truthful company/story, values, collaboration, and talent content exactly from the Figma evidence or clearly mark any sample/placeholder text.
- Implement CTA and navigation links, mobile navigation, theme behavior, and any supported Ask Miners interaction without inventing a backend.
- Match the evidenced typography, color, spacing, card, border, radius, shadow, and responsive visual language.
- Add focused unit/E2E coverage and screenshot evidence while preserving all prior route checks.

### Excluded scope

- No unrelated redesign of `/`, `/services`, or `/projects`; no changes to global foundations beyond narrowly justified reusable tokens.
- No CMS, API, authentication, analytics, chat backend, application form processing, real hiring system, or invented employee/client claims.
- No new dependency unless a necessary exception is documented and approved.
- No temporary Figma MCP URLs in shipped code. No unlicensed or unverified asset additions.
- No modification of task registry, prior reports, prompts, defects, OpenWolf, agent, workflow, or documentation files.
- No commit, push, destructive Git command, or dependency installation by Planner.

### Assumptions

- `/about` is the canonical route and existing header navigation should route to it without duplicate navigation systems.
- The desktop Figma node is authoritative for section content and geometry. Tablet/mobile behavior will be implemented responsively using existing project conventions; no uninspected mobile Figma node is assumed.
- The company, mission, values, collaboration, and talent copy returned by Figma is approved design copy. Any unavailable destination (careers, social, chat) must use an existing non-misleading placeholder and be documented.
- Existing CSS variables and Tailwind v4 utilities are sufficient; additions should be reusable tokens rather than page-specific duplicated constants.
- Decorative visuals may use CSS compositions or stable existing assets; informative imagery requires meaningful alt text, decorative imagery requires empty alt text, and every image needs explicit dimensions.

### Dependencies

- Existing Next.js, React, TypeScript, Tailwind/PostCSS, ESLint, Vitest, Playwright, and Axe setup in `package.json`.
- Existing shared files: `src/app/layout.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/components/theme-context.tsx`, and established page/icon patterns.
- Existing E2E harness and route suites, including homepage, Services, and Projects coverage.
- Figma node `63:116`; returned asset URLs expire after approximately seven days and are not production dependencies.

### Existing-state and preservation requirements

- `git branch --show-current` → exit 0, `task/miners-005-about-page`.
- `git status --short` shows pre-existing changes in OpenWolf session files, workflow registry, MINERS-004 Developer report, Services code/tests, and the untracked MINERS-005 directory. These changes are unrelated to Planner work and must be preserved verbatim.
- Preserve all MINERS-000 through MINERS-004 briefs, prompts, reports, defects, screenshots, public assets, application behavior, Git/OpenWolf/agent/workflow/documentation files.
- Developer may modify application code/tests and its own report only; Coordinator owns governance routing.
- The About page must not render a second footer/contentinfo landmark because the shared layout owns the footer.

### Affected systems and expected files

Expected Developer-owned changes (subject to inspection):

- `src/app/about/page.tsx` — About route and page composition.
- Optional `src/components/about/*` — reusable story, principles, collaboration, and talent components if warranted.
- `src/app/globals.css` or narrowly scoped About styles — responsive/token rules not already present.
- `src/app/about/page.test.tsx` — focused content/state assertions, if the project convention supports it.
- `tests/e2e/about.spec.ts` — route, accessibility, responsive, runtime, navigation, and screenshot coverage.
- `public/*` only for approved stable assets that cannot be represented through existing assets/CSS; record provenance, dimensions, consumers, and alt handling.

No governance, registry, prior report, or OpenWolf file should change.

### Risks and mitigations

- **Figma asset expiry:** use stable local assets or CSS compositions, never temporary MCP URLs.
- **Unverified company/talent claims:** use only evidenced copy; clearly label placeholders and avoid invented people, clients, metrics, or hiring promises.
- **Footer duplication:** keep footer solely in `layout.tsx`; test one contentinfo landmark.
- **Responsive overflow:** hero copy, principle cards, collaboration split, CTAs, and footer columns may overflow at 375px; stack/wrap intentionally and test all required viewports.
- **Accessibility:** use semantic headings and landmarks, labelled buttons/links, visible focus, keyboard navigation, contrast-safe tokens, 44px interaction targets where practical, correct alt behavior, and reduced-motion handling.
- **Unsupported careers/chat/social destinations:** use existing safe placeholders or mailto behavior; do not fabricate integrations.
- **Theme regressions:** map new surfaces and text to existing theme tokens and test available theme modes.
- **Regression:** run existing `/`, `/services`, and `/projects` suites plus About-specific checks.
- **Audit limitations:** prior QA recorded advisory endpoint limitations; report exact audit command/result and do not claim an audit pass without evidence.

### Acceptance criteria

1. **AC-001 — Figma traceability and order:** `/about` follows node `63:116` section order and copy intent, and the Developer report records the node and request ID.
2. **AC-002 — Route and regression:** `/about`, `/`, `/services`, and `/projects` return HTTP 200 and retain their primary content, shared header/theme behavior, and single footer.
3. **AC-003 — About story and principles:** Hero/story content and the three evidenced principles (Human by design, Built for outcomes, Open to new talent) render with truthful, readable copy.
4. **AC-004 — Culture and mission:** Listen/Make/Grow culture map and mission statement render in order with the evidenced labels, descriptions, and accessible structure.
5. **AC-005 — Operating principles/collaboration/talent:** Operating principle cards, collaboration model, and talent pathway render with the evidenced copy, clear hierarchy, and non-misleading careers/internship CTA behavior.
6. **AC-006 — Asset safety:** Every visual uses stable local/CSS provenance, explicit dimensions, correct alt behavior, and a tested fallback; no temporary Figma URL ships.
7. **AC-007 — Shared integration:** Header, mobile navigation, theme toggle, footer, social links, icons, typography, and tokens reuse existing conventions without duplicate landmarks or controls.
8. **AC-008 — Responsive fidelity:** At 375×812, 768×1024, and 1440×900 the page remains readable, visually coherent with the Figma intent, intentionally stacked/wrapped, and free of horizontal overflow.
9. **AC-009 — Semantics and keyboard access:** There is one logical `h1`, ordered headings, semantic landmarks, labelled controls, keyboard-reachable links/buttons, visible focus, and no keyboard trap.
10. **AC-010 — Accessibility and motion:** Contrast is acceptable, alt text is correct, Axe has no critical/serious violations, and any animation honors `prefers-reduced-motion`.
11. **AC-011 — Runtime and visual quality:** No console/page errors, failed requests, broken images, clipping, overlap, or footer duplication occur; screenshots show acceptable visual fidelity at all required viewports.
12. **AC-012 — Automated validation and preservation:** Lint, type-check, unit, build, E2E, production HTTP, `git diff --check`, dependency/security review, and preservation checks are recorded with exact results and limitations.

### Validation strategy

Developer should record exact commands, exit codes, counts, warnings, skipped checks, and artifacts:

- Run `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, and `npm.cmd run test:e2e`.
- Add About E2E assertions for status, section order, headings, landmarks, CTA/link destinations, mobile navigation, theme, keyboard/focus, no overflow, console/page errors, failed requests, and broken images.
- Run at 375×812, 768×1024, and 1440×900. Save screenshots under `test-results/MINERS-005/` with route, viewport, and state names.
- Run Axe and manual keyboard checks for default/theme and relevant interactive states; verify reduced motion, contrast, labels, alt handling, and touch targets.
- Smoke/regression check `/`, `/services`, and `/projects`, including existing E2E coverage and one footer landmark per route.
- After build, run the observed `npm.cmd run start` script and verify HTTP 200 for `/about`, `/`, `/services`, and `/projects`; cleanly stop the server and record process/port cleanup.
- Attempt `npm audit` only if available; disclose registry/advisory network limitations precisely.
- Compare screenshots with Figma node `63:116` for section order, proportions, typography, colors, spacing, cards, footer, and responsive composition. Generated Figma code is not implementation proof.

### Implementation sequence

1. Developer rereads this report, inspects current shared components/tokens, and records the dirty-tree baseline.
2. Define About content and CTA/link behavior, including stable visual strategy and placeholder destinations.
3. Build About sections in Figma order using shared header/footer/theme/icon primitives.
4. Add responsive layouts, semantic headings/landmarks, accessible controls, focus states, and reduced-motion rules.
5. Add focused unit/E2E tests, regression assertions, and required screenshots.
6. Run static, unit, build, browser, accessibility, visual, production, security, and preservation checks.
7. Persist and read back `02-developer-report.md`; hand off to Coordinator for validation before QA.

### Definition of Done

`/about` is implemented in the existing Next.js architecture, follows the evidenced Figma structure and visual intent at all required viewports, presents truthful story/value/talent content, uses stable assets, integrates shared navigation/footer/theme behavior, passes all 12 acceptance criteria and required validation, records screenshots and limitations, preserves unrelated worktree/governance files, and has a persisted Developer report with `STATUS: PASS`. No commit or push is made.

### Open decisions or blockers

No material blocker is present: the Figma context was accessible, the required branch is current, and MINERS-000 through MINERS-004 are passed prerequisites. Developer must document bounded decisions for stable visual replacements and supported destinations for careers, social, contact, and Ask Miners controls. If real hiring data, team biographies, a chat backend, or a mobile-specific Figma node is required, that scope must be resolved before implementation; otherwise use the evidenced copy and non-misleading placeholders.

### Evidence

- Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/STATUS.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, `docs/workflow/README.md`, `docs/workflow/task-registry.md`, the MINERS-005 brief/prompt, completed MINERS-000 through MINERS-004 reports, `package.json`, and relevant repository structure.
- `git branch --show-current` → exit 0, `task/miners-005-about-page`.
- `git status --short` → exit 0; pre-existing OpenWolf, workflow, MINERS-004, Services, and untracked task-directory changes observed and preserved.
- Figma `get_design_context` node `63:116` → success, request `04346370-b9a7-4a76-88ef-9b76f9d25b01`. Returned sections include `About / Hero`, `About / Mission`, `About / Operating Principles`, `About / Collaboration Model`, `About / Talent Pathway`, `About / Contact / Dual Conversion`, `About / Footer`, and `AI Chat / Floating Toggle`; returned social, moon, and chat assets are temporary URLs.
- Planner report is written only at the canonical Planner path and will be read back and contract-checked before handoff.

AGENT: Planner
STATUS: PASS
TASK: MINERS-005 — About Page from Figma
REPORT: docs/workflow/tasks/MINERS-005-about-page/01-planner-report.md
EVIDENCE: Figma node 63:116 context succeeded (request 04346370-b9a7-4a76-88ef-9b76f9d25b01); required governance, prerequisite reports, package, branch, and repository state inspected; branch task/miners-005-about-page confirmed; 12 numbered acceptance criteria defined; report read-back and structure verification required below.
HANDOFF: Coordinator — validate this Planner report; if PASS, prepare the Developer prompt; otherwise identify the exact blocker or correction.
