# MINERS-006 — Careers, Contact, and Global UI States from Figma
## Planner Report

### Task and repository context

MINERS-006 covers Careers and Contact pages plus a global design-system/state layer applied across `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact`. The authoritative branch is `task/miners-006-careers-contact`, confirmed by `git branch --show-current` with exit code 0. The repository is a Next.js 16.2.12, React 19.2.8, TypeScript project using the App Router and `src` directory. MINERS-000 through MINERS-005 are complete prerequisites.

The mandatory Figma design-to-code skill was used before inspection. Careers node `70:120` succeeded with request `47fd853e-06cb-4938-a37d-71bcdbf52ac3`; Contact node `72:124` succeeded with request `ac24efe2-b1c1-4507-a167-7b17da8d44fc`. The original global node `0:1` was inaccessible, but the supplied selectable global-context candidates are sufficient: notification node `79:168` succeeded with request `2dc83c0a-dc27-4897-8b85-47d5f3dd9d20`, confirmation dialog node `80:152` succeeded with request `68c6e5fc-0928-4873-8eeb-2c02e45f69ab`, and form-field feedback node `81:156` succeeded with request `9cf8b5c8-75aa-4235-a3b2-d00dbf2bb7f0`.

Concrete global evidence: node `79:168` defines reusable Success, Error, Warning, and Info feedback notifications with title/message and a 44px close target; node `80:152` defines confirm/destructive dialog variants with Keep editing and Confirm actions; node `81:156` defines Default, Error, Success, and Loading input surfaces with indicators and helper text. These candidates resolve the prior global-context blocker. Returned React/Tailwind and asset URLs are reference material only and must be adapted to existing project conventions.

### Included scope

- Map the evidenced global tokens, typography, surfaces, focus, motion, buttons, inputs, cards, notifications, feedback notifications, confirmation dialogs, and form-field state primitives into the existing system.
- Apply the global layer consistently across `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact` without regressing route-specific content.
- Add `/careers` and `/contact` in their evidenced Figma order.
- Implement Careers hero/story, principles, How you can join, Why Join, What To Expect, Hiring Journey, Roles & Internships, dual conversion, footer, and Ask Miners.
- Implement Contact hero, response promise, project inquiry form, alternative paths, working agreement, footer, and Ask Miners.
- Implement inquiry input states: default, focus, filled, invalid, valid, disabled, and loading.
- Implement submit states: loading, success, error, retry/recovery, and safe non-fabricated delivery behavior.
- Provide accessible validation messages, live-region announcements, focus management, keyboard behavior, and safe error handling.
- Reuse shared header, footer, theme, typography, tokens, icons, and test conventions; `layout.tsx` remains the sole footer owner.

### Excluded scope

- No fabricated backend, email API, CRM, application-processing service, notification persistence, analytics, authentication, CMS, or server-side form storage.
- No real job feed, employee biographies, client claims, metrics, or guaranteed delivery/response claims beyond approved design copy.
- No temporary Figma MCP asset URLs, unlicensed assets, unapproved dependencies, commits, pushes, or destructive Git commands.
- No unrelated redesign outside the approved global layer and six in-scope routes.
- No Planner edits to application code/tests, task registry, prior reports/prompts/defects, OpenWolf, agent, workflow, or documentation files.

### Assumptions and decisions

- `/careers` and `/contact` are canonical routes. Existing routes consume global primitives through shared components or global tokens, not duplicated page-local versions.
- Careers and Contact desktop nodes are authoritative for their page content and geometry; responsive behavior follows established project conventions until mobile Figma evidence exists.
- Nodes `79:168`, `80:152`, and `81:156` are the accepted global-context evidence for notifications, dialogs, and form-field feedback because `0:1` has no selectable layer.
- Contact submission must never imply server delivery. Until an approved endpoint exists, valid submission may open existing `mailto:hello@miners.group` or remain explicitly presentation-only. Loading/success/error/retry UI describes only the verifiable local action.
- Careers opportunities remain clearly labelled samples/placeholders until a real source exists.
- Existing theme tokens and Tailwind utilities are preferred; global additions must be reusable, theme-aware, and documented.
- Decorative visuals use stable local/CSS assets; informative images have meaningful alt text, decorative images empty alt text, and all images explicit dimensions.

### Dependencies

- Existing Next.js, React, TypeScript, Tailwind/PostCSS, ESLint, Vitest, Playwright, and Axe setup.
- Existing shared layout/components: `src/app/layout.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/components/theme-context.tsx`, and established icon/link patterns.
- Existing E2E suites for `/`, `/services`, `/projects`, and `/about`.
- Figma nodes `70:120`, `72:124`, `79:168`, `80:152`, and `81:156`; returned asset URLs expire and are not production dependencies.

### Existing-state and preservation requirements

