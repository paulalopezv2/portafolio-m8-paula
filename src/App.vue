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
            class="btn-ver-proyectos"
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
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

  <!-- APP CLIMA -->
  <div class="project-card">
    <img src="/img/clima.jpg" alt="App clima" />
    <div class="project-content">
      <h3 class="project-title">App Clima</h3>
      <p class="project-desc">
        Aplicación con API de clima, Vue y diseño pastel.
      </p>

      <div class="project-links">
        <a href="https://paulalopezv2.github.io/app-clima-spa-m7/" target="_blank" class="project-btn">
          Ver proyecto
        </a>

        <a href="https://github.com/paulalopezv2/app-clima-spa-m7" target="_blank" class="project-btn project-btn--ghost">
          Código
        </a>
      </div>
    </div>
  </div>

  <!-- HABIT TRACKER -->
  <div class="project-card">
    <img src="/img/habitos.jpg" alt="Habit tracker" />
    <div class="project-content">
      <h3 class="project-title">Habit Tracker</h3>
      <p class="project-desc">
        Seguimiento de hábitos con Vue.
      </p>

      <div class="project-links">
        <a href="https://paulalopezv2.github.io/habit-tracker-paula/" target="_blank" class="project-btn">
          Ver proyecto
        </a>

        <a href="https://github.com/paulalopezv2/habit-tracker-paula" target="_blank" class="project-btn project-btn--ghost">
          Código
        </a>
      </div>
    </div>
  </div>

  <!-- BUSCADOR PELÍCULAS -->
  <div class="project-card">
    <img src="/img/peliculas.jpg" alt="Buscador películas" />
    <div class="project-content">
      <h3 class="project-title">Buscador de Películas</h3>
      <p class="project-desc">
        Buscador dinámico con consumo de API.
      </p>

      <div class="project-links">
        <a href="https://paulalopezv2.github.io/connect-movie/" target="_blank" class="project-btn">
          Ver proyecto
        </a>

        <a href="https://github.com/paulalopezv2/connect-movie" target="_blank" class="project-btn project-btn--ghost">
          Código
        </a>
      </div>
    </div>
  </div>

  <!-- COFFEE SHOP -->
    <div class="project-card">
    <img src="/img/coffee.jpg" alt="Coffee Shop" />

    <div class="project-content">
      <h3 class="project-title">Coffee Shop</h3>
      <p class="project-desc">
        E-commerce de café con props, emits, carrito y cálculo reactivo.
      </p>

      <div class="project-links">
        <a href="https://paulalopezv2.github.io/coffee-shop/" target="_blank" class="project-btn">
          Ver proyecto
        </a>

        <a href="https://github.com/paulalopezv2/coffee-shop" target="_blank" class="project-btn project-btn--ghost">
          Código
        </a>
      </div>
    </div>
</div>
  

</div>

    <!-- CONTACTO -->
    <section id="contacto" class="py-24 px-6 bg-[#0f0f14] text-center">
      <h2 class="text-3xl font-semibold text-white mb-4">
        Disponible para nuevos proyectos
      </h2>

      <p class="max-w-xl mx-auto text-gray-400 mb-10">
        Si tienes una idea o necesitas apoyo en tu proyecto, puedes contactarme y con gusto lo revisamos.
      </p>

      <div class="flex flex-col items-center gap-3 text-gray-300">
        <p>
          <a href="mailto:paulalopezvaldes2@gmail.com" class="hover:text-pink-400 transition">
            ✉️ paulalopezvaldes2@gmail.com
          </a>
        </p>

        <p>
          <a href="https://github.com/paulalopezv2" target="_blank" class="hover:text-pink-400 transition">
            💻 github.com/paulalopezv2
          </a>
        </p>

        <p class="text-gray-500">🔗 LinkedIn (próximamente)</p>
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
