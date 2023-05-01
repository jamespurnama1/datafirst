<template>
  <component :is="width > 1024 ? 'div' : Swiper" :modules="modules" :observer="true" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" class="h-80 md:h-[600px] !p-8 flex md:gap-5">
    <component v-for="items in result" :is="width > 1024 ? 'div' : SwiperSlide" class="bg-white overflow-hidden rounded-3xl">
      <div class="relative flex flex-col h-full w-full text-black p-5 md:p-12 -z-0 justify-end">
        <h3 class="">{{ items.title }}</h3>
        <p v-html="items.desc"></p>
        <RouterLink :to="items.slug" class="text-orange">Apply now</RouterLink>
        <div class="absolute bg-gradient-to-b to-white from-transparent 
      w-full h-full -z-10 to-65% left-0 top-0" />
        <img class="absolute top-0 left-0 w-full h-[65%] -z-20 object-cover" :src="`/career/${items.img}.jpeg`" :alt="items.img" />
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
  result: Array<{title: string, desc: string, type?: string, slug: string, img: string}>
}>()

const modules = [Autoplay];
</script>