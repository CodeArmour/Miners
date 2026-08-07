# Planner Prompt — MINERS-006 Careers and Contact Pages from Figma

You are Planner in the manual multi-window workflow. You are read-only with respect to application code and tests. You may create or update only `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`.

## Task and prerequisite

- Task: `MINERS-006 — Careers and Contact Pages from Figma`
- Canonical directory: `docs/workflow/tasks/MINERS-006-careers-contact/`
- Branch: `task/miners-006-careers-contact`
- Current lifecycle: `DRAFT`; Planner is the next permitted role.
- Figma file key: `19xdM0pHN5I1Nbl4F88115`
- Careers node: `70:120`
- Contact node: `72:124`

## Required reading

Read completely:

1. `AGENTS.md`
2. `.wolf/OPENWOLF.md`
3. `.wolf/anatomy.md` before inspecting repository files
4. `.wolf/cerebrum.md` before proposing implementation decisions
5. `docs/workflow/README.md`
6. `docs/workflow/task-registry.md`
7. `docs/workflow/tasks/MINERS-006-careers-contact/00-task-brief.md`
8. Completed MINERS-000 through MINERS-005 reports relevant to preservation and shared conventions
9. Current branch/status and relevant application/configuration structure

Use the mandatory Figma design-to-code workflow to inspect both nodes `70:120` and `72:124`. Record each Figma request/context ID and traceability evidence. Do not implement or modify application code/tests.

## Planning scope

Define the Careers and Contact objectives, included/excluded scope, section order/copy, careers roles/talent content, contact form or CTA behavior, validation/error/success states, assets/provenance, interactions, responsive behavior, typography/tokens, accessibility, reduced motion, shared header/footer/theme integration, regression expectations for `/`, `/services`, `/projects`, and `/about`, security, dependencies, risks, and validation strategy. Decide whether any form is presentation-only or has an existing supported destination; do not invent backend behavior. Preserve all prior worktree, Git, OpenWolf, workflow, agent, and documentation changes.

## Required acceptance criteria

Produce numbered, independently testable AC-001 through at least AC-012 covering:

- Both Figma nodes, request IDs, and section order/copy intent
- `/careers` and `/contact` routes plus regression of all existing routes
- Careers content, role/talent cards, application CTA, and truthful placeholder behavior
- Contact content, form/CTA fields, labels, validation, success/error or mailto behavior
- Stable asset provenance, dimensions, alt handling, fallbacks, and no temporary Figma URLs
- Shared navigation, footer, theme, icons, typography, and exact footer ownership
- Responsive layouts at 375×812, 768×1024, and 1440×900
- Keyboard/focus, semantic landmarks, headings, labels, contrast, reduced motion, and Axe
- No overflow, console/page errors, failed requests, broken images, or misleading actions
- Unit/E2E/build/lint/type-check and production HTTP validation
- Screenshot/visual review and Git/OpenWolf/workflow preservation
- Security, dependency, secret, and audit limitations

## Required report

Write the complete report to `docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md`. Read it back from disk and verify it contains task/scope, assumptions/dependencies, risks/mitigations, numbered criteria, test/validation plan, execution order, Definition of Done, Planner decision, both Figma request IDs, and the exact final handoff block.

Use `STATUS: PASS` only when Developer can implement without unresolved material decisions. Use `BLOCKED` for missing Figma context, product decisions, permissions, dependencies, or environment capability. Use `FAIL` when the proposal cannot safely proceed. Return the complete persisted report.

End with:

```text
AGENT: Planner
STATUS: <PASS | FAIL | BLOCKED>
TASK: MINERS-006 — Careers and Contact Pages from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/01-planner-report.md
EVIDENCE: <both Figma IDs, files, commands/results, criteria count, risks, decisions, and report read-back verification>
HANDOFF: Coordinator — validate this Planner report; if PASS, prepare the Developer prompt; otherwise identify the exact blocker or correction.
```
