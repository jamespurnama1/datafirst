<template>
  <component :is="width > 768 ? 'div' : Swiper" :modules="modules" :observer="true" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" class="h-80 md:h-[400px] lg:h-[600px] !p-8 flex md:gap-5">
    <component v-for="items in result" :is="width > 768 ? 'div' : SwiperSlide" class="bg-white overflow-hidden rounded-3xl md:w-1/3">
      <div class="relative flex flex-col h-full w-full text-black p-5 lg:p-12 -z-0 justify-end">
        <h3 class="leading-5 md:leading-6 md:mb-3 md:text-2xl">{{ items.title }}</h3>
        <p class="text-ellipsis overflow-hidden whitespace-nowrap max-h-16">{{ items.desc }}</p>
        <button @click="$emit('clicked', items); if ($route.path === '/jobs') $router.push('/blog')" class="text-orange cursor-pointer mr-auto"><p>Read more</p></button>
        <div class="absolute bg-gradient-to-b to-white from-transparent 
      w-full h-full -z-10 to-65% left-0 top-0" />
        <img class="absolute top-0 left-0 w-full h-[65%] -z-20 object-cover" :src="items.img" :alt="items.img" />
      </div>
    </component>
  </component>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper"
import 'swiper/css';

defineProps<{
  width: number,
  result: { number:{title: string, desc: string, type?: string, slug: string, img: string}}
}>()

const modules = [Autoplay];
</script>