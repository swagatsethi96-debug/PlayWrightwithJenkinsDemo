// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Handling Alerts in playwright',{tag : ['@SmokeTesting']} , async ({ page }) => {

    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Dialog type is = ${dialog.type()}`);
        console.log(`Alert message is = ${dialog.message()}`);
    });

    await page.getByText('See an example alert', { exact: true }).click();
    
});

test('Handling Confirmation in playwright',{tag : ['@SmokeTesting','@RegressionTesting']} , async ({ page }) => {

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

test('Handling 1st Prompt in playwright',{tag : ['@RegressionTesting']} , async ({ page }) => {

    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        console.log(`Dialog type is = ${dialog.type()}`);
        console.log(`Prompt message is = ${dialog.message()}`);
        await dialog.accept('playwright');
    });

    await page.getByText('See a sample prompt', { exact: true }).click();

});

test('Handling 2nd Prompt in playwright',{tag : ['@RegressionTesting']} , async ({ page }) => {

    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        console.log(`Dialog type is = ${dialog.type()}`);
        console.log(`Prompt message is = ${dialog.message()}`);
        await dialog.accept('playwright');
    });

    await page.getByText('See a sample Prompt', { exact: true }).click();

});
//parallel execution= npx playwright test tests/Chapter04/04_TestReports_Test.spec.ts --workers 5