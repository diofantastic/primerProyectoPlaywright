import { test, expect, Page } from '@playwright/test';

test.describe('Ejercicio 02', () => {

    test('$$$', async ({ page }) => {

        await test.step('1st step - dirigirse a la url', async () => {

            console.log('te$$$t')
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            //await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
            //await page.getByRole('textbox', { name: 'Un aburrido texto' }).click();
            // Selecciona un botón con role="button" y atributo type="button"
            await page.getByRole('button', { name: 'Mostrar popup' }).and(page.locator('[type="button"]')).click()

            await page.getByText('Cerrar', { exact: true }).click()
        })
    })

test('TEST 2', async ({ page }) => {
    await test.step('PASO LI', async () => {
        
    })
    
})





})
