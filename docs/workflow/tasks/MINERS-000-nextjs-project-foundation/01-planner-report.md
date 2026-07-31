# MINERS-000 — Next.js Project Foundation
## Planner Report

### Task and repository context

MINERS-000 initializes the existing non-empty Git repository at `C:\miners` as a production-ready Next.js application.

Observed repository state:

- Current branch is `task/miners-000-nextjs-foundation`, tracking `origin/task/miners-000-nextjs-foundation` at `+0/-0`.
- Task registry records MINERS-000 as `DRAFT`.
- No application scaffold currently exists: no `package.json`, lockfile, Next.js configuration, TypeScript configuration, ESLint/PostCSS configuration, `src/`, or `public/`.
- The repository already contains Git metadata, OpenWolf configuration and state, agent configuration, workflow documentation, root documentation, and lifecycle task files.
- The working tree is not clean. Existing modified files are `.wolf/hooks/_session.json`, `.wolf/memory.md`, `.wolf/token-ledger.json`, and `docs/workflow/task-registry.md`.
- Existing untracked task content includes `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/00-task-brief.md`.
- Local tools observed: Node.js `v24.18.0`, npm/npx `11.16.0` through `.cmd` launchers, and Git `2.46.1.windows.1`.
- PowerShell policy blocks `npm.ps1`; use `npm.cmd`/`npx.cmd` or a compatible shell.
- `rg` and `openwolf` were not available on the current PowerShell `PATH`.

The application must be added without replacing, deleting, regenerating, or normalizing unrelated repository content.

### Included scope

1. Initialize Next.js in the current repository with TypeScript, App Router, source under `src/`, Tailwind CSS, ESLint, npm, and a lockfile.
2. Establish a small scalable layout for routes/styles, reusable components, shared utilities, hooks, and shared types.
3. Provide a polished, semantic, responsive foundation homepage proving Next.js and Tailwind work.
4. Add scripts for development, linting, type-checking, testing, building, and production startup.
5. Add a meaningful automated smoke test and its test configuration.
6. Add or update application-specific documentation and ignore rules where necessary.
7. Validate installation, lint, types, tests, build, production startup, accessibility, responsiveness, and rendering.
8. Preserve every pre-existing Git, OpenWolf, workflow, agent, lifecycle, and documentation artifact.
9. Leave changes uncommitted and unpushed.

### Excluded scope

- Product features, authentication, databases, APIs, analytics, monitoring, or deployment-provider configuration.
- A comprehensive design system or large component library.
- Multiple routes beyond the foundation.
- CI/CD unless an existing requirement explicitly demands it.
- Secrets or external service configuration.
- Modification of OpenWolf content, workflow reports, registry, defects, or agent configuration by the Developer.
- Git commits, pushes, rebases, resets, cleaning, or destructive operations.
- Weakening or removing tests to hide defects.

### Assumptions

1. npm is the package manager because npm/npx exist and there is no competing manifest or lockfile.
2. The Developer can access the npm registry to resolve packages and create `package-lock.json`.
3. The Developer must verify selected packages' engine and peer requirements against the observed Node runtime.
4. No user-selected brand is required; a restrained accessible foundation page is sufficient.
5. Existing root documentation is user-owned and must not be replaced by scaffold defaults.
6. No material user decision remains because framework, language, routing, source layout, CSS, and linting choices are closed.
7. Empty folders are not durable structure; planned source areas require purposeful content or documentation.
8. Direct interactive scaffolding is unsafe unless the Developer proves exactly which paths it will affect.

### Dependencies

Expected runtime dependencies include `next`, `react`, and `react-dom`.

Expected development dependencies include:

- TypeScript plus React/Node type packages.
- Tailwind CSS and the version-appropriate Next.js/PostCSS integration.
- ESLint and a compatible Next.js ESLint configuration.
- A lightweight test runner and DOM/component testing support.
- Browser automation/accessibility tooling only where needed for later validation.

Tooling rules:

1. Resolve current mutually compatible stable releases from authoritative package metadata at implementation time; this report does not claim unobserved versions.
2. Do not install beta, RC, canary, deprecated, or unsupported packages.
3. Install dependencies in a controlled step and preserve the resulting lockfile.
4. Record exact versions, commands, warnings, and exit codes.
5. Do not assume a global `create-next-app`; if used, invoke an explicit resolved version and inspect its effects.
6. Do not mix configuration conventions from incompatible Tailwind, ESLint, or Next.js majors.
7. Add dependencies only when they directly satisfy approved scope.

