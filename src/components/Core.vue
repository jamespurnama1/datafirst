<template>
  <component :is="width > 768 ? 'div' : Swiper" :modules="modules" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" class="h-80 md:h-96 lg:h-[600px] !p-8 flex md:gap-5">
    <component :is="width > 768 ? 'div' : SwiperSlide" class="appear md:w-1/3 bg-white overflow-hidden rounded-3xl">
      <div class="relative h-full w-full text-black p-5 lg:p-12 -z-0">
        <h3 class="h-3/5 md:h-1/2 text-5xl lg:text-8xl">Our<br>Vision</h3>
        <p>To be the catalyst of growth for local and international organizations thrugh innovative data solutions, in order to become a leading data &amp; technology solutions&nbsp;provider.</p>
        <div class="absolute bg-gradient-to-b to-white from-transparent 
      w-full h-full -z-10 to-65% left-0 top-0" />
        <img class="absolute top-0 left-0 w-full h-[65%] -z-20 object-cover" src="/career/vision.jpeg" alt="Our Vision" />
      </div>
    </component>
    <component :is="width > 768 ? 'div' : SwiperSlide" class="appear md:w-1/3 bg-white overflow-hidden rounded-3xl">
      <div class="relative h-full w-full text-black p-5 lg:p-12 -z-0">
        <h3 class="h-3/5 md:h-1/2 text-5xl lg:text-8xl">Our<br>Values</h3>
        <p>We strive to exceed the expectations of our clients with every solution we provide,brought to you by a team of people who are passionate about data, and ready to deliver value to your&nbsp;business.</p>
        <div class="absolute bg-gradient-to-b to-white from-transparent 
    w-full h-full -z-10 to-65% left-0 top-0" />
        <img class="absolute top-0 left-0 w-full h-[65%] -z-20 object-cover" src="/career/values.jpeg" alt="Our Vision" />
      </div>
    </component>
    <component :is="width > 768 ? 'div' : SwiperSlide" class="appear md:w-1/3 bg-white overflow-hidden rounded-3xl">
      <div class="relative h-full w-full text-black p-5 lg:p-12 -z-0">
        <h3 class="h-3/5 md:h-1/2 text-5xl lg:text-8xl">Our<br>Goal</h3>
        <p>Support organizations achieve higher profitability, optimize operational efficiency and a true personalized customer experience by unlocking the power of data and information&nbsp;assets.</p>
        <div class="absolute bg-gradient-to-b to-white from-transparent 
    w-full h-full -z-10 to-65% left-0 top-0" />
        <img class="absolute top-0 left-0 w-full h-[65%] -z-20 object-cover" src="/career/goal.jpeg" alt="Our Vision" />
      </div>
    </component>
  </component>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper"
import 'swiper/css';

defineProps<{
  width: number
}>()

const modules = [Autoplay];
</script>