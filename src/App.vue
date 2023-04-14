<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="items-center relative p-6 top-0 justify-between flex bg-white w-full">
    <router-link to="/"><img class="h-8 w-auto" src="/DataFirstLogo.webp" alt="DataFirst Logo" /></router-link>
    <ul class="flex">
      <li class="px-6"><router-link to="/about">About Us</router-link></li>
      <li class="px-6"><router-link to="/solutions">Solutions</router-link></li>
      <li class="px-6"><router-link to="/contact">Contact</router-link></li>
      <li class="px-6"><router-link to="/blog">Blog</router-link></li>
    </ul>
  </nav>

  <RouterView />
  <footer class="absolute bottom-6 flex px-24 justify-between text-xs w-full">
    <p>Copyright © 2023 Datafirst - All Rights Reserved.</p>
    <span>
      <router-link to="/privacy">Privacy Policy</router-link>
      <router-link class="ml-3" to="/terms">Terms &amp; Condition</router-link>
    </span>
  </footer>
</template>

<style scoped>

</style>
