/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-ssg" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    // commonjsOptions: {
    //   include: [/vue-search-input/, /node_modules/]
    // }
  },
  plugins: [vue(), Pages(),],
  resolve: {
    alias: [
      // {find: /^vue-search-input\//, replacement: '/node_modules/vue-search-input/'},
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
    ]
  },
  optimizeDeps: {
    // include: ['vue-search-input'],
  },
  ssr: {
    noExternal: [/vue-search-input/],
  },
  ssgOptions: {
    mock: true,
    dirStyle: 'nested'
  },
})
