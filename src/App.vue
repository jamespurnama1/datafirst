<script setup lang="ts">
import { gsap } from "@/gsap";
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const width = ref(0);
const opened = ref(false);
const darkMode = ref(false);

function resize() {
  width.value = window.innerWidth
}
onMounted(() => {
  checkRoute()
  resize()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

const route = useRoute();

function checkRoute() {
  if (route.path === '/about' || route.path === '/contact') {
    dark()
  } else {
    light()
  }
}

function dark() {
  darkMode.value = true
  if (!window) return
  gsap.to('body', {
    backgroundColor: 'black'
  })
}

function light() {
  darkMode.value = false
  if (!window) return
  gsap.to('body', {
    backgroundColor: 'white'
  })
}

watch(() => route.name, () => {
  checkRoute()
  opened.value = false
})
</script>

<template>
  <!-- <client-only> -->
  <nav class="lg:items-center flex-col lg:flex-row relative py-3 px-6 lg:py-6 lg:px-12 top-0 justify-between flex origin-top transition-transform duration-500" :class="[darkMode ? 'bg-black' : 'bg-white']">
    <div class="flex justify-between items-center relative z-50">
      <router-link to="/">
        <img class="h-6 lg:h-8 w-auto transition-transform" :src="darkMode ? '/DataFirstLogoWhite.webp' : '/DataFirstLogoBlack.webp'" alt="DataFirst Logo" />
      </router-link>
      <div @click="opened = !opened" v-if="width <= 1024" class="h-8 w-8 p-2 flex flex-col justify-around cursor-pointer origin-top">
        <span class="rounded w-6 h-0.5 transition-transform duration-500 origin-[25%_-150%]" :class="[opened ? 'rotate-45' : '', darkMode ? 'bg-white' : 'bg-black']"></span>
        <span class="rounded w-6 h-0.5 transition-transform duration-500"  :class="[opened ? 'opacity-0' : '', darkMode ? 'bg-white' : 'bg-black']"></span>
        <span class="rounded w-6 h-0.5 transition-transform duration-500 origin-[0%_100%]"  :class="[opened ? '-rotate-45' : '', darkMode ? 'bg-white' : 'bg-black']"></span>
      </div>
    </div>
    <Transition name="slideIn">
    <ul v-show="width > 1024 || (opened && width <= 1024)" class="flex lg:flex-row flex-col lg:bg-transparent lg:m-0 ml-auto m-auto text-center transition-opacity absolute lg:relative lg:h-auto h-screen lg:w-auto w-screen lg:justify-normal justify-center z-30 lg:left-auto left-0" :class="[darkMode ? 'bg-black text-white' : 'bg-white text-black']">
      <li v-if="width <= 1024" class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/">Home</router-link></li>
      <li class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/about">About Us</router-link></li>
      <li class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/solutions">Solutions</router-link></li>
      <li class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/partners">Partners</router-link></li>
      <li class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/contact">Contact</router-link></li>
      <li class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/contact">Careers</router-link></li>
      <li class="py-2 lg:py-0 px-6 hover:text-teal-900"><router-link to="/blog">Blog</router-link></li>
    </ul>
    </Transition>
  </nav>

  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition name="fade">
        <Suspense>
          <component :is="Component" :width="width" />
          <template #fallback>
            <div class="flex justify-center items-center h-screen">
              <h1 class="text-xl">Loading...</h1>
            </div>
          </template>
        </Suspense>
      </transition>
    </template>
  </router-view>
  
  <footer class="absolute lg:bottom-6 bottom-3 flex lg:flex-row flex-col items-center justify-center px-6 lg:px-36 lg:justify-between text-center lg:text-left w-full" :class="[darkMode ? 'text-white' : 'text-black']">
    <p>Copyright © 2023 Datafirst - All Rights Reserved.</p>
    <span class="flex">
      <p><router-link to="/privacy">Privacy Policy</router-link></p>
      <p><router-link class="ml-3" to="/terms">Terms &amp; Condition</router-link></p>
    </span>
  </footer>
  <!-- </client-only> -->
</template>

<style scoped>

</style>
