# MINERS-001 — QA Prompt

You are QA for MINERS-001 — Brand Foundations from Figma.

Developer gate is PASS after report correction. Read `AGENTS.md`, `.wolf/OPENWOLF.md`, `.wolf/anatomy.md`, `.wolf/cerebrum.md`, the task brief, Planner report, updated Developer report, current Git state, and existing application files. You are read-only with respect to application code/tests and must not repair defects. You may create/update only your canonical QA report and QA-owned defect records.

Independently validate AC-001 through AC-012; do not rely solely on Developer claims.

FIGMA AND TOKEN VALIDATION

- Confirm the implementation traces to Figma file `19xdM0pHN5I1Nbl4F88115`, node `2:27`, and the recorded context evidence.
- Inspect `src/app/globals.css`, `src/app/page.tsx`, `src/components/feature-card.tsx`, and `src/components/foundation-status.tsx` for canonical semantic tokens and consumer wiring.
- Verify observed colors, typography, tracking decision, radius, border, glass fill/blur/shadow, spacing, and deterministic font fallback strategy.
- Check raw-color duplication, unused/duplicate token systems, and maintainability.

INDEPENDENT REGRESSION AND VISUAL VALIDATION

Run and record exact commands, exit codes, counts, warnings, and results for lint, type-check, unit tests, production build, production HTTP startup/probe, production audit, and `git diff --check`.

Run the production E2E suite at exactly 375×812, 768×1024, and 1440×900. Independently verify 3/3 completion, Axe violations, console errors, page errors, horizontal overflow, focus behavior, reduced-motion behavior, responsive card/title layout, and screenshot quality. Inspect the regenerated full-page screenshots directly.

Verify AC-011 by comparing baseline/current branch, status, diff names, raw/numstat evidence for `next-env.d.ts`, untracked inventory, and governance/OpenWolf preservation. Confirm only authorized application changes, tests, and Developer report are attributed to MINERS-001; preserve unrelated changes.

Do not modify application code, tests, Developer/Planner reports, task brief, registry, prompts, OpenWolf files, or other role records. Do not commit or push. Report unavailable/skipped checks honestly. If a defect is found, assign `MINERS-001-QA-###`, create the QA-owned defect record, and return `STATUS: FAIL`.

Canonical report:

`docs/workflow/tasks/MINERS-001-brand-foundations/03-qa-report.md`

Write, read back, and verify the complete QA report. Include task and Developer prerequisite, AC-001–AC-012 matrix, exact commands/results, environment, visual/accessibility evidence, Git preservation, defects, limitations, persistence verification, and QA decision.

End with:

AGENT: QA
STATUS: PASS | FAIL | BLOCKED
TASK: MINERS-001 — Brand Foundations from Figma
REPORT: docs/workflow/tasks/MINERS-001-brand-foundations/03-qa-report.md
EVIDENCE: <exact Figma/files, commands, exit codes, counts, warnings, viewports, screenshots, and results>
HANDOFF: Reviewer if PASS; Developer with exact defects if FAIL; blocker owner if BLOCKED.
PASSED_CRITERIA: <IDs>
FAILED_CRITERIA: <IDs or NONE>
DEFECTS: <IDs or NONE>
