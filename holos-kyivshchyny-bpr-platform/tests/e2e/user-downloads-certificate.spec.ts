import { test, expect } from "@playwright/test";
test("user-downloads-certificate", async ({ page }) => {
  await page.goto("/uk");
  await expect(page.getByText("Голос Київщини").first()).toBeVisible();
});
