import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ContactPage from "./page";
describe("contact page", () => {
  it("renders labelled inquiry fields and safe contact paths", () => {
    const html = renderToStaticMarkup(<ContactPage />);
    expect(html).toContain("Tell us what you want to build.");
    expect(html).toContain("What happens next");
    expect(html).toContain("Give us the useful details.");
    expect(html).toContain('name="email"');
    expect(html).toContain('name="consent"');
    expect(html).toContain("hello@miners.group");
  });
});
