<template>
  <main class="bg-white min-h-screen text-gray-800">

    <!-- HERO -->
    <section class="min-h-screen grid md:grid-cols-2">

      <!-- IZQUIERDA -->
      <div class="bg-[#f6d6d6] flex items-center justify-center px-8 py-16">
        <div class="max-w-md text-left">
          <p class="uppercase tracking-[0.2em] text-sm text-gray-700 mb-4">
            Portafolio 2026
          </p>

          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Paula López
          </h1>

          <p class="text-lg md:text-xl text-gray-700 mb-6">
            Front-End Developer & Diseñadora Gráfica
          </p>

          <p class="text-gray-600 mb-8">
            Creo interfaces simples, elegantes y funcionales,
            uniendo diseño visual y desarrollo web.
          </p>

          <a
            href="#proyectos"
            class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      <!-- DERECHA -->
      <div class="bg-gray-100 flex items-center justify-center">
        <div class="w-56 h-56 md:w-72 md:h-72 rounded-full border border-gray-300 flex items-center justify-center">
          <span class="text-6xl md:text-7xl">🎨</span>
        </div>
      </div>
    </section>

    <!-- SOBRE MI -->
    <section class="py-20 px-6 text-center">
      <h2 class="text-3xl font-semibold mb-4">Sobre mí</h2>
      <p class="max-w-xl mx-auto text-gray-600">
        Soy diseñadora gráfica y desarrolladora Front-End en formación.
        Me enfoco en crear interfaces simples, elegantes y funcionales.
      </p>
    </section>

    <!-- PROYECTOS -->
    <section id="proyectos" class="py-20 px-6 bg-gray-50">
      <h2 class="text-3xl font-semibold text-center mb-4">Proyectos</h2>

      <p class="text-center text-gray-600 mb-12">
        Una selección de trabajos donde combino diseño visual y desarrollo web.
      </p>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!-- APP CLIMA -->
        <article class="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div class="bg-[#cfe8e8] h-32 flex items-center justify-center text-4xl">
            🌤️
          </div>

          <div class="p-6 text-center">
            <h3 class="font-semibold text-xl mb-2">App de Clima</h3>
            <p class="text-sm text-gray-500 mb-4">
              Aplicación con visualización del clima y datos dinámicos.
            </p>

            <button class="border px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
              Ver detalle
            </button>
          </div>
        </article>

        <!-- HABIT TRACKER -->
      <article class="bg-white rounded-3xl overflow-hidden shadow-sm">
        <div class="bg-[#f6d6d6] h-32 flex items-center justify-center text-4xl">
          ✅
        </div>

        <div class="p-6 text-center">
          <h3 class="font-semibold text-xl mb-2">Habit Tracker</h3>
          <p class="text-sm text-gray-500 mb-4">
            Gestión de hábitos usando Vue, reactividad y almacenamiento local.
          </p>

          <div class="flex justify-center gap-3 flex-wrap">
            <a
              href="https://paulalopezv2.github.io/habit-tracker-paula/"
              target="_blank"
              class="inline-block border px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Ver proyecto
            </a>

            <a
              href="https://github.com/paulalopezv2/habit-tracker-paula"
              target="_blank"
              class="inline-block border px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Ver código
            </a>
          </div>
        </div>
      </article>

        <!-- BUSCADOR -->
        <article class="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div class="bg-[#e2ddf3] h-32 flex items-center justify-center text-4xl">
            🎬
          </div>

          <div class="p-6 text-center">
            <h3 class="font-semibold text-xl mb-2">Buscador de Películas</h3>
            <p class="text-sm text-gray-500 mb-4">
              Consumo de API externa con resultados dinámicos.
            </p>

            <button class="border px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
              Ver detalle
            </button>
          </div>
        </article>

      </div>
    </section>


    <!-- CONTACTO -->
<section class="py-20 px-6 bg-[#0f0f14] text-center">
  
  <h2 class="text-3xl font-semibold text-white mb-4">
    Disponible para nuevos proyectos
  </h2>

  <p class="max-w-xl mx-auto text-gray-400 mb-10">
    Si tienes una idea o necesitas apoyo en tu proyecto, puedes contactarme y con gusto lo revisamos.
  </p>

  <div class="flex flex-col items-center gap-4 text-gray-300">

    <p class="hover:text-pink-400 transition">
      📧 <a href="mailto:luciaop398@gmail.com">luciaop398@gmail.com</a>
    </p>

    <p class="hover:text-pink-400 transition">
      💻 <a href="https://github.com/lucia398" target="_blank">github.com/lucia398</a>
    </p>

    <p class="text-gray-500">
      🔗 LinkedIn (próximamente)
    </p>

  </div>

</section>


    <!-- FOOTER -->
    <footer class="text-center py-10 text-gray-500 text-sm">
      © 2026 Paula López
    </footer>

  </main>
</template>

<script setup>
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>