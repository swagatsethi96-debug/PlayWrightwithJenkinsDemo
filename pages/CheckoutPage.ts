import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(first: string, last: string, zip: string) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
  }

  async continue() {
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }

  async verifyOverview() {
    await expect(this.page).toHaveURL(/checkout-step-two.html/);
    await expect(this.page.getByText('Payment Information')).toBeVisible();
    await expect(this.page.getByText('Shipping Information')).toBeVisible();
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }

  async backToHome() {
    await this.page.click('#back-to-products');
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}