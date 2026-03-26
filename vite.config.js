import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/portafolio-m8-paula/',
  build: {
    outDir: 'docs'
  }
})