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

const solution = [
  [
    'dashboard1.jpeg',
    'dashboard2.jpeg',
    'dashboard3.jpeg',
    'dashboard4.jpeg',
  ],
  'ML.jpeg',
  [
    'data1.jpeg',
    'data2.jpeg',
    'data3.jpeg',
  ],
  'decision.jpeg'
]

const state = ref('dashboard')
const opened = ref(false)
const openedFAQ = ref(false)

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
  <main class="w-screen mt-12 lg:mt-20 pb-10 lg:pb-5">
    <section class="flex items-center relative h-[75vh] !min-h-[750px] !m-0">
      <div class="text-white lg:text-black flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/2 lg:ml-auto">
        <h2 class="font-normal text-sm md:text-2xl text-center lg:text-left">Data Analytics</h2>
        <h1 class="split font-bold text-4xl lg:text-6xl my-2 text-center lg:text-left"><span>Unlock
          </span><span>the </span><span class="text-teal-900">power </span><span class="text-teal-900">of </span><span class="text-teal-900">data </span><span>with </span><span>the </span><span>right </span><span>analytics</span><span>&nbsp;solution. </span></h1>
        <p class="my-2 lg:text-xl text-center lg:text-left">Be the first one to understand your customers. Equip your team with the insight they need to create actionable plans and make fast &amp; accurate data-driven decisions through our analytics&nbsp;tool.</p>
        <button class="bg-teal-900 hover:scale-110 hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><router-link to="/contact">Schedule a Demo</router-link></button>
      </div>
      <div v-if="width > 1024" class="absolute bottom-0 lg:left-0 -z-10 w-[51%] h-full bg-gradient-to-r to-90% from-transparent to-white" />
      <img class="absolute bottom-0 lg:left-0 -z-20 object-cover w-full lg:w-1/2 h-full lg:brightness-100 brightness-50" src="/solutions/analytics/Hero.jpeg"/>
    </section>
    <section class="appear">
      <h2 class="split font-bold text-center lg:text-left leading-tight mb-5 md:mb-10"><span>All </span><span>the </span><span>right </span><span>features </span><span>for </span><span>a </span><span
          class="text-teal-900">sustainable</span><span class="text-teal-900">&nbsp;growth.</span></h2>
      <div class="appear select relative rounded-3xl shadow-lg bg-white py-5 lg:py-6 px-3 md:px-6 lg:px-12 w-full overflow-hidden">
        <ul class="text-black grid grid-cols-2 lg:grid-cols-4 gap-y-5 cursor-pointer">
          <li class="dashboard font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('dashboard')">Dashboard &amp; Analytics</li>
          <li class="ML font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('ML')">Artificial Intellegence &amp; ML</li>
          <li class="data font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('data')">Data Integration</li>
          <li class="decision font-medium text-sm md:text-base text-center mx-auto my-auto" @click="changeState('decision')">Strategic Decision Making</li>
        </ul>
        <div class="selector absolute top-0 left-0 h-1 w-[1px] transition-transform origin-left z-10" />
        <transition name="fade" mode="out-in">
          <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-if="state === 'dashboard'">
            <p class="text-black mb-2">A powerful dashboard that displays beyond surface-level data. Going in-depth to analyze user behaviors, attributes, channels and more, offering visibility into your customer journeys and extensive knowledge on their&nbsp;preferences.</p>
            <div class="flex justify-center items-center gap-5 w-full lg:w-1/2">
              <img src="@/assets/arrowMin.svg" class="rotate-180 swiper-button-prev-1 cursor-pointer" />
              <swiper :modules="modules" :slides-per-view="1" :space-between="50" :autoplay="{delay: 5000}" :auto-height="true" :navigation="{
                prevEl: '.swiper-button-prev-1',
                nextEl: '.swiper-button-next-1',
              }" class="shadow-lg rounded-xl lg:rounded-3xl">
                <swiper-slide v-for="img in solution[0]" class="my-auto flex items-center justify-center">
                  <img class="object-contain h-auto w-full" :src="`/solutions/analytics/${img}`" :alt="img" />
                </swiper-slide>
              </swiper>
              <img src="@/assets/arrowMin.svg" class="swiper-button-next-1 cursor-pointer" />
              <img class="absolute md:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
            </div>
          </div>
          <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-else-if="state === 'ML'">
            <p class="text-black mb-2">There are two key elements in ensuring company growth: people and time. We’ll help you free both, by automating data extraction and update, data visualization, report generation, and sending the report at a programmed&nbsp;schedule.</p>
              <div class="lg:my-auto md:m-5 lg:mx-10 rounded-xl lg:rounded-3xl shadow-lg overflow-y-hidden flex justify-center items-center flex-shrink-0 lg:h-3/5 lg:w-1/2">
                <img class="object-fill h-full w-auto" :src="`/solutions/analytics/${solution[1]}`" alt="Machine Learning" />
                <img class="absolute md:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
              </div>
          </div>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-center pt-10 px-3 gap-5" v-else-if="state === 'data'">
              <p class="text-black mb-2">Centralizing data from multiple establishments and systems to help your company gain better insight from multiple data streams and create actionable&nbsp;plans.</p>
              <div class="flex items-center justify-center gap-5 w-full lg:w-1/2">
              <img src="@/assets/arrowMin.svg" class="rotate-180 swiper-button-prev-2 cursor-pointer" />
              <swiper :modules="modules" :slides-per-view="1" :space-between="50"  :autoplay="{ delay: 5000 }" :auto-height="true" :navigation="{
                  prevEl: '.swiper-button-prev-2',
                  nextEl: '.swiper-button-next-2',
                }" class="shadow-lg rounded-xl lg:rounded-3xl">
                <swiper-slide v-for="img in solution[2]" class="my-auto overflow-hidden flex items-center justify-center">
                  <img class="object-cover h-auto w-full" :src="`/solutions/analytics/${img}`" :alt="img" />
                </swiper-slide>
              </swiper>
              <img src="@/assets/arrowMin.svg" class="swiper-button-next-2 cursor-pointer" />
              <img class="absolute md:scale-75 cursor-none -z-10" src="@/assets/circles.png" alt="" />
            </div>
          </div>
          <div class="flex flex-col items-center md:justify-center pt-10 px-3 min-h-[300px]" v-else-if="state === 'decision'">
            <p class="text-black mb-2 md:w-1/2 mr-auto">The access to insightful data allows you to be able to review and analyze business revenue &amp; performance accurately, to eventually construct a strategic plan to fit your customers’&nbsp;needs.</p>
          </div>
        </transition>
        <transition name="fade">
          <div class="absolute -z-10 right-0 w-full md:w-1/2 md:h-full h-1/2 bottom-0 md:top-0" v-if="state === 'decision'" >
            <div class="absolute z-10 w-full h-full md:bg-gradient-to-l from-40% to-90% to-white from-transparent" />
            <div class="absolute z-10 w-full h-full bg-gradient-to-t from-40% md:from-60% to-80% md:to-100% to-white from-transparent" />
            <img class="absolute right-0 w-[99%] h-full object-cover" :src="`/solutions/analytics/${solution[3]}`" />
          </div>
        </transition>
      </div>
    </section>
    <section class="text-center flex flex-col lg:gap-6 items-center justify-center md:py-12 lg:px-36">
      <h2 class="appear">How we work</h2>
      <div class="flex flex-col justify-center items-center mt-5">
        <div class="appear flex items-center justify-start my-3">
          <img class="h-8 md:h-12 lg:h-20 w-20 mr-5 object-contain" src="/solutions/analytics/Magnifying.png" alt="Analytics">
          <p class="text-xs md:text-xl text-left">We uncover and evaluate how your company work with data: From data collection, quality, performance, to how it’s processed, for us to come up with an optimization plan.</p>
        </div>
        <img class="arrow mx-5 w-4 h-auto rotate-90" src="@/assets/arrow.svg" />
        <div class="appear flex items-center justify-start my-3">
          <img class="h-8 md:h-12 lg:h-20 w-20 mr-5 mb-5 object-contain" src="/solutions/analytics/Gear.png" alt="Recruitment">
          <p class="text-xs md:text-xl text-left">We take time to understand your data system landscape, to gain a comprehensive overview of the various data sources, applications, tools, and technologies used within your organization.</p>
        </div>
        <img class="arrow mx-5 w-4 h-auto rotate-90" src="@/assets/arrow.svg" />
        <div class="appear flex items-center justify-start my-3">
          <img class="h-8 md:h-12 lg:h-20 w-20 mr-5 object-contain" src="/solutions/analytics/Performance.png" alt="Grow">
          <p class="text-xs md:text-xl text-left">Last, we offer digital solutions tailor-made to your organization’s needs from KPI based dashboards to self service analytics, in order to provide valuable insights on customer behaviours and journeys.</p>
        </div>
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
    <!-- </section> -->
    <section class="appear text-center flex flex-col lg:gap-6 items-center justify-center lg:px-36">
      <h2 class="leading-tight">Do what you <span class="text-teal-900">(previously)</span>&nbsp;can’t.</h2>
      <p>Our Data &amp; Analytics platform will allow you to</p>
      <div class="flex justify-between mt-5">
        <div class="flex flex-col items-center justify-start lg:w-1/5 w-[30%]">
          <img class="h-8 md:h-12 lg:h-20 mb-5 object-contain" src="/solutions/analytics/UserCheck.png" alt="Analytics">
          <p class="text-xs md:text-xl">Understand in-depth customer behaviours &amp; journeys</p>
        </div>
        <div class="flex flex-col items-center justify-start lg:w-1/5 w-[30%]">
          <img class="h-8 md:h-12 lg:h-20 mb-5 object-contain" src="/solutions/analytics/Git.png" alt="Recruitment">
          <p class="text-xs md:text-xl">Increase efficiency in decision-making process</p>
        </div>
        <div class="flex flex-col items-center justify-start lg:w-1/5 w-[30%]">
          <img class="h-8 md:h-12 lg:h-20 mb-5 object-contain" src="/solutions/analytics/Performance.png" alt="Grow">
          <p class="text-xs md:text-xl">Optimize user/product experience based on valuable insights</p>
        </div>
      </div>
      <button class="bg-white hover:bg-teal-900 transition-all hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 duration-300 ring-teal-900 hover:ring-0 ring-1 rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-teal-900 hover:text-white font-bold text-sm md:text-lg 2xl:text-2xl"><router-link to="/contact">Schedule a Demo</router-link></button>
    </section>
    <section class="relative appear h-[300px] md:h-[700px] !mb-0 overflow-hidden">
      <div class="absolute top-0 left-0 bg-gradient-to-t from-transparent to-white from-50% to-95% w-full h-full"></div>
      <img class="absolute bottom-0 left-0 -z-10 h-[99%] w-full object-cover" src="/solutions/analytics/End.jpeg" alt=""/>
    </section>
    <section class="!-mt-10 z-10 relative appear !min-h-0">
      <div class="bg-white rounded-3xl shadow-lg py-5 md:py-12 px-3 md:px-12">
        <div @click="openedFAQ = !openedFAQ" class="flex cursor-pointer">
          <h2 class="text-2xl md:text-5xl">Frequently Asked Questions</h2>
          <img class="arrow transition-transform mx-5 w-3 md:w-4 h-auto" :class="[openedFAQ ? 'rotate-90' : '']" src="@/assets/arrow.svg" />
        </div>
        <transition name="fade">
          <div class="py-10" v-if="openedFAQ">
            <p>
              <strong>What is Data Analytics Services?</strong><br>
              Data Analytics Services is a solution that is tailored to help you improve your data maturity, develop better insights increase the quality of your data and use machine learning &amp; predictive analytics to make better decisions. We have a range of services to meet your needs, from assessments and development services to training and support. With our help, get the most out of your data and make smarter decisions for your&nbsp;business.
              <br><br>
              <strong>What are some common data and analytics solutions?</strong><br>
              Businesses of all sizes rely on analytics to develop sound marketing strategies, track sales growth, and improve financial efficiency. Predictive analytics can help businesses make better decisions by forecasting future outcomes based on past data. By understanding how customers interact with their products or services, businesses can streamline processes to increase productivity and&nbsp;efficiency.
              <br><br>
              <strong>How does the implementation process go?</strong><br>
              We will work with you in data discovery sessions, assess the data maturity in your organization and put out a roadmap to develop use cases that are tailored towards your requirements and&nbsp;needs.
            </p>
          </div>
        </transition>
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

<style lang="scss">
  .swiper-button-disabled {
    opacity: 10%;
  }
</style>