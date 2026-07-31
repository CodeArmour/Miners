import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("foundation homepage", () => {
  it("renders the primary message and core homepage sections", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("<main");
    expect(html).toContain("<h1");
    expect(html).toContain("We build software that moves ideas forward.");
    expect(html).toContain("Web platforms");
    expect(html).toContain("Campus Flow");
    expect(html).toContain("Ask Miners");
  });
});
