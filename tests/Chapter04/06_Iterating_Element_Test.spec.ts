// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Iterating matching elements in playwright', async ({ page }) => {

    // Go to URL
    await page.goto('https://github.com/BakkappaN');

    const reposityLinks = await page.$$("//span[@class='repo']");
    for (const reposityLink of reposityLinks) {
        const text = await reposityLink.textContent();
        console.log(`Text from 1st loop: ${text}`);
    }
    console.log('------------------------------------------------------------------------');

    for (let index = 0; index < reposityLinks.length; index++) {
        const text = await reposityLinks[index].textContent();
        console.log(`Text from 2nd loop: ${text}`);
    }
    console.log('------------------------------------------------------------------------');

    const reposityLinks1 = await page.locator("//span[@class='repo']");
    const count = await reposityLinks1.count();
    for (let index = 0; index < count; index++) {
        const text = await reposityLinks1.nth(index).textContent();
        console.log(`Text from 3rd loop: ${text}`);
    }    
});
