<!-- openwolf:begin -->
# OpenWolf

@.wolf/OPENWOLF.md

This project uses OpenWolf for context management. Read and follow .wolf/OPENWOLF.md every session. Check .wolf/cerebrum.md before generating code. Check .wolf/anatomy.md before reading files.
<!-- openwolf:end -->

# Miners Engineering Workflow

This repository uses a controlled five-agent lifecycle. The primary Codex thread is the Coordinator; project agents are `planner`, `developer`, `qa`, `reviewer`, and `status`.

## Core rules

- Assign every feature, fix, refactor, migration, or material configuration change a unique `MINERS-###` ID.
- Inspect `docs/workflow/task-registry.md` and `docs/workflow/tasks/` before assigning the next ID; never reuse an ID.
- Run stages in order: Planner → Developer → QA → Reviewer → Status.
- Wait for each dependent stage and persist its report before starting the next.
- Developer is the only role allowed to change application code or tests.
- Planner, QA, Reviewer, and Status are strictly read-only.
- Evidence is required for every pass; missing evidence, unresolved defects, and unjustified skipped checks cannot pass.
- Preserve unrelated user changes. Never use destructive Git commands.
- A task is complete only when Status reports `LIFECYCLE: PASSED`.

## Lifecycle

| Gate | Required result | Next lifecycle |
|---|---|---|
| Planner | `STATUS: PASS` | `PLANNED` |
| Developer | `STATUS: PASS` | `IMPLEMENTED` |
| QA | `STATUS: PASS`, all criteria passed | `QA_PASSED` |
| Reviewer | `STATUS: PASS`, `REVIEW_DECISION: APPROVE` | Status audit |
| Status | complete evidence chain | `PASSED` |

Other valid states are `CHANGES_REQUESTED` and `BLOCKED`.

## Planner

Planner inspects the request and repository, defines included and excluded scope, assumptions, dependencies, risks, affected systems, numbered and objectively testable acceptance criteria, validation strategy, implementation sequence, and Definition of Done. Developer may start only after Planner PASS.

## Developer

Developer reads the approved plan, implements only its scope, preserves unrelated changes, adds or updates tests, runs required validation, lists every changed file, and records deviations and limitations. QA may start only after Developer PASS.

## QA

QA independently validates every acceptance criterion and relevant regression, formatting, lint, type, test, build, accessibility, responsive, and visual requirement. QA never repairs defects. QA defect IDs use `MINERS-###-QA-###`.

If QA fails, route the task to Developer, then repeat QA.

## Reviewer

Reviewer starts only after QA PASS and evaluates correctness, architecture, maintainability, duplication, security, privacy, accessibility, performance, framework conventions, errors, edge cases, test quality, dependencies, scope, and unrelated changes. Reviewer never repairs defects.

Reviewer must declare exactly one of `APPROVE`, `REQUEST_CHANGES`, or `BLOCKED`. Review defect IDs use `MINERS-###-REV-###`. A requested change returns to Developer, then repeats QA and Reviewer.

## Status

Status audits the handoff chain and does not implement, repair, re-plan, or substitute for QA. Only Status declares the authoritative lifecycle. `PASSED` requires Planner PASS, Developer PASS, QA PASS on every criterion, Reviewer PASS with APPROVE, complete evidence, and no unresolved blocking defect.

## Report persistence

Each task uses:

```text
docs/workflow/tasks/MINERS-###-short-title/
├── 00-task-brief.md
├── 01-planner-report.md
├── 02-developer-report.md
├── 03-qa-report.md
├── 04-reviewer-report.md
├── 05-status-report.md
└── defects/
```

## Coordinator-controlled report persistence

Every agent returns its complete report through its agent-thread response. The Coordinator:

1. validates the required handoff block;
2. confirms task ID, title, role, status, and destination;
3. saves the report verbatim;
4. reads it back and confirms it matches;
5. evaluates the stage gate;
6. starts the next stage only when permitted.

