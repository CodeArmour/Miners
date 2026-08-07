# MINERS-006 — Careers, Contact, and Global UI States from Figma
## Developer Report

### Task and Planner prerequisite

Implemented on `task/miners-006-careers-contact` after the updated Planner report passed. Figma evidence covers Careers `70:120`, Contact `72:124`, notification `79:168`, confirmation dialog `80:152`, and field feedback `81:156`.

### Implementation summary

Added responsive Careers and Contact routes with shared navigation/footer, accessible form behavior, truthful mailto handling, inline field validation, loading states, and a confirmation dialog. Added the supplied Miners logo to shared branding. Dark-mode controls and restoration were removed; the site now consistently renders light mode.

### Acceptance-criteria implementation matrix

| Criterion | Implementation and evidence |
|---|---|
| AC-001 | Careers and Contact sections implemented in their route files. |
| AC-002 | Six routes build and return HTTP 200 with shared layout. |
| AC-003 | Careers content, principles, journey, and sample roles implemented. |
| AC-004 | Careers CTAs use direct contact without invented hiring systems. |
| AC-005 | Contact form includes all requested fields, consent, and Send inquiry. |
| AC-006 | Required/email validation uses red invalid states, green valid borders, blue loading spinner, and inline messages. |
| AC-007 | CSS visuals use local/stable assets only. |
| AC-008 | Shared header/footer, logo, typography, focus styles, and SVG conventions are used. |
| AC-009 | Mobile, tablet, and desktop layouts avoid overflow. |
| AC-010 | Semantic labels, headings, focus styles, contrast, and reduced-motion rules are implemented. |
| AC-011 | E2E found no runtime errors, broken images, clipping, or duplicate footers. |
| AC-012 | Static, unit, build, browser, HTTP, diff, audit, and preservation evidence recorded. |
| AC-013 | Shared feedback, confirmation-dialog, and field-state primitives are implemented. |
| AC-014 | Confirmation flow uses Keep editing / Send inquiry and does not claim backend delivery. |

### Changed files

- `src/app/careers/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/careers/page.test.tsx`
- `src/app/contact/page.test.tsx`
- `src/components/site-header.tsx`
- `src/components/theme-context.tsx`
- `src/components/ui/feedback.tsx`
- `src/components/ui/field.tsx`
- `src/components/ui/feedback.test.tsx`
- `src/app/globals.css`
- `tests/e2e/careers-contact.spec.ts`
- `public/logo.png`
- `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md`

Pre-existing OpenWolf files, registry, prior task records, and unrelated worktree content were preserved.

### Technical decisions and tests

Contact validation is per-field and does not show a form-level notice. Valid submission opens a confirmation dialog; Send inquiry then opens the prepared mailto URL. Careers opportunities remain explicitly sample pathways. The shared theme context is now fixed to light mode and the navbar theme icon is hidden.

### Validation results

- `git branch --show-current`: exit 0, `task/miners-006-careers-contact`.
- `npm.cmd run lint`: exit 0.
- `npm.cmd run type-check`: exit 0.
- `npm.cmd test -- --run`: exit 0, 7/7 tests passed.
- `npm.cmd run build`: exit 0; all six routes generated.
- `npm.cmd run test:e2e`: exit 0, 15/15 passed at 375x812, 768x1024, and 1440x900; Axe/runtime/overflow/broken-image checks 0.
- Production route probes: six HTTP 200 responses; server stopped and port 3100 released.
- Screenshots saved under `test-results/MINERS-006/`.
- `git diff --check`: exit 0.
- `npm.cmd audit --json`: exit 1 because the npm advisory endpoint was unavailable; severity counts unavailable.

### Defect correction: MINERS-006-QA-001

- Root cause: `FieldFeedback` wrapped `FieldStateMessage`, creating nested live regions and duplicate error text; inputs did not consistently reference a stable feedback ID.
- Correction: replaced the nested structure with one feedback node per field, assigned stable IDs (`name-feedback`, `email-feedback`, `brief-feedback`, `consent-feedback`), and associated every input with `aria-describedby`. Invalid fields retain `aria-invalid="true"`; valid fields remain border-only; loading retains one status node and spinner.
- Changed files: `src/app/contact/page.tsx`, `tests/e2e/careers-contact.spec.ts`.
- Validation: focused E2E assertions now verify one email feedback node, stable `aria-describedby`, and one message node; lint 0, type-check 0, unit 7/7, build 0, and full E2E 15/15.
- Disposition: `MINERS-006-QA-001` fixed pending independent QA verification (`FIXED_PENDING_VERIFICATION`).

### Deviations and limitations

Responsive behavior is derived from desktop Figma references. Contact relies on the user’s mail client and does not persist data server-side. Dark mode is intentionally disabled per the latest product direction.

### Report persistence verification

This report was written to `docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md`, read back from disk, and verified to contain all required sections and one final handoff block.

### Developer decision

Implementation and validation are complete. `STATUS: PASS`.

AGENT: Developer
STATUS: PASS
TASK: MINERS-006 — Careers, Contact, and Global UI States from Figma
REPORT: docs/workflow/tasks/MINERS-006-careers-contact/02-developer-report.md
EVIDENCE: Changed files listed above; lint 0; type-check 0; unit 7/7; build 0; E2E 15/15 across three required viewports with Axe/runtime/overflow/broken-image checks 0; six HTTP 200 route checks; port 3100 released; screenshots under test-results/MINERS-006/; diff-check 0; audit endpoint unavailable with limitation disclosed; unrelated worktree preserved.
HANDOFF: Coordinator validate this persisted report, then send QA to independently validate AC-001 through AC-014, including the inline form states, confirmation dialog, shared logo, light-only theme behavior, responsive accessibility, runtime, and Git preservation.
