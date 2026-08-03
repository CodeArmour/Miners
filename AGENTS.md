<!-- openwolf:begin -->
# OpenWolf

@.wolf/OPENWOLF.md

This project uses OpenWolf for context management. Read and follow .wolf/OPENWOLF.md every session. Check .wolf/cerebrum.md before generating code. Check .wolf/anatomy.md before reading files.
<!-- openwolf:end -->

# Miners manual multi-agent workflow

This repository uses a manual multi-window workflow. The user runs each role in
its own CLI window and manually transfers control between roles.

Required lifecycle:

```text
Coordinator → Planner → Coordinator → Developer → Coordinator → QA
→ Coordinator → Reviewer → Coordinator → Status → Coordinator
```

The Coordinator must never spawn, delegate to, wait for, monitor, interrupt, or
communicate with agents. It prepares the prompt for one permitted role and then
stops. The user sends that prompt to the role's separate CLI window.

## Roles

1. `coordinator` initializes the workflow, writes role prompts, validates each
   persisted report, enforces lifecycle gates, and routes corrections.
2. `planner` defines scope, risks, numbered acceptance criteria, tests, and the
   Definition of Done.
3. `developer` implements only after Planner reports `PASS`, maintains tests,
   performs corrections, and records reproducible validation evidence.
4. `qa` independently validates every acceptance criterion and records defects.
5. `reviewer` performs final review only after QA reports `PASS`.
6. `status` audits all reports and publishes the authoritative lifecycle state.

## Task identity and directory

- Assign every task an ID in the form `MINERS-###`.
- Before assigning an ID, the Coordinator must inspect the task registry and
  existing task directories and choose the next valid unused ID.
- Each task has one canonical directory:

  `docs/workflow/tasks/MINERS-###-short-title/`

- All prompts, reports, defects, and correction records for the task must remain
  inside that task directory.

## Canonical task structure

```text
docs/workflow/tasks/MINERS-###-short-title/
├── 00-task-brief.md
├── prompts/
│   ├── 01-planner-prompt.md
│   ├── 02-developer-prompt.md
│   ├── 03-qa-prompt.md
│   ├── 04-reviewer-prompt.md
│   ├── 05-status-prompt.md
│   └── corrections/
│       ├── round-01-developer-prompt.md
│       ├── round-01-qa-prompt.md
│       └── ...
├── 01-planner-report.md
├── 02-developer-report.md
├── 03-qa-report.md
├── 04-reviewer-report.md
├── 05-status-report.md
└── defects/
    ├── MINERS-###-QA-001.md
    ├── MINERS-###-REV-001.md
    └── ...
```

Create only the files required by the current stage. Do not create placeholder
reports for stages that have not run.

## Ownership and write permissions

### Coordinator

The Coordinator may create or update only:

- `docs/workflow/task-registry.md`
- The current task directory and `00-task-brief.md`
- Prompt files under the current task's `prompts/` directory
- Coordinator validation or routing metadata explicitly defined by the workflow

The Coordinator must not:

- Perform Planner, Developer, QA, Reviewer, or Status work
- Modify application code or tests
- Write, rewrite, silently repair, or replace another role's report
- Change another role's conclusion
- Automatically advance to another stage

### Planner

Planner is read-only with respect to application code and tests. Planner may
create or update only:

`docs/workflow/tasks/MINERS-###-short-title/01-planner-report.md`

### Developer

Developer is the only role allowed to modify application code and tests.
Developer may also create or update only its own canonical report:

`docs/workflow/tasks/MINERS-###-short-title/02-developer-report.md`

Developer must not modify the task registry, task brief, prompts, defect files,
or reports owned by Planner, QA, Reviewer, or Status.

### QA

QA is read-only with respect to application code and tests. QA must not repair
defects. QA may create or update only:

- `docs/workflow/tasks/MINERS-###-short-title/03-qa-report.md`
- QA-owned defect files under the current task's `defects/` directory

### Reviewer

Reviewer is read-only with respect to application code and tests. Reviewer must
not repair defects. Reviewer may create or update only:

- `docs/workflow/tasks/MINERS-###-short-title/04-reviewer-report.md`
- Reviewer-owned defect files under the current task's `defects/` directory

### Status

Status is read-only with respect to application code, tests, and other roles'
records. Status may create or update only:

