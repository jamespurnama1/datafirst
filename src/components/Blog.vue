<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { Autoplay } from "swiper"
import 'swiper/css';
import { getAll } from '@/api';

const props = defineProps<{
  width: number
  limit: number
}>()

const emit = defineEmits(['clicked'])

interface data {
  title: string; status: string; img: string; slug: number; author: string; content: HTMLCollection; date: Date;
}

const route = useRoute();
const posts = ref(null as null | {number: data});

getAll('blog').then((x) => {
  posts.value = x.data
  Object.keys(posts.value).forEach(key => {
    if (posts.value[key].status !== 'published') delete posts.value[key];
  });
  getKeys('')
  if (typeof route.query.post !== 'undefined') {
    const opened = {}
    Object
      .entries(posts.value)
      .forEach(x => {
        Object.keys(x[1])
          .forEach(y => {
            if (x[1][y].toString().includes(route.query.post)) {
              opened[x[1].slug] = x[1]
            }
          })
      })
    emit('clicked', opened[route.query.post])
  }
}).catch((error) => {
  console.error(error)
});

const modules = [Autoplay];
const result = ref(null as null | {number: data})

function getKeys(val: string) {
  if (!val.length) {
    result.value = posts.value;
  } else if (posts.value) {
    // Object.keys(posts.value).forEach(key => {
    //   console.log(Object.keys(posts.value[key]) as Array<keyof typeof posts.value[key]>).some(k => posts.value[key][k].toLowerCase().includes(val.toLowerCase()));
    // });
    // result.value = posts.value.filter(o =>
    // (Object.keys(o) as Array<keyof typeof o>).some(k => o[k].toLowerCase().includes(val.toLowerCase())));
    result.value = {}
    Object
      .entries(posts.value)
      .forEach(x => {
        Object.keys(x[1])
          .forEach(y => {
            if (x[1][y].toString().includes(val)) {
              result.value[x[1].slug] = x[1]
            }
          })
      })
  }
  // if (result.value) Object.keys(result.value).length = props.limit ? props.limit : Object.keys(result.value).length
}

defineExpose({
  getKeys
});
</script>

<template>
  <section class="appear !m-0 md:!mx-8 lg:!mx-24">
    <component :is="width > 768 || route.name === 'Blog' ? 'div' : Swiper" :modules="modules" :observer="true" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" class="flex flex-col md:grid gap-5 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 !p-8 md:!p-0">
      <component :is="width > 768 || route.name === 'Blog' ? 'div' : SwiperSlide" v-for="(value, key, index) in result" class="min-h-[300px] lg:min-h-[512px] relative !flex flex-col justify-end shadow-lg bg-white overflow-hidden rounded-3xl lg:px-6 px-3 py-3 md:px-6 lg:py-12 lg:my-5 first:mt-0">
          <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-30% md:from-40% to-white to-50% md:to-75%" />
          <img class="absolute top-0 left-0 w-full md:h-3/4 h-1/2 object-cover" :src="value.img" :alt="value.title" />
          <h3 class="relative z-20 text-base md:text-lg lg:text-3xl">{{ value.title }}</h3>
          <button @click="() => { $emit('clicked', value)}" class="read text-orange mt-1 relative z-20 mr-auto hover:underline">
            <p class="md:text-lg">
              <router-link :to="`/blog?post=${value.slug}`">
                Continue Reading
              </router-link>
            </p>
          </button>
      </component>
    </component>
  </section>
</template>

<style scoped>

</style>
