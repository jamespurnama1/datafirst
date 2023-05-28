<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { debounce } from "@/debounce";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';

defineProps<{
  width: number
}>()

const modules = [Navigation, Autoplay];
const activeIndex = ref(0)

const ML = [
  'Integrate Cloud/On-Premises based Point of Sales (POS)&nbsp;Systems',
  'Integrate Recipe Management and&nbsp;SCM',
  'Integrate Cloud/On-premises based Property Management&nbsp;System',
  'Integrate Cloud based F&B reservation&nbsp;systems',
  'Read forecast and budget<br>Read Guest feedback<br>Read Sales &amp;&nbsp;Catering'
]

const solution = [
  [
    'Performance1.jpeg',
    'Performance2.jpeg',
  ],
  [
    'Integration1.jpg',
    'Integration2.jpg',
    'Integration3.jpg',
    'Integration4.jpg',
    'Integration5.jpg',
  ],
  'Analytics.jpeg',
  'Optimizations.jpeg'
]

const state = ref('dashboard')
const opened = ref(false)

function changeState(value?: string) {
  if (value) { state.value = value }
  const el = document.querySelector(`.${state.value}`)
  const tl = gsap.timeline()
  tl.to('.selector', {
    y: el ? el.getBoundingClientRect().height + (el.getBoundingClientRect().y - document.querySelector('.select')!.getBoundingClientRect().y) : 0,
    x: el ? el.getBoundingClientRect().x - (document.querySelector('.select')!.getBoundingClientRect().x + el.getBoundingClientRect().width * 0.1) : 0,
    duration: 0.1,
    ease: "none"
  })
  tl.to('.selector', {
    scaleX: el ? (el.getBoundingClientRect().width * 1.2) : 0,
    duration: 0.1,
    ease: "none",
  })
}