### Existing-state and preservation requirements

Before writing, the Developer must record:

- `git status --short --branch`
- `git diff --name-status`
- `git ls-files --others --exclude-standard`
- Presence checks for all scaffold destinations

Preserve byte-for-byte unless explicitly authorized outside this task:

- `.git/`
- `.wolf/`
- `.claude/`
- `.codex/`
- `agents/`
- `docs/workflow/`
- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- `START-CODEX-PROMPT.md`
- `VALIDATION.md`

The Developer must not run a scaffold command that assumes an empty directory, initialize new Git metadata, overwrite root documentation/configuration, use destructive Git commands, normalize unrelated line endings, stage/commit/push, or disturb the observed modified/untracked files.

Safe initialization:

1. Prefer controlled creation of application files.
2. If `create-next-app` is used, generate into a verified temporary child directory, inspect it, and copy only approved application artifacts.
3. Never copy scaffold Git metadata, default root documentation, or wildcard output over the repository.
4. Remove a temporary scaffold only after resolving and verifying its exact path; never target the repository root.

### Affected systems and expected files

Exact names may vary with compatible framework versions:

| Area | Expected path | Purpose |
|---|---|---|
| Package manifest | `package.json` | Dependencies and lifecycle scripts |
| Dependency lock | `package-lock.json` | Reproducible npm installation |
| Next config | `next.config.ts` or supported equivalent | Framework configuration |
| TypeScript | `tsconfig.json`, `next-env.d.ts` | Strict types and Next declarations |
| ESLint | `eslint.config.mjs` or supported equivalent | Next.js/TypeScript linting |
| PostCSS | `postcss.config.mjs` or supported equivalent | Tailwind processing |
| Ignore rules | `.gitignore` | Ignore dependencies, builds, coverage, logs, and local secrets while preserving existing rules |
| App shell | `src/app/layout.tsx` | Metadata, document shell, global styles |
| Homepage | `src/app/page.tsx` | Accessible responsive foundation screen |
| Global CSS | `src/app/globals.css` | Tailwind and base theme |
| Reusable UI | `src/components/` | Purposeful component(s) used by the page |
| Shared utilities | `src/lib/` | Typed shared utility/convention |
| Hooks | `src/hooks/` | Scalable hook boundary with purposeful content |
| Shared types | `src/types/` | Shared application types |
| Assets | `public/` | Purposeful static assets only |
| Tests | Version-appropriate config, setup, and test | Real DOM/component smoke coverage |
| Documentation | Minimal compatible README edit or separate app guide | Setup and verified commands |

Avoid placeholder assets, unused abstractions, default scaffold branding, promotional links, and unused SVGs.

### Risks and mitigations

1. **Scaffold overwrites existing files:** inventory destinations and use controlled creation or isolated scaffolding.
2. **Dirty worktree is misattributed:** record the exact baseline and classify final changes against it.
3. **Dependency incompatibility:** resolve stable versions together, verify engines/peers, retain the lockfile, and validate after installation.
4. **PowerShell blocks npm:** use `npm.cmd`/`npx.cmd`.
5. **Scaffold changes Git:** reject Git initialization and compare branch/upstream/status afterward.
6. **Folder structure becomes unused abstraction:** keep layers minimal and purposeful.
7. **Test script runs zero tests:** require at least one discovered meaningful test; do not permit `--passWithNoTests`.
8. **Build works but runtime fails:** start the built app, request `/`, capture HTTP/render evidence, and stop it.
9. **Accessibility/responsive defects are missed:** combine browser viewports, keyboard checks, automated scanning, and screenshot review.
10. **Unrelated formatting churn:** format only application files and run `git diff --check`.
11. **Server remains running:** terminate only the owned validation process and confirm its port is released.
12. **OpenWolf CLI unavailable:** preserve OpenWolf files manually and record its check as unavailable, not passed.

### Acceptance criteria

**AC-01 — Preservation and repository integrity**

All pre-existing files remain present and unmodified by the Developer unless explicitly included. The branch remains `task/miners-000-nextjs-foundation`; no commit or push occurs; pre-existing dirty changes remain preserved.

**AC-02 — Reproducible npm project**

Valid `package.json` and `package-lock.json` exist. A clean lockfile-based installation succeeds with exit code 0 without unresolved peer or engine errors.

