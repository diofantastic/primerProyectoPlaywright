# Proyecto de Automatización con Playwright

## 📌 Descripción
Este proyecto utiliza [Playwright](https://playwright.dev/) para la automatización de pruebas end-to-end en aplicaciones web.  
Incluye configuración básica, ejemplos de pruebas y buenas prácticas para mantener un flujo de trabajo escalable.

---

## 🚀 Requisitos
- Node.js >= 16
- npm o yarn
- Playwright instalado globalmente o en el proyecto

---

## 🔧 Instalación
```bash
# Clonar el repositorio
git clone https://github.com/usuario/proyecto-playwright.git
cd proyecto-playwright

# Instalar dependencias
npm install
# Ejecutar todas las pruebas
npx playwright test

# Ejecutar pruebas en modo UI
npx playwright test --ui

# Ejecutar pruebas en un navegador específico
npx playwright test --project=chromium

├── tests/                # Carpeta principal de pruebas
│   ├── example.spec.ts   # Ejemplo de prueba
├── playwright.config.ts  # Configuración de Playwright
├── package.json
└── README.md

npx playwright show-report

import { test, expect } from '@playwright/test';

test('Página de inicio carga correctamente', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
