import { test, expect } from '@playwright/test';

test('Timeout test', async ({ page }) => {
  
    test.setTimeout(1 * 60 * 1000);

  await test.step('Navigating to URL', async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  })
  await test.step('Enter Username & Password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('dog5435');
  })
  await test.step('Click on Sign-in', async () => {
    await page.getByRole('button', { name: 'Sign my in', exact: true }).click({timeout : 3000});
  })
  await test.step('Validate error message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect my username or password.', {timeout : 5000});
  })

//   await page.waitForTimeout(60000);
});