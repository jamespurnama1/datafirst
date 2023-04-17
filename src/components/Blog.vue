<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  width: number
}>()

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
  <section class="grid gap-3 lg:gap-12 grid-cols-2 lg:grid-cols-3">
    <div class="appear lg:px-6 px-3 py-3 lg:py-12 bg-white h-[50vw] lg:h-[512px] relative overflow-hidden rounded-3xl shadow-lg flex flex-col justify-end" v-for="(post, index) in showPosts">
      <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-30% to-white to-50%" />
      <img class="absolute top-0 left-0 w-full h-1/2" :src="`/blog/${index+1}.png`" :alt="post.title" />
      <h3 class="relative z-20 text-xs lg:text-3xl" v-html="post.title" />
      <RouterLink :to="post.slug" class="text-orange mt-1 relative z-20 hover:underline"><p>Continue Reading</p></RouterLink>
    </div>
  </section>
</template>

<style scoped>

</style>
