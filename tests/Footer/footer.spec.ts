import { test, expect } from "@playwright/test";

test("Verify footer links redirect correctly", async ({ page }) => {
  test.setTimeout(420000);

  await page.goto("https://atriina.com/");
  await page.waitForLoadState("networkidle");

  // TERMS & PRIVACY POLICY
  await page.getByRole("link", { name: "Terms and Conditions" }).click();
  await expect(page).toHaveURL(/terms/);

  await page.getByRole("link", { name: "Privacy Policy" }).click();
  await expect(page.locator("#lqd-contents-wrap")).toContainText(
    "Privacy Policy"
  );

  // INSTAGRAM SOCIAL LINK
  const [instaPage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator(
        "//div[@class='elementor-element elementor-element-35d252f elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//a[@class='elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-ac69812']"
      )
      .click(),
  ]);

  await instaPage.waitForLoadState("domcontentloaded");
  await expect(instaPage).toHaveURL(/instagram\.com/);

  // LINKEDIN
  const [linkedinPage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator(
        "//div[@class='elementor-element elementor-element-35d252f elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//a[@class='elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-5cbbc40']"
      )
      .click(),
  ]);

  await linkedinPage.waitForLoadState("domcontentloaded");
  await expect(linkedinPage).toHaveURL(/linkedin\.com/);

  // YOUTUBE
  const [youtubePage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator(
        "//div[@class='elementor-element elementor-element-35d252f elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//a[@class='elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-dc5df8e']"
      )
      .click(),
  ]);

  await youtubePage.waitForLoadState("domcontentloaded");
  await expect(youtubePage).toHaveURL(/youtube\.com/);

  // GOOGLE MAPS
  const [mapsPage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator(
        "//div[@class='elementor-element elementor-element-75870d5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list']//span[@class='elementor-icon-list-text'][contains(text(),'P2, C Wing, Kailash Business Park, Park Site Rd, H')]"
      )
      .click(),
  ]);

  await mapsPage.waitForLoadState("domcontentloaded");
  await expect(mapsPage).toHaveURL(/google\.com/);

  // EMAIL LINK
  const emailLink = page.locator(
    "//div[@class='elementor-element elementor-element-75870d5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list']//div[@class='elementor-widget-container']//ul[@class='elementor-icon-list-items']//li[@class='elementor-icon-list-item']//a[@href='mailto:sales@atrina.com']//span[@class='elementor-icon-list-text'][normalize-space()='sales@atriina.com']"
  );
  // await expect(emailLink).toHaveAttribute("href", "mailto:sales@atriina.com");

  console.log("🎉 Footer Test Passed Successfully!");
});
