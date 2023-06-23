<script setup lang="ts">
import { gsap } from "@/gsap";
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import useDetectOutsideClick from '@/useDetectOutsideClick'

const width = ref(0);
const opened = ref(false);
const darkMode = ref(false);
const solutions = ref(false);
const solutionsEl = ref(null);
const solutionsSelector = ref(null);

function resize() {
  width.value = window.innerWidth
}
onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

const route = useRoute();

function checkRoute() {
  if (route.name === 'About' || route.name === 'Contact' || route.name === 'Careers') {
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

useDetectOutsideClick(solutionsEl, (e: MouseEvent) => {
  if (solutions.value) {
    e.preventDefault()
    solutions.value = false
  } else if (e.target && (e.target as HTMLElement).classList.contains('solutionsSelector')) {
    solutions.value = true
  }
})

watch(() => route.name, () => {
  checkRoute();
  opened.value = false;
  solutions.value = false;
  window.scrollTo(0, 0);
}, { immediate: true })
</script>

<template>
  <!-- <client-only> -->
  <nav class="lg:items-center flex-col lg:flex-row fixed z-50 shadow-lg w-full py-3 px-6 lg:py-6 lg:px-12 top-0 justify-between flex origin-top transition-transform duration-500" :class="[darkMode ? 'bg-black' : 'bg-white']">
    <div class="flex justify-between items-center relative z-50">
      <router-link to="/">
        <img class="h-6 lg:h-8 w-auto transition-transform" :src="darkMode ? '/DataFirstLogoWhite.webp' : '/DataFirstLogoBlack.webp'" alt="DataFirst Logo" />
      </router-link>
      <div @click="() => {opened = !opened; solutions = false}" v-if="width <= 1024" class="h-8 w-8 p-2 flex flex-col justify-around cursor-pointer origin-top">
        <span class="rounded w-6 h-0.5 transition-transform duration-500 origin-[25%_-150%]" :class="[opened ? 'rotate-45' : '', darkMode ? 'bg-white' : 'bg-black']"></span>
        <span class="rounded w-6 h-0.5 transition-transform duration-500"  :class="[opened ? 'opacity-0' : '', darkMode ? 'bg-white' : 'bg-black']"></span>
        <span class="rounded w-6 h-0.5 transition-transform duration-500 origin-[0%_100%]"  :class="[opened ? '-rotate-45' : '', darkMode ? 'bg-white' : 'bg-black']"></span>
      </div>
    </div>
    <Transition name="slideIn">
    <ul v-show="width > 1024 || (opened && width <= 1024)" class="flex lg:flex-row flex-col lg:bg-transparent lg:m-0 ml-auto m-auto text-center transition-opacity absolute lg:relative lg:h-auto h-screen lg:w-auto w-full lg:justify-normal justify-center lg:left-auto left-0" :class="[darkMode ? 'bg-black text-white' : 'bg-white text-black']">
      <li v-if="width <= 1024" class="py-2 lg:py-0 px-6 hover:text-teal-900" :class="[solutions ? '-translate-y-[200%] lg:translate-y-0' :'']"><router-link to="/" @click="opened = false"><p>Home</p></router-link></li>
      <li class="cursor-pointer py-2 lg:py-0 px-6 hover:text-teal-900" :class="[solutions ? '-translate-y-[200%] lg:translate-y-0' :'']"><router-link to="/about" @click="opened = false"><p>About Us</p></router-link></li>
      <li class="flex flex-col items-center cursor-pointer py-2 lg:py-0 px-6 hover:text-teal-900 relative" :class="[solutions ? 'text-teal-900' : '', darkMode ? 'bg-black' : 'bg-white', solutions ? '-translate-y-[200%] lg:translate-y-0' : '']">
        <p class="solutionsSelector">Solutions</p>
        <Transition :name="width > 1024 ? 'slideIn' : 'fade'">
          <ul ref="solutionsEl" class="absolute flex flex-col top-[110%] lg:mt-8 lg:mb-0 mt-2 mb-10 rounded-3xl shadow-lg -z-10 w-[150%]" :class="[darkMode ? 'bg-darkGray' : 'bg-gray']" v-if="solutions">
            <li class="cursor-pointer py-2 lg:py-4 px-6 hover:text-teal-900" :class="[darkMode ? 'text-white' : 'text-black']"><router-link to="/solutions/DataAnalytics" @click="opened = false"><p>Data Analytics</p></router-link></li>
            <li class="cursor-pointer py-2 lg:py-4 px-6 hover:text-teal-900" :class="[darkMode ? 'text-white' : 'text-black']"><router-link to="/solutions/Recruitment" @click="opened = false"><p>IT Recruitment &amp; Outsourcing</p></router-link></li>
            <li class="cursor-pointer py-2 lg:py-4 px-6 hover:text-teal-900" :class="[darkMode ? 'text-white' : 'text-black']"><router-link to="/solutions/FLOW" @click="opened = false"><p>FLOW</p></router-link></li>
          </ul>
        </Transition>
      </li>
      <li class="cursor-pointer py-2 lg:py-0 px-6 hover:text-teal-900 transition-transform" :class="[solutions ? 'translate-y-[200%] lg:translate-y-0' :'']"><router-link to="/partners" @click="opened = false"><p>Partners</p></router-link></li>
      <li class="cursor-pointer py-2 lg:py-0 px-6 hover:text-teal-900 transition-transform" :class="[solutions ? 'translate-y-[200%] lg:translate-y-0' : '']"><router-link to="/contact" @click="opened = false"><p>Contact</p></router-link></li>
      <li class="cursor-pointer py-2 lg:py-0 px-6 hover:text-teal-900 transition-transform" :class="[solutions ? 'translate-y-[200%] lg:translate-y-0' : '']"><router-link to="/careers" @click="opened = false"><p>Careers</p></router-link></li>
      <li class="cursor-pointer py-2 lg:py-0 px-6 hover:text-teal-900 transition-transform" :class="[solutions ? 'translate-y-[200%] lg:translate-y-0' : '']"><router-link to="/blog" @click="opened = false"><p>Blog</p></router-link></li>
    </ul>
    </Transition>
  </nav>

  <router-view v-slot="{ Component }" :key="route.path">
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
  
  <footer class="absolute lg:bottom-6 md:bottom-7 bottom-3 flex md:flex-row flex-col items-center justify-center px-6 md:px-10 lg:px-36 md:justify-between text-center  w-full" :class="[darkMode ? 'text-white' : 'text-black']">
    <p class="text-[0.5rem] 2xl:text-base">Copyright © 2023 Datafirst - All Rights Reserved.</p>
    <span class="flex">
      <p class="text-[0.5rem] 2xl:text-base"><router-link to="/privacy">Privacy Policy</router-link></p>
      <p class="text-[0.5rem] 2xl:text-base"><router-link class="ml-3" to="/terms">Terms &amp; Condition</router-link></p>
    </span>
  </footer>
  <!-- </client-only> -->
</template>

<style scoped>
</style>
