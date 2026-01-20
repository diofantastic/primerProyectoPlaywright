import { test, expect, Page } from '@playwright/test';

test.describe('Ejercicio 00', () => {

    test('primer prueba jorge', async ({ page }) => {

        await test.step('1st step - dirigirse a la url', async () => {

            console.log('te$$$t')
            await page.goto('https://www.saucedemo.com/');
        })

        await test.step('Validar que el encabezado sea Swag Labs', async () => {
            console.log('DIE TRYING')
            await expect(page).toHaveTitle('Swag Labs')
            console.log('GREEDY')
        })


        await test.step('2nd step - ingresar username', async () => {

            await expect(page).toHaveTitle('Swag Labs')

            await page.getByPlaceholder("Username").fill('standard_user');
            console.log('die $$$lower')


        })

    })






})