`docs/workflow/tasks/MINERS-###-short-title/05-status-report.md`

No role may modify another role's report, prompt, conclusion, or owned defect
record.

## Coordinator prompt procedure

For each stage, the Coordinator must:

1. Read this file, the task brief, all prerequisite reports, relevant defect
   files, and the current repository state.
2. Confirm that the previous lifecycle gate passed.
3. Write a complete, copy-ready prompt to the canonical prompt path for the next
   permitted role.
4. Read the saved prompt back and validate its structure and instructions.
5. Return the exact prompt path and copy-ready prompt to the user.
6. Stop. Do not start or wait for the role.

Every role prompt must include:

- Role identity and strict permission boundaries
- Task ID, title, and canonical task directory
- Files that must be read
- Prerequisite gate and current lifecycle state
- Approved scope or required correction scope
- Acceptance criteria or validation targets
- Exact owned report path
- Required report structure
- Required commands and evidence
- PASS, FAIL, and BLOCKED rules
- Exact handoff format
- Instruction to write, read back, and verify the role's own report

## Role report persistence

Every role owns and persists its own canonical report. The role must:

1. Complete only its authorized work.
2. Write the complete report to its canonical report path.
3. Read the saved report back from disk.
4. Verify that it contains every required section and the final handoff block.
5. Confirm that evidence and conclusions match the repository state.
6. Return the complete persisted report in its CLI response.
7. Wait for the user to return control to the Coordinator.

If the Coordinator finds a malformed, incomplete, contradictory, or unsupported
report, the report owner must correct its own canonical report, read it back,
and return the entire corrected report. The Coordinator must not repair it.

## Coordinator report validation

After the user returns from a role window, the Coordinator must independently:

1. Read the canonical report directly from disk.
2. Confirm the report exists at the expected path.
3. Confirm the agent, task ID, title, status, report path, and handoff.
4. Confirm all required sections, matrices, decisions, and evidence are present.
5. Confirm commands, exit codes, counts, warnings, skipped checks, and limitations
   are disclosed accurately.
6. Compare the report with prerequisite reports, owned defect files, Git status,
   diffs, and relevant repository evidence.
7. Confirm the role modified only authorized files.
8. Reject unsupported PASS claims, missing evidence, unresolved blocking defects,
   or permission violations.
9. Record the validation result and prepare only the next permitted prompt.
10. Stop and wait for the user to move to the next CLI window.

The Coordinator must never reject a report merely because its owning role wrote
or updated its own canonical report in accordance with this file.

## Lifecycle gates

- Developer may begin only after Planner's persisted report is validated with
  `STATUS: PASS`.
- QA may begin only after Developer's persisted report is validated with
  `STATUS: PASS`.
- Reviewer may begin only after QA's persisted report is validated with
  `STATUS: PASS` and all blocking QA defects are verified closed.
- Status may begin only after Reviewer reports `STATUS: PASS` and
  `REVIEW_DECISION: APPROVE`.
- A task is complete only when Status reports `LIFECYCLE: PASSED` and the
  Coordinator validates the Status report.
- Missing evidence, skipped required tests without valid justification, and
  unresolved blocking defects cannot be treated as a pass.

## Failure and correction flow

If Planner reports `FAIL` or `BLOCKED`, the Coordinator must not start Developer.
It must prepare a corrected Planner prompt or report the exact blocker.

If Developer reports `FAIL` or `BLOCKED`, the Coordinator must not start QA. It
must prepare a Developer correction prompt or report the exact blocker.

If QA reports `FAIL`:

1. QA writes or updates `03-qa-report.md` and its QA-owned defect files.
2. The Coordinator validates the QA report and defects.
3. The Coordinator writes the next numbered Developer correction prompt under
   `prompts/corrections/`.
4. Developer reads the QA report, defect files, and correction prompt.
5. Developer fixes only validated defects, reruns affected and regression tests,
   and updates `02-developer-report.md` with:
   - Defect ID
   - Root cause
   - Correction
   - Changed files
   - Validation evidence
   - `FIXED_PENDING_VERIFICATION`
6. The Coordinator validates the updated Developer report.
7. The Coordinator writes a numbered QA revalidation prompt.
8. QA reruns the required checks, updates `03-qa-report.md`, and marks each defect
   `VERIFIED_CLOSED` or `STILL_FAILING`.
