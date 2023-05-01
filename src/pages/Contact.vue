<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { debounce } from "@/debounce";

const state = ref('sales')

const changeState = (value?: string) => {
  if (value) {state.value = value}
  const el = document.querySelector(`.${state.value}`)
  const tl = gsap.timeline()
  tl.to('.selector', {
    x: el ? el.getBoundingClientRect().x - (document.querySelector('.appear')!.getBoundingClientRect().x + el.getBoundingClientRect().width * 0.1) : 0,
    duration: 0.1,
    ease: "none"
  })
  tl.to('.selector', {
    scaleX: el ? (el.getBoundingClientRect().width * 1.2) : 0,
    duration: 0.1,
    ease: "none",
  })
}

const de = debounce(() => {changeState()}, 250)

onMounted(async() => {
  await new Promise(resolve => setTimeout(resolve, 500));
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
  window.addEventListener('resize', de)
  changeState();
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', de)
  const triggers = ScrollTrigger.getAll();
  triggers.forEach(trigger => {
    trigger.kill()
  })
})
</script>

<template>
  <main class="pt-24">
    <section class="text-white flex flex-col gap-16 lg:flex-row h-[75vh] mx-12 items-center justify-center">
      <h1 class="split text-4xl md:text-8xl font-bold text-center lg:text-left"><span class="text-teal-900">Growth </span><span>is </span><span>just</span><br><span>one </span><span>click</span>&nbsp;<span>away.</span></h1>
      <div class="appear rounded-3xl bg-white py-5 lg:py-6 px-3 md:px-6 lg:px-12 lg:mx-12 min-w-[75%] lg:min-w-0 lg:w-[500px]">
        <ul class="text-black grid grid-cols-3 cursor-pointer bg-white">
          <li class="sales font-medium text-sm md:text-base text-center mx-auto" @click="changeState('sales')">Sales</li>
          <li class="support font-medium text-sm md:text-base text-center mx-auto" @click="changeState('support')">Support</li>
          <li class="general font-medium text-sm md:text-base text-center mx-auto" @click="changeState('general')">General Inquiries</li>
        </ul>
        <div class="selector absolute left-0 h-1 w-[1px] transition-transform origin-left" />
        <transition name="fade" mode="out-in">
          <div class="flex flex-col items-center justify-end pt-10 px-0" v-if="state === 'sales'">
            <p class="text-black text-center mb-2">Learn more about our solutions and how it fits our needs.</p>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm md:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><a href="mailto:info@datafirstservices.com">Contact Sales</a></button>
          </div>
          <div class="flex flex-col items-center justify-end pt-10 px-3" v-else-if="state === 'support'">
            <p class="text-black text-center mb-2">Experiencing technical issues?<br>We're ready to help!</p>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm md:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><a href="mailto:info@datafirstservices.com">Contact Support</a></button>
          </div>
          <div class="flex flex-col items-center justify-end pt-10 px-3" v-else-if="state === 'general'">
            <p class="text-black text-center mb-2">For everything else!</p>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm md:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><a href="mailto:info@datafirstservices.com">Contact us</a></button>
          </div>
        </transition>
      </div>
    </section>
    <section>
      <a class="flex items-center justify-start flex-col h-52 mt-10" href="https://www.linkedin.com/company/datafirst-solutions-analysis-services" target="_blank" rel="noreferrer noopener">
        <img class="object-contain mb-1 w-6 lg:w-8" src="/linkedin.svg" alt="LinkedIn" />
        <p class="text-white text-lg lg:text-lg">Check out our LinkedIn</p>
      </a>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.selector {
  background: linear-gradient(90deg, #F59709 0%, #D1E45B 48.53%, #4CB4AC 100%);
}
</style>