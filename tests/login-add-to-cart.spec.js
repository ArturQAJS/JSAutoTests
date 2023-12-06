const { test, expect } = require('@playwright/test');

test.beforeEach('Perform login to the Swag Labs resource', async ({ page }) => {

await page.goto('');

await page.locator('[data-test="username"]').fill('standard_user');

await page.locator('[data-test="password"]').fill('secret_sauce');

await page.locator('[data-test="login-button"]').click();

await expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');

});

test('Verify needed items on the Products page', async ({ page }) => {

await expect(page.locator('.title')).toContainText('Products');

await expect(page.locator('.shopping_cart_link')).toBeVisible();

const productsCount = await page.$$('.inventory_item');
await expect(productsCount.length).toBeGreaterThan(1);

});

test('Adding and removing product from the cart', async ({ page }) => {

await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await expect(page.locator('.shopping_cart_badge')).toContainText('1');

await page.locator('.shopping_cart_link').click();
await expect(page.url()).toEqual('https://www.saucedemo.com/cart.html');
await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');

await page.locator('[data-test=remove-sauce-labs-backpack]').click();
await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();

});


