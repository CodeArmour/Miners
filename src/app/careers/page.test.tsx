import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import CareersPage from "./page";
describe("careers page",()=>{it("renders truthful careers structure",()=>{const html=renderToStaticMarkup(<CareersPage/>);expect(html).toContain("Build work that moves people forward.");expect(html).toContain("Why join");expect(html).toContain("Sample pathways");expect(html).toContain("Openings will be published here.");})});
