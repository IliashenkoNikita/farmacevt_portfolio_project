import { test, expect } from "@playwright/test";
test("public-verifies-certificate", async ({ page }) => {
  await page.goto("/uk");
  await expect(page.getByText("Голос Київщини").first()).toBeVisible();
  await page.goto("/uk/certificate/verify/verify_demo_active_8YK4mP");
  await expect(page.getByText("GK-BPR-2026-PV-000123")).toBeVisible();
});
