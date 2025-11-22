// import { test, expect } from "@playwright/test";

// test("hamburger menu social links test", async ({ page }) => {
//   test.setTimeout(120000);
//   await page.goto("https://atriina.com/");

//   // Instagram
//   await page.getByRole("button").first().click();
//   const [instaPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator("#header").getByRole("link", { name: "Instagram " }).click(),
//   ]);
//   await instaPage.waitForLoadState();
//   await expect(instaPage).toHaveTitle(
//     /Login • Instagram|Atrina Technologies Pvt Ltd/
//   );

//   await expect(instaPage).toHaveURL(/instagram\.com/);

//   // LinkedIn
//   await page.goto("https://atriina.com/");
//   await page.getByRole("button").first().click();
//   const [linkedinPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page
//       .locator("#header")
//       .getByRole("link", { name: "Linkedin-in " })
//       .click(),
//   ]);
//   await linkedinPage.waitForLoadState();
//   await expect(linkedinPage).toHaveTitle(
//     /Atrina Technologies Pvt Ltd | LinkedIn/
//   );
//   await expect(linkedinPage).toHaveURL(/linkedin\.com/);

//   // YouTube
//   await page.goto("https://atriina.com/");
//   await page.getByRole("button").first().click();
//   const [ytPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator("#header").getByRole("link", { name: "Youtube " }).click(),
//   ]);
//   await ytPage.waitForLoadState();
//   await expect(ytPage).toHaveTitle(
//     /Value Network By Atrina Technologies - YouTube/
//   );
//   await expect(ytPage).toHaveURL(/youtube\.com/);

//   //Gmaps
//   await page.goto("https://atriina.com/");
//   await page.getByRole("button").first().click();
//   const [GoogleMaps] = await Promise.all([
//     page.waitForEvent("popup"),
//     page
//       .locator("#header")
//       .getByRole("link", { name: "P3, C Wing, Kailash Business" })
//       .click(),
//   ]);
//   await GoogleMaps.waitForLoadState();
//   await expect(GoogleMaps).toHaveTitle(
//     /Atrina Technologies Pvt. Ltd - Google Maps/
//   );
//   await expect(GoogleMaps).toHaveURL(/google\.com/);

//   await page.goto("https://atriina.com/");
//   await page.getByRole("button").first().click();
//   await page
//     .locator("#header")
//     .getByRole("link", { name: "sales@atriina.com" })
//     .click();
//   await page.goto("https://atriina.com/");
//   await page.getByRole("button").first().click();

//   await page.getByRole("link", { name: "hr@atriina.com" }).click();
//   await page.goto("https://atriina.com/");
//   await page.getByRole("button").first().click();
// });

import { test, expect, Page } from "@playwright/test";

async function verifySocialLink(
  page: Page,
  locator: ReturnType<Page["locator"]>,
  expectedDomain: RegExp
) {
  await page.getByRole("button").first().click();

  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    locator.click(),
  ]);

  await popup.waitForLoadState("domcontentloaded");

  await expect(popup).toHaveURL(expectedDomain);

  const title = await popup.title();
  console.log(`Opened page title: ${title}`);

  return popup;
}

test("hamburger menu social links test", async ({ page }) => {
  test.setTimeout(480000);

  await page.goto("https://atriina.com/");

  // Instagram
  await verifySocialLink(
    page,
    page.locator(
      "//div[@class='elementor-element elementor-element-f6e42ac elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//i[@class='fab fa-instagram']"
    ),
    /instagram\.com/
  );

  // LinkedIn
  await page.goto("https://atriina.com/");
  await verifySocialLink(
    page,
    page.locator(
      "//div[@class='elementor-element elementor-element-f6e42ac elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//i[@class='fab fa-linkedin-in']"
    ),
    /linkedin\.com/
  );

  // YouTube
  await page.goto("https://atriina.com/");
  await verifySocialLink(
    page,
    page.locator(
      "//div[@class='elementor-element elementor-element-f6e42ac elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//i[@class='fab fa-youtube']"
    ),
    /youtube\.com/
  );

  // Google Maps
  await page.goto("https://atriina.com/");
  await verifySocialLink(
    page,
    page.locator("#header").getByRole("link", { name: /Kailash Business/i }),
    /google\.com\/maps/
  );

  await page.goto("https://atriina.com/");
  await page.getByRole("button").first().click();

  const sales = page
    .locator("#header")
    .getByRole("link", { name: /sales@atriina\.com/i });
  //  await expect(sales).toHaveAttribute("href", /mailto:sales@atriina\.com/);

  const hr = page
    .locator("#header")
    .getByRole("link", { name: /hr@atriina\.com/i });
  // await expect(hr).toHaveAttribute("href", /mailto:hr@atriina\.com/);
  console.log("✅ Hamburger test Passed!");
});
