# MINERS-006 - QA Handoff

You are QA for **MINERS-006 - Careers, Contact, and Global UI States from Figma**.

## Gate and permissions

Planner and corrected Developer reports are persisted with `STATUS: PASS` and validated by the Coordinator. Read-only with respect to application code/tests: do not repair files. QA may create/update only `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md` and QA-owned defect files under `defects/`.

## Read first

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, `docs/workflow/README.md`, the task brief, Planner report, Developer report, this prompt, and relevant source/configuration files. Confirm branch `task/miners-006-careers-contact` and preserve unrelated worktree/OpenWolf/workflow state.

## Scope and acceptance criteria

Independently validate AC-001 through AC-014 from the Planner report, including:

- Careers and Contact route structure and shared layout across all six routes.
- Careers sections, content, CTAs, responsive behavior, and truthful sample pathways.
- Contact fields, consent, Send inquiry, required/email validation, red invalid states, green valid borders, blue loading spinner, inline messages, confirmation dialog, Keep editing, and safe mailto behavior without fabricated backend delivery.
- Figma traceability for Careers `70:120`, Contact `72:124`, notification `79:168`, confirmation dialog `80:152`, and field feedback `81:156`.
- Shared header/footer, supplied logo, typography, focus styles, SVG conventions, light-only theme behavior, reduced motion, semantics, contrast, and keyboard accessibility.
- Responsive layout at 375x812, 768x1024, and 1440x900 with no overflow, clipping, duplicate footers, broken images, console errors, or page errors.
- Static, unit, build, production HTTP, browser/accessibility, screenshot, cleanup, audit, and Git-preservation evidence.

## Required commands and evidence

Run and record exact exit codes/results for `npm.cmd install` or justified equivalent, `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test -- --run`, `npm.cmd run build`, `npm.cmd run test:e2e`, production route probes for `/`, `/services`, `/projects`, `/about`, `/careers`, and `/contact`, `git diff --check`, Git branch/status/diff/untracked inventories, and `npm.cmd audit --json` (or document the advisory-endpoint limitation). Independently inspect screenshots under `test-results/MINERS-006/`, verify ports/processes are released, and run Axe/runtime/overflow/broken-image checks at all required viewports. Exercise form states and confirmation behavior directly, not only from source review.

If a defect is found, create a QA-owned record under `docs/workflow/tasks/MINERS-006-careers-contact/defects/` with ID, severity, reproduction, expected/actual result, affected ACs, and `OPEN`; set the QA report to `STATUS: FAIL`. Mark defects `VERIFIED_CLOSED` only after a later independent revalidation. Do not report PASS with blocking defects or unsupported/skipped required checks.

## Report contract

Write the complete report to `docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md`, read it back, and verify the task/developer prerequisite, AC-001–AC-014 matrix, environment, exact commands/results, passed criteria, defects, regression evidence, limitations, persistence verification, exactly one final `EVIDENCE:` field, and exactly one final `HANDOFF:` field.

## Required final handoff block

```text
AGENT: QA
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-006 - Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/03-qa-report.md
EVIDENCE: <exact commands, exit codes, counts, viewports, defects, limitations, and Git/cleanup results>
HANDOFF: Coordinator - <route Reviewer only if STATUS: PASS and all blocking defects are VERIFIED_CLOSED>
```
