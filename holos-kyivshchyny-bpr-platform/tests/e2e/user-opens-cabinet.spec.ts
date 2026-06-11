import { test, expect } from "@playwright/test";
test("user-opens-cabinet", async ({ page }) => {
  await page.goto("/uk");
  await expect(page.getByText("Голос Київщини").first()).toBeVisible();
});
