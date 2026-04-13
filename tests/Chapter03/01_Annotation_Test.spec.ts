// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Test 1', { tag: '@PlaywrightWithGitHubActions' }, async ({ page }) => {
    // Go to URL
    await page.goto('https://duckduckgo.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: /Playwright by Testers Talk/i }).first().click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test.skip('Test 2', async ({ page }) => {
    // Go to URL
    await page.goto('https://duckduckgo.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk - YouTube' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test.only('Test 3', async ({ page }) => {
    // Go to URL
    await page.goto('https://duckduckgo.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: /Playwright by Testers Talk/i }).first().click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test.skip('Test 4', async ({ page }) => {
    // Go to URL
    await page.goto('https://duckduckgo.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk - YouTube' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})
