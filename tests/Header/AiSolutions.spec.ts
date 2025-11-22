//** */
import { test, expect } from "@playwright/test";

test.describe.configure({ retries: 2 }); // retry flaky tests up to 2 times

test("AI Solution submenu navigation", async ({ page }) => {
  test.setTimeout(240000);
  // Open homepage with higher timeout
  await page.goto("https://atriina.com/");
  await page.waitForLoadState("domcontentloaded");

  // Main AI Solutions menu locator
  //const aiSolutionMenu = page.getByRole("link", { name: "AI Solutions" });
  const aiSolutionMenu = page.locator(
    "//li[@id='menu-item-22285']//a[normalize-space()='AI Solutions']"
  );

  // Submenu items with slug regex checks
  const submenuItems = [
    { name: "Voicebot for Customer", slug: /voicebot-for-customer/ },
    { name: "Taxbot", slug: /taxbot/ },
    // { name: "DRHP Document Summarizer", slug: /drhp-document-summarizer/ },
    //DRHP Section is removed
    { name: "Video to Text Analysis", slug: /video-to-text-analysis/ },
    { name: "Face Recognition System", slug: /face-recognition-system/ },
    {
      name: "Shop KYC Verification Model",
      slug: /shop-kyc-verification-model/,
    },
  ];

  for (const { name, slug } of submenuItems) {
    // Hover over AI Solutions to open submenu
    await aiSolutionMenu.hover();

    // Wait until submenu item is visible before clicking
    const submenuLocator = page.getByRole("link", { name });
    await expect(submenuLocator).toBeVisible({ timeout: 15000 });

    // Click submenu item
    await submenuLocator.click();
    await page.waitForTimeout(2000);

    // Wait for navigation to complete
    await page.waitForLoadState("domcontentloaded");

    // Assert URL contains slug
    await expect(page).toHaveURL(slug);

    // Go back to homepage for next iteration
    await page.goBack();
    await page.waitForLoadState("domcontentloaded");
  }
  console.log("✅ AI Solutions test Passed!");
});
