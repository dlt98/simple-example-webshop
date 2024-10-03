import { Page } from "@playwright/test";

export async function getAllProductCards(page: Page) {
  await page.waitForSelector('article[test-data="product-card"]', {
    timeout: 10000,
  });

  const productCards = page.locator('article[test-data="product-card"]');

  await productCards.first().waitFor({ timeout: 10000 }); // Waits for the first card to be visible

  return productCards;
}
