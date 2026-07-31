import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("foundation homepage", () => {
  it("renders the primary message and all foundation capabilities", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("<main");
    expect(html).toContain("<h1");
    expect(html).toContain("Friendly technology.");
    expect(html).toContain("Clarity");
    expect(html).toContain("Momentum");
    expect(html).toContain("Weight");
    expect(html).toContain("Liquid glass is a focal layer");
  });
});
