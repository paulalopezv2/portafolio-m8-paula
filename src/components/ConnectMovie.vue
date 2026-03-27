<template>
  <section class="min-h-screen bg-pink-50 py-10 px-4">
    <div class="max-w-5xl mx-auto">

      <!-- 🔎 BUSCADOR -->
      <div class="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          v-model="busqueda"
          @keyup.enter="buscarPeliculas"
          type="text"
          placeholder="Buscar película..."
          class="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <button
          @click="buscarPeliculas"
          class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Buscar
        </button>
      </div>

      <!-- ⏳ LOADING -->
      <p v-if="loading" class="text-center text-gray-500 mb-6">
        Cargando películas...
      </p>

      <!-- ❌ MENSAJE -->
      <p v-if="mensaje" class="text-center text-gray-600 mb-6">
        {{ mensaje }}
      </p>

      <!-- 🎬 RESULTADOS -->
      <div
        v-if="peliculas.length > 0"
        class="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <article
          v-for="pelicula in peliculas"
          :key="pelicula.imdbID"
          class="bg-white rounded-2xl shadow-md overflow-hidden border border-pink-100"
        >
          <img
            :src="
              pelicula.Poster !== 'N/A'
                ? pelicula.Poster
                : 'https://via.placeholder.com/300x450?text=Sin+Imagen'
            "
            :alt="pelicula.Title"
            class="w-full h-80 object-cover"
          />

          <div class="p-4 text-center">
            <h3 class="font-semibold text-lg text-gray-800">
              {{ pelicula.Title }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ pelicula.Year }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

//  API KEY 
const API_KEY = '24286c9e'

// estados
const busqueda = ref('')
const peliculas = ref([])
const loading = ref(false)
const mensaje = ref('')

// función buscar
const buscarPeliculas = async () => {
  if (!busqueda.value) {
    mensaje.value = 'Escribe algo para buscar'
    return
  }

  loading.value = true
  mensaje.value = ''
  peliculas.value = []

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${busqueda.value}`
    )

    if (response.data.Response === 'True') {
      peliculas.value = response.data.Search
    } else {
      mensaje.value = 'No se encontraron películas 😢'
    }

  } catch (error) {
    mensaje.value = 'Error al buscar 😢'
    console.error(error)
  }

  loading.value = false
}
</script>