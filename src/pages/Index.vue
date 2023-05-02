<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { onMounted, onBeforeUnmount, computed, ref } from 'vue';
import Blog from '@/components/Blog.vue';
import PartnersSection from '@/components/PartnersSection.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper"
import 'swiper/css';

const modules = [Autoplay];

const props = defineProps<{
  width: number
}>()

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
      start: "top 85%",
      onLeave: elements => gsap.set(elements, { opacity: 1, y: 0, overwrite: true }),
    })
})

onBeforeUnmount(() => {
  const triggers = ScrollTrigger.getAll();
  triggers.forEach( trigger => {
    trigger.kill()
  })
})

const types = {
  "Government &amp;<br>Public Sector": "Unparalleled insights for informed decision-making in the public sector.",
  Hospitality: "Elevated customer experience and revenue growth with advanced analytics solutions.",
  Education: "Enhanced learning outcomes and optimized operations with simplified yet advanced insights.",
  Automotive: "Reduced costs and increased revenue growth with powerful analytics tools.",
  "Food & Beverage": "Optimized menu engineering and reduced food costs with advanced analytics solutions.",
  Telecommunications: "Streamlined operations and increased growth with simplified yet powerful insights."
}

const solutions = [
  {
    title: "Accelerate value through data &amp;&nbsp;analytics.",
    desc: "Take control of your business and maximize its potential by finding out what people want and why. Our integrated dashboard and data automations provide valuable insights into your audience's preferences.",
    CTA: "Explore Data Analytics",
    dashboard: "/DataAnalytics.jpeg",
    dashboardAlt: "",
    image: "/DataAnalyticsBG.jpg",
    imageAlt: "",
    slug: "/solutions/DataAnalytics"
  },
  {
    title: "Flow F&B Analytics:<br>Drive Revenue, Save&nbsp;time.",
    desc: "Business intelligence catered towards hospitality industry, FLOW allows you to confidently make informed decisions based on accurate insights, combined with reporting and analytics solutions with business metrics specifically crafted to meet your goals.",
    CTA: "Explore FLOW",
    dashboard: "FLOW.jpeg",
    dashboardAlt: "",
    image: "FLOWBG.jpg",
    imageAlt: "",
    slug: "/solutions/FLOW"
  },
  {
    title: "Build a super tech team, the right&nbsp;way.",
    desc: "Utilizing advanced technologies and data analysis to identify the best candidates for your company, we provide a customized approach that takes into account your specific needs, tailored to find the right talent for your organization.",
    CTA: "Explore IT Recruitment",
    dashboard: "",
    dashboardAlt: "",
    image: "ITRecruitmentBG.jpg",
    imageAlt: "",
    slug: "/solutions/Recruitment"
  }
]

const clients = [
  "Amoodial",
  "Bergen Auto Spareparts",
  "Damac",
  "Dubai Holding",
  "Five Global Holdings",
  "HotelIQ",
  "Jumeirah Group"
]
</script>

