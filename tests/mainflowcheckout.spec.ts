import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const USER = 'standard_user';
const PASS = 'secret_sauce';

test.describe('Checkout Flow (POM)', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login(USER, PASS);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
  });

  test('Complete checkout successfully @SmokeTesting', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.verifyItemInCart();
    await cartPage.clickCheckout();

    await checkoutPage.fillInformation('Test', 'User', '12345');
    await checkoutPage.continue();

    await checkoutPage.verifyOverview();
    await checkoutPage.finish();

    await checkoutPage.verifyOrderSuccess();
    await checkoutPage.backToHome();
  });

});