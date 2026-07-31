import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile-375x812", width: 375, height: 812 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
] as const;

for (const viewport of viewports) {
  test(`${viewport.name} is responsive, error-free, and accessible`, async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /we build software that moves ideas forward/i,
      }),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    const accessibility = await new AxeBuilder({ page }).analyze();

    const header = page.locator(".site-header");
    const headerBefore = await header.boundingBox();
    await page.evaluate(() => window.scrollTo(0, 1800));
    await page.waitForTimeout(100);
    const headerAfter = await header.boundingBox();
    expect(headerAfter?.y ?? -1).toBeGreaterThanOrEqual(0);
    if (viewport.width >= 900) {
      expect(headerBefore?.width ?? viewport.width).toBeLessThanOrEqual(1312);
      expect(headerBefore?.x ?? 0).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));

    await page.screenshot({
      path: `test-results/MINERS-002/${viewport.name}.png`,
      fullPage: true,
    });

    expect(hasHorizontalOverflow).toBe(false);
    expect(accessibility.violations).toEqual([]);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
    await expect(page.getByRole("button", { name: /ask miners/i })).toBeVisible();
  });
}
