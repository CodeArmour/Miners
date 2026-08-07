import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ConfirmationDialog, FeedbackNotice } from "./feedback";
import { FieldStateMessage } from "./field";

describe("shared UI states", () => {
  it("renders notification, confirmation, and field states accessibly", () => {
    const html = renderToStaticMarkup(<><FeedbackNotice tone="error" title="Could not send" message="Try again." /><ConfirmationDialog open title="Confirm" message="Continue?" onCancel={() => undefined} onConfirm={() => undefined} /><FieldStateMessage state="loading" /></>);
    expect(html).toContain('role="alert"');
    expect(html).toContain("Keep editing");
    expect(html).toContain("Checking");
  });
});
