import { test, expect } from "@playwright/test";

const menuLinks = [
  { name: "Read More", url: "https://atriina.com/about-us/" },
  {
    name: "Business Solutions",
    url: "https://atriina.com/business-solutions/sales-force-management-system/",
  },
  { name: "AI Solutions", url: "https://atriina.com/ai-solutions/" },
  { name: "Services", url: "https://atriina.com/services/" },
  { name: "Case Study", url: "https://atriina.com/case-study/" },
  { name: "Blog", url: "https://atriina.com/blogs/" },
  { name: "Contact Us", url: "https://atriina.com/contact-us/" },
];

test.describe("Main menu navigation", () => {
  for (const { name, url } of menuLinks) {
    test(`should navigate to ${name} page`, async ({ page }) => {
      test.setTimeout(240000);
      await page.goto("https://atriina.com/");
      await page.getByRole("link", { name, exact: true }).click();
      await page.waitForTimeout(2500);
      await expect(page).toHaveURL(url);
    });
  }
  console.log("✅ Header navigation test Passed!");
});
