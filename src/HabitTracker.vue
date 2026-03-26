<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 px-6">
    <div class="bg-white rounded-3xl shadow-md p-8 w-full max-w-md">

      <h1 class="text-2xl font-semibold mb-6 text-center">
        Habit Tracker
      </h1>

      <!-- INPUT -->
      <div class="flex gap-2 mb-6">
        <input
          v-model="nuevoHabito"
          type="text"
          placeholder="Nuevo hábito..."
          class="flex-1 border rounded-full px-4 py-2 outline-none"
        />
        <button
          @click="agregarHabito"
          class="bg-black text-white px-4 py-2 rounded-full"
        >
          +
        </button>
      </div>

      <!-- LISTA -->
      <ul>
        <li
          v-for="(habito, index) in habitos"
          :key="index"
          class="flex items-center justify-between mb-3 bg-gray-100 px-4 py-2 rounded-full"
        >
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              v-model="habito.completado"
            />
            <span :class="{ 'line-through text-gray-400': habito.completado }">
              {{ habito.texto }}
            </span>
          </div>

          <button
            @click="eliminarHabito(index)"
            class="text-red-500 text-sm"
          >
            ✕
          </button>
        </li>
      </ul>

    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const nuevoHabito = ref('')
const habitos = ref([])

// AGREGAR
const agregarHabito = () => {
  if (nuevoHabito.value.trim() === '') return

  habitos.value.push({
    texto: nuevoHabito.value,
    completado: false
  })

  nuevoHabito.value = ''
}

// ELIMINAR
const eliminarHabito = (index) => {
  habitos.value.splice(index, 1)
}

// GUARDAR EN LOCALSTORAGE
watch(habitos, (nuevoValor) => {
  localStorage.setItem('habitos', JSON.stringify(nuevoValor))
}, { deep: true })

// CARGAR DATOS
onMounted(() => {
  const datos = localStorage.getItem('habitos')
  if (datos) {
    habitos.value = JSON.parse(datos)
  }
})
</script>

<style scoped>
</style>