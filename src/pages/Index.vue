<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';
import Blog from '@/components/Blog.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
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

onUnmounted(() => {
  const triggers = ScrollTrigger.getAll();
  triggers.forEach( trigger => {
    trigger.kill()
  })
})

const types = {
  "Government & Public Sector": "Unparalleled insights for informed decision-making in the public sector.",
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
    image: "/DataAnalyticsBG.png",
    imageAlt: ""
  },
  {
    title: "Flow F&B Analytics:<br>Drive Revenue, Save&nbsp;time.",
    desc: "Business intelligence catered towards hospitality industry, FLOW allows you to confidently make informed decisions based on accurate insights, combined with reporting and analytics solutions with business metrics specifically crafted to meet your goals.",
    CTA: "Explore FLOW",
    dashboard: "FLOW.jpeg",
    dashboardAlt: "",
    image: "FLOWBG.png",
    imageAlt: ""
  },
  {
    title: "Build a super tech team, the right&nbsp;way.",
    desc: "Utilizing advanced technologies and data analysis to identify the best candidates for your company, we provide a customized approach that takes into account your specific needs, tailored to find the right talent for your organization.",
    CTA: "Explore IT Recruitment",
    dashboard: "",
    dashboardAlt: "",
    image: "ITRecruitmentBG.jpeg",
    imageAlt: ""
  }
]

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
      <div class="flex flex-col mx-24 my-36">
        <h1 class="split text-white font-bold text-8xl my-2 text-center lg:text-left"><span>It </span><span>all </span><span>starts </span><br><span>with&nbsp;</span><span>data.</span></h1>
        <p class="my-2 text-white text-2xl text-center lg:text-left">Growth starts here.<br>Unleash the power of data with the right resources and&nbsp;insights.</p>
        <button class="bg-teal-900 rounded-3xl my-2 py-3 px-5 text-white font-bold lg:ml-0 mx-auto text-lg"><router-link to="/">Find Out How</router-link></button>
      </div>
    <video loop muted autoplay playsinline class="object-fill -z-10 absolute top-0 left-0 brightness-75 w-full h-full" src="/Hero.mp4"/>
    </section>
    <section class="appear mx-24 rounded-3xl shadow-lg bg-white py-12 px-36 flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5">
      <h2 class="text-teal-900 font-bold text-6xl lg:text-left text-center">Trusted by Industry Leaders</h2>
      <div class="flex content-center flex-col items-center h-full">
        <div class="lg:m-5 flex items-center flex-wrap justify-center">
          <img class="object-contain w-36 h-auto my-2 mx-5" v-for="client in clients.slice(0,3)" :src="`/logo/${client.replace(/ /g,'_')}.png`" :alt="client"/>
        </div>
        <div class="lg:m-5 flex items-center flex-wrap justify-center">
          <img class="object-contain w-36 h-auto my-2 mx-5" v-for="client in clients.slice(-4)" :src="`/logo/${client.replace(/ /g, '_')}.png`" :alt="client"/>
        </div>
      </div>
    </section>
    <section class="grid lg:grid-cols-3 gap-12 mx-24 min-h-[90vh]">
      <div class="appear relative bg-white rounded-3xl min-h-[480px] shadow-lg overflow-hidden" v-for="(desc, title, index) in types" >
        <div class="p-5 flex flex-col justify-end h-full relative z-20">
          <h3>{{ title }}</h3>
          <p>{{ desc }}</p>
        </div>
        <div class="absolute top-0 w-full h-full bg-gradient-to-t to-transparent from-white from-20% to-50% z-10" />
        <img class="absolute h-full w-full top-0 object-cover" :src="`/types/${index+1}.png`" :alt="title" rel="preload">
      </div>
    </section>
    <section>
      <h2 class="split font-bold text-8xl text-center lg:text-left"><span>Data </span><span class="text-teal-900">First,</span><br><span>Innovation</span><span> Follows.</span></h2>
      <div class="appear bg-white shadow-lg rounded-3xl my-12 h-[512px] flex overflow-hidden"
      :class="[index === 1 ? 'flex-row-reverse' : '']" v-for="(solution, index) in solutions">
        <img class="object-cover h-full w-1/3 basis-1/3 flex-grow-0 flex-shrink-0" :src="`/solutions/${solution.image}`" :alt="solution.imageAlt"/>
        <div class="py-12 px-10 from-transparent to-white relative z-10 flex flex-col justify-center gap-4"
        :class="[solution.dashboard ? 'to-30% pl-24' : 'to-15% pl-72', index >= 1 ? 'text-left items-start' : 'text-right items-end', index === 1 ? '-mr-52 bg-gradient-to-l !pl-10 !pr-24' : '-ml-52 bg-gradient-to-r']">
          <h3 v-html="solution.title" />
          <p>{{ solution.desc }}</p>
          <button class="bg-white transition-all hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 duration-300 ring-teal-900 hover:ring-0 ring-1 rounded-3xl my-2 py-3 px-5 text-teal-900 font-bold text-lg"
          :class="[index >= 1 ? 'mr-auto' : 'ml-auto']">{{ solution.CTA }}</button>
        </div>
        <div class="my-auto mx-10 rounded-3xl shadow-lg overflow-hidden flex-shrink-0 h-3/5">
          <img v-if="solution.dashboard" class="object-fill h-full w-auto" :src="`/solutions/${solution.dashboard}`" :alt="solution.dashboardAlt"/>
        </div>
      </div>
    </section>
    <section>
      <div class="appear relative rounded-3xl bg-gray py-12 lg:px-36 px-12">
        <p>In their own words</p>
        <q class="font-bold leading-snug text-3xl lg:text-6xl text-teal-900 mt-3 w-11/12 block">It has been an eye-opening experience working with Datafirst Solutions, especially with their professional support and constant engagement in implementing different analytics projects.</q>
        <img class="absolute bottom-12 lg:right-36 right-12 h-auto w-24 lg:w-48" src="/logo/Jumeirah_Group.png" alt="Jumeirah Group Logo" />
      </div>
    </section>
    <section>
      <div class="appear relative overflow-hidden bg-white h-72 rounded-3xl shadow-lg py-6 px-12 my-12 flex flex-col lg:flex-row lg:gap-72 min-h-[240px]" v-for="(images, type, index) in partners">
        <h3 class="text-5xl mt-auto relative z-20">{{ type }}</h3>
        <div class="flex flex-1 justify-center items-center flex-wrap relative z-20">
          <img class="object-contain w-36 h-16 mx-5 my-3" v-for="image in images" :src="image" :alt="image">
        </div>
        <div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-r bg-gradient-to-b from-transparent from-15% to-white lg:to-30% to-25%" />
        <div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-tr bg-gradient-to-r from-white to-transparent lg:to-30% to-70%" />
        <!-- <img :src="`/partners/bg${[index]}`" alt=""> -->
        <img class="mr-auto absolute top-0 left-0 lg:w-1/3 w-full object-cover lg:h-full" :src="`/${type}BG.png`" alt="BG" />
      </div>
    </section>
    <Blog />
    <section>
      <div class="appear bg-gray rounded-t-3xl py-12 lg:px-36 px-12 h-[75vh] flex flex-col lg:flex-row justify-center items-center w-full">
        <h2 class="split text-8xl leading-none text-center lg:text-left"><span>Tomorrow's</span><span> Growth,</span><br><span>Starts </span><span class="text-teal-900">Today.</span></h2>
        <button class="bg-teal-900 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold lg:ml-auto transition-all duration-300 text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80"><router-link to="/contact">Schedule a Demo</router-link></button>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  min-height: 25vh;
  margin: 3rem 6rem; //12 24
}

.appear {
  opacity: 0;
  transform: translateY(100px);
}

.split span {
  opacity: 0;
  transform: translateY(0.1em);
}
</style>