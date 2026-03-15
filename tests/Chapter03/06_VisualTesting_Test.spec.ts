import { test, expect } from '@playwright/test';

test('Visual comparison in Playwright', async ({ page }) => {

    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator("//input[@id='login_field']").pressSequentially('Swagat Anand Sethi');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

});

test('Element Visual comparison Testing in Playwright', async ({ page }) => {

    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    const Element = page.locator("//div[@class='authentication-body authentication-body--with-form new-session']");
    await expect(Element).toHaveScreenshot('GitHubLoginForm.png');
    
    await page.locator("//input[@id='login_field']").pressSequentially('Swagat Anand Sethi');
    await page.locator("//input[@id='password']").fill('236516');

    await expect(Element).toHaveScreenshot('GitHubLoginForm.png');

});