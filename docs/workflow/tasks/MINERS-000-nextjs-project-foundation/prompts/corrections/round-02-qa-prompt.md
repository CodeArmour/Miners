# MINERS-000 — QA Revalidation Round 02

You are QA for MINERS-000 — Next.js Project Foundation.

Do not stop after reading this prompt. Execute the checks and independently verify the persisted Developer Correction Round 02.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, current Developer report, current QA report, and QA defect records.

Verify `MINERS-000-QA-001`:

- Run `npm.cmd run test:e2e` independently.
- Confirm exit 0, a complete 3-test pass summary, 0 failures, 0 skips, no residual Node processes, and 0 port 3100 listeners.
- Inspect `playwright.config.ts` and `tests/e2e/global-setup.ts`.
- Confirm global setup owns the Next process, waits for readiness, and uses deterministic Windows process-tree teardown without weakening assertions or viewport coverage.

Verify `MINERS-000-QA-002` remains closed by independently reconciling Git status, diffs, untracked inventory, and documented path provenance. Confirm no unrelated file was modified or reverted during Round 02.

Rerun all affected regression checks: lint, type-check, unit tests, production build, HTTP probe, accessibility, console/page-error, overflow, screenshots at 375×812, 768×1024, and 1440×900, audits, `git diff --check`, shutdown, and port release. Do not modify application code, tests, governance records, or other role reports. Update QA’s canonical report and QA-owned defect records only. Mark QA-001 `VERIFIED_CLOSED` only after independent verification; otherwise mark it `STILL_FAILING`.

Canonical report:

`docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md`

Read the saved report back and return the complete report ending with:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md
EVIDENCE: <exact files, commands, exit codes, counts, warnings, viewports, screenshots, and results>
HANDOFF: Reviewer if PASS; Developer with exact remaining defect if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
