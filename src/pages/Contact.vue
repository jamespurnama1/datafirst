<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMounted, onBeforeUnmount, ref } from 'vue';


const state = ref('sales')

function changeState(value: string) {
  console.log(value)
  state.value = value
}

gsap.registerPlugin(ScrollTrigger);

onMounted(async() => {
  await new Promise(resolve => setTimeout(resolve, 1000));
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
  <main class="">
    <section class="text-white flex flex-col gap-24 lg:flex-row h-[75vh] items-center justify-center">
      <h1 class="text-4xl lg:text-8xl font-bold text-center lg:text-left"><span class="text-teal-900">Growth </span><span>is </span><span>just</span><br><span>one </span><span>click</span>&nbsp;<span>away.</span></h1>
      <div class="relative rounded-3xl bg-white py-5 lg:py-6 px-3 lg:px-12 mx-12 min-w-[75%] lg:min-w-0 lg:w-[500px]">
        <ul class="text-black flex justify-between cursor-pointer bg-white">
          <li class="font-medium text-sm lg:text-base" @click="changeState('sales')">Sales</li>
          <li class="font-medium text-sm lg:text-base" @click="changeState('support')">Support</li>
          <li class="font-medium text-sm lg:text-base" @click="changeState('general')">General Inquiries</li>
        </ul>
        <div class="selector absolute left-0 h-1 transition-transform"
        :class="{
          'lg:translate-x-[42px] translate-x-[9px] w-[15%] lg:w-[11%]': state === 'sales',
          'lg:translate-x-[170px] translate-x-[74px] w-[21%] lg:w-[15%]': state === 'support',
          'lg:translate-x-[320px] translate-x-[100%] w-[42%] lg:w-[28%]': state === 'general',
        }" />
        <transition-group name="fade" :key="state">
          <div class="flex flex-col items-center justify-end pt-10 px-3" v-if="state === 'sales'">
            <p class="text-black text-center w-2/3">Learn more about our solutions and how it fits our needs</p>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><router-link to="/contact">Contact Sales</router-link></button>
          </div>
          <div class="flex flex-col items-center justify-end pt-10 px-3" v-else-if="state === 'support'">
            <p class="text-black text-center w-2/3">Experiencing technical issues?<br>We're ready to help!</p>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><router-link to="/contact">Contact Support</router-link></button>
          </div>
          <div class="flex flex-col items-center justify-end pt-10 px-3" v-else-if="state === 'general'">
            <p class="text-black text-center w-2/3">For everything else!</p>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><router-link to="/contact">Contact us</router-link></button>
          </div>
        </transition-group>
      </div>
    </section>
    <section>
      <a class="flex items-center justify-start flex-col h-52 mt-10" href="https://linkedin.com/datafirst" target="_blank" rel="noreferrer noopener">
        <img class="object-contain mb-3 w-6 lg:w-12" src="/linkedin.svg" alt="LinkedIn" />
        <p class="text-white text-lg lg:text-xl">Check out our LinkedIn</p>
      </a>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.selector {
  background: linear-gradient(90deg, #F59709 0%, #D1E45B 48.53%, #4CB4AC 100%);
}
</style>