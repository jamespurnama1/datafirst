<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
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
</script>

<template>
  <section class="grid gap-12 lg:grid-cols-3">
    <div class="appear px-6 py-12 bg-white h-[512px] relative overflow-hidden rounded-3xl shadow-lg flex flex-col justify-end" v-for="(post, index) in posts">
      <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-40% to-white to-60%" />
      <img class="absolute top-0 left-0 w-full h-auto" :src="`/blog/${index+1}.png`" :alt="post.title" />
      <h3 class="relative z-20" v-html="post.title" />
      <RouterLink :to="post.slug" class="text-orange mt-1  relative z-20 hover:underline">Continue Reading</RouterLink>
    </div>
  </section>
</template>

<style scoped>

</style>