- `git branch --show-current` → exit 0, `task/miners-006-careers-contact`.
- `git status --short` → exit 0; pre-existing `.wolf` session/token files, workflow registry, MINERS-004 Developer report, `next-env.d.ts`, and application/task changes are observed and must be preserved.
- Preserve MINERS-000 through MINERS-005 reports, prompts, briefs, defects, screenshots, public assets, routes, Git/OpenWolf/agent/workflow/documentation records.
- Developer owns application code/tests and its own report only. No page may add a duplicate footer/contentinfo landmark.

### Affected systems and expected files

Expected Developer-owned changes:

- `src/app/globals.css` and/or existing token location — global tokens, typography, surfaces, focus, motion, and state styles.
- `src/components/ui/*` or existing shared locations — reusable buttons, inputs, cards, notifications, feedback, dialogs, and form-field state primitives.
- `src/components/site-header.tsx`, `src/components/site-footer.tsx`, and `src/components/theme-context.tsx` only where global evidence requires compatible shared behavior.
- `src/app/careers/page.tsx` and `src/app/contact/page.tsx`.
- Optional `src/components/careers/*` and `src/components/contact/*`.
- Contact/form and global state unit tests under existing conventions.
- `tests/e2e/careers-contact.spec.ts` and/or global-state E2E coverage.
- `public/*` only for stable approved assets with provenance, dimensions, consumers, and alt handling.

No governance, registry, prior report, or OpenWolf file should change.

### Risks and mitigations

- **Global state inconsistency:** centralize primitives and test every named state across themes/viewports.
- **Cross-route regressions:** run six-route smoke/E2E checks before and after shared changes.
- **False submission success:** use mailto/presentation-only behavior with explicit status text; never claim backend receipt.
- **Validation announcements/focus:** associate errors with fields, use appropriate live regions, manage focus deliberately, and avoid duplicate announcements.
- **Error recovery:** provide retry only for a retryable local action; preserve safe user input and expose fallback.
- **Asset expiry:** use stable local/CSS assets; test dimensions, alt behavior, and fallback.
- **Responsive overflow:** stack long labels, cards, form controls, notifications, dialogs, and footer columns at 375px; test 375×812, 768×1024, and 1440×900.
- **Security/privacy:** do not log or persist inquiry data, inject HTML, expose secrets, or send to an unapproved endpoint.
- **Audit limitation:** disclose exact `npm audit` result and advisory/network limitation.

### Acceptance criteria

1. **AC-001 — Global Figma traceability:** Global candidates `79:168`, `80:152`, and `81:156` provide recorded notification, dialog, and form-field evidence; Careers and Contact node/request IDs are recorded in the Developer report.
2. **AC-002 — Global style application:** Approved global tokens, typography, surfaces, borders, focus, motion, and theme rules are wired consistently across `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact` without route regressions.
3. **AC-003 — Reusable primitives:** Shared buttons, inputs, cards, notifications, feedback notifications, dialogs, and form-field state primitives expose documented variants/states and are consumed rather than duplicated page-locally.
4. **AC-004 — Careers route/content:** `/careers` renders the evidenced hero, principles, join journey, Why Join, expectations, hiring journey, roles/internships, conversion paths, and truthful placeholder handling.
5. **AC-005 — Contact route/form structure:** `/contact` renders the evidenced hero, response promise, labelled Name, Email, Company/organisation, Project type, Budget range, Project brief, consent, Send Inquiry, alternate paths, and working agreement.
6. **AC-006 — Inquiry input states:** Every inquiry field supports testable default, focus, filled, invalid, valid, disabled, and loading states with labels, descriptions, focus indicators, and no layout-breaking transitions.
7. **AC-007 — Validation and announcements:** Invalid/valid feedback is associated with the correct field, announced through an appropriate live region, keyboard reachable, contrast-safe, and focus-managed without misleading duplication.
8. **AC-008 — Submit state lifecycle:** Submit loading, success, error, retry/recovery, and safe non-fabricated delivery behavior are implemented; success only describes a verifiable local/mailto action and error/retry preserves safe context.
9. **AC-009 — Careers interactions:** Careers/application, contact, coffee-chat, social, and Ask Miners controls are keyboard accessible and use valid, non-misleading destinations without fabricated functionality.
10. **AC-010 — Assets and shared integration:** Assets have stable provenance, explicit dimensions, correct alt/fallback behavior; header, mobile navigation, footer, theme, icons, typography, tokens, and exact footer ownership are shared across all routes.
11. **AC-011 — Responsive/accessibility:** All six routes remain coherent at 375×812, 768×1024, and 1440×900; no overflow; one logical `h1` per new route; ordered headings, landmarks, keyboard/focus, contrast, reduced motion, and Axe requirements pass.
12. **AC-012 — Runtime/error handling:** All six routes have no console/page errors, failed requests, broken images, or unhandled boundary errors; safe fallback/feedback UI is available for expected failures.
13. **AC-013 — Automated and visual validation:** Lint, type-check, unit, build, E2E, production HTTP, screenshot/visual review, `git diff --check`, and security/dependency checks are recorded with exact results and limitations.
14. **AC-014 — Preservation/security:** No secrets, unsafe injection, unapproved dependencies, fabricated delivery behavior, destructive commands, or governance/OpenWolf/workflow regressions are introduced.