<template>
  <main class="w-screen">
    <section class="flex items-center relative overflow-hidden h-[75vh] !m-0">
      <div class="flex flex-col lg:mx-24 mx-auto my-36">
        <h1 class="split text-white font-bold text-4xl md:text-8xl 2xl:text-9xl my-2 text-center lg:text-left"><span>It </span><span>all </span><span>starts </span><br><span>with&nbsp;</span><span>data.</span></h1>
        <p class="my-2 text-white lg:text-2xl text-center lg:text-left">Growth starts here.<br>Unleash the power of data with the right resources and&nbsp;insights.</p>
        <button class="bg-teal-900 hover:bg-teal-500 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white hover:text-teal-900 font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><router-link to="/solutions/DataAnalytics">Find Out How</router-link></button>
      </div>
    <video preload="true" loop muted autoplay playsinline class="object-cover -z-10 absolute top-0 left-0 brightness-75 w-full h-full" src="/Hero.mp4"/>
    </section>
    <section class="appear mx-2 lg:mx-24 rounded-3xl shadow-lg bg-white py-12 lg:px-36 px-4 flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5">
      <h2 class="text-teal-900 font-bold lg:text-left text-center leading-tight">Trusted by Industry Leaders</h2>
      <div class="flex content-center flex-col items-center h-full">
        <div class="lg:m-5 flex items-center flex-wrap justify-center">
          <img class="object-contain w-12 md:w-32 lg:w-36 h-auto my-2 mx-5" v-for="client in clients.slice(0,3)" :src="`/logo/${client.replace(/ /g,'_')}.png`" :alt="client"/>
        </div>
        <div class="lg:m-5 flex items-center flex-wrap justify-center">
          <img class="object-contain w-12 md:w-32 lg:w-36 h-auto my-2 mx-5" v-for="client in clients.slice(-4)" :src="`/logo/${client.replace(/ /g, '_')}.png`" :alt="client"/>
        </div>
      </div>
    </section>
    <section class="!m-0 md:!m-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 mx-24 min-h-[90vh]">
      <div v-if="width > 768" class="appear relative bg-white rounded-3xl min-h-[240px] lg:min-h-[480px] shadow-lg overflow-hidden" v-for="(desc, title, index) in types" >
        <div class="p-3 md:p-5 flex flex-col justify-end h-full relative z-20">
          <h3 class="text-sm md:text-lg 2xl:text-xl break-words leading-tight" v-html="title"></h3>
          <p class="text-xs md:text-sm 2xl:text-lg">{{ desc }}</p>
        </div>
        <div class="absolute top-0 w-full h-full bg-gradient-to-t to-transparent from-white from-30% lg:from-20% lg:to-50% to-70% z-10" />
        <img class="absolute h-3/4 lg:h-full w-full top-0 object-cover" :src="`/types/${index+1}.jpg`" :alt="title" rel="preload">
      </div>
      <swiper v-else :modules="modules" :space-between="50" :slides-per-view="1" :autoplay="{ delay: 5000 }" class="appear !p-8">
        <swiperSlide v-for="(desc, title, index) in types" class="shadow-lg bg-white rounded-3xl overflow-hidden">
          <div class="relative flex flex-col justify-end  min-h-[240px]" >
            <div class="p-3 md:p-5 h-full relative z-20">
              <h3 class="text-sm md:text-lg 2xl:text-xl break-words leading-tight" v-html="title"></h3>
              <p class="text-xs md:text-sm 2xl:text-lg">{{ desc }}</p>
            </div>
            <div class="absolute top-0 w-full h-full bg-gradient-to-t to-transparent from-white from-30% lg:from-20% lg:to-50% to-70% z-10" />
            <img class="absolute h-3/4 lg:h-full w-full top-0 object-cover" :src="`/types/${index + 1}.jpg`" :alt="title" rel="preload">
          </div>
        </swiperSlide>
      </swiper>
    </section>
    <section>
      <h2 class="split font-bold text-center lg:text-left leading-tight"><span>Data </span><span class="text-teal-900">first,</span><br><span>innovation</span><span>&nbsp;follows.</span></h2>
      <div class="appear bg-white shadow-lg rounded-3xl mb-5 lg:my-12 lg:h-[512px] flex overflow-hidden flex-col-reverse"
      :class="[index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row']" v-for="(solution, index) in solutions">
      <div v-if="width > 1024" class="relative lg:h-full h-1/3 lg:w-1/3 w-[101%] basis-1/3 flex-grow-0 flex-shrink-0">
        <div class="absolute top-0 from-transparent from-50% to-white h-full w-full z-20" :class="[index === 1 ? 'bg-gradient-to-l -left-[1%]' : 'bg-gradient-to-r left-0']" />
        <img class="relative z-10 object-cover w-full h-full" :src="`/solutions/${solution.image}`" :alt="solution.imageAlt"/>
      </div>
        <div class="py-6 lg:py-12 px-10 relative z-30 flex flex-col justify-center gap-4 w-full lg:w-auto lg:max-w-[75%]"
        :class="[solution.dashboard ? 'to-30% lg:pl-24' : 'to-15% lg:pl-72', index >= 1 ? 'text-left items-start' : 'text-right items-end', index === 1 ? '-mr-52 bg-gradient-to-l !pl-10 !lg:pr-24' : 'lg:-ml-52 bg-gradient-to-r']">
          <h3 v-html="solution.title" />
          <p>{{ solution.desc }}</p>
          <button class="bg-white hover:bg-teal-900 transition-all hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 duration-300 ring-teal-900 hover:ring-0 ring-1 rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-teal-900 hover:text-white font-bold text-sm md:text-lg 2xl:text-2xl"
          :class="[index >= 1 ? 'mr-auto' : 'ml-auto']"><router-link :to="solution.slug">{{ solution.CTA }}</router-link></button>
        </div>
        <div v-if="solution.dashboard" class="lg:my-auto m-5 lg:mx-10 rounded-xl lg:rounded-3xl shadow-lg overflow-hidden flex-shrink-0 lg:h-3/5">
          <img class="object-contain h-full w-full" :src="`/solutions/${solution.dashboard}`" :alt="solution.dashboardAlt"/>
        </div>
      </div>
    </section>
    <section>
      <div class="appear relative rounded-3xl bg-gray py-5 md:py-12 lg:px-36 px-12">
        <p>In their own words</p>
        <q class="font-bold leading-snug text-lg md:text-3xl lg:text-6xl 2xl:text-8xl text-teal-900 mt-3 w-11/12 block">It has been an eye-opening experience working with Datafirst Solutions, especially with their professional support and constant engagement in implementing different analytics projects.</q>
        <img class="absolute bottom-5 md:bottom-12 lg:right-36 right-12 h-auto w-16 md:w-24 lg:w-48" src="/logo/Jumeirah_Group.png" alt="Jumeirah Group Logo" />
      </div>
    </section>
    <PartnersSection />
    <Blog :limit="3" :width="width" />
    <section class="!min-h-[400px] h-[33vh] md:h-[50vh] lg:h-[75vh] !mt-0 md:!mt-8">
      <div class="appear bg-gray rounded-t-3xl py-12 lg:px-32 px-12 h-full flex flex-col lg:flex-row justify-center items-center w-full">
        <h2 class="split leading-none text-center lg:text-left"><span>Tomorrow's</span><span> Growth,</span><br><span>Starts </span><span class="text-teal-900">Today.</span></h2>
        <button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 2xl:py-5 2xl:px-12 px-5 text-white font-bold lg:ml-auto transition-all duration-300 text-sm md:text-lg 2xl:text-2xl hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><router-link to="/contact">Schedule a Demo</router-link></button>
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
</style>