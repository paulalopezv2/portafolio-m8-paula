
## 📊 Comparativa: CSS Tradicional vs. Tailwind CSS v4

Esta tabla resume las diferencias clave que enfrentarán al desarrollar interfaces:

| Característica | CSS Tradicional (Semántico) | Tailwind CSS (Utility-First) |
| :--- | :--- | :--- |
| **Nombramiento** | Debes inventar nombres (`.card-container`, `.btn-submit`). | **No inventas nombres.** Usas clases de utilidad (`flex`, `bg-blue-500`). |
| **Context Switching** | Saltas constantemente entre el `.vue` y el `.css`. | **Todo en un solo lugar.** Estilizas directamente en el HTML/Template. |
| **Mantenimiento** | El archivo CSS crece infinitamente. Miedo a borrar clases. | **CSS constante.** El bundle no crece aunque el proyecto sea gigante. |
| **Consistencia** | Cada desarrollador elige sus píxeles (13px, 14px, 15px). | **Sistema de diseño integrado.** Escalas de spacing y color ya definidas. |
| **Curva de aprendizaje** | Debes dominar toda la sintaxis de CSS. | Necesitas saber CSS, pero Tailwind **acelera la implementación**. |

---

## 💡 Argumentos Técnicos para la Clase

Aquí tienes tres puntos clave que puedes explicarles para "venderles" la idea de usar Tailwind:

### 1. El problema del "CSS Muerto"
En CSS tradicional, a medida que el proyecto crece, los archivos `.css` se vuelven intocables por miedo a romper algo en otra página. Con Tailwind, si borras un componente de Vue, **los estilos se van con él**, porque están escritos directamente en el componente.

### 2. Adiós al "Naming Fatigue"
¿Cuántas veces han perdido tiempo pensando si una clase debería llamarse `.wrapper` o `.container`? Tailwind elimina esa carga mental. Te enfocas en el **diseño**, no en la **nomenclatura**.

### 3. Diseño Responsivo Instantáneo
Explícales lo fácil que es hacer un sitio móvil con los prefijos:
> "Chicos, si quieren que un texto sea pequeño en móvil y grande en PC, solo escriben `text-sm md:text-xl`. Sin escribir una sola @media-query manual."

---

## 🛠️ Ejemplo de "Traducción"

Para que lo vean visualmente en el código:

**En CSS Tradicional:**
```html
<button class="btn-primario">Click</button>

<style>
.btn-primario {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.btn-primario:hover {
  background-color: #2563eb;
}
</style>
```

**En Tailwind CSS:**
```html
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Click
</button>
```

---

¿Te sirve este material para la lección, JuanPa? Si quieres, puedo diseñarte una **"Cheat Sheet" (hoja de trucos)** con las 20 clases que más van a usar tus alumnos al principio.