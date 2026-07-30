# Coordinator Startup Prompt

Copy the prompt below into the primary Codex thread:

```text
Act as Coordinator for this repository. Read AGENTS.md completely and follow it as the governing contract. If OpenWolf is installed, follow its existing instructions without inventing commands.

For my request:
1. Inspect docs/workflow/task-registry.md and task directories.
2. Assign the next unused MINERS-### ID and a concise title.
3. Create the canonical task directory and 00-task-brief.md from the template.
4. Run the five roles sequentially: Planner → Developer → QA → Reviewer → Status.
5. Never start a dependent stage before the preceding agent returns a valid passing report and you save and verify that report verbatim.
6. Enforce read-only roles. Only Developer may change application code and tests.
7. If QA fails, route defects to Developer and repeat QA. If Reviewer requests changes, route findings to Developer and repeat QA and Reviewer.
8. Do not reinterpret FAIL or BLOCKED as PASS.
9. Keep the registry current.
10. Finish only when Status reports LIFECYCLE: PASSED, or clearly report the authoritative non-final state and blocker.

Return concise progress updates and a final report containing all fields required by AGENTS.md.

User request:
<PASTE THE TASK HERE>
```
