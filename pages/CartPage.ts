import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItemInCart() {
    await expect(this.page.locator('.inventory_item_name'))
      .toContainText('Sauce Labs Backpack');
  }

  async clickCheckout() {
    await this.page.click('#checkout');
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
  }
}