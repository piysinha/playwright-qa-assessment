import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,

  globalSetup: './global-setup',

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  use: {
    headless: true,
    baseURL: 'https://www.saucedemo.com',
    storageState: 'storageState.json',
    trace: 'on-first-retry',
  },
});