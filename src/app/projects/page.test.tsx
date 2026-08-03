import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

describe("projects page", () => {
  it("renders the project structure and truthful sample language", () => {
    const html = renderToStaticMarkup(<ProjectsPage />);
    expect(html).toContain("Thoughtful software for meaningful momentum.");
    expect(html).toContain("Sample case study");
    expect(html).toContain("Proof framework");
    expect(html).toContain("Delivery approach");
    expect(html).toContain("All work");
  });
});
