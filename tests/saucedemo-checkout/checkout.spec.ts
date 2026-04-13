import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com';
const STANDARD_USER = 'standard_user';
const SECRET_SAUCE = 'secret_sauce';

const selectors = {
  username: '#user-name',
  password: '#password',
  loginButton: '#login-button',
  addBackpack: '#add-to-cart-sauce-labs-backpack',
  cartLink: '.shopping_cart_link',
  checkoutButton: '#checkout',
  continueButton: '#continue',
  finishButton: '#finish',
  cancelButton: '#cancel',
  firstName: '#first-name',
  lastName: '#last-name',
  postalCode: '#postal-code',
  backHome: '#back-to-products',
  successHeader: '.complete-header',
  successText: '.complete-text',
  itemName: '.inventory_item_name',
  itemDesc: '.inventory_item_desc',
  itemPrice: '.inventory_item_price',
  paymentInfoLabel: '.summary_info_label',
  summarySubsection: '.summary_info',
};

async function loginAndAddProduct(page) {
  await page.goto(BASE_URL);
  await expect(page).toHaveURL(BASE_URL);
  await page.fill(selectors.username, STANDARD_USER);
  await page.fill(selectors.password, SECRET_SAUCE);
  await page.click(selectors.loginButton);
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator(selectors.addBackpack)).toBeVisible();
  await page.click(selectors.addBackpack);
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
}

async function goToCart(page) {
  await page.click(selectors.cartLink);
  await expect(page).toHaveURL(/cart.html/);
}

async function fillCheckoutInformation(page, firstName: string, lastName: string, postalCode: string) {
  await page.fill(selectors.firstName, firstName);
  await page.fill(selectors.lastName, lastName);
  await page.fill(selectors.postalCode, postalCode);
}

test.describe('SauceDemo checkout workflow', () => {
  test('Verify cart review displays selected item details and checkout navigation', async ({ page }) => {
    await loginAndAddProduct(page);
    await goToCart(page);

    await expect(page.locator(selectors.itemName)).toContainText('Sauce Labs Backpack');
    await expect(page.locator(selectors.itemDesc)).toBeVisible();
    await expect(page.locator(selectors.itemPrice)).toContainText('29.99');
    await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  });

  test('Verify checkout information page enforces mandatory field validation', async ({ page }) => {
    await loginAndAddProduct(page);
    await goToCart(page);
    await page.click(selectors.checkoutButton);
    await expect(page).toHaveURL(/checkout-step-one.html/);

    await page.click(selectors.continueButton);
    await expect(page.locator('.error-message-container')).toContainText('Error: First Name is required');

    await page.fill(selectors.firstName, 'Test');
    await page.click(selectors.continueButton);
    await expect(page.locator('.error-message-container')).toContainText('Error: Last Name is required');

    await page.fill(selectors.lastName, 'User');
    await page.click(selectors.continueButton);
    await expect(page.locator('.error-message-container')).toContainText('Error: Postal Code is required');

    await fillCheckoutInformation(page, 'Test', 'User', '12345');
    await page.click(selectors.continueButton);
    await expect(page).toHaveURL(/checkout-step-two.html/);
  });

  test('Verify checkout overview shows order summary, payment information, and totals', async ({ page }) => {
    await loginAndAddProduct(page);
    await goToCart(page);
    await page.click(selectors.checkoutButton);
    await fillCheckoutInformation(page, 'Test', 'User', '12345');
    await page.click(selectors.continueButton);

    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(page.getByText('Payment Information')).toBeVisible();
    await expect(page.getByText('Shipping Information')).toBeVisible();
    await expect(page.locator(selectors.itemName)).toContainText('Sauce Labs Backpack');
    await expect(page.getByText('Item total: $29.99')).toBeVisible();
    await expect(page.getByText('Tax:')).toBeVisible();
    await expect(page.locator('[data-test="total-label"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Finish' })).toBeVisible();
  });

  test('Verify order completion shows confirmation and Back Home returns to products', async ({ page }) => {
    await loginAndAddProduct(page);
    await goToCart(page);
    await page.click(selectors.checkoutButton);
    await fillCheckoutInformation(page, 'Test', 'User', '12345');
    await page.click(selectors.continueButton);
    await page.click(selectors.finishButton);

    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(page.locator(selectors.successHeader)).toHaveText('Thank you for your order!');
    await expect(page.locator(selectors.successText)).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await page.click(selectors.backHome);
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });

  test('Verify checkout accepts special characters and still requires mandatory fields', async ({ page }) => {
    await loginAndAddProduct(page);
    await goToCart(page);
    await page.click(selectors.checkoutButton);

    await fillCheckoutInformation(page, '!@#$', '<>?', '12345');
    await page.click(selectors.continueButton);
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(page.locator(selectors.itemName)).toContainText('Sauce Labs Backpack');
  });

  test('Verify cancel during checkout returns to cart and preserves cart items', async ({ page }) => {
    await loginAndAddProduct(page);
    await goToCart(page);
    await page.click(selectors.checkoutButton);
    await expect(page).toHaveURL(/checkout-step-one.html/);
    await page.click(selectors.cancelButton);
    await expect(page).toHaveURL(/cart.html/);
    await expect(page.locator(selectors.itemName)).toContainText('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});
