import { test, Page, expect } from "@playwright/test";

test("Wait and get all product cards", async ({ page }) => {
  await page.goto("/");

  const productCards = await getAllProductCards(page);

  const productCount = await productCards.count();
  console.log(`Found ${productCount} product cards.`);

  expect(productCount).toBeGreaterThan(0);
});

test("Testing add to cart functionality", async ({ page }) => {
  await page.goto("/");

  const productCards = await getAllProductCards(page);
  const firstProductCard = productCards.first();

  const productTitle = await firstProductCard.locator("h2").textContent();
  console.log("First product title:", productTitle);

  const addToCartButton = firstProductCard.locator(
    '[test-data="add-to-cart-button"]',
  );
  await addToCartButton.click();

  const cartButton = page.locator('[test-data="cart-button"]');
  await cartButton.click();

  const cartSidebar = page.locator(".cart-sidebar-container");
  await expect(cartSidebar).toBeVisible();

  const cartItems = cartSidebar.locator('[test-data="single-cart-item"]');
  const cartItemsCount = await cartItems.count();
  console.log(`Number of items in the cart: ${cartItemsCount}`);

  expect(cartItemsCount).toBeGreaterThan(0);

  let matchFound = false;
  for (let i = 0; i < cartItemsCount; i++) {
    const cartItem = cartItems.nth(i);
    const cartItemTitle = await cartItem.locator("h3").textContent();

    if (cartItemTitle === productTitle) {
      console.log(`Matching cart item found: ${cartItemTitle}`);
      expect(cartItemTitle).toBe(productTitle);
      matchFound = true;

      // Find the element with aria-label="Item amount" and check if the value is 1 or greater
      const itemAmountText = await cartItem
        .locator('[aria-label="Item amount"]')
        .textContent();
      const itemAmount = parseInt(itemAmountText?.trim() || "0", 10);

      console.log(`Item amount for "${cartItemTitle}": ${itemAmount}`);
      expect(itemAmount).toBeGreaterThanOrEqual(1);

      break; // Exit loop once a match is found
    }
  }

  expect(matchFound).toBe(true);
});

async function getAllProductCards(page: Page) {
  await page.waitForSelector('article[test-data="product-card"]', {
    timeout: 10000,
  });

  const productCards = page.locator('article[test-data="product-card"]');

  await productCards.first().waitFor({ timeout: 10000 }); // Waits for the first card to be visible

  return productCards;
}
