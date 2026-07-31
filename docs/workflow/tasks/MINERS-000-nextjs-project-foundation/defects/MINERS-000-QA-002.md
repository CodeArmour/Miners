# MINERS-000-QA-002 — Worktree baseline provenance mismatch

- **Defect ID:** MINERS-000-QA-002
- **Title:** Planner baseline did not include later authorized governance/session paths.
- **Severity:** High (blocking until reconciled).
- **Source/reproduction:** Compare the Planner baseline with `git status --short --branch`, `git diff --name-status`, and `git ls-files --others --exclude-standard`.
- **Affected criteria:** AC-01.
- **Root cause:** User-authorized workflow changes and Coordinator/OpenWolf lifecycle activity occurred after the original Planner baseline was recorded.
- **Developer correction:** Documented path ownership and provenance in the Developer Correction Round 01 report; preserved unrelated changes and made no destructive Git operation.
- **Changed files:** No application files were changed to resolve this defect; provenance was documented in `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md`.
- **Independent QA verification date:** 2026-07-31.
- **Independent verification commands and results:**
  - `git status --short --branch` — exit 0; expected branch preserved.
  - `git diff --name-status` — exit 0; governance/OpenWolf paths reconcile to documented ownership.
  - `git ls-files --others --exclude-standard` — exit 0; application, task, prompt, and QA-owned records accounted for.
  - `git diff --check` — exit 0; no whitespace errors.
  - Reviewed current governance diffs and Developer report provenance; no unrelated file was reverted or modified during Correction Rounds 01–03.
- **Evidence paths:** `docs/workflow/tasks/MINERS-000-nextjs-project-foundation/02-developer-report.md`, `AGENTS.md`, `agents/developer.toml`, `.wolf/cron-state.json`, `.wolf/hooks/_session.json`, `.wolf/memory.md`, `.wolf/token-ledger.json`, `docs/workflow/task-registry.md`.
- **Final disposition:** `VERIFIED_CLOSED`.

