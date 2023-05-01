<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { debounce } from "@/debounce";

defineProps<{
  width: number
}>()

const benefits = [
  {
    img: 'Cost',
    text: 'Save your money (and time) that would be spent on scouting, screening, training, and managing employees. Leave everything to us so you can focus on&nbsp;growth.'
  },
  {
    img: 'Efficiency',
    text: 'Every seasoned entrepreneur must have known that hiring the wrong people slow things down, considerably. Our expertise in performing background checks and verification on candidates will ensure that only the best talents get to your&nbsp;table.'
  },
  {
    img: 'Skills',
    text: 'You name it: Data Engineers, IT Managers, Software Engineers, or any IT staffing needs, we’ll help you find the right people for the right job with our wide talent&nbsp;pool.'
  }
]

const why = [
  {
    img: 'Web.png',
    title: "Onsite and Offshore Services",
    text: "With a team of expert data professionals who work both onsite in Dubai and offshore in India, we handle all your IT recruitment requirements, ensuring that you have access to the best talent&nbsp;available."
  },
  {
    img: 'Coin.png',
    title: "Best Price",
    text: "DataFirst is supported by Dubai SME, which means that we can offer competitive pricing for our services, getting you the best value for your money when you work with&nbsp;us."
  },
  {
    img: 'UserCheck.png',
    title: "DataFirst Recruitment Advantages",
    text: "Our team has years of experience and a deep understanding of the IT talent landscape, enabling us to find the right people for your organization quickly and&nbsp;efficiently."
  },
  {
    img: 'Users.png',
    title: "End-to-End Staffing Solutions",
    text: "At DataFirst, we offer end-to-end staffing solutions that cover every aspect of the recruitment process, from sourcing and screening candidates to onboarding and ongoing&nbsp;support. "
  },

]

const state = ref('cost')
const opened = ref(false)
const openedFAQ = ref(false)

