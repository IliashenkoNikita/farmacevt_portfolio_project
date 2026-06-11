import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("accessibility-home", async ({ page }) => {
  await page.goto("/uk");
  await expect(page.getByText("Голос Київщини").first()).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
