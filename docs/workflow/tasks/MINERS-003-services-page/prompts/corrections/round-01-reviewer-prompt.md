# Reviewer Re-review Prompt — MINERS-003 Round 01

You are the Reviewer returning for re-review after a Developer correction and independent QA revalidation. Follow the manual workflow and do not modify application code or tests. You may update only your canonical Reviewer report and the Reviewer-owned defect record.

## Task and gate

- Task: `MINERS-003 — Services Page from Figma`
- Branch: `task/miners-003-services-page`
- Task directory: `docs/workflow/tasks/MINERS-003-services-page/`
- Previous decision: `STATUS: FAIL`, `REVIEW_DECISION: REQUEST_CHANGES`
- Defect: `MINERS-003-REV-001` duplicate global/page-local footers
- Developer correction: `FIXED_PENDING_VERIFICATION`
- QA revalidation: `STATUS: PASS`; AC-001 through AC-012 passed; defect independently `VERIFIED_CLOSED`
- Current lifecycle: `QA_PASSED`; Reviewer re-review is authorized. Status remains pending.

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md` and relevant context files
3. `docs/workflow/README.md`
4. `docs/workflow/task-registry.md`
5. `docs/workflow/tasks/MINERS-003-services-page/00-task-brief.md`
6. `docs/workflow/tasks/MINERS-003-services-page/01-planner-report.md`
7. `docs/workflow/tasks/MINERS-003-services-page/02-developer-report.md`
8. `docs/workflow/tasks/MINERS-003-services-page/03-qa-report.md`
9. `docs/workflow/tasks/MINERS-003-services-page/04-reviewer-report.md`
10. `docs/workflow/tasks/MINERS-003-services-page/defects/MINERS-003-REV-001.md`
11. The corrected source and tests named by the Developer report

## Re-review scope

Confirm the prior defect is actually resolved: `src/app/layout.tsx` must be the sole rendered `SiteFooter` owner; `/` and `/services` must each expose exactly one footer/contentinfo landmark; page-local footer markup must not render; and footer content, accessibility, styling, and responsive behavior must remain intact. Review the full implementation against AC-001 through AC-012 and confirm QA’s correction-round evidence. Check correctness, architecture, security, accessibility, maintainability, changed-file authorization, and the documented audit/OpenWolf limitations.

Independently reproduce appropriate checks, at minimum:

- `npm.cmd run lint`
- `npm.cmd run type-check`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- Production HTTP checks for `/` and `/services`
- DOM/footer-cardinality checks for both routes
- Port/process cleanup
- `git diff --check`
- Review the three required screenshots under `test-results/MINERS-003/`

Record exact commands, exit codes, counts, warnings, limitations, and any remaining risks. Do not claim unavailable npm audits as passes.

If the correction is verified, update `MINERS-003-REV-001.md` with the final `VERIFIED_CLOSED` disposition and update the Reviewer report with the correction evidence. If any blocking issue remains, keep the defect open and report `REQUEST_CHANGES` or `BLOCKED`.

## Reviewer report requirements

Update `docs/workflow/tasks/MINERS-003-services-page/04-reviewer-report.md` with the complete re-review: QA prerequisite, corrected diff scope, AC-001–AC-012 assessment, footer defect verification, correctness/architecture/security/accessibility/maintainability findings, regression evidence, risks/limitations, persistence verification, and final decision. Include exactly one `REVIEW_DECISION:` field.

Read the saved report and defect record back from disk and return the complete persisted report. End with:

```text
AGENT: Reviewer
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-003 — Services Page from Figma
REPORT: docs/workflow/tasks/MINERS-003-services-page/04-reviewer-report.md
EVIDENCE: <exact re-review files, commands, exit codes, counts, footer cardinality, cleanup, limitations, and decision evidence>
HANDOFF: Coordinator — validate this persisted re-review; if PASS with REVIEW_DECISION: APPROVE and defect VERIFIED_CLOSED, prepare the Status prompt; otherwise route the next correction or blocker.
REVIEW_DECISION: <APPROVE | REQUEST_CHANGES | BLOCKED>
DEFECTS: <NONE or exact IDs and dispositions>
```
