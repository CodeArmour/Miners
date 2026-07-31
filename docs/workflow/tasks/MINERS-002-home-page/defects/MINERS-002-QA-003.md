# MINERS-002-QA-003 — Card and product visual treatment materially diverges

- **Severity:** High.
- **Affected criteria:** AC-002, AC-005, AC-009, AC-010.
- **Reproduction:** Compare the Figma desktop/responsive references for nodes `10:2` and `17:2` with the generated screenshots and inspect `.service-card`, `.project-card`, `.project-art`, and `.product-window`.
- **Expected:** Cards and product visual preserve the reference geometry, spacing, radius, borders, shadows, glass treatment, accent surfaces, and content hierarchy.
- **Actual:** Services are generic white glass cards with minimal content; projects use simple CSS line/block art; the product window is a simplified placeholder composition. The resulting card geometry, visual hierarchy, and product imagery materially diverge from the supplied references.
- **Root cause:** Figma card and product compositions were replaced with simplified generic CSS placeholders rather than faithful component treatments/assets.
- **Evidence:** `src/app/page.tsx`, `src/app/globals.css`, and screenshots `test-results/MINERS-002/mobile-375x812.png`, `tablet-768x1024.png`, `desktop-1440x900.png`.
- **Correction:** Reworked service/project cards, project art, product-window effects, borders, radii, shadows, spacing, and hierarchy toward the Figma references.
- **Independent verification:** Regenerated mobile/tablet/desktop screenshots inspected; no clipping, overlap, overflow, or unreadable content; E2E 3/3 passed.
- **Status:** VERIFIED_CLOSED.
