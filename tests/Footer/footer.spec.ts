//T&C and Privacy Policy, Social Media Links in Footer
import { test, expect } from "@playwright/test";

test("Footer test", async ({ page }) => {
  test.setTimeout(240000);
  await page.goto("https://atriina.com/");
  await page.getByRole("link", { name: "Terms and Conditions" }).click();
  //  await expect(page.locator("#ld-fancy-heading-68b7bf26d4010")).toContainText( "Terms & Conditions");
  await page.waitForTimeout(3000);
  await page.getByRole("link", { name: "Privacy Policy" }).click();
  await expect(page.locator("#lqd-contents-wrap")).toContainText(
    "Privacy Policy"
  );
  await page.waitForTimeout(3000);

  await page.goto("https://atriina.com/");

  const [instaPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#footer").getByRole("link", { name: "Instagram " }).click(),
  ]);
  await instaPage.waitForLoadState();
  await expect(instaPage).toHaveTitle(
    /Login • Instagram|Atrina Technologies Pvt Ltd/
  );

  await expect(instaPage).toHaveURL(/instagram\.com/);

  await page.waitForTimeout(2000);

  await page.getByRole("button").first().click();
  const [linkedinPage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator("#footer")
      .getByRole("link", { name: "Linkedin-in " })
      .click(),
  ]);
  await linkedinPage.waitForLoadState();
  await expect(linkedinPage).toHaveTitle(
    /Atrina Technologies Pvt Ltd | LinkedIn/
  );
  await expect(linkedinPage).toHaveURL(/linkedin\.com/);
  await page.waitForTimeout(2000);

  await page.getByRole("button").first().click();
  const [ytPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//div[@class='elementor-element elementor-element-35d252f elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons']//a[@class='elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-dc5df8e']").click(),
  ]);
  await ytPage.waitForLoadState();
  await expect(ytPage).toHaveTitle(
    /Value Network By Atrina Technologies - YouTube/
  );
  await expect(ytPage).toHaveURL(/youtube\.com/);
  await page.waitForTimeout(2000);

  const [GoogleMaps] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator("//div[@class='elementor-element elementor-element-75870d5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list']//span[@class='elementor-icon-list-text'][contains(text(),'P2, C Wing, Kailash Business Park, Park Site Rd, H')]")
      .click(),
  ]);
  await GoogleMaps.waitForLoadState();
  await expect(GoogleMaps).toHaveTitle(
    /Atrina Technologies Pvt. Ltd - Google Maps/
  );
  await expect(GoogleMaps).toHaveURL(/google\.com/);
  await page.waitForTimeout(2000);

  const [email] = await Promise.all([
    page
      .locator("#footer")
      .getByRole("link", { name: "sales@atriina.com" })
      .click(),
  ]);
});














