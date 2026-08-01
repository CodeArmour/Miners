# MINERS-003-REV-001 — Duplicate page footers

- **Defect ID:** MINERS-003-REV-001
- **Severity:** Medium (blocking review approval)
- **Area:** Shared layout architecture / AC-005, AC-012
- **Reproduction:** Inspect `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/services/page.tsx`. `RootLayout` renders `<SiteFooter />` after `{children}`. Both route pages also render a `<footer className="site-footer">` inside their own page output.
- **Expected:** Each route renders exactly one shared footer through the established layout integration.
- **Actual:** `/` and `/services` each render a page-local footer plus the global `SiteFooter`, producing duplicate footer content and duplicate navigation on the page.
- **Evidence:** `src/app/layout.tsx` contains `SiteFooter`; `src/app/page.tsx` contains one `site-footer`; `src/app/services/page.tsx` contains one `site-footer`. Fresh `npm.cmd run lint`, `npm.cmd run type-check`, `npm.cmd test`, `npm.cmd run build`, and `npm.cmd run test:e2e` pass, but these checks do not assert footer cardinality.
- **Required correction:** Remove the duplicate page-local footer markup or otherwise make the layout/page ownership unambiguous, preserving the shared footer content and rerun affected unit, build, E2E, accessibility, and regression checks.
- **Independent re-review verification:** `src/app/layout.tsx` is now the sole `SiteFooter` owner; `src/app/page.tsx` and `src/app/services/page.tsx` contain no page-local footer markup. Production DOM checks report exactly one `footer` and one `contentinfo` on both `/` and `/services`, with HTTP 200 and no overflow.
- **Final disposition:** VERIFIED_CLOSED.
