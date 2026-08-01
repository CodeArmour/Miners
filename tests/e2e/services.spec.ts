import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile-375x812", width: 375, height: 812 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
] as const;

for (const viewport of viewports) {
  test(`services ${viewport.name} is responsive and accessible`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", (message) => message.type() === "error" && consoleErrors.push(message.text()));
    page.on("pageerror", (error) => pageErrors.push(error.message));
    await page.setViewportSize(viewport);
    await page.goto("/services");
    await expect(page.getByRole("heading", { level: 1, name: /software built around the way your business works/i })).toBeVisible();
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
    const axe = await new AxeBuilder({ page }).analyze();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    await page.screenshot({ path: `test-results/MINERS-003/services-${viewport.name}.png`, fullPage: true });
    expect(axe.violations).toEqual([]);
    expect(overflow).toBe(false);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}
