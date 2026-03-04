import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async sortLowToHigh() {
    await this.page.selectOption('[data-test="product-sort-container"]', 'lohi');
  }

  async getAllPrices() {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }

  async addFirstTwoItems() {
    const buttons = this.page.locator('.inventory_item button');
    await buttons.nth(0).click();
    await buttons.nth(1).click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}