**AC-03 — Next.js TypeScript App Router**

The application uses Next.js, React, TypeScript, and App Router under `src/app/`, including compiling `layout.tsx` and `page.tsx`; no Pages Router app is introduced.

**AC-04 — Strict type safety**

TypeScript enables strict checking and the intended alias convention. A dedicated non-emitting type-check command exits 0.

**AC-05 — Tailwind CSS**

Tailwind uses the supported convention for its installed version. The rendered page visibly uses its styling, and the production build has no Tailwind/PostCSS error.

**AC-06 — ESLint**

A version-compatible ESLint configuration covers TypeScript and React/Next.js sources. Lint exits 0 with zero errors.

**AC-07 — Scalable organization**

`src/` has purposeful boundaries for routes, components, utilities, hooks, and shared types. The page consumes reusable/shared code; no planned layer is an unexplained empty folder.

**AC-08 — Meaningful automated test**

A non-watch test command discovers and passes at least one meaningful rendered-behavior test. Zero-test success is prohibited.

**AC-09 — Production build and startup**

Production build exits 0. The built application starts through the documented command, `/` returns HTTP 200 and expected content without relevant runtime error, and the validation port is released after shutdown.

**AC-10 — Accessible semantic page**

The page has valid metadata, semantic landmarks, one clear primary heading, logical heading order, visible focus where applicable, no keyboard trap, AA contrast, and no critical/serious automated accessibility violations.

**AC-11 — Responsive visual quality**

At `375×812`, `768×1024`, and `1440×900`, the page has no horizontal overflow, clipping, overlap, unreadable text, or broken layout. Full-page screenshots show an intentional foundation rather than unchanged scaffold boilerplate.

**AC-12 — Documentation and scripts**

Documentation states runtime/package-manager expectations and exact install, development, lint, type-check, test, build, and production-start commands. Every documented script exists and works.

**AC-13 — Clean application diff**

`git diff --check` reports no whitespace errors in Developer output. No `.next`, `node_modules`, coverage, logs, secrets, or temporary scaffold remains as source output.

**AC-14 — Security and dependency hygiene**

No secret is introduced, production dependencies are limited to the foundation, and dependency audit findings are recorded. An unresolved high/critical production vulnerability blocks PASS absent an authorized documented exception.

### Validation strategy

The commands below are proposed actions, not currently confirmed project scripts.

| Criterion | Required evidence |
|---|---|
| AC-01 | Before/after branch, status, diff-name, and untracked inventories; explicit baseline comparison. |
| AC-02 | Controlled `npm.cmd install`, followed by `npm.cmd ci`; versions, exit codes, warnings. |
| AC-03 | Inspect manifest/config/source; successful types and build; confirm no competing `pages/`. |
| AC-04 | Run implemented type-check script; record exit code and diagnostic count. |
| AC-05 | Inspect Tailwind/PostCSS/CSS; verify production build and computed/visible browser styling. |
| AC-06 | Run implemented lint script; require exit 0 and zero errors. |
| AC-07 | Enumerate `src/`, inspect usages, and reject empty/unused placeholder structure. |
| AC-08 | Run non-watch tests; record suite/test pass/fail/skip counts; at least one test must pass. |
| AC-09 | Build, start on a checked free port, request `/`, record HTTP 200/content and logs, stop process, confirm released port. |
| AC-10 | Automated accessibility scan at desktop/mobile plus manual landmarks, headings, keyboard, focus, and contrast checks. |
| AC-11 | Capture and inspect full-page screenshots at `375×812`, `768×1024`, and `1440×900`, stored under `test-results/MINERS-000/` or equivalent. |
| AC-12 | Compare docs with manifest and execute every documented script. |
| AC-13 | Run `git diff --check`, status/ignored-output checks, and verify no temporary/generated deliverables. |
| AC-14 | Inspect dependency classification and run npm audit including production severity counts. |

Required order:

1. Install/reproducibility.
2. Lint.
3. Type-check.
4. Automated tests.
5. Production build.
6. Production startup and HTTP smoke test.
7. Browser console, accessibility, responsive, and visual checks.
8. Dependency audit.
9. Final Git preservation and whitespace audit.

QA must independently repeat relevant checks. A required unavailable check must be marked skipped with a concrete reason and cannot be represented as passed.

### Implementation sequence

