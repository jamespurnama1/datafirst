<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMounted, onBeforeUnmount } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(async() => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  ScrollTrigger.batch(".appear", {
    onEnter: (elements, triggers) => {
      gsap.to(elements, { opacity: 1, y: 0, stagger: 0.15 });
    },
    start: "top 90%",
  })

  ScrollTrigger.batch('.split span', {
    onEnter: (elements) => {
      gsap.to(elements, {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      })
      gsap.to(elements, {
        autoAlpha: 1,
        stagger: 0.2,
      })
    },
    start: "50% 70%",
    onLeave: elements => gsap.set(elements, { opacity: 1, y: 0, overwrite: true }),
  })

  // ScrollTrigger.refresh();
})

onBeforeUnmount(() => {
  const triggers = ScrollTrigger.getAll();
  triggers.forEach(trigger => {
    trigger.kill()
  })
})

const partners = {
  Storage: [
    '/logo/storage/image 4.png',
    '/logo/storage/image 5.png',
    '/logo/storage/image 6.png',
    '/logo/storage/image 7.png',
    '/logo/storage/image 54.png',
    '/logo/storage/image 56.png',
    '/logo/storage/image 81.png',
  ],
  Mining: [
    '/logo/mining/data 1.png',
    '/logo/mining/image 8.png',
    '/logo/mining/image 9.png',
    '/logo/mining/image 51.png',
    '/logo/mining/image 53.png',
  ],
  Analytics: [
    '/logo/analytics/image 13.png',
    '/logo/analytics/image 14.png',
    '/logo/analytics/image 15.png',
    '/logo/analytics/image 16.png',
    '/logo/analytics/image 17.png',
  ],
  Visualization: [
    '/logo/visualization/image 9.png',
    '/logo/visualization/image 10.png',
    '/logo/visualization/image 11.png'
  ]
}
</script>
<template>
  <section>
    <div class="appear relative overflow-hidden bg-white min-h-[300px] lg:h-72 rounded-3xl shadow-lg py-6 px-6 lg:px-12 mb-3 lg:my-12 flex flex-col lg:flex-row lg:gap-72 lg:min-h-[240px]" v-for="(images, type) in partners">
      <h3 class="lg:text-left text-lg lg:text-5xl mt-auto relative z-20">{{ type }}</h3>
      <div class="flex flex-1 justify-center items-center flex-wrap relative z-20">
        <img class="object-contain w-24 lg:w-36 h-8 lg:h-16 mx-2 lg:mx-5 lg:my-3" v-for="image in images" :src="image" :alt="image">
      </div>
      <div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-r bg-gradient-to-b from-transparent from-15% to-white lg:to-30% to-25%" />
      <div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-tr bg-gradient-to-r from-white to-transparent lg:to-30% to-70%" />
      <img class="mr-auto absolute top-0 left-0 lg:w-1/3 w-full object-cover lg:h-full" :src="`/${type}BG.png`" alt="BG" />
    </div>
  </section>
</template>
<style scoped lang="scss">
</style>