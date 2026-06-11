import { test, expect } from "@playwright/test";
test("visitor-opens-event-detail", async ({ page }) => {
  await page.goto("/uk");
  await expect(page.getByText("Голос Київщини").first()).toBeVisible();
});