9. Repeat until QA reports `PASS` or the task becomes `BLOCKED`.

If Reviewer reports `REQUEST_CHANGES` or `FAIL`, use the same correction cycle:
Reviewer records defects, Coordinator writes a Developer correction prompt,
Developer updates its report after corrections, QA performs required regression
validation, and Reviewer re-reviews only after QA passes.

Status must report `BLOCKED` or a non-passing lifecycle if any handoff, report,
validation, or defect state is missing or contradictory. Status must not repair
earlier records.

## Required report contracts

### Planner report

`01-planner-report.md` must include:

- Task and scope
- Assumptions and dependencies
- Risks and mitigations
- Numbered acceptance criteria
- Test and validation plan
- Execution order
- Definition of Done
- Planner decision

### Developer report

`02-developer-report.md` must include:

- Task and Planner prerequisite
- Implementation summary
- Acceptance-criteria implementation matrix
- Changed files
- Technical decisions
- Tests added or updated
- Exact validation evidence
- Defects addressed
- Deviations and known limitations
- Report persistence verification
- Developer decision

### QA report

`03-qa-report.md` must include:

- Task and Developer prerequisite
- Acceptance-criteria validation matrix
- Test environment
- Exact commands and results
- Passed acceptance criteria
- Defect IDs, severity, reproduction, expected result, and actual result
- Regression evidence
- Skipped checks and limitations
- Report persistence verification
- QA decision

QA must never report `PASS` while a blocking defect remains open.

### Reviewer report

`04-reviewer-report.md` must include:

- Task and QA prerequisite
- Scope and diff reviewed
- Acceptance-criteria review
- Correctness, architecture, security, accessibility, and maintainability findings
- Test and regression assessment
- Defect IDs and severity
- Remaining risks
- Report persistence verification
- Reviewer decision

Reviewer must report exactly one:

- `REVIEW_DECISION: APPROVE`
- `REVIEW_DECISION: REQUEST_CHANGES`
- `REVIEW_DECISION: BLOCKED`

### Status report

`05-status-report.md` must include:

- Task identity
- Result of Coordinator, Planner, Developer, QA, and Reviewer
- Report-path and handoff audit
- Acceptance-criteria and defect audit
- Validation evidence audit
- Changed files
- Remaining non-blocking notes
- Final lifecycle
- Report persistence verification

Status must report exactly one:

- `LIFECYCLE: PASSED`
- `LIFECYCLE: CHANGES_REQUESTED`
- `LIFECYCLE: BLOCKED`

## Required final handoff block

Every role report and CLI response must end with:

```text
AGENT: <Planner | Developer | QA | Reviewer | Status>
STATUS: <PASS | FAIL | BLOCKED>
TASK: <MINERS-### — title>
REPORT: docs/workflow/tasks/<task-folder>/<canonical-report-file>.md
EVIDENCE: <files, exact commands, exit codes, counts, warnings, and results>
HANDOFF: <Coordinator validation and exact next permitted action or blocker>
```

QA must additionally list passed acceptance criteria and defect IDs in its
report. Reviewer must additionally include its `REVIEW_DECISION`. Status must
additionally include the lifecycle and result of every role.

## Lifecycle states

- `PLANNED`: Planner passed; Developer is pending.
- `IMPLEMENTED`: Developer passed; QA is pending.
- `QA_PASSED`: QA passed; Reviewer is pending.
- `CHANGES_REQUESTED`: QA or Reviewer found unresolved defects.
- `BLOCKED`: A role needs a dependency, permission, environment capability, scope
  decision, or user decision.
- `PASSED`: Planner, Developer, QA, and Reviewer passed with evidence, Reviewer
  approved, and Status completed its audit.

## Required final Coordinator report

After validating `LIFECYCLE: PASSED`, the Coordinator returns:

- Task ID and title
- Planner status
- Developer status
- QA status and passed acceptance criteria
- Reviewer status and review decision
- Status result
- Final lifecycle
- Changed files
- Validation evidence
- Defects and final dispositions
- Remaining non-blocking notes

The Coordinator must not declare the task complete before the validated Status
report declares `LIFECYCLE: PASSED`.
