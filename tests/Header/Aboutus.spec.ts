import { expect, test } from "@playwright/test";

test("About us section", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://atriina.com/");

  const about_us = page
    .locator("#menu-item-5061")
    .getByRole("link", { name: "About Us" });

  const menuItems = [
    {
      id: "menu-item-5063",
      name: "Our Founder",
      slug: /our-team/,
    },
    {
      id: "menu-item-5062",
      name: "Life at Atrina",
      slug: /life-at-atrina/,
    },
    {
      id: "menu-item-6522",
      name: "Careers",
      slug: /careers/,
    },
  ];


  for (const item of menuItems) {
    await about_us.hover();
    await page
      .locator(`#${item.id}`)
      .getByRole("link", { name: item.name })
      .click();
    await expect(page).toHaveURL(item.slug);
    await page.waitForTimeout(2500);
    await page.goBack();
  }
});