The next stage must never begin before the previous report is saved and verified. Once verified, the persisted file is authoritative; the thread response is its transfer record.

The Coordinator must not change a status, reviewer decision, lifecycle, defect, warning, skipped check, or evidence; reinterpret failure as pass; or silently repair an incomplete report. It may keep a separate persistence record with timestamp, source, destination, and verification result.

An invalid report is missing or contradicts required role, status, task, report path, evidence, handoff, or role-specific fields. Return it to the same agent for a complete corrected response; do not advance or persist a malformed report as authoritative.

Read-only agents must not create reports, update the registry or defects, stage commits, or modify repository files. An unauthorized write is a workflow violation that Status must record and that must be resolved before PASSED.

After Status responds, the Coordinator saves and reads back `05-status-report.md`, confirms the declared lifecycle, updates the registry, and reports the result. Saving a report does not itself make a task pass.

## Failure routing

| Result | Action |
|---|---|
| Planner PASS | Developer |
| Planner FAIL/BLOCKED | stop; resolve failure/blocker |
| Developer PASS | QA |
| Developer FAIL/BLOCKED | Developer or blocker owner |
| QA PASS | Reviewer |
| QA FAIL | Developer with all defects, then QA |
| QA BLOCKED | resolve blocker |
| Reviewer APPROVE + PASS | Status |
| Reviewer REQUEST_CHANGES + FAIL | Developer, then QA and Reviewer |
| Reviewer BLOCKED | resolve blocker |
| Status `LIFECYCLE: PASSED` | close task |
| Any other lifecycle | keep task open |

## Correction rounds

After any relevant code change, previous affected validation is stale. Developer documents defect IDs, root causes, fixes, files, and rerun results. QA independently verifies fixes and regression coverage. Reviewer inspects the updated diff after QA passes. Use `correction-round.md` to record each round.

Defect states are `OPEN`, `FIXED_PENDING_VERIFICATION`, `VERIFIED`, and `ACCEPTED_NON_BLOCKING`. Only QA verifies QA defects. Reviewer defects close only through later Reviewer approval.

## Evidence standard

Evidence should include exact paths, commands, exit codes, pass/fail/skip counts, browser viewports, screenshot paths, build results, reproduction steps, expected and actual behavior, and relevant symbols. “Tests passed” or “works” alone is insufficient. Never invent a command or claim an unavailable/skipped check passed.

## Required handoff block

Every agent response ends with:

```text
AGENT: <Planner | Developer | QA | Reviewer | Status>
STATUS: <PASS | FAIL | BLOCKED>
TASK: <MINERS-### — title>
REPORT: <canonical report path>
EVIDENCE: <files, commands, exit codes, counts, and results>
HANDOFF: <next agent and exact action>
```

QA additionally includes:

```text
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
```

Reviewer additionally includes:

```text
REVIEW_DECISION: APPROVE | REQUEST_CHANGES | BLOCKED
DEFECTS: <IDs or NONE>
```

Status additionally includes:

```text
LIFECYCLE: <PLANNED | IMPLEMENTED | QA_PASSED | CHANGES_REQUESTED | BLOCKED | PASSED>
```

## Repository and OpenWolf safety

Inspect the working tree before changes. Do not overwrite unrelated work, expand scope silently, weaken tests to hide defects, commit secrets, or invent project commands.

If OpenWolf is installed, preserve its block and hooks, read and follow `.wolf/OPENWOLF.md`, read `.wolf/anatomy.md` before repository inspection and `.wolf/cerebrum.md` before code generation, and use only commands supported by the installed version. OpenWolf never replaces application tests or independent QA.

## Required final report

The final report includes task ID/title; Planner, Developer, QA, Reviewer and Status results; reviewer decision; final lifecycle; changed files; validation commands/results; acceptance-criteria coverage; resolved defects; and remaining non-blocking notes.
