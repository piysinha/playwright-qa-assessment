import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,

  globalSetup: './global-setup',

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    storageState: 'storageState.json',
    trace: 'on-first-retry',
  },
});