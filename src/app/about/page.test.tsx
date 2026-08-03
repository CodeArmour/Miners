import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AboutPage from "./page";

describe("about page", () => {
  it("renders the evidenced story, culture, talent, and conversion structure", () => {
    const html = renderToStaticMarkup(<AboutPage />);
    expect(html).toContain("Good software starts with a better conversation.");
    expect(html).toContain("Human by design");
    expect(html).toContain("Listen");
    expect(html).toContain("Operating principles");
    expect(html).toContain("Talk about joining us");
    expect(html).toContain("Ready when you are.");
  });
});
