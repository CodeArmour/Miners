import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("foundation homepage", () => {
  it("renders the primary message and all foundation capabilities", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("<main");
    expect(html).toContain("<h1");
    expect(html).toContain("Built on");
    expect(html).toContain("Structured to scale");
    expect(html).toContain("Confidence built in");
    expect(html).toContain("Ready for production");
  });
});
