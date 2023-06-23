<template>
  <main class="mt-20 text-white pb-10">
    <div v-if="Object.keys(read).length" ref="postEl"
      class="read text-black bg-white flex flex-col rounded-xl z-50 fixed w-[80vw] h-[80vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] shadow-xl overflow-y-scroll">
      <button class="absolute right-3 top-3 md:right-8 md:top-8 cursor-pointer w-3 h-3 md:w-5 md:h-5" @click="read = {}">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
            </path>
          </g>
        </svg>
      </button>
      <h3 class="m-5 md:m-16">{{ read.title }}</h3>
      <article class="m-5 md:m-16" v-html="read.desc" />
      <button class="mb-5"><a :href="read.link" target="_blank" rel="noreferrer noopener" class="text-orange cursor-pointer">Apply now</a></button>
    </div>
    <div v-if="Object.keys(read).length" class="bg-black/75 fixed w-[100vw] h-[100vh] top-0 left-0 z-40" />
    <section class="flex items-center justify-center lg:justify-end relative overflow-hidden h-[75vh] !m-0">
      <div class="flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/3 lg:ml-auto">
        <h1 class="split text-white font-bold text-4xl md:text-6xl my-2 text-center lg:text-left"><span>With
          </span><span>you, </span><span>we&nbsp;</span><span>can </span><span>be</span><span>&nbsp;better. </span></h1>
        <button
          class="bg-teal-900 hover:bg-teal-500 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white hover:text-teal-900 font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><a
            href="mailto:anbumalar@datafirstservices.com">Join Our Team</a></button>
      </div>
      <div v-if="width > 1024"
        class="absolute bottom-0 lg:left-0 -z-10 w-[61%] h-full bg-gradient-to-r to-90% from-transparent to-black" />
      <img
        class="absolute bottom-0 lg:left-0 -z-20 object-contain lg:w-[60%] w-full h-full lg:brightness-100 brightness-50"
        src="@/assets/careerHero.jpeg" />
    </section>
    <section
      class="select appear flex flex-col md:flex-row gap-5 md:gap-24 lg:gap-36 justify-between items-center mx-8 lg:mx-24">
      <ul
        class="flex justify-center md:justify-between flex-1 items-center text-xs lg:text-base flex-wrap md:flex-nowrap gap-y-2 gap-x-5 md:gap-x-8 lg:gap-x-36">
        <li class="allDept cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0"
          @click="changeState('allDept')">All Departments</li>
        <li
          class="dataAnalyst cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0"
          @click="changeState('dataAnalyst')">Data Analyst</li>
        <li class="dataEntry cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0"
          @click="changeState('dataEntry')">Data Entry</li>
        <li class="sales cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0"
          @click="changeState('sales')">Sales</li>
        <li
          class="customerService cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0"
          @click="changeState('customerService')">Customer Service</li>
      </ul>
      <div class="selector absolute left-0 h-1 w-[1px] transition-transform origin-left" />
      <SearchInput @input="(e: any) => { searchVal = e.target!.value; getKeys(searchVal) }" placeholder="Search"
        class="search-input-wrapper" :search-icon="false" :clear-on-esc="false" :select-on-focus="false"
        :shortcut-icon="false">
      </SearchInput>
    </section>
    <section class="appear mx-2 lg:mx-24 md:my-12">
      <transition name="fade" mode="out-in">
        <Jobs
          @clicked="(e) => read = e"
          v-if="(Object.keys(result).length && state === 'allDept') || (state !== 'allDept' && Object.keys(filter(state)).length)"
          :width="width" :result="filter(state)" />
        <p class="mx-auto text-center my-36" v-else>No job position available at the moment.</p>
      </transition>
    </section>
    <section class="mx-6 lg:mx-48">
      <h2 class="text-lg lg:text-4xl lg:leading-snug md:text-center">At DataFirst, we strive to promote <span
          class="text-teal-900">equity and opportunity</span> for everyone to fulfill their potential, fostering a culture
        where <span class="text-orange">everyone's opinion has a place</span> and <span class="text-teal-900">every idea
          deserves an appreciation</span>, regardless of race, ethnicity, gender, sexual orientation, age, ability
        or&nbsp;religion.</h2>
    </section>
    <section class="mx-2 lg:mx-24 my-6 md:my-12">
      <Core :width="width" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SearchInput from 'vue-search-input'
import { debounce } from "@/debounce";
import Core from '@/components/Core.vue';
import Jobs from '@/components/Jobs.vue';
import { getAll } from '@/api';
import useDetectOutsideClick from '@/useDetectOutsideClick'

defineProps<{
  width: number
}>()

interface data {
  title: string; desc: string; type: string; img: string; slug: string; link: string;
}

const result = ref({} as { number: data })
const searchVal = ref('')
const data = ref({} as {} | data)
const read = ref({} as {} | data)
const opened = ref(0)
const postEl = ref(null)

getAll('jobs').then((x) => {
  data.value = x.data
  getKeys('')
}).catch((error) => {
  console.error(error)
})

useDetectOutsideClick(postEl, (e: MouseEvent) => {
  if (e.target && (e.target as HTMLElement).classList.contains('read')) return
  opened.value ? opened.value = 0 : opened.value = 1
  if (Object.keys(read.value).length && opened.value) {
    e.preventDefault()
    read.value = {}
  }
})

function getKeys(val: string) {
  if (!val.length) {
    result.value = data.value;
  } else {
    result.value = {}
    Object
      .entries(data.value)
      .forEach(x => {
        Object.keys(x[1])
          .forEach(y => {
            if (x[1][y].toString().includes(val)) {
              result.value[x[1].slug] = x[1]
            }
          })
      })
  }
}

function filter(type: string): { number: data } {
  if (type !== 'allDept' && Object.keys(result.value).length) {
    let filtered = {} as { number: data }
    Object.entries(result.value).forEach(x => {
      Object.keys(x[1])
      // .forEach(y => {
      if (x[1].type === type) {
        filtered[x[1].slug] = x[1]
      }
      // })
    })
    return filtered
  } else {
    return result.value
  }
}

const state = ref('allDept')

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
  await new Promise(resolve => setTimeout(resolve, 1000));
  ScrollTrigger.batch(".appear", {
    onEnter: (elements, triggers) => {
      gsap.to(elements, { opacity: 1, y: 0, stagger: 0.15, });
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

<style lang="scss">
article {
  @media (min-width: 1536px) {
    p {
      font-size: 1rem;
    }
  }
}
</style>

<style lang="scss" scoped>
.selector {
  background: linear-gradient(90deg, #F59709 0%, #D1E45B 48.53%, #4CB4AC 100%);
}
</style>