### Validation strategy

Developer should record exact commands, exit codes, counts, warnings, skipped checks, and artifacts:

- Run `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, and `npm.cmd run test:e2e`.
- Add unit/component tests for every input state, notification tone, confirmation intent, form validation association, focus behavior, submit lifecycle, retry/recovery, and mailto/presentation-only behavior.
- Add E2E coverage across `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact` for route status, global styles, theme, navigation, footer count, console/page errors, failed requests, overflow, and fallback/error handling.
- Exercise Contact fields in default/focus/filled/invalid/valid/disabled/loading states and submit loading/success/error/retry states without claiming network delivery.
- Run Axe and manual keyboard/focus checks, including live-region announcements, error focus, reduced motion, contrast, labels, alt text, and touch targets.
- Run all six routes at 375×812, 768×1024, and 1440×900. Save screenshots under `test-results/MINERS-006/`, including form, notification, dialog, and responsive states.
- After build, run `npm.cmd run start`; verify HTTP 200 for all six routes, stop the process cleanly, and record port/process cleanup.
- Attempt `npm audit` only when available and disclose advisory/network limitations.
- Compare global candidate screenshots/contexts and Careers/Contact contexts to implementation; generated code is not proof.

### Implementation sequence

1. Developer rereads this report, inspects shared components/tokens and dirty-tree boundaries, and records a six-route baseline.
2. Map candidate evidence into reusable global token and component/state APIs.
3. Implement global primitives and regression-test existing routes before page-specific work.
4. Build `/careers` and `/contact` in Figma order, including validation, announcements, focus management, submit lifecycle, and safe mailto/presentation-only behavior.
5. Add responsive/theme/reduced-motion styling, error boundaries/fallbacks, unit/E2E tests, and screenshot states.
6. Run static, unit, build, browser, accessibility, visual, production, security, and preservation checks across all six routes.
7. Persist/read back `02-developer-report.md`; Coordinator validates before QA.

### Definition of Done

Global candidates are mapped into reusable UI/state primitives applied consistently across all six routes; Careers and Contact match their evidenced Figma structures; inquiry states and submit lifecycle are accessible, testable, and non-fabricated; all required automated/manual/visual/security checks pass with evidence; unrelated files and governance records are preserved; and the Developer report is persisted with `STATUS: PASS`. No commit or push is made.

### Open decisions or blockers

No material blocker remains. The originally inaccessible `0:1` node is superseded for planning by selectable candidates `79:168`, `80:152`, and `81:156`, which provide sufficient global notification, dialog, and form-field evidence. The safe delivery decision remains fixed: mailto or explicitly presentation-only behavior, never fabricated server delivery. Developer must document stable visual replacements and exact route/component consumers.

### Evidence

- Required governance/OpenWolf/workflow/task/prerequisite files, package context, branch, and worktree state inspected.
- `git branch --show-current` → exit 0, `task/miners-006-careers-contact`.
- `git status --short` → exit 0; pre-existing `.wolf` files, registry, MINERS-004 report, `next-env.d.ts`, and application/task changes observed and preserved.
- Careers node `70:120` → success, request `47fd853e-06cb-4938-a37d-71bcdbf52ac3`.
- Contact node `72:124` → success, request `ac24efe2-b1c1-4507-a167-7b17da8d44fc`.
- Global notification node `79:168` → success, request `2dc83c0a-dc27-4897-8b85-47d5f3dd9d20`; Success/Error/Warning/Info tones, title/message copy, status icon, and 44px close target observed.
- Global confirmation node `80:152` → success, request `68c6e5fc-0928-4873-8eeb-2c02e45f69ab`; Confirm/Destructive intents, Keep editing, Confirm, dialog copy, and actions observed.
- Global form feedback node `81:156` → success, request `9cf8b5c8-75aa-4235-a3b2-d00dbf2bb7f0`; Default/Error/Success/Loading input states, indicators, helper text, and labels observed.
- Report read-back verification: canonical file exists; branch matches; 14 acceptance criteria; exactly one final `EVIDENCE:` and `HANDOFF:` block; UTF-8 replacement-character count 0.

AGENT: Planner
STATUS: PASS
TASK: MINERS-006 — Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md
EVIDENCE: Careers 70:120 request 47fd853e-06cb-4938-a37d-71bcdbf52ac3; Contact 72:124 request ac24efe2-b1c1-4507-a167-7b17da8d44fc; global candidates 79:168 request 2dc83c0a-dc27-4897-8b85-47d5f3dd9d20, 80:152 request 68c6e5fc-0928-4873-8eeb-2c02e45f69ab, and 81:156 request 9cf8b5c8-75aa-4235-a3b2-d00dbf2bb7f0 succeeded; branch command exit 0 observed task/miners-006-careers-contact; 14 criteria and expanded global states documented; report read-back verified exactly one EVIDENCE/HANDOFF block.
HANDOFF: Coordinator — revalidate this report; Developer may begin only after STATUS: PASS is validated.
