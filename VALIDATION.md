# Package and Workflow Validation

## Installation checks

- Confirm the starter’s 20 files were copied to intended paths.
- Parse every `.toml` file with a TOML 1.0 parser.
- Confirm all five agent files exist.
- Confirm report destinations match the canonical task layout.
- Confirm existing repository/OpenWolf instructions were preserved during merge.

## Workflow smoke test

Use a harmless documentation-only task and verify:

1. a unique ID is selected from the registry;
2. Planner runs first and stays read-only;
3. Coordinator persists Planner output verbatim;
4. Developer cannot start before Planner PASS;
5. QA and Reviewer stay read-only;
6. a simulated QA failure routes back to Developer;
7. a simulated review change repeats QA and Reviewer;
8. Status refuses PASSED when evidence is missing;
9. registry state matches the final lifecycle.

## Suggested local commands

Use repository-supported equivalents where available:

```bash
find .codex docs/workflow -type f -print
git status --short
```

For TOML, use your platform’s installed parser. Do not add a runtime dependency solely for this check unless your project approves it.

## Success criteria

- No malformed TOML.
- No unexpected starter files.
- No application files changed during installation except deliberate merges.
- Every stage report has its required handoff fields.
- Read-only roles do not write.
- Only Status can produce the final lifecycle.
