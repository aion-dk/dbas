import { test, expect } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("visits the frontpage", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Welcome");
});
