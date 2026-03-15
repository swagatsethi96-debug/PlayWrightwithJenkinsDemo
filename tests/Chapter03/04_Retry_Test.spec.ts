// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Retry concept in playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', { name: 'Create new account' }).press('Enter')

    // Select dropdown using value
    await page.getByLabel('Month').selectOption('2');

    // Select dropdown using visible text
    await page.getByLabel('Month').selectOption('May');

    // Validate all the options
    // await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    await expect(page.locator("//select[@id='month']/option")).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    
})
