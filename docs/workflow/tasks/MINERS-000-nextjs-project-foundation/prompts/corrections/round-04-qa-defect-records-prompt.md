# MINERS-000 — QA Defect-Record Correction

You are QA for MINERS-000 — Next.js Project Foundation.

The QA report declares both defects `VERIFIED_CLOSED`, but the canonical defects directory is missing both required QA-owned records. Reviewer handoff is blocked until the records exist and are independently readable.

Read `AGENTS.md`, the task brief, Planner report, Developer report, current QA report, and all correction prompts.

Create and persist exactly these QA-owned defect records under:

`docs/workflow/tasks/MINERS-000-nextjs-project-foundation/defects/`

- `MINERS-000-QA-001.md`
- `MINERS-000-QA-002.md`

Each record must include:

- Defect ID
- Title and severity
- Source/reproduction evidence
- Affected acceptance criteria
- Root cause
- Developer correction
- Changed files
- Independent QA verification commands, exit codes, counts, and results
- Final disposition exactly `VERIFIED_CLOSED`
- Verification date and QA evidence paths

QA-001 must document the final independent `npm.cmd run test:e2e` exit 0, 3/3 pass summary, zero failures/skips, zero Axe/console/page-error/overflow failures, zero residual validation Node processes, and zero port 3100 listeners.

QA-002 must document independent Git path-provenance reconciliation, preservation of unrelated changes, and no unrelated file revert or modification.

Do not modify application code/tests, earlier reports, task brief, registry, prompts, OpenWolf files, or Reviewer files. Read both defect records back from disk and verify their contents. Then update `03-qa-report.md` only as needed to reference the exact defect paths, preserving its single authoritative PASS conclusion and single final handoff block.

Return the complete persisted QA report and end with:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/03-qa-report.md
EVIDENCE: <exact defect paths, commands, exit codes, counts, dispositions, and results>
HANDOFF: Reviewer if PASS; Developer with exact remaining defect if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