1. Capture branch, worktree, untracked, and existing-path baselines.
2. Verify planned destinations are absent or resolve collisions.
3. Resolve compatible stable Next.js, React, TypeScript, Tailwind, ESLint, and test versions; record engines/peers.
4. Use controlled file creation or an inspected isolated scaffold.
5. Create manifest, lockfile, framework, TypeScript, lint, CSS-processing, and ignore configuration without replacing protected artifacts.
6. Create App Router layout, global styles, homepage, metadata, and purposeful assets.
7. Establish minimal purposeful component, utility, hook, and type boundaries.
8. Add test configuration and at least one meaningful smoke test.
9. Add or minimally integrate application documentation.
10. Format only application-owned files.
11. Run the complete validation sequence with exact evidence.
12. Compare final diff to baseline and remove only verified task-created temporary/generated artifacts.
13. Return the complete Developer report without committing or pushing.

### Definition of Done

Implementation is done only when:

- AC-01 through AC-14 have objective evidence.
- Install, lint, type-check, tests, build, startup, accessibility, responsive, and visual checks meet requirements.
- All three screenshots exist and have been reviewed.
- At least one meaningful test ran and passed.
- The production app served `/`.
- No unresolved high/critical production vulnerability remains.
- Every Developer-created file is listed.
- All protected content and pre-existing changes remain intact.
- No temporary scaffold, generated output, secret, dependency directory, commit, or push is introduced.
- Developer reports PASS, followed by independent QA PASS, Reviewer PASS/APPROVE, and Status `LIFECYCLE: PASSED`.

### Open decisions or blockers

No material blocker prevents safe implementation.

Implementation-time determinations:

- Exact compatible stable dependency versions.
- Version-appropriate Tailwind, ESLint, and test config filenames.
- Controlled explicit creation versus isolated temporary scaffolding.
- A checked free local validation port.

Non-blocking environment limitations:

- Use `npm.cmd`/`npx.cmd`; PowerShell blocks `npm.ps1`.
- `rg` is unavailable; use Git/PowerShell alternatives.
- `openwolf` was not found on the observed `PATH`; do not claim its CLI checks passed.

### Evidence

Files inspected:

- `AGENTS.md`
- `.wolf/OPENWOLF.md`
- `.wolf/STATUS.md`
- `.wolf/anatomy.md`
- `docs/workflow/task-registry.md`
- `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/00-task-brief.md`

Read-only commands and concrete results:

- Mandatory instruction-file reads — combined exit code 0.
- `git branch --show-current` — exit code 0; `task/miners-000-nextjs-foundation`.
- `git status --short --branch` and `git status --porcelain=v2 --branch` — exit code 0; expected upstream at `+0/-0`, four modified paths, and untracked task content.
- `git diff --name-status` — exit code 0; modified `.wolf/hooks/_session.json`, `.wolf/memory.md`, `.wolf/token-ledger.json`, and `docs/workflow/task-registry.md`.
- `git ls-files --others --exclude-standard` — exit code 0; returned the canonical task brief.
- Read-only PowerShell enumeration — identified existing root docs, agent, workflow, and OpenWolf artifacts.
- `node --version` — exit code 0; `v24.18.0`.
- `npm.cmd --version` and `npx.cmd --version` — exit code 0; `11.16.0`.
- `git --version` — exit code 0; `2.46.1.windows.1`.
- `Test-Path` checks — application scaffold destinations all absent.
- `rg` unavailable; replaced by PowerShell enumeration.
- `npm` PowerShell wrapper blocked; `.cmd` launcher succeeded.
- `openwolf` unavailable on current PowerShell `PATH`.

AGENT: Planner
STATUS: PASS
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/01-planner-report.md
EVIDENCE: Inspected `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/STATUS.md`, `.wolf/anatomy.md`, `docs/workflow/task-registry.md`, and the canonical task brief; confirmed branch `task/miners-000-nextjs-foundation` with Git exit code 0; recorded upstream divergence `+0/-0`, four pre-existing modified files, one untracked task brief, absent application scaffold paths, Node `v24.18.0`, npm/npx `11.16.0`, Git `2.46.1.windows.1`, and unavailable `rg`, `npm.ps1`, and `openwolf` probes with working fallbacks where applicable.
HANDOFF: Developer — after the Coordinator saves and verifies this report verbatim, implement the scoped Next.js foundation using controlled non-empty-repository initialization, preserve the complete recorded baseline, satisfy AC-01 through AC-14, run and record the full validation sequence, and do not commit or push.
