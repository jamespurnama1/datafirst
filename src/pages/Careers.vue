<template>
  <main class="mt-20 w-screen text-white pb-10">
    <section class="flex items-center justify-center lg:justify-end relative overflow-hidden h-[75vh] !m-0">
      <div class="flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/3 lg:ml-auto">
        <h1 class="split text-white font-bold text-4xl md:text-6xl my-2 text-center lg:text-left"><span>With </span><span>you, </span><span>we&nbsp;</span><span>can </span><span>be</span><span>&nbsp;better. </span></h1>
        <button class="bg-teal-900 hover:bg-teal-500 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white hover:text-teal-900 font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><router-link to="/contact">Join Our Team</router-link></button>
      </div>
      <div v-if="width > 1024" class="absolute bottom-0 lg:left-0 -z-10 w-[61%] h-full bg-gradient-to-r to-90% from-transparent to-black" />
      <img class="absolute bottom-0 lg:left-0 -z-20 object-contain lg:w-[60%] w-full h-full lg:brightness-100 brightness-50" src="@/assets/careerHero.jpeg"/>
    </section>
    <section class="select appear flex flex-col md:flex-row gap-5 md:gap-24 lg:gap-36 justify-between items-center mx-8 lg:mx-24">
      <ul class="flex justify-center md:justify-between flex-1 items-center text-xs lg:text-base flex-wrap md:flex-nowrap gap-y-2 gap-x-5 md:gap-x-8 lg:gap-x-36">
        <li class="allDept cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0" @click="changeState('allDept')">All Departments</li>
        <li class="dataAnalyst cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0" @click="changeState('dataAnalyst')">Data Analyst</li>
        <li class="dataEntry cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0" @click="changeState('dataEntry')">Data Entry</li>
        <li class="sales cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0" @click="changeState('sales')">Sales</li>
        <li class="customerService cursor-pointer text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-0" @click="changeState('customerService')">Customer Service</li>
      </ul>
      <div class="selector absolute left-0 h-1 w-[1px] transition-transform origin-left" />
      <SearchInput
        @input="getKeys(data, searchVal)"
        v-model="searchVal"
        placeholder="Search"
        class="search-input-wrapper"
        :search-icon="false"
        :clear-on-esc="false"
        :select-on-focus="false"
        :shortcut-icon="false"
      >
      </SearchInput>
    </section>
    <section class="appear mx-2 lg:mx-24 md:my-12">
      <transition name="fade" mode="out-in">
        <Jobs v-if="result.length" :width="width" :result="filter(state)" />
        <p class="mx-auto text-center my-36" v-else>No job position available at the moment.</p>
      </transition>
    </section>
    <section class="mx-6 lg:mx-48">
      <h2 class="text-lg lg:text-4xl lg:leading-snug md:text-center">At DataFirst, we strive to promote <span class="text-teal-900">equity and opportunity</span> for everyone to fulfill their potential, fostering a culture where <span class="text-orange">everyone's opinion has a place</span> and <span class="text-teal-900">every idea deserves an appreciation</span>, regardless of race, ethnicity, gender, sexual orientation, age, ability or&nbsp;religion.</h2>
    </section>
    <section class="mx-2 lg:mx-24 my-6 md:my-12">
        <Core :width="width" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as SearchInput from 'vue-search-input/dist/vue-search-input.es'
import { debounce } from "@/debounce";
import Core from '@/components/Core.vue';
import Jobs from '@/components/Jobs.vue';

defineProps<{
  width: number
}>()

interface data {
  title: string; desc: string; type: string; img: string; slug: string;
}

const result = ref([] as never[] | data[])
const searchVal = ref('')
const data = [
  {
    title: "Data Analyst with SQL background",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu velit in tellus euismod auctor. Fusce eget magna tempus, ornare felis nec, feugiat lorem.",
    type: "dataAnalyst",
    img: "job1",
    slug: "/dataSQL3834"
  },
  {
    title: "Backend Engineer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu velit in tellus euismod auctor. Fusce eget magna tempus, ornare felis nec, feugiat lorem.",
    img: "job2",
    slug: "/backendEngineer8283"
  },
  {
    title: "Data Infrastructure Specialist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu velit in tellus euismod auctor. Fusce eget magna tempus, ornare felis nec, feugiat lorem.",
    type: "dataAnalyst",
    img: "job3",
    slug: "/dataInfrastructure3439"
  },
] as data[]

function getKeys(obj: data[], val:string) {
  if (!val.length) {
    result.value = data;
  } else {
    result.value = obj.filter(o =>
      (Object.keys(o) as Array<keyof typeof o>).some(k => o[k].toLowerCase().includes(val.toLowerCase())));
  }
}

function filter(type: string):data[] {
  if (type !== 'allDept' && result.value.length) {
    return result.value.filter(x => x.type ? x.type === type : null)
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
  getKeys(data, '')
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

<style lang="scss" scoped>
.selector {
  background: linear-gradient(90deg, #F59709 0%, #D1E45B 48.53%, #4CB4AC 100%);
}
</style>