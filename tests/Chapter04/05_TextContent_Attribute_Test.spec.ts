// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Get Text & Get Attribute value in playwright', {tag: '@PlaywrightWithGitHubActionsonManualYml'} async ({ page }) => {

    // Go to URL
    await page.goto('https://github.com/BakkappaN');

    //textContent
    const name = await page.locator("//span[@itemprop='name']").textContent();
    const finalName = name?.trim();
    console.log(`Name is : ${finalName}`);
    expect('Testers Talk').toBe(finalName);
    
    //innerText
    const name1 = await page.locator("//span[@itemprop='name']").innerText();
    const finalName1 = name1?.trim();
    console.log(`Name is : ${finalName1}`);
    expect('Testers Talk').toBe(finalName1);

    //getAttribute
    const attributeValue1 = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributeValue1}`);
    const attributeValue2 = await page.getByTestId('repositories').first().getAttribute('data-hydro-click-hmac');
    console.log(`Attribute value is : ${attributeValue2}`);

    
});
