
# 🏆 Tailwind CSS v4: Las 20 Clases Imprescindibles

Esta es la "caja de herramientas" básica para construir el 90% de cualquier interfaz moderna.

### 1. Layout y Flexbox (El esqueleto)
* **`flex`**: Activa el modo Flexbox. Indispensable para alinear cosas.
* **`items-center`**: Centra los elementos verticalmente.
* **`justify-between`**: Separa los elementos dejando el máximo espacio entre ellos.
* **`grid`**: Activa el modo Grid (ideal para galerías o layouts complejos).
* **`gap-4`**: Define el espacio entre elementos (hijos) de un flex o grid.

### 2. Espaciado y Tamaño
* **`p-4` / `m-4`**: Padding (espacio interno) y Margin (espacio externo).
* **`w-full` / `h-screen`**: Ancho total (100%) y Alto total de la pantalla.
* **`max-w-md`**: Limita el ancho máximo para que el contenido no se estire infinito.

### 3. Tipografía (Textos)
* **`text-lg` / `text-2xl`**: Controla el tamaño de la fuente.
* **`font-bold`**: Pone el texto en negrita.
* **`text-center`**: Alinea el texto al centro.
* **`text-slate-600`**: Cambia el color del texto (el número define la intensidad).

### 4. Estética (Diseño Visual)
* **`bg-blue-500`**: Color de fondo.
* **`rounded-xl`**: Bordes redondeados (estilo moderno "suave").
* **`shadow-md`**: Añade una sombra sutil para dar profundidad.
* **`border`**: Añade un borde fino (puedes combinarlo con `border-slate-200`).

### 5. Magia e Interactividad
* **`hover:bg-black`**: Cambia el color solo cuando pasas el ratón por encima.
* **`transition`**: Hace que los cambios de color o tamaño sean suaves (animados).
* **`md:flex-row`**: (Responsive) En pantallas grandes se ve como fila, en móviles como columna.
* **`cursor-pointer`**: Cambia el icono del ratón a la "manito" de click.

---

## 🚀 El "Combo Maestro" para tus alumnos

Diles que intenten memorizar este patrón. Es el que más van a usar para crear tarjetas o contenedores:

```html
<div class="flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
  <h3 class="text-xl font-bold text-blue-600">Título del Proyecto</h3>
  <p class="mt-2 text-slate-500">Descripción rápida usando utilidades.</p>
</div>
```

---

### Un consejo para tu clase:
Si ves que se frustran intentando recordar los números (como `p-4` o `w-64`), recuérdales que **Tailwind v4** usa una escala multiplicadora de **4px**. 
* `p-1` = 4px
* `p-2` = 8px
* `p-4` = 16px

