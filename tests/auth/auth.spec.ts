import { test, expect } from '@playwright/test';

test('Valid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // The demo credentials shown on the-internet's login page.
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/\/secure$/);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('Protected route without login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');

  await expect(page).toHaveURL(/login/);
});