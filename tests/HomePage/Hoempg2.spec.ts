import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://atriina.com/");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "L e t ' s T a l k" }).click();
  const page1 = await page1Promise;
  await page1.goto(
    "https://calendly.com/atriina-marketing/30min?month=2025-09"
  );

  await expect(page1.locator("h1")).toContainText(
    "Connecting Minds, Advancing Technology with Atrina"
  );
  await page1.close();
  await page.goto("https://atriina.com/");
  await page.getByRole("link", { name: "Read More" }).click();
  await expect(page.locator("#lqd-contents-wrap")).toContainText(
    "7+ Years of excellence and counting"
  );
  await page.getByRole("link", { name: "Atriina", exact: true }).click();

  await page
    .getByRole("link", { name: "Partner With Atrina", exact: true })
    .click();
  await page.getByRole("heading", { name: "Our Services: Powering Your" });

  await page.getByRole("link", { name: "Atriina", exact: true }).click();

  await page.goto("https://atriina.com/");

  await page.getByRole("heading", { name: /Client Say/ }).isVisible();

  const testimonials = [
    { name: "Pankaj Shah", designation: "Opportune Technologies Pvt Ltd" },
    { name: "Ashwin Amin", designation: "Grasim, Aditya Birla" },
    { name: "Euma San", designation: "Tokyo Dental University" },
    { name: "Vikram Genka", designation: "Ethal PLC" },
    { name: "Bijoy Padnambham", designation: "Marico" },
    { name: "Anup Daware", designation: "Hector Beverages" },
  ];

  for (const t of testimonials) {
    const nameLocator = page.locator(
      `//div[@class='testi-data']/p[@class='testimonial-title' and normalize-space()='${t.name}']`
    );

    const designationLocator = page.locator(
      `//div[@class='testi-data']/p[@class='designation' and contains(.,'${t.designation}')]`
    );

    await nameLocator.scrollIntoViewIfNeeded();

    await expect(nameLocator).toBeVisible();
    await expect(designationLocator).toBeVisible();
  }
});
