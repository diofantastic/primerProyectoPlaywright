import { test, expect } from '@playwright/test';

test.describe('Ejercicio 00', () => {

    const secciones = [
        { nombre: 'Elements', url: '/elements', tituloEsperado: 'DEMOQA' },
        { nombre: 'Forms', url: '/forms', tituloEsperado: 'DEMOQA' },
        { nombre: 'Alerts', url: '/alertsWindows', tituloEsperado: 'DEMOQA' },
    ];

    for (const seccion of secciones) {
        test(`Prueba de sección: ${seccion.nombre}`, async ({ page }) => {

            await test.step(`Paso 01 - Navegar a ${seccion.nombre}`, async () => {
                // Usamos la URL base + el path del array
                await page.goto(`https://demoqa.com${seccion.url}`);
                await expect(page).toHaveURL(new RegExp(`${seccion.url}`));
            });

            await test.step(`Paso 02 - Validar Título`, async () => {
                // El título correcto de DemoQA es 'DEMOQA'
                await expect(page).toHaveTitle(seccion.tituloEsperado);
            });

            await test.step(`Paso 03 - Acción específica`, async () => {
                // Aquí podrías interactuar con elementos reales de DemoQA
                // Por ejemplo, verificar que el encabezado de la página sea visible
                const header = page.locator('.main-header');
                await expect(header).toBeVisible();
            });
        });
    }
});