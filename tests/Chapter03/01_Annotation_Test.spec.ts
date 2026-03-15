// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Test 1', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 26.9K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test.skip('Test 2', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 26.9K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test.only('Test 3', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 26.9K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test.skip('Test 4', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 26.9K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})
