# MINERS-000 — Developer Correction Round 02

You are the Developer for MINERS-000 — Next.js Project Foundation.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, the Planner report, the current Developer report, the current QA report, and QA defect records.

QA independently reran the correction and found:

- `MINERS-000-QA-001` remains `STILL_FAILING`.
- `npm.cmd run test:e2e` still exits 124 after 120 seconds; all three tests are reached but no completion summary is emitted.
- The direct Node/Next web-server change did not resolve Playwright teardown on this environment.
- `MINERS-000-QA-002` is `VERIFIED_CLOSED`; do not modify its provenance reconciliation.

Correct QA-001 only. Diagnose the actual Playwright process/teardown hang and implement a reliable fix without weakening assertions or reducing coverage. You may modify only application code/tests and the canonical Developer report. Do not modify the registry, task brief, prompts, QA report, defect files, Planner report, OpenWolf records, or other role reports.

Run and record exact evidence for targeted and full `npm.cmd run test:e2e` runs, including exit code, 3-test pass/fail/skip counts, duration, residual Node processes, port 3100 listeners, and screenshots. Rerun affected regression checks: lint, type-check, unit tests, production build, HTTP probe, accessibility/console/page-error/overflow checks at 375×812, 768×1024, and 1440×900, audits, `git diff --check`, shutdown, and port release. Do not claim a timeout or skipped check passed.

Update, read back, and verify:

`docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md`

Document QA-001’s ID, root cause, correction, changed files, validation evidence, and set it to `FIXED_PENDING_VERIFICATION` only if the complete command now terminates successfully. Return the complete report ending with:

AGENT: Developer
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md
EVIDENCE: <exact commands, exit codes, counts, warnings, and results>
HANDOFF: QA — independently revalidate QA-001 and all affected regression checks; or state the blocker.
