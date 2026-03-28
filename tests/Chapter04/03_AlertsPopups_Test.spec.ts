// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Handling Alerts in playwright', { tag: '@PlaywrightWithGitHubActions' }, async ({ page }) => {

    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Dialog type is = ${dialog.type()}`);
        console.log(`Alert message is = ${dialog.message()}`);
    });

    await page.getByText('See an example alert', { exact: true }).click();
    
});

test('Handling Confirmation in playwright', async ({ page }) => {

    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        // dialog.accept();
        dialog.dismiss();
        console.log(`Dialog type is = ${dialog.type()}`);
        console.log(`Confirm message is = ${dialog.message()}`);
    });

    await page.getByText('See a sample confirm', { exact: true }).click();

});

test('Handling Prompt in playwright', { tag: '@PlaywrightWithGitHubActions' }, async ({ page }) => {

    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        console.log(`Dialog type is = ${dialog.type()}`);
        console.log(`Prompt message is = ${dialog.message()}`);
        await dialog.accept('playwright');
    });

    await page.getByText('See a sample prompt', { exact: true }).click();

});