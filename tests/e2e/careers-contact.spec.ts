import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile-375x812", width: 375, height: 812 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
] as const;

for (const viewport of viewports) {
  test(`careers and contact ${viewport.name} are accessible and responsive`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", (message) => message.type() === "error" && consoleErrors.push(message.text()));
    page.on("pageerror", (error) => pageErrors.push(error.message));
    await page.setViewportSize(viewport);

    for (const route of ["/careers", "/contact"]) {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByRole("contentinfo")).toHaveCount(1);
      const axe = await new AxeBuilder({ page }).analyze();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      const broken = await page.locator("img").evaluateAll((images) =>
        images.filter((image) => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0).length,
      );
      expect(axe.violations).toEqual([]);
      expect(overflow).toBe(false);
      expect(broken).toBe(0);
      await page.screenshot({ path: `test-results/MINERS-006/${route.slice(1)}-${viewport.name}.png`, fullPage: true });
    }

    await page.goto("/contact");
    await page.getByRole("button", { name: /send inquiry/i }).click();
    await expect(page.locator(".field-group-error")).toHaveCount(3);
    await expect(page.locator(".field-group-error").first().locator(".field-feedback-error")).toContainText("Please enter your name");
    await expect(page.locator('input[name="email"]')).toHaveAttribute("aria-describedby", "email-feedback");
    await expect(page.locator("#email-feedback")).toHaveCount(1);
    await expect(page.locator("#email-feedback .field-state")).toHaveCount(1);
    await expect(page.locator('input[name="name"]')).toHaveAttribute("required", "");
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}
