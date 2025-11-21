import { test, expect } from "@playwright/test";

test("Chatbot open on atriina.com", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://atriina.com/");

  const widgetFrame = await page
    .locator('iframe[title="chat widget"]')
    .first()
    .contentFrame();
  await widgetFrame?.getByRole("button", { name: "Chat widget" }).click();

  const formFrame = await page
    .locator('iframe[title="chat widget"]')
    .nth(1)
    .contentFrame();

  await formFrame
    ?.getByRole("textbox", { name: "* Name" })
    .fill("Chinmay Bhole");
  await formFrame
    ?.getByRole("textbox", { name: "* Email" })
    .fill("chinmaybhole17@gmail.com");
  await formFrame
    ?.getByRole("textbox", { name: "* Message" })
    .fill("This is a Test message!!..");
  await formFrame?.getByRole("button", { name: "Submit" }).click();

  await page.waitForTimeout(2000);

  await expect(formFrame?.getByText("Your message was sent")).toBeVisible();

  await formFrame?.getByRole("button", { name: "Send Again" }).click();

  await formFrame?.getByRole("button", { name: "Messages" }).click();

  expect(
    page
      .locator("#nevn2mk79npo1757323751732")
      .contentFrame()
      .getByLabel("primary")
      .getByText("Messages")
  );

  await page.waitForTimeout(2000);

  await formFrame?.getByRole("button", { name: "Back", exact: true }).click();

  expect(
    page
      .locator("#zbgdliidoc41757324011428")
      .contentFrame()
      .getByText("Please fill out the form")
  );
});