function changeState(value?: string) {
  if (value) { state.value = value }
  const el = document.querySelector(`.${state.value}`)
  const tl = gsap.timeline()
  tl.to('.selector', {
    y: el ? el.getBoundingClientRect().height + (el.getBoundingClientRect().y - document.querySelector('.select')!.getBoundingClientRect().y + 6) : 0,
    x: el ? el.getBoundingClientRect().x - (document.querySelector('.select')!.getBoundingClientRect().x ) : 0,
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
    <section class="flex items-center relative min-h-[75vh] !m-0">
      <div class="text-white lg:text-black flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/2 lg:ml-auto">
        <h2 class="font-normal text-sm md:text-2xl text-center lg:text-left">IT Recruitment &amp; Outsourcing</h2>
        <h1 class="split font-bold text-4xl lg:text-8xl my-2 text-center lg:text-left"><span>Build 
          </span><span>the </span><span>right </span><span>team, </span><span>from </span><span>the </span><span>right </span><span>place.</span></h1>
        <p class="my-2 lg:text-xl text-center lg:text-left">It’s the age old problem for all organizations: You have the right vision, but not the right people. Which is why Datafirst is dedicated to providing and sourcing top-notch IT talent to businesses of all sizes, from permanent to temporary role.</p>
        <button class="bg-teal-900 hover:bg-teal-500 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white hover:text-teal-900 font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><router-link to="/contact">Get Started</router-link></button>
      </div>
      <div v-if="width > 1024" class="absolute bottom-0 lg:left-0 -z-10 w-[51%] h-full bg-gradient-to-r to-90% from-transparent to-white" />
      <img class="absolute bottom-0 lg:left-0 -z-20 object-cover w-full lg:w-1/2 h-full lg:brightness-100 brightness-50" src="/solutions/recruitment/Hero.jpeg"/>
    </section>
    <section class="appear bg-gray rounded-3xl overflow-hidden py-5 px-3 md:px-12 md:py-12 grid grid-cols-1 md:grid-cols-[1fr,2fr] items-center">
      <div class="relative flex items-center justify-center">
        <h2 class="text-teal-900 text-4xl md:text-6xl mb-12 lg:mb-0">Why us?</h2>
        <img class="absolute md:scale-150" src="@/assets/circles.png" alt="" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div v-for="items in why" class="flex gap-3 flex-col">
          <img class="w-12 lg:w-20 mx-auto md:mx-0" :src="`/solutions/recruitment/${items.img}`" alt="" />
          <p class="text-lg text-center md:text-left font-bold"><strong>{{items.title}}</strong></p>
          <p class="text-lg" v-html="items.text" />
        </div>
      </div>
    </section>
    <section class="text-center flex flex-col md:gap-6 items-center justify-center">
      <h3 class="appear">The benefits you will get</h3>
      <div class="appear flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 select relative rounded-3xl shadow-lg bg-white py-5 lg:py-12 px-3 md:px-6 lg:px-12 w-full overflow-hidden">
          <ul class="items text-black flex flex-row md:flex-col gap-12 cursor-pointer justify-start md:w-1/3 lg:w-1/5 overflow-x-auto md:h-auto h-12">
            <li class="cost flex items-center gap-5 font-medium text-left text-sm md:text-lg mr-auto whitespace-nowrap md:whitespace-normal" @click="changeState('cost')"><img class="h-6 md:h-10" src="/solutions/recruitment/Coin.png" alt="" />Reduce operational cost</li>
            <li class="efficiency flex items-center gap-5 font-medium text-left text-sm md:text-lg mr-auto whitespace-nowrap md:whitespace-normal" @click="changeState('efficiency')"><img class="h-6 md:h-10" src="/solutions/analytics/Performance.png" alt="" />Improve efficiency &amp; productivity</li>
            <li class="skills flex items-center gap-5 font-medium text-left text-sm md:text-lg mr-auto whitespace-nowrap md:whitespace-normal" @click="changeState('skills')"><img class="h-6 md:h-10" src="/solutions/recruitment/Check.png" alt="" />Gain access to specialized skills</li>
          </ul>
          <div v-if="width > 1024" class="selector absolute top-0 left-0 h-1 w-[1px] transition-transform origin-left z-10" />
          <transition-group name="fade" mode="out-in">
            <template v-for="items in benefits">
              <div class="flex md:items-center md:w-1/4 lg:w-2/5 md:justify-start px-3 min-h-[300px]" v-if="items.img.toLowerCase() === state">
                <p class="text-black text-left mr-auto text-base" v-html="items.text" />
                <div class="absolute -z-10 right-0 w-full md:w-2/5 md:h-full h-1/2 bottom-0 md:top-0">
                  <div class="absolute z-10 w-full h-full md:bg-gradient-to-l bg-gradient-to-t md:from-30% lg:from-40% md:to-80% lg:to-90% to-white from-transparent" />
                  <!-- <div class="absolute z-10 w-full h-full bg-gradient-to-t from-40% md:from-60% to-80% md:to-100% to-white from-transparent" /> -->
                  <img class="absolute right-0 w-[99%] h-full object-cover" :src="`/solutions/recruitment/${items.img}.jpeg`" />
                </div>
              </div>
            </template>
          </transition-group>
        </div>
    </section>
    <section class="appear !min-h-0">
      <div class="bg-teal-100 rounded-3xl shadow-lg p-5 md:py-12 md:px-12">
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
    <section class="appear relative text-center flex flex-col lg:gap-6 h-[920px] p-5 md:px-36 md:py-12 rounded-3xl shadow-lg overflow-hidden">
      <div class="flex justify-between mt-5 mb-10">
        <h2 class="leading-none text-left">Our staffing <span class="text-teal-900">solutions</span></h2>
        <button class="bg-teal-900 transition-all hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 duration-300 ring-teal-900 hover:ring-0 ring-1 rounded-3xl my-auto py-3 px-5 2xl:py-5 2xl:px-12 text-white font-bold text-sm md:text-lg 2xl:text-2xl"><router-link to="/contact">Schedule a Demo</router-link></button>
      </div>
      <ul class="grid md:grid-cols-3 grid-cols-2 gap-12 text-left font-bold text-base md:text-lg">
        <li>IT Project Managers</li>
        <li>Data scientist</li>
        <li>Sr. Data Engineers</li>
        <li>Data Analyst</li>
        <li>RPA Developer</li>
        <li>Data Engineers</li>
        <li>Software Engineers</li>
        <li>Power BI Developers &amp; Architects</li>
        <li>Full Stack Developer</li>
        <li>Data Engineers</li>
        <li>Other IT Roles</li>
      </ul>
      <div class="absolute bottom-0 left-0 -z-10 w-full h-full">
        <div class="bg-gradient-to-t from-transparent to-white from-10% to-50% w-full h-full absolute" />
        <img class="w-full h-full object-cover" src="/solutions/recruitment/Staffing.jpeg" alt="Staffing" />
      </div>
    </section>
    <section class="z-10 relative appear !min-h-0">
      <div class="bg-white rounded-3xl shadow-lg py-5 md:py-12 px-3 md:px-12">
        <div @click="openedFAQ = !openedFAQ" class="flex cursor-pointer">
          <h2 class="text-2xl md:text-5xl">Frequently Asked Questions</h2>
          <img class="arrow transition-transform mx-5 w-3 md:w-4 h-auto" :class="[openedFAQ ? 'rotate-90' : '']" src="@/assets/arrow.svg" />
        </div>
        <transition name="fade">
          <div class="py-10" v-if="openedFAQ">
            <p>
              <strong>What are the benefits of IT outsourcing?</strong>
              <br>
              IT outsourcing services is an excellent way to find qualified IT experts for your project to make the most out of your IT projects and reduce cost. By outsourcing your IT needs, you can avoid the hassles and expenses of training new employees. You can also save on costs associated with employee turnover.
              <br><br>
              <strong>Is there any minimum contract length for the recruitment?</strong><br>
              6 months contract agreement for a full time IT consultant.
              <br><br>
              <strong>Do you offer offshore consultants as well?</strong><br>
              Yes, we offer offshore consultants working mainly from India and East Europe.
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

.items::-webkit-scrollbar {
  display: none;
}
</style>