const de = debounce(() => { changeState() }, 250)

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  ScrollTrigger.batch(".appear", {
    onEnter: (elements, triggers) => {
      gsap.to(elements, { opacity: 1, y: 0, stagger: 0.15, onComplete: () => changeState() });
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
  <main class="w-screen mt-12 lg:mt-20">
    <section class="flex items-center relative min-h-[75vh] !m-0">
      <div class="text-white lg:text-black flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/2 lg:ml-auto">
        <img v-if="width > 1024" class="w-32 object-contain my-0" src="/solutions/FLOW/Logo.svg" alt="FLOW Logo" />
        <img v-else class="w-20 object-contain mx-auto" src="/solutions/FLOW/LogoWhite.svg" alt="FLOW Logo" />
        <h1 class="split font-bold text-4xl lg:text-8xl my-2 text-center lg:text-left"><span>Business
          </span><span>intelligence </span><span class="text-teal-900">beyond </span><span class="text-teal-900">what's </span><span class="text-teal-900">on </span><span>the&nbsp;</span><span>table.</span></h1>
        <p class="my-2 lg:text-xl text-center lg:text-left">Next-Generation Analytics Solution To Optimize Your F&amp;B Operations. Optimize menu engineering, forecast trends, analyze discounts, reduce food waste, identify fraud and much&nbsp;more.</p>
        <button class="bg-teal-900 hover:scale-110 hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><router-link to="/contact">Get Started</router-link></button>
      </div>
      <div v-if="width > 1024" class="absolute bottom-0 lg:left-0 -z-10 w-[51%] h-full bg-gradient-to-r to-90% from-transparent to-white" />
      <img class="absolute bottom-0 lg:left-0 -z-20 object-cover w-full lg:w-1/2 h-full lg:brightness-100 brightness-50" src="/solutions/FLOW/Hero.jpeg"/>
    </section>

    <section class="appear">
      <h2 class="split font-bold text-center leading-tight"><span>The </span><span class="text-orange">Obstacles </span><span>in </span><span>F&amp;B&nbsp;</span><span>Industry </span></h2>
      <div class="flex relative gap-10 mt-5 shadow-lg rounded-3xl overflow-hidden px-6 py-12 h-[500px] items-center justify-center font-semibold flex-wrap">
        <div class="flex items-center justify-start gap-3 flex-grow-0 flex-shrink-0 basis-full md:basis-1/3 lg:basis-[17%] xl:basis-1/4">
          <img class="h-8 md:h-10 lg:h-12 object-contain" src="/solutions/FLOW/Connect.png" alt="Analytics">
          <p class="text-xs md:text-base lg:text-xl">Data resides in too many different&nbsp;systems</p>
        </div>
        <div class="flex items-center justify-start gap-3 flex-grow-0 flex-shrink-0 basis-full md:basis-1/3 lg:basis-1/4">
          <img class="h-8 md:h-10 lg:h-12 mb-5 object-contain" src="/solutions/FLOW/Graph.png" alt="Recruitment">
          <p class="text-xs md:text-base lg:text-xl">F&amp;B is dynamic, require daily reporting for the outlet to be competitive in the&nbsp;market.</p>
        </div>
        <div class="flex items-center justify-start gap-3 flex-grow-0 flex-shrink-0 basis-full md:basis-1/3 lg:basis-[18%]">
          <img class="h-8 md:h-10 lg:h-12 object-contain" src="/solutions/FLOW/Whiteboard.png" alt="Manual Analysis">
          <p class="text-xs md:text-base lg:text-xl">Manual analysis is often inaccurate &amp;&nbsp;obsolete</p>
        </div>
        <div class="flex items-center justify-start gap-3 flex-grow-0 flex-shrink-0 basis-full md:basis-[33%]">
            <img class="h-8 md:h-10 lg:h-12 object-contain" src="/solutions/FLOW/FileWarning.png" alt="Report Warning">
            <p class="text-xs md:text-base lg:text-xl">F&amp;B leaders are spending time preparing reports than creating operational&nbsp;excellence.</p>
          </div>
          <div class="flex items-center justify-start gap-3 flex-grow-0 flex-shrink-0 basis-full md:basis-1/5 xl:basis-1/4">
            <img class="h-8 md:h-10 lg:h-12 object-contain" src="/solutions/analytics/Magnifying.png" alt="Grow">
            <p class="text-xs md:text-base lg:text-xl">Lack of actionable&nbsp;insights.</p>
          </div>
        <div class="absolute bg-white opacity-80 top-0 left-0 w-full h-full -z-10" />
        <img class="absolute top-0 left-0 w-full h-full object-cover saturate-0 -z-20" src="/solutions/FLOW/Obstacles.jpeg" alt="" />
      </div>
    </section>

    <section class="appear">
      <h2 class="split flex items-end justify-center font-bold text-center leading-tight"><span>What </span><span><img class="w-16 md:w-40 lg:w-52 mt-auto mb-2 md:mb-3 lg:mb-5 mx-2 md:mx-3 lg:mx-5" src="/solutions/FLOW/Logo.svg" alt="FLOW Logo" /></span><span>offers </span></h2>
      <div class="appear select relative rounded-3xl shadow-lg bg-white py-5 lg:py-6 px-3 md:px-6 lg:px-12 w-full overflow-hidden">
        <ul class="text-black grid grid-cols-2 lg:grid-cols-4 gap-y-5 cursor-pointer">
          <li class="dashboard font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('dashboard')">Improve Restaurant Performance</li>
          <li class="ML font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('ML')">Seamless Integration</li>
          <li class="data font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('data')">Discount &amp; Promotional Analytics</li>
          <li class="decision font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('decision')">Menu Optimization</li>
        </ul>
        <div class="selector absolute top-0 left-0 h-1 w-[1px] transition-transform origin-left z-10" />
        <transition name="fade" mode="out-in">
          <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-if="state === 'dashboard'">
            <p class="text-black mb-2">A powerful dashboard that displays beyond surface-level data. Going in-depth to analyze user behaviors, attributes, channels and more, offering visibility into your customer journeys and extensive knowledge on their&nbsp;preferences.</p>
            <div class="flex items-center justify-center gap-5 w-full lg:w-1/2">
              <img src="@/assets/arrowMin.svg" class="rotate-180 swiper-button-prev-1 cursor-pointer" />
              <swiper :modules="modules" :slides-per-view="1" :space-between="50" :autoplay="{delay: 5000}" :auto-height="true" :navigation="{
                prevEl: '.swiper-button-prev-1',
                nextEl: '.swiper-button-next-1',
              }" class="shadow-lg rounded-xl lg:rounded-3xl">
                <swiper-slide v-for="img in solution[0]" class="my-auto relative overflow-hidden flex items-center justify-center">
                  <img class="object-contain h-auto w-full" :src="`/solutions/FLOW/${img}`" :alt="img" />
                </swiper-slide>
              </swiper>
              <img src="@/assets/arrowMin.svg" class="swiper-button-next-1 cursor-pointer" />
              <img class="absolute lg:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-else-if="state === 'ML'">
              <p class="text-black mb-2" v-html="ML[activeIndex]" />
              <div class="flex items-center justify-center gap-5 w-full lg:w-1/2">
                <img src="@/assets/arrowMin.svg" class="rotate-180 swiper-button-prev-1 cursor-pointer" />
                <swiper @activeIndexChange="(e) => {activeIndex = e.activeIndex}" :modules="modules" :slides-per-view="1" :space-between="50" :autoplay="{ delay: 5000 }" :auto-height="true" :navigation="{
                    prevEl: '.swiper-button-prev-1',
                    nextEl: '.swiper-button-next-1',
                  }" class="shadow-lg rounded-xl lg:rounded-3xl">
                  <swiper-slide v-for="img in solution[1]" class="my-auto relative overflow-hidden flex items-center justify-center">
                    <img class="object-contain h-auto w-full" :src="`/solutions/FLOW/${img}`" :alt="img" />
                  </swiper-slide>
                </swiper>
                <img src="@/assets/arrowMin.svg" class="swiper-button-next-1 cursor-pointer" />
                <img class="absolute lg:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
              </div>
            </div>
            
          <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-else-if="state === 'data'">
            <p class="text-black mb-2">There are two key elements in ensuring company growth: people and time. We’ll help you free both, by automating data extraction and update, data visualization, report generation, and sending the report at a programmed&nbsp;schedule.</p>
              <div class="lg:my-auto md:m-5 lg:mx-10 rounded-xl lg:rounded-3xl shadow-lg overflow-y-hidden flex items-center justify-center flex-shrink-0 lg:h-3/5 lg:w-1/2">
                <img class="object-fill h-full w-auto" :src="`/solutions/FLOW/${solution[2]}`" alt="Machine Learning" />
                <img class="absolute lg:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
              </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-else-if="state === 'decision'">
            <p class="text-black mb-2">There are two key elements in ensuring company growth: people and time. We’ll help you free both, by automating data extraction and update, data visualization, report generation, and sending the report at a programmed&nbsp;schedule.</p>
              <div class="lg:my-auto md:m-5 lg:mx-10 rounded-xl lg:rounded-3xl shadow-lg overflow-y-hidden flex items-center justify-center flex-shrink-0 lg:h-3/5 lg:w-1/2">
                <img class="object-fill h-full w-auto" :src="`/solutions/FLOW/${solution[3]}`" alt="Machine Learning" />
                <img class="absolute lg:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
              </div>
          </div>
        </transition>
        <!-- <transition name="fade">
          <div class="absolute -z-10 right-0 w-full md:w-1/2 md:h-full h-1/2 bottom-0 md:top-0" v-if="state === 'decision'" >
            <div class="absolute z-10 w-full h-full md:bg-gradient-to-l from-40% to-90% to-white from-transparent" />
            <div class="absolute z-10 w-full h-full bg-gradient-to-t from-40% md:from-60% to-80% md:to-100% to-white from-transparent" />
            <img class="absolute right-0 w-[99%] h-full object-cover" :src="`/solutions/analytics/${solution[3]}`" />
          </div>
        </transition> -->
      </div>
    </section>
    <section class="appear !min-h-0">
      <div class="bg-teal-100 rounded-3xl shadow-lg py-5 md:py-12 px-3 md:px-12">
        <div @click="opened = !opened" class="flex cursor-pointer">
          <h2 class="text-teal-900 text-2xl md:text-5xl">Trusted by industry&nbsp;leaders</h2>
          <img class="arrow transition-transform mx-5 w-3 md:w-4 h-auto" :class="[opened ? 'rotate-90' : '']" src="@/assets/arrow.svg" />
        </div>
        <transition name="fade">
          <div class="py-5 md:py-10 flex flex-col" v-if="opened">
            <p>
              <strong>Building the ultimate customer experience for Jumeirah Group</strong>
              <br><br><strong>Background</strong><br>Known for its distinctive architecture, exceptional service, and luxurious amenities, Jumeirah Group is one of the leading luxury hospitality company that operates a collection of high-end hotels and resorts all around the world.<br><br><strong>Problem</strong><br>With guests at each property making dozens of interactions, the data collected is nothing short of extraordinary. That’s a great start! — except that it can be hard to tap into this wealth of information and make meaningful use out if it.<br><br><strong>Our Solution</strong><br>Working with the amazing in-house team of Jumeirah Group, Datafirst then developed Customer 360 model and analytics, allowing visibility to not just what customers do but also predict how they will act in future too, to create a superior guest experience across Jumeirah Hotels &amp;&nbsp;Resorts.
            </p>
            <q class="text-orange font-bold text-xl md:text-5xl leading-snug my-10">It has been an eye-opening experience, working with Datafirst Solutions, especially with their professional support and constant engagement in implementing different analytics projects for Jumeirah&nbsp;Group.</q>
            <div class="ml-auto text-right">
              <img class="w-32 md:w-40 brightness-0 h-auto object-contain ml-auto mb-3" src="/solutions/analytics/Jumeirah.png" alt="Jumeirah Group" />
              <p class="inline-block"><strong>Muzoun Al Nuaimi</strong><br>Head of Reporting &amp; analytics - Group IT</p>
            </div>
          </div>
        </transition>
      </div>
    </section>

      <section class="md:h-[75vh] h-[550px]">
        <div class="appear bg-gray rounded-t-3xl py-12 h-full flex flex-col justify-center items-center w-full">
          <h2 class="split flex items-end font-bold text-center leading-tight"><span >Go </span><span class="mx-2 lg:mx-5">with </span><span>the </span><span><img class="w-16 md:w-52 mt-auto mb-2 lg:mb-5 mx-2 lg:mx-5" src="/solutions/FLOW/Logo.svg" alt="FLOW Logo" /></span></h2>
          <p class="">FLOW - F&amp;B Analytics Solutions allow you to</p>
          <div class="bg-white mb-2 mt-10 md:mb-5 lg:m-20 py-10 px-12 w-full rounded-3xl shadow-lg flex flex-col gap-10 lg:gap-5">
            <div class="flex flex-col lg:flex-row justify-between mt-5">
              <div class="flex gap-5 items-center justify-start lg:w-1/4 w-full">
                <img class="h-8 md:h-12 lg:h-20 mb-5 object-contain" src="/solutions/recruitment/Coin.png" alt="Analytics">
                <p class="text-xs md:text-xl">Gain in-depth understanding needed to improve efficiency and reduce&nbsp;cost.</p>
              </div>
              <div class="flex gap-5 items-center justify-start lg:w-1/4 w-full">
                <img class="h-8 md:h-12 lg:h-20 mb-5 object-contain" src="/solutions/FLOW/Connect.png" alt="Recruitment">
                <p class="text-xs md:text-xl">Integrate data from various outlets to create action&nbsp;plan.</p>
              </div>
              <div class="flex gap-5 items-center justify-start lg:w-1/4 w-full">
                <img class="h-8 md:h-12 lg:h-20 mb-5 object-contain" src="/solutions/analytics/Performance.png" alt="Grow">
                <p class="text-xs md:text-xl">Maximize profit through data-oriented menu&nbsp;optimization.</p>
              </div>
            </div>
            <button class="bg-teal-900 hover:scale-110 rounded-3xl my-2 py-3 2xl:py-5 2xl:px-12 px-5 text-white font-bold mx-auto transition-all duration-300 text-sm md:text-lg 2xl:text-2xl hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><router-link to="/contact">Schedule a Demo</router-link></button>
          </div>
        </div>
      </section>
  </main>
</template>

<style scoped lang="scss">
section {
  min-height: 25vh;
  margin: 2rem 2rem; //12 24

  @media (min-width: 1024px) {
    margin: 3rem 6rem; //12 24
  }
}

.selector {
  background: linear-gradient(90deg, #F59709 0%, #D1E45B 48.53%, #4CB4AC 100%);
}
</style>