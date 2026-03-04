import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage.js';
import { InventoryPage } from '../../src/pages/InventoryPage.js';
import { CartPage } from '../../src/pages/CartPage.js';
import { CheckoutPage } from '../../src/pages/CheckOutPage.js';

test.describe('SauceDemo UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
  });

  test('Sort products low to high', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.sortLowToHigh();

    const prices = await inventory.getAllPrices();
    const sorted = [...prices].sort((a, b) => a - b);

    expect(prices[0]).toBe(sorted[0]);
  });

  test('Add 2 items to cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await inventory.addFirstTwoItems();
    await inventory.goToCart();

    expect(await cart.getCartItemsCount()).toBe(2);
  });

  test('Complete checkout flow', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await inventory.addFirstTwoItems();
    await inventory.goToCart();

    await cart.checkout();

    await checkout.fillCheckoutInfo('John', 'Doe', '12345');
    await checkout.finishOrder();

    const confirmation = await checkout.getConfirmationText();
    expect(confirmation).toContain('Thank you');
  });
});