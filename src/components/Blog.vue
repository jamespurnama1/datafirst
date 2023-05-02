<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { Autoplay } from "swiper"
import 'swiper/css';

const props = defineProps<{
  width: number
  limit: number
}>()

interface data {
  title: string; tag: string; img: string; slug: string;
}

const route = useRoute();
const posts = [
  {
    title: "From Mess to Meaning: How Data Cleaning Can Transform Your Analysis&nbsp;Results",
    slug: "",
    img: "1",
    tag: ""
  },
  {
    title: "The Power of Data: 5 Marketing Trends to Elevate Your Business in&nbsp;2023",
    slug: "",
    img: "2",
    tag: ""
  },
  {
    title: "Data engineer vs. data scientist: What’s the difference &amp; which should you&nbsp;hire",
    slug: "",
    img: "3",
    tag: ""
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "",
    img: "4",
    tag: ""
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "",
    img: "5",
    tag: "hidden tag"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "",
    img: "6",
    tag: ""
  }
]
const modules = [Autoplay];
const result = ref([] as never[] | data[])

function getKeys(val: string) {
  if (!val.length) {
    result.value = posts;
  } else {
    result.value = posts.filter(o =>
    (Object.keys(o) as Array<keyof typeof o>).some(k => o[k].toLowerCase().includes(val.toLowerCase())));
  }
  result.value.length = props.limit ? props.limit : result.value.length
  console.log(props.limit, result.value.length, props.width)
}

getKeys('')

defineExpose({
  getKeys
});
</script>

<template>
  <section class="appear !m-0 md:!mx-8 lg:!mx-24">
    <component :is="width > 768 || route.name === 'Blog' ? 'div' : Swiper" :modules="modules" :observer="true" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" class="md:grid md:gap-5 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 !p-8 md:!p-0">
      <component :is="width > 768 || route.name === 'Blog' ? 'div' : SwiperSlide" v-for="(post, index) in result" class="min-h-[300px] lg:min-h-[512px] relative !flex flex-col justify-end shadow-lg bg-white overflow-hidden rounded-3xl lg:px-6 px-3 py-3 md:px-6 lg:py-12 lg:my-5 first:mt-0">
          <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-30% md:from-40% to-white to-50% md:to-75%" />
          <img class="absolute top-0 left-0 w-full md:h-3/4 h-1/2 object-cover" :src="`/blog/${post.img}.jpeg`" :alt="post.title" />
          <h3 class="relative z-20 text-base md:text-lg lg:text-3xl" v-html="post.title" />
          <RouterLink :to="post.slug" class="text-orange mt-1 relative z-20 hover:underline"><p class="md:text-lg">Continue Reading</p></RouterLink>
      </component>
    </component>
  </section>
</template>

<style scoped>

</style>
