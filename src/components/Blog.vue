<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper"
import 'swiper/css';

const props = defineProps<{
  width: number
}>()

const modules = [Autoplay];

const posts = [
  {
    title: "From Mess to Meaning: How Data Cleaning Can Transform Your Analysis&nbsp;Results",
    slug: "",
    img: ""
  },
  {
    title: "The Power of Data: 5 Marketing Trends to Elevate Your Business in&nbsp;2023",
    slug: "",
    img: ""
  },
  {
    title: "Data engineer vs. data scientist: What’s the difference &amp; which should you&nbsp;hire",
    slug: "",
    img: ""
  }
]

const showPosts = computed(() => {
  return props.width > 1024 ? posts : posts.slice(0,2);
})
</script>

<template>
  <section class="!m-0 md:!m-8 md:grid md:gap-3 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
    <div v-if="width > 768" class="appear lg:px-6 px-3 py-3 md:px-6 lg:py-12 bg-white h-[50vw] lg:h-[512px] relative overflow-hidden rounded-3xl shadow-lg flex flex-col justify-end" v-for="(post, index) in showPosts">
      <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-30% md:from-40% to-white to-50% md:to-75%" />
      <img class="absolute top-0 left-0 w-full md:h-3/4 h-1/2 object-cover" :src="`/blog/${index+1}.png`" :alt="post.title" />
      <h3 class="relative z-20 text-xs md:text-lg lg:text-3xl" v-html="post.title" />
      <RouterLink :to="post.slug" class="text-orange mt-1 relative z-20 hover:underline"><p class="md:text-lg">Continue Reading</p></RouterLink>
    </div>
    <swiper :modules="modules" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" v-else class="appear !p-8">
      <SwiperSlide v-for="(post, index) in showPosts" class="shadow-lg bg-white overflow-hidden rounded-3xl">
        <div class="relative h-[300px] px-3 py-3 flex flex-col justify-end">
          <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-30% md:from-40% to-white to-50% md:to-75%" />
          <img class="absolute top-0 left-0 w-full md:h-3/4 h-1/2 object-cover" :src="`/blog/${index + 1}.png`" :alt="post.title" />
          <h3 class="relative z-20 text-xs md:text-lg lg:text-3xl" v-html="post.title" />
          <RouterLink :to="post.slug" class="text-orange mt-1 relative z-20 hover:underline"><p class="md:text-lg">Continue Reading</p></RouterLink>
        </div>
      </SwiperSlide>
    </swiper>
  </section>
</template>

<style scoped>

</style>
