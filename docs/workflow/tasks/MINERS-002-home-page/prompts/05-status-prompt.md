# MINERS-002 — Status Prompt

You are Status for MINERS-002 — Home Page from Figma.

Prerequisites are validated: Planner PASS on `task/miners-002-home-page`, Developer PASS through correction rounds, QA PASS on AC-001 through AC-012 with QA-001 through QA-006 `VERIFIED_CLOSED`, and Reviewer PASS with `REVIEW_DECISION: APPROVE` and no Reviewer defects.

Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, task registry, Planner report, latest Developer report, final QA report, Reviewer report, all six QA defect records, correction prompts, current Git state, source/configuration files, public assets, and relevant screenshots.

You are read-only with respect to application code, tests, and other role records. Create/update only the canonical Status report. Do not repair code, rewrite earlier reports, modify defect records, prompts, task brief, registry, or OpenWolf files. The Coordinator records the final lifecycle after validating your report.

Audit the complete evidence chain:

- Task identity, authoritative branch `task/miners-002-home-page`, and both Figma nodes `10:2`/`17:2`.
- Planner, Developer, QA, and Reviewer statuses, paths, handoffs, and evidence.
- AC-001 through AC-012 coverage and objective validation.
- QA-001 through QA-006 dispositions and absence of open defects.
- Typography, SVG/local social assets, product/cards, Selected Work, navbar hierarchy/width/sticky behavior, carousels, menu/theme/chat interactions, accessibility, screenshots, HTTP, cleanup, and Git preservation.
- Changed-file ownership including `public/facebook.png`, `instagram.png`, `twitter.png`, `whatsapp.png`, and preserved `bash.exe.stackdump`.
- npm CI/audit and OpenWolf limitations exactly as disclosed; do not reinterpret unavailable checks as passed.
- Reviewer APPROVE decision and report persistence integrity.

Run these read-only commands from `C:\miners` and record exact exit codes,
counts, warnings, and relevant results in the Status report:

```text
git branch --show-current
git status --short --branch
git diff --name-status
git ls-files --others --exclude-standard
git log -1 --oneline
git diff --check
```

Verify persisted evidence for lint, type-check, unit tests, build, production
HTTP, E2E 3/3 at 375×812, 768×1024, and 1440×900, Axe/console/page-error/
overflow counts, sticky navbar and reduced-width measurements, carousel and
keyboard interactions, screenshots, local asset dimensions/consumers, port and
process cleanup, npm CI/audit limitations, and OpenWolf availability. Do not
present historical role commands as freshly executed by Status.

Declare `LIFECYCLE: PASSED` only when all gates, evidence, criteria, and defect states are complete and Reviewer approved. Otherwise declare the exact non-passing lifecycle.

Decision rules:

- Report `STATUS: PASS` and `LIFECYCLE: PASSED` only when every gate and
  acceptance criterion is supported, all six QA defects are verified closed,
  and no contradiction remains.
- Report `STATUS: FAIL` and `LIFECYCLE: CHANGES_REQUESTED` for a failed gate,
  unresolved defect, unsupported conclusion, or required correction.
- Report `STATUS: BLOCKED` and `LIFECYCLE: BLOCKED` when a missing report,
  dependency, permission, environment capability, or decision prevents a valid
  audit conclusion.
- Never repair earlier records or infer a pass from missing evidence.

Canonical report:

`docs/workflow/tasks/MINERS-002-home-page/05-status-report.md`

Write, read back, and verify the complete Status report with task identity, each role result, report-path/handoff audit, acceptance-criteria and defect audit, validation evidence audit, changed files/ownership, remaining notes, final lifecycle, and persistence verification.

Distinguish application/configuration/test files, lifecycle records, preserved
MINERS-000/MINERS-001/governance/OpenWolf paths, `bash.exe.stackdump`, and
validation artifacts. Name every canonical report and all six QA defect records.

End with:

AGENT: Status
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-002 — Home Page from Figma
REPORT: docs/workflow/tasks/MINERS-002-home-page/05-status-report.md
EVIDENCE: <exact reports, files, commands, exit codes, counts, screenshots, assets, defects, limitations, and results>
HANDOFF: Coordinator — validate this report and record the final lifecycle.
LIFECYCLE: PLANNED | IMPLEMENTED | QA_PASSED | CHANGES_REQUESTED | BLOCKED | PASSED
