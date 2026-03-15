// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Multiple browsers/tabs in playwright ', async ({ page, browser }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', { name: 'Create new account' }).press('Enter')

    // Select dropdown using value
    await page.getByLabel('Month').selectOption('2');

    // Select dropdown using visible text
    // await page.getByLabel('Month').selectOption('May');

    // Validate all the options
    // await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    await expect(page.locator("//select[@id='month']/option")).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);


    // New Browser Session
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://www.facebook.com/');
    await page2.getByRole('button', { name: 'Create new account' }).press('Enter')

    // Select dropdown using value
    // await page2.getByLabel('Month').selectOption('5');

    // Select dropdown using visible text
    await page2.getByLabel('Month').selectOption('Jun');

    // Validate all the options
    // await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    await expect(page2.locator("//select[@id='month']/option")).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

    // New Tab Creation
    const newTab = await context2.newPage();

    await newTab.goto('https://www.youtube.com/');

    // Search with keywords
    await newTab.getByRole('combobox', { name: 'Search' }).fill('Playwright TypeScript')
    await newTab.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await newTab.getByRole('link', { name: 'Playwright TypeScript' }).first().click()

    console.log("2nd Browser's 2nd tab is opened");
    const newTab1 = await context2.newPage();
    await newTab1.goto('https://www.amazon.com/');

})

