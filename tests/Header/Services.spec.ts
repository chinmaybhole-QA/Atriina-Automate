
import { test, expect } from "@playwright/test";

test("Services Section Navigation", async ({ page }) => {
  test.setTimeout(120000);

  // Open homepage
  await page.goto("https://atriina.com/");

  // Main Services menu locator
  const servicesMenu = page.getByRole("link", {
    name: "Services",
    exact: true,
  });

  //Digital Transfrmation
  ///digital-transformation-agency/
  await servicesMenu.hover();
  await page.locator('#menu-item-12565').getByRole('link', { name: 'Digital Transformation' }).click();
  await expect(page).toHaveURL(/digital-transformation-agency/);
  await page.waitForTimeout(2000);

  // Product Development
  await servicesMenu.hover();
  await page.locator('#menu-item-12567').getByRole('link', { name: 'Product Development' }).click();
  await expect(page).toHaveURL(/software-product-development/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // Enterprise Mobility
  await servicesMenu.hover();
  // await page.getByRole('link', { name: 'Enterprise Mobility' }).click();
  //menu-item-12566
  await page.locator('#menu-item-12566').getByRole('link',{ name: 'Enterprise Mobility' }).click();
  await expect(page).toHaveURL(/enterprise-mobility-services/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // Cloud Services
  await servicesMenu.hover();
  await page.locator('#menu-item-12564').getByRole('link', { name: 'Cloud Services' }).click();
  await expect(page).toHaveURL(/cloud-services/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // ERP Implementation
  await servicesMenu.hover();
  await page.locator('#menu-item-12569').getByRole('link', { name: 'ERP Implementation' }).click();
  await expect(page).toHaveURL(/erp-implementation/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // Legacy Modernization
  await servicesMenu.hover();
  await page.locator('#menu-item-16564').getByRole('link', { name: 'Legacy Modernization' }).click();
  await expect(page).toHaveURL(/legacy-modernization-services/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // Software Development
  await servicesMenu.hover();
  await page.locator('#menu-item-15263').getByRole('link', { name: 'Software Development' }).click();
  await expect(page).toHaveURL(/software-development/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // AI/ML Service
  await servicesMenu.hover();
  await page.locator('#menu-item-20974').getByRole('link', { name: 'AI/ML Service' }).click();
  await expect(page).toHaveURL(/ai-ml-solutions/);
  await page.waitForTimeout(2000);

  await page.goto("https://atriina.com/");

  // ERPNext Solutions
  await servicesMenu.hover();
  await page.locator('#menu-item-21116').getByRole('link', { name: 'ERPNext Solutions' }).click();
  await expect(page).toHaveURL(/erpnext-development-customization/);
  await page.waitForTimeout(2000);
});
//xpath at Digital Transformation