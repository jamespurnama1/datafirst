import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // {find: /^vue-search-input\//, replacement: '/node_modules/vue-search-input/'},
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
    ]
  },
  optimizeDeps: {
    // include: ['vue-search-input'],
  },
})