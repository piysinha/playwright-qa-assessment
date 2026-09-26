import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly items: Locator;

  constructor(private page: Page) {
    this.items = page.locator('.cart_item');
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }
}
