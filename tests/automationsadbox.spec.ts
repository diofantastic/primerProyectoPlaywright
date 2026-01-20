import { test, expect, Page } from '@playwright/test';

test.describe('Interactuando con elementos en una página/*  */', () => {
    test('INTERACTUANDO CON ELEMENTOS DE UNA PÁGINA WEB', async ({ page }) => {

        const inputText = await page.getByRole('textbox', { name: 'Un aburrido texto' })

        await test.step('dirigir a la pagina web', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
        })

        await test.step('Clic en el botón dinámico', async () => {
            const btnShowPopup = await page.getByRole('button', { name: 'Mostrar popup' })
            btnShowPopup.click()

            await page.getByRole('button', { name: 'Cerrar' }).click()
        })

        await test.step('Fill input', async () => {
            const textoIngresado = 'ICEMAN 🧊'


            await inputText.fill(textoIngresado)
            await inputText.clear()

        })

        await test.step('Check y uncheck chexkbox', async () => {

            const icecreamCheckbox = await page.getByRole('checkbox', { name: 'Helado 🍧' })
            // await icecreamCheckbox.check()

        })

        await test.step('Radio button', async () => {
            await page.getByRole('radio', { name: 'Si' }).check()
        })

        await test.step('Dropdown Deporte', async () => {
            await page.getByLabel('Dropdown').selectOption('Tennis')

        })

        await test.step('Dropdown Día de la semana', async () => {
            await page.getByRole('button', { name: 'Día de la semana' }).click()
            await page.getByRole('link', { name: 'Sábado' }).click()
        })

        await test.step('Simular texto', async () => {
            const drake: string[] = ['D', 'R', 'A', 'K', 'E']

            for (const letra of drake) {
                await inputText.press(letra)
            }

        })


    })

    test('DRAG AND DROP MOZILLA', async ({ page }) => {
        await test.step('visitar pagina web de mozilla', async () => {
            await page.goto('https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop')
        })

        await test.step('cargar imagen en drag and drop', async () => {
            ///
            //await page.locator('iframe[title="runner"]').contentFrame().getByText('Drop images here, or click to').setInputFiles('./files/whichone.png');

            await page.waitForTimeout(8000);
            const iceman_season: string[] = ['00_CLB.jpg', '01_HN.JPG', '02_HL.jpg', '03_FATD.jpg']
            for (const file of iceman_season) {

                await page.locator('iframe[title="runner"]').contentFrame().getByText('Drop images here, or click to').setInputFiles('./files/' + file);
                // Espera 3000 milisegundos (3 segundos)
                await page.waitForTimeout(2000);

                await page.locator('iframe[title="runner"]').contentFrame().getByRole('button', { name: 'Clear' }).click()
                await page.waitForTimeout(1500);
            }

            ///
        })


    })


})
