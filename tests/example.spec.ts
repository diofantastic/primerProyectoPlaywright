import { test, expect } from '@playwright/test';
/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

*/
test('primer prueba jorge', async ({ page }) => {

  await test.step('1st step - dirigirse a la url', async () => {

    console.log('te$$$t')
    await page.goto('https://www.saucedemo.com/');
  })

  await test.step('2nd step - ingresar username', async () => {

    await expect(page).toHaveTitle('Swag Labs')

    await page.getByPlaceholder("Username").fill('standard_user');
    console.log('die $$$lower')
  

  })





})
