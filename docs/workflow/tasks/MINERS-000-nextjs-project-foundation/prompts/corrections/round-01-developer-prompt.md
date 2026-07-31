# MINERS-000 — Developer Correction Round 01

You are the Developer for MINERS-000 — Next.js Project Foundation.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, the Planner report, the current Developer report, the current QA report, and every QA-owned defect record available under `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/defects/`.

The validated QA report is `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md` and declares `STATUS: FAIL` with these blocking defects:

- `MINERS-000-QA-001`: `npm.cmd run test:e2e` does not terminate successfully; it reaches all three tests and times out after 180 seconds with exit 124 and no completion summary. Diagnose and correct the production Playwright runtime/test lifecycle without weakening assertions.
- `MINERS-000-QA-002`: the current Git worktree cannot be reconciled with the Planner preservation baseline. Reconcile the recorded baseline and authorized scope using current repository evidence. Preserve unrelated user changes; do not use destructive Git commands and do not modify governance records outside your authorized canonical Developer report.

Correction rules:

- Modify only application code/tests and your canonical `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md`.
- Do not modify the registry, task brief, prompts, QA report, defect files, Planner report, OpenWolf records, or other role reports.
- Record each defect ID, root cause, correction, changed files, and affected/regression validation.
- Mark each corrected defect `FIXED_PENDING_VERIFICATION`; QA will later verify closure.
- Rerun the full affected validation sequence and all relevant regression checks, including install/CI as appropriate, lint, type-check, unit tests, build, production startup/HTTP probe, Playwright at 375×812, 768×1024, and 1440×900, accessibility/console/page-error/overflow assertions, screenshot inspection, audits, Git preservation, `git diff --check`, server shutdown, and port release.
- Do not claim a skipped, unavailable, failing, or timed-out check passed.

Update the canonical Developer report, read it back, verify it, and return the complete report through the Developer CLI response. It must retain the required structure and end with:

AGENT: Developer
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md
EVIDENCE: <exact files, commands, exit codes, counts, warnings, and results>
HANDOFF: QA — verify MINERS-000-QA-001 and MINERS-000-QA-002 and rerun all affected regression checks; or state the exact blocker.
