import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile-375x812", width: 375, height: 812 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
] as const;

for (const viewport of viewports) {
  test(`about ${viewport.name} is responsive, accessible, and complete`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", message => message.type() === "error" && consoleErrors.push(message.text()));
    page.on("pageerror", error => pageErrors.push(error.message));
    await page.setViewportSize(viewport);
    await page.goto("/about");
    await expect(page.getByRole("heading", { level: 1, name: /good software starts with a better conversation/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Listen. Make. Grow." })).toBeVisible();
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
    await expect(page.locator('a[href="/about"]')).toHaveCount(2);
    await expect(page.locator('.nav-submenu a[href="/about#mission-title"]')).toHaveAttribute("href", "/about#mission-title");
    await expect(page.locator('.nav-submenu a[href="/about#talent"]')).toHaveAttribute("href", "/about#talent");
    const axe = await new AxeBuilder({ page }).analyze();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const brokenImages = await page.locator("img").evaluateAll(images => images.filter(image => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0).length);
    await page.screenshot({ path: `test-results/MINERS-005/about-${viewport.name}.png`, fullPage: true });
    expect(axe.violations).toEqual([]);
    expect(overflow).toBe(false);
    expect(brokenImages).toBe(0);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}
