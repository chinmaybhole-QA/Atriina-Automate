// import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
//   test.setTimeout(60000);
//   await page.goto("https://atriina.com/");

//   await page
//     .locator(
//       "//a[@href='https://atriina.com/case-study/manufacturing-erp-accounting-module/']"
//     )
//     .click();
//   expect(page.getByRole("heading", { name: "Transforming Financial" }));
//   await page.waitForTimeout(3500);

//   await page.goto("https://atriina.com/");

//   await page
//     .locator(
//       "//a[@href='https://atriina.com/case-study/digital-lending-platform-development-for-choice-international-spark-loans/']"
//     )
//     .click();
//   await page.goto("https://atriina.com/");
//   await page.waitForTimeout(3500);

//   await page.getByRole("link", { name: "Atriina", exact: true }).click();

//   await page
//     .locator(
//       "//a[@href='https://atriina.com/case-study/hrms-software-healthcare/']"
//     )
//     .click();
//   expect(page.getByRole("heading", { name: "Urban PDA: A Digital" }));
//   await page.waitForTimeout(2000);
// });






import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://atriina.com/");
  await page.getByRole("heading", { name: "Our Projects" }).click();
  await page.getByRole("link", { name: "Know More" }).first().click();
  await page.getByRole("heading", { name: "Transforming Financial" }).click();
  await page.locator("#size-logo").click();
  await page
    .getByRole("heading", { name: "Ensuring Digital Success With" })
    .click();
  await page.getByRole("link", { name: "Know More" }).nth(1).click();
  await page.getByRole("heading", { name: "Digital Lending Platform" }).click();
  await page.getByRole("link", { name: "Atriina", exact: true }).click();
  await page
    .getByRole("heading", { name: "Ensuring Digital Success With" })
    .click();
  await page.getByRole("link", { name: "Know More" }).nth(2).click();
  await page
    .getByRole("heading", { name: "HRMS Software and Mobile App" })
    .click();

  await page
    .getByRole("heading", { name: "HRMS Software and Mobile App" })
    .click();
});
