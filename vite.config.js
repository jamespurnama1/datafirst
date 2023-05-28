import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [vue(), mkcert()],
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