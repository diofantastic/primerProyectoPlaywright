import { test, expect, Page } from '@playwright/test';
import { sandBoxPage } from './Pages/sandboxPage';

test.describe('aserciones', () => {
    /////BEFORE EACH
    test.beforeEach(async ({ page }) => { await test.step('DIRIGIRSE AL SITIO WEB', async () => { await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/'); }); });
    /////

    test('01 - Validación checkbox - @SSS4U', async ({ page }) => {
        await test.step('validacion checked y unchecked ', async () => {
            const menu: string[] = ['Pizza 🍕', 'Hamburguesa 🍔', 'Pasta 🍝', 'Helado 🍧', 'Torta 🍰']

            for (const dish of menu) {

                const checkbox = await page.getByRole('checkbox', { name: dish })

                await checkbox.check()

                await expect(checkbox).toBeChecked()

                await checkbox.uncheck()

                await expect(checkbox).not.toBeChecked()
            }
        })

    })

    test('02 - Validar que texto sea visible @SSS4U', async ({ page }) => {
        await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click()
        await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toBeVisible()
        console.log('hola')
    })

    test('03 - Validaciones en input texto', async ({ page }) => {

        await expect(page.getByRole('textbox', { name: 'Un aburrido texto' }), 'el campo de texto no admite edición').toBeEditable()

        await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill('ICEMAN 🧊')
        await expect(page.getByRole('textbox', { name: 'Un aburrido texto' }), 'el campo de texto no tiene el valor ICEMAN 🧊').toHaveValue('ICEMAN 🧊')
    })

    test('04 - Validar dropdwon', async ({ page }) => {
        const select = page.locator('#formBasicSelect');
        const optionsText = await select.locator('option').allTextContents();

        expect(optionsText).toEqual([
            'Seleccioná un deporte',
            'Fútbol',
            'Tennis',
            'Basketball'
        ]);


    })

    test('05 - Validar tabla estática', async ({ page }) => {
        const secondTable = page.locator('table').nth(1)
        await expect(secondTable).toContainText('Messi')
    })

    test('06 - Comparar tablas dinámicas - @TFO', async ({ page }) => {
        await test.info().attach('screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png'
        })
        //test.fail()
        // 2. Localizar la tabla dinámica 
        // 
        const tablaDinamica = page.locator('div.col:has(> h2:text("Tabla dinámica")) > table');

        // 3. Esperar que esté visible 
        // 
        await expect(tablaDinamica).toBeVisible();

        // 4. Extraer el texto inicial 
        // 
        const textoAntes = await tablaDinamica.innerText(); console.log('Texto antes del reload:', textoAntes);

        // 5. Recargar la página 
        // 
        await page.reload();

        //6. Esperar que la tabla esté visible nuevamente 
        // 
        await expect(tablaDinamica).toBeVisible();

        // 7. Extraer el texto después del reload 
        // 
        const textoDespues = await tablaDinamica.innerText(); console.log('Texto después del reload:', textoDespues);

        // 8. Validar que el texto haya cambiado 
        // 
        expect(textoDespues).not.toEqual(textoAntes);
    })

    //solo ejecuta el test que tiene only
    //test.only('07 - Soft assertions - @TFO', async ({ page, browserName }) => {
    test('07 - Soft assertions', async ({ page }) => {
        //test.skip(browserName === 'chromium', 'No anda en Chrome aún')
        await expect.soft(page.getByText('Pizza 🍕')).toBeVisible()
        await expect.soft(page.getByText('Hamburguesa 🍔')).toBeVisible()
        await expect.soft(page.getByText('Pasta 🍝')).toBeVisible()
        await expect.soft(page.getByText('Helado 🍧')).toBeVisible()
        await expect.soft(page.getByText('Torta 🍰')).toBeVisible()
    })
    /*
        //skip se salta el test
        //test.skip('08 - Falso popup', async ({ page }) => {
        test.only('08 - Falso popup', async ({ page }) => {
            test.info().annotations.push({
                type: 'PM-6767',
                description: 'Historia PM-6767 - Creación de formularios'
            })
            await page.getByRole('button', { name: 'Mostrar popup' }).click();
    
            await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');
    
            await page.getByRole('button', { name: 'Cerrar' }).click();
        })
    
    */

    test('09 - Page Object Model', async ({ page }) => {
        const sandbox = new sandBoxPage(page)

        await sandbox.checkPasta()

        await expect(sandbox.pastaCheckbox, 'El checkbox no está seleccionado').not.toBeChecked()
        //comentado
        //.toBeChecked()
    })


})
