// Import Playwright module
import { test, expect } from "@playwright/test";

const searchKeywords = ['Playwright by Testers Talk','Cypress by Testers Talk','API Testing by Testers Talk']

for (const Keywordsearched of searchKeywords) {
  
    // Write a test
test(`Parameterize Test in Playwright ${Keywordsearched}`, async ({ page }) => {
    // Go to URL
    test.setTimeout(180000);

    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill(Keywordsearched)
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    // Click on playlist
    await page.getByRole('link', { name: Keywordsearched }).first().click()
    // Validate web page title
    // await expect(page).toHaveTitle(Keywordsearched+' - YouTube')
}) 
}


