import { test, Page, expect } from "@playwright/test";
test("Wait and get all product cards", async ({ page }) => {
  await page.goto("/");

  const productCards = await getAllProductCards(page);

  // Get the count of product cards found
  const productCount = await productCards.count();
  console.log(`Found ${productCount} product cards.`);

  expect(productCount).toBeGreaterThan(0);
});

async function getAllProductCards(page: Page) {
  // Wait for the elements with test-data="product-card" to appear
  await page.waitForSelector('article[test-data="product-card"]');

  // Alternatively, you can use locator-specific waiting
  const productCards = page.locator('article[test-data="product-card"]');
  await productCards.first().waitFor(); // Waits for the first matching element

  return productCards;
}
