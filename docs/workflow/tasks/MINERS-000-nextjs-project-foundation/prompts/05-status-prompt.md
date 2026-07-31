# MINERS-000 — Status Handoff

You are Status for MINERS-000 — Next.js Project Foundation.

Prerequisites are validated: Planner PASS, Developer PASS, QA PASS on AC-01 through AC-14 with QA-001 and QA-002 `VERIFIED_CLOSED`, and Reviewer PASS with `REVIEW_DECISION: APPROVE` and no Reviewer defects.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, task registry, Planner report, Developer report, QA report, Reviewer report, all correction prompts, both QA defect records, and the current repository state.

You are read-only with respect to application code, tests, and other roles’ records. You may create/update only your canonical Status report. Do not repair, rewrite, or alter earlier reports, defects, prompts, the task brief, application files, or OpenWolf files. The Coordinator updates the registry only after validating your report.

Audit the complete evidence chain:

- Task identity and canonical paths.
- Planner, Developer, QA, and Reviewer statuses and handoffs.
- AC-01 through AC-14 coverage and evidence.
- Correction rounds and final dispositions of QA-001/QA-002.
- Reviewer APPROVE decision and absence of Reviewer defects.
- Changed-file inventory, preservation of unrelated changes, and no commit/push.
- Validation commands, exit codes, counts, warnings, screenshots, audits, and disclosed limitations.
- Report persistence and handoff integrity.

Run these read-only commands from `C:\miners` and record their exact exit codes,
counts, warnings, and relevant results in the Status report:

```text
git branch --show-current
git status --short --branch
git diff --name-status
git ls-files --others --exclude-standard
git log -1 --oneline
git diff --check
```

Also verify from the persisted records (without rerunning implementation or QA
work) the reported results for `npm.cmd ci`, lint, type-check, unit tests,
production build/startup and HTTP 200, Playwright 3/3, accessibility and browser
error counts, the three viewport screenshots, port/process cleanup, production
audit, complete audit limitations, and OpenWolf CLI availability. Do not present
a historical command as freshly executed by Status.

Declare `LIFECYCLE: PASSED` only if every required gate and evidence condition is complete, no blocking defect remains, and the Reviewer decision is APPROVE. Otherwise declare the exact non-passing lifecycle.

Decision rules:

- `STATUS: PASS` with `LIFECYCLE: PASSED` only when the complete audit supports
  every lifecycle gate and no contradiction or blocking defect remains.
- `STATUS: FAIL` with `LIFECYCLE: CHANGES_REQUESTED` when the evidence chain is
  complete enough to audit but contains a failed gate, unresolved defect,
  unsupported conclusion, or required correction.
- `STATUS: BLOCKED` with `LIFECYCLE: BLOCKED` when a required report, owned record,
  dependency, permission, environment capability, or decision prevents a valid
  audit conclusion.
- Never repair an earlier record or infer a passing result from missing evidence.

Canonical report:

`docs/workflow/tasks/MINERS-000-nextjs-project-foundation/05-status-report.md`

Write the complete report, read it back, verify it, and return it through the Status CLI response. Include task identity, each role result, report-path/handoff audit, acceptance-criteria and defect audit, evidence audit, changed files, remaining non-blocking notes, final lifecycle, and persistence verification.

The changed-files section must distinguish application/configuration/test files,
lifecycle records, and pre-existing or Coordinator/OpenWolf governance changes.
The report-path/handoff audit must name every canonical report and both QA defect
records and confirm that the final handoffs form the permitted lifecycle chain.

End with:

AGENT: Status
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-000 — Next.js Project Foundation
REPORT: docs/workflow/tasks/MINERS-000-nextjs-project-foundation/05-status-report.md
EVIDENCE: <exact reports, files, commands, exit codes, counts, defects, and audit results>
HANDOFF: Coordinator — declare the final lifecycle only after validating this report.
LIFECYCLE: PLANNED | IMPLEMENTED | QA_PASSED | CHANGES_REQUESTED | BLOCKED | PASSED
