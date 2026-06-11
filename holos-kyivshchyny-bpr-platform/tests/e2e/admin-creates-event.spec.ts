import { test, expect } from "@playwright/test";
test("admin-creates-event", async ({ page }) => {
  await page.goto("/uk");
  await expect(page.getByText("Голос Київщини").first()).toBeVisible();
  await page.context().addCookies([
    {
      name: "holos-session",
      value: "admin@holos.example",
      domain: "localhost",
      path: "/",
    },
    { name: "holos-role", value: "ADMIN", domain: "localhost", path: "/" },
  ]);
  await page.goto("/uk/admin");
  await expect(
    page.getByRole("heading", { name: "Адмін-панель" }),
  ).toBeVisible();
});
