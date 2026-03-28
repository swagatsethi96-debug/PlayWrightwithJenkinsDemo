// Import Playwright module
import { test, expect } from "@playwright/test";

// Write a test
test('Handling Checkbox & Radio buttons in playwright', { tag: '@PlaywrightWithGitHubActionsonAutoYml' }, async ({ page }) => {

    // Go to URL
    await page.goto('https://jqueryui.com/checkboxradio/');

    //Radio button
    const iframe = await page.frameLocator('[class="demo-frame"]');
    await expect(iframe.locator('[for="radio-2"]')).not.toBeChecked();
    await iframe.locator('[for="radio-2"]').check();
    await expect(iframe.locator('[for="radio-2"]')).toBeChecked();

    //Checkbox
    const iframe1 = await page.frameLocator('[class="demo-frame"]');
    await expect(iframe1.locator('[for="checkbox-4"]')).not.toBeChecked();
    await iframe1.locator('[for="checkbox-4"]').check();
    await expect(iframe1.locator('[for="checkbox-4"]')).toBeChecked();
    await iframe1.locator('[for="checkbox-1"]').check();
    await iframe1.locator('[for="checkbox-1"]').uncheck();
    await expect(iframe1.locator('[for="checkbox-1"]')).not.toBeChecked();
    
    //for loop
    const iframe2 = page.frameLocator('[class="demo-frame"]');
    const checkboxs = await iframe2.locator("//label[starts-with(@for,'checkbox')]").elementHandles();
    for (const checkbox of checkboxs) {
        await checkbox.check();
    }
});
