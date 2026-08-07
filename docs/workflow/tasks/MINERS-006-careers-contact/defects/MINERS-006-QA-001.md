# MINERS-006-QA-001 — Contact field feedback is duplicated and not associated

- **Severity:** High (blocking accessibility/form-state validation).
- **Affected criteria:** AC-006, AC-007, AC-011.
- **Mapping rationale:** AC-006 covers inquiry field states; AC-007 covers validation announcements and association; AC-011 covers responsive/accessibility requirements. AC-012 covers runtime/error handling, which independently passed and is not affected by this feedback-association defect.
- **Reproduction:** Start production server, open `/contact`, fill Email with `bad`, blur the field, wait for validation, then inspect the Email input and feedback DOM.
- **Expected:** One concise invalid message associated to the Email input via `aria-describedby` (or equivalent), announced once through the intended live-region semantics.
- **Actual:** Direct Playwright produced `aria-invalid="true"`, `aria-describedby=null`, two matching error message nodes (`Enter a valid email address.` twice: outer `.field-feedback-error` and nested `.field-state-error`), and duplicate alert/status semantics.
- **Evidence:** `src/app/contact/page.tsx` `FieldFeedback`; `src/components/ui/field.tsx` `FieldStateMessage`; direct production Playwright output `{"ariaInvalid":"true","describedby":null,"feedback":2,"text":["Enter a valid email address.","Enter a valid email address."]}`. Existing E2E does not assert feedback cardinality or association.
- **Correction verification:** Production Playwright confirmed Name, Email, Project brief, and Consent each expose `aria-invalid="true"` when invalid, stable `aria-describedby` values (`name-feedback`, `email-feedback`, `brief-feedback`, `consent-feedback`), exactly one feedback node and one concise message. Valid completion opened one confirmation dialog with Keep editing and Send inquiry actions. Full lint/type/unit/build/E2E regression passed.
- **Status:** VERIFIED_CLOSED.
