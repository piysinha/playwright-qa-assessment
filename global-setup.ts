import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin');
  await page.click('button[type="submit"]');

  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;