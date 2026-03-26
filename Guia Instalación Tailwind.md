

# 🚀 Guía: Instalación de Tailwind CSS v4 en Vue 3 + Vite

Esta guía utiliza el nuevo motor de Tailwind v4, que es más rápido, más sencillo y se integra nativamente como un plugin de Vite.

## 1. Instalación de dependencias
Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm install tailwindcss @tailwindcss/vite
```

## 2. Configuración en Vite
Edita tu archivo `vite.config.js` (o `vite.config.ts`) para incluir el plugin oficial. Esto permite que Tailwind escanee tus archivos automáticamente.

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // [!code ++]

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // [!code ++]
  ],
})
```

## 3. Configuración del CSS
Limpia tu archivo `src/style.css` y añade únicamente la directiva de importación. En la versión 4, ya no necesitas archivos de configuración `.js` externos.

```css
/* src/style.css */
@import "tailwindcss";
```

> **Nota:** Si tienes archivos como `tailwind.config.js` o `postcss.config.js` de versiones anteriores, **bórralos**. No son necesarios en v4.

## 4. Importación Global
Asegúrate de que el CSS esté importado en tu punto de entrada `src/main.js`:

```javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

---

## 🎨 Código de Muestra: Las Bondades de Tailwind

Para que tus alumnos vean por qué usamos Tailwind, pídeles que reemplacen el contenido de su `App.vue` con este componente. Este ejemplo demuestra: **Diseño responsivo, estados (hover), sombras, bordes redondeados y Flexbox.**

```html
<template>
  <main class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    
    <div class="max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-transform hover:scale-105 duration-300">
      
      <div class="relative">
        <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" alt="Producto">
        <span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Nuevo
        </span>
      </div>

      <div class="p-6">
        <h2 class="text-2xl font-bold text-slate-800">Reloj Minimalista v4</h2>
        <p class="mt-2 text-slate-600 leading-relaxed">
          Diseño ultra delgado con integración nativa para desarrolladores Vue. 
          Estilizado completamente con utilidades de Tailwind CSS.
        </p>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-3xl font-extrabold text-slate-900">$99.00</span>
          <button class="bg-slate-900 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200 cursor-pointer">
            Añadir
          </button>
        </div>
      </div>

    </div>
  </main>
</template>
```

---

### ¿Qué ganan los alumnos con esto?
* **Velocidad:** No tienen que saltar entre archivos CSS y HTML; todo el diseño ocurre en el `template`.
* **Consistencia:** Usan una escala de colores y espaciados ya predefinida.
* **Interactividad:** Agregar efectos como el `hover:scale-105` es cuestión de segundos.
