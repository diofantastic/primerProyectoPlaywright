import { test, expect, Page } from '@playwright/test';

test('01 - Mock de una fruta que no viene en una API real', async ({ page }) => {
    //hacemos un mock de la API antes de navegar

    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{ name: 'Melocotón', id: 26 }]
        await route.fulfill({ json })
    })

    //nos dirigimos a la url
    await page.goto('https://demo.playwright.dev/api-mocking')

    //validamos que melocotón está disponible

    await expect(page.getByText('Melocotón')).toBeVisible()
})

test('02 - Obtengo la respuesta real y le agrego algo no tan real', async ({ page }) => {
    // Obtenemos la respuesta y le agregamos un extra
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Anuel AA', id: 200 });
        // Obtenemos la respuesta real mientras que le agregamos un extra
        // al objeto JSON que va a estar siendo representado.
        await route.fulfill({ response, json });
    });

    // Vamos a la página
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Validamos que vino la respuesta real con el extra que le sumamos antes
    await expect(page.getByText('Anuel AA', { exact: true })).toBeVisible();
});


