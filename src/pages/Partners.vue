<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { onMounted, onBeforeUnmount } from 'vue';
import PartnersSection from '@/components/PartnersSection.vue';

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
})

onBeforeUnmount(() => {
  const triggers = ScrollTrigger.getAll();
  triggers.forEach(trigger => {
    trigger.kill()
  })
})
</script>
<template>
  <main class="w-screen pb-16 lg:pb-10 px-6 lg:px-24 mt-8 lg:mt-24">
    <div class="flex flex-col lg:flex-row items-center justify-start mb-10 lg:mb-0">
      <div>
        <h1 class="split text-4xl lg:text-8xl font-bold lg:text-left text-center"><span>We </span><span>go </span><span>far </span><span>by </span><br><span>going</span>&nbsp;<span class="text-teal-900">together.</span></h1>
        <p class="mt-5 lg:mb-0 mb-5 lg:w-3/5 mx-auto lg:mx-0">We work with some of industry leading tech companies to provide you with the state-of-the-art technologies that are essential to our services.</p>
      </div>
      <button class="bg-teal-900 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 text-white font-bold lg:mx-0 mx-auto text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 cursor-pointer"><router-link to="/">Become a customer</router-link></button>
    </div>
    <PartnersSection />
    <h2 class="text-center mt-24">Backed by</h2>
    <div class="flex justify-between px-24 mt-5 mb-36">
      <img class="w-16 md:w-24 lg:w-36 object-contain" src="/logo/backed/SME.png" alt="Dubai SME" />
      <img class="w-16 md:w-24 lg:w-36 object-contain" src="/logo/backed/sheraa.png" alt="Sheraa" />
      <img class="w-16 md:w-24 lg:w-36 object-contain" src="/logo/backed/khalifa.png" alt="Khalifa Fund for Enterprise Development" />
    </div>
  </main>
</template>
<style scoped lang="scss">
</style>