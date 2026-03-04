import { test, expect } from '@playwright/test';

test('Valid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin');
  await page.click('button[type="submit"]');
  
});

test('Protected route without login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');

  await expect(page).toHaveURL(/login/);
});