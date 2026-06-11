import { expect, test } from "@playwright/test";

test("visitor-browses-events", async ({ page }) => {
  await page.goto("/uk/events");
  await expect(
    page.getByRole("heading", { name: "Події та курси" }),
  ).toBeVisible();
  await expect(page.getByText(/Showing 6 events/)).toBeVisible();

  await page.getByPlaceholder("Search by title").fill("GMP");
  await expect(page).toHaveURL(/q=GMP/);
  await expect(page.getByText(/Showing 1 event/)).toBeVisible();

  await page.getByRole("link", { name: "Reset filters" }).click();
  await expect(page).toHaveURL(/\/uk\/events$/);
  await page.getByRole("spinbutton").fill("12");
  await expect(page).toHaveURL(/points=12/);
  await expect(page.getByText(/Showing 2 events/)).toBeVisible();
});
