import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ServicesPage from "./page";

describe("services page", () => {
  it("renders the services hero and required sections", () => {
    const html = renderToStaticMarkup(<ServicesPage />);
    expect(html).toContain("Software built around the way your business works.");
    expect(html).toContain("Focused expertise across the product lifecycle.");
    expect(html).toContain("The right shape for your stage.");
    expect(html).toContain("Clear decisions. Visible progress. No black box.");
    expect(html).toContain("Ask Miners");
  });
});
