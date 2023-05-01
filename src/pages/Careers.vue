<template>
  <main class="mt-20 w-screen text-white pb-10">
    <section class="flex items-center lg:justify-end relative overflow-hidden h-[75vh] !m-0">
      <div class="flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/3 lg:ml-auto">
        <h1 class="split text-white font-bold text-4xl md:text-6xl my-2 text-center lg:text-left"><span>With </span><span>you, </span><span>we&nbsp;</span><span>can </span><span>be</span><span>&nbsp;better. </span></h1>
        <button class="bg-teal-900 hover:bg-teal-500 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 2xl:py-5 2xl:px-12 text-white hover:text-teal-900 font-bold lg:ml-0 mx-auto text-sm md:text-lg 2xl:text-2xl"><router-link to="/">Join Our Team</router-link></button>
      </div>
      <img class="absolute bottom-0 lg:left-0 -z-10 object-contain w-auto h-full lg:brightness-100 brightness-50" src="@/assets/aboutHero.jpg"/>
    </section>
    <section class="select appear flex flex-col md:flex-row gap-5 md:gap-24 lg:gap-72 justify-between items-center mx-5 lg:mx-24">
      <ul class="flex justify-center md:justify-between flex-1 items-center text-xs md:text-base flex-wrap gap-y-2 gap-x-5">
        <li class="allDept text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-full" @click="changeState('allDept')">All Departments</li>
        <li class="dataAnalyst text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-full" @click="changeState('dataAnalyst')">Data Analyst</li>
        <li class="dataEntry text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-full" @click="changeState('dataEntry')">Data Entry</li>
        <li class="sales text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-full" @click="changeState('sales')">Sales</li>
        <li class="customerService text-center whitespace-nowrap flex-grow-0 flex-shrink-0 basis-1/4 md:basis-full" @click="changeState('customerService')">Customer Service</li>
      </ul>
      <div class="selector absolute left-0 h-1 w-[1px] transition-transform origin-left" />
      <SearchInput
        v-model="searchVal"
        placeholder="Search"
        class="search-input-wrapper no-search-icon youtube mt-2 w350"
        :search-icon="false"
        :clear-on-esc="false"
        :select-on-focus="false"
        :shortcut-icon="false"
      >
      </SearchInput>
    </section>
    <section class="appear mx-2 lg:mx-24 md:my-12">
      <transition name="fade" mode="out-in">
        <Jobs v-if="result.length" :width="width" :result="result" />
        <p class="mx-auto text-center my-36" v-else>No job position available at the moment.</p>
      </transition>
    </section>
    <section class="mx-6 lg:mx-48">
      <h2 class="text-lg lg:text-4xl lg:leading-snug md:text-center">At Datafirst, we strive to promote <span class="text-teal-900">equity and opportunity</span> for everyone to fulfill their potential, fostering a culture where <span class="text-orange">everyone's opinion has a place</span> and <span class="text-teal-900">every idea deserves an appreciation</span>, regardless of race, ethnicity, gender, sexual orientation, age, ability or&nbsp;religion.</h2>
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

defineProps<{
  width: number
}>()

const result = ref([] as never[] | Array<{title: string, desc: string, type: string, img: string, slug: string}>)
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
] as Array<{ title: string, desc: string, type: string, img: string, slug: string }>

function filter(type: string) {
  if (type !== 'allDept') {
    result.value = data.filter(x => x.type ? x.type === type : null)
  } else {
    console.log(type)
    result.value = data
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
  filter(state.value)
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
.search-input-wrapper {
  position: relative;
  width: 100%;
}
.search-input-wrapper input[data-search-input=true] {
  display: block;
  font-family: "Inter", system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  width: 100%;
  padding: 6px 10px 6px 12px;
  font-size: 16px;
  font-weight: normal;
  height: 38px;
  color: #333;
  background-color: #f6f9fc;
  border: 1px solid #f6f9fc;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out;
}
.search-input-wrapper input[data-search-input=true]:focus {
  background-color: white;
  outline: 0;
  box-shadow: none;
}
.search-input-wrapper .search-icon {
  color: theme('colors.teal.900');
  position: absolute;
}
.search-input-wrapper .search-icon.search {
  left: 12px;
  bottom: 12px;
  box-sizing: border-box;
  display: block;
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-radius: 100%;
  margin-left: -4px;
  margin-top: -4px;
}
.search-input-wrapper .search-icon.search::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
  width: 2px;
  height: 7px;
  background: theme('colors.teal.900');
  transform: rotate(-45deg);
  top: 11px;
  left: 12px;
}
.search-input-wrapper .search-icon.shortcut {
  width: 22px;
  height: 24px;
  cursor: text;
  right: 8px;
  bottom: 7px;
  background-color: #e7eff7;
  border-radius: 3px;
  z-index: 50;
}
.search-input-wrapper .search-icon.shortcut::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 2px;
  transform: rotate(25deg);
  width: 2px;
  height: 16px;
  top: 4px;
  left: 10px;
  z-index: 51;
  background-color: theme('colors.teal.900');
}
.search-input-wrapper .search-icon.clear {
  right: 5px;
  bottom: 7px;
  cursor: pointer;
  z-index: 10;
  box-sizing: border-box;
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 40px;
  background: none;
  padding: 0px;
  outline: none;
}
.search-input-wrapper .search-icon.clear:focus {
  background: #e7eff7;
}
.search-input-wrapper .search-icon.clear::after, .search-input-wrapper .search-icon.clear::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: theme('colors.teal.900');
  transform: rotate(45deg);
  border-radius: 5px;
  top: 9px;
  left: 2px;
}
.search-input-wrapper .search-icon.clear::after {
  transform: rotate(-45deg);
}

/* Fix the X appearing in search field on Chrome and IE */
input[type=search]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type=search]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  display: none;
}

</style>

<style lang="scss" scoped>
.selector {
  background: linear-gradient(90deg, #F59709 0%, #D1E45B 48.53%, #4CB4AC 100%);
}
</style>