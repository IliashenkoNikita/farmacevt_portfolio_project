import { expect, test } from "@playwright/test";

test("visitor-browses-events", async ({ page }) => {
  await page.goto("/uk/events");
  await expect(
    page.getByRole("heading", { name: "Події та навчання" }),
  ).toBeVisible();
  await expect(page.getByText("Знайдено подій: 6")).toBeVisible();

  await page.getByPlaceholder("Пошук за назвою").fill("GMP");
  await expect(page).toHaveURL(/q=GMP/);
  await expect(page.getByText("Знайдено подій: 1")).toBeVisible();

  await page.getByRole("link", { name: "Скинути фільтри" }).click();
  await expect(page).toHaveURL(/\/uk\/events$/);
  await page.getByRole("spinbutton").fill("12");
  await expect(page).toHaveURL(/points=12/);
  await expect(page.getByText("Знайдено подій: 2")).toBeVisible();
});
