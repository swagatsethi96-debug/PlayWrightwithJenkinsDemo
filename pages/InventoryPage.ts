import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await expect(this.page).toHaveURL(/cart.html/);
  }
}