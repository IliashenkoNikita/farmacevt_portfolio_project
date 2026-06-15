import { expect, test } from "@playwright/test";

test("contact form submits and shows status", async ({ page }) => {
  await page.goto("/uk/contacts");
  await page.getByPlaceholder("Ваш email").fill("client@example.com");
  await page.getByPlaceholder("Повідомлення").fill("Please contact me");
  await page.getByRole("button", { name: "Надіслати" }).click();
  await expect(page).toHaveURL(/contact=sent/);
  await expect(page.getByRole("status")).toHaveText("Повідомлення надіслано.");
});

test("admin and cabinet buttons submit real actions", async ({ page }) => {
  await page.goto("/uk");
  await page.context().addCookies([
    {
      name: "holos-session",
      value: "admin@holos.example",
      domain: "localhost",
      path: "/",
    },
    { name: "holos-role", value: "ADMIN", domain: "localhost", path: "/" },
  ]);

  await page.goto("/uk/admin/events");
  await page.getByRole("button", { name: "Зберегти" }).click();
  await expect(page).toHaveURL(/saved=events-save/);

  await page.goto("/uk/admin/exports");
  await page.getByRole("button", { name: "Експортувати учасників" }).click();
  await expect(page).toHaveURL(/exported=participants/);

  await page.goto("/uk/cabinet/profile");
  await page.getByRole("button", { name: "Зберегти профіль" }).click();
  await expect(page).toHaveURL(/done=profile-save/);
});
