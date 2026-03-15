// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('My First Playwright TypeScript Test 1',{tag : ['@SmokeTesting']}, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 27K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test('My First Playwright TypeScript Test 2',{tag : ['@SmokeTesting','@RegressionTesting']}, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 27K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})

test('My First Playwright TypeScript Test 3',{tag : ['@RegressionTesting']}, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 27K+ followers' }).click()
    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})
