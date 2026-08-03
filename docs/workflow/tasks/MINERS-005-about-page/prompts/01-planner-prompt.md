# Planner Prompt — MINERS-005 About Page from Figma

You are Planner in the manual multi-window workflow. You are read-only with respect to application code and tests. You may create or update only `docs/workflow/tasks/MINERS-005-about-page/01-planner-report.md`.

## Task and prerequisite

- Task: `MINERS-005 — About Page from Figma`
- Canonical directory: `docs/workflow/tasks/MINERS-005-about-page/`
- Current branch: `task/miners-005-about-page`
- Current lifecycle: `DRAFT`; Planner is the next permitted role.
- Figma file key: `19xdM0pHN5I1Nbl4F88115`
- Target node: `63:116`

## Required reading

Read completely before planning:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`
3. `.wolf/anatomy.md` before inspecting repository files
4. `.wolf/cerebrum.md` before proposing implementation decisions
5. `docs/workflow/README.md`
6. `docs/workflow/task-registry.md`
7. `docs/workflow/tasks/MINERS-005-about-page/00-task-brief.md`
8. Completed MINERS-000 through MINERS-004 reports relevant to preservation and shared conventions
9. Current branch/status and relevant application/configuration structure

Use the mandatory Figma design-to-code workflow and inspect node `63:116`. Record the Figma request/context IDs and traceability evidence in the Planner report. Do not implement or modify application code/tests.

## Planning scope

Define the About page objective, included/excluded scope, section order and copy, company/story/team/value content, assets and provenance, interactions, responsive behavior, typography/tokens, accessibility, reduced motion, error/empty states, shared header/footer/theme integration, regression expectations for `/`, `/services`, and `/projects`, security, dependencies, risks, and validation strategy. Reuse existing foundations and components where appropriate; identify any genuinely new components or dependencies. Preserve all prior worktree, Git, OpenWolf, workflow, agent, and documentation changes. No commit or push.

## Required acceptance criteria

Produce numbered, independently testable AC-001 through at least AC-012 covering:

- Figma traceability and About section order/copy intent
- About route and regression of existing routes
- Story, values, team/capability, proof, or other sections evidenced by node `63:116`
- Stable asset provenance, dimensions, alt handling, and fallbacks
- Shared navigation, footer, theme, icons, and typography
- Responsive layouts at 375×812, 768×1024, and 1440×900
- Keyboard/focus, semantic landmarks, heading structure, contrast, reduced motion, and Axe
- Interactive controls, links, menus, and any supported CTA/chat behavior
- No horizontal overflow, console/page errors, failed requests, or broken images
- Unit/E2E/build/lint/type-check and production HTTP validation
- Screenshot/visual review and Git/OpenWolf/workflow preservation
- Security, dependency, secret, and audit limitations

## Required report

Write the complete report to `docs/workflow/tasks/MINERS-005-about-page/01-planner-report.md`. Read it back from disk and verify it contains:

- Task and scope
- Assumptions and dependencies
- Risks and mitigations
- Numbered acceptance criteria
- Test and validation plan
- Execution order
- Definition of Done
- Planner decision
- Figma request/context IDs
- Exact final handoff block

Report `STATUS: PASS` only when Developer can implement without unresolved material decisions. Report `STATUS: BLOCKED` for a missing user decision, inaccessible Figma context, dependency, permission, or environment capability. Report `STATUS: FAIL` when the proposal cannot safely proceed. Return the complete persisted report after reading it back.

End with:

```text
AGENT: Planner
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-005 — About Page from Figma
REPORT: docs/workflow/tasks/MINERS-005-about-page/01-planner-report.md
EVIDENCE: <Figma IDs, files, commands/results, criteria count, risks, and report read-back verification>
HANDOFF: Coordinator — validate this Planner report; if PASS, prepare the Developer prompt; otherwise identify the exact blocker or correction.
```
