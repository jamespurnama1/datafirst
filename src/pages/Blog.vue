<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import SearchInput from 'vue-search-input'
import { onMounted, onBeforeUnmount, ref, type DefineComponent } from 'vue';
import Blog from '@/components/Blog.vue';
import useDetectOutsideClick from '@/useDetectOutsideClick'
import { useRoute, useRouter } from 'vue-router';

defineProps<{
  width: number
}>()

const searchVal = ref('')
const data = ref({} as {} | {title: string, slug: string, img: string, author: string, content: string, date: number, status: string})
const postEl = ref(null as null | HTMLElement)
const opened = ref(0)
const component = ref(null as null | DefineComponent);
const route = useRoute();
const router = useRouter();

function input(text:string) {
  searchVal.value = text
  component.value!.getKeys(searchVal.value)
}

useDetectOutsideClick(postEl, (e: MouseEvent) => {
  if (e.target && (e.target as HTMLElement).classList.contains('read')) return
  opened.value ? opened.value = 0 : opened.value = 1
  if (Object.keys(data.value).length && opened.value) {
    e.preventDefault()
    data.value = {}
    // window.alert('test')
    router.push('/blog')
  } else {
  }
})

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // route.params ? data.value =
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
  triggers.forEach(trigger => {
    trigger.kill()
  })
})
</script>

<template>
  <main class="mt-20 pb-10">
    <div v-if="Object.keys(data).length" ref="postEl" class="read bg-white flex flex-col rounded-xl z-50 fixed w-[80vw] h-[80vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] shadow-xl overflow-y-scroll">
      <button class="absolute right-3 top-3 md:right-8 md:top-8 cursor-pointer w-3 h-3 md:w-5 md:h-5" @click="data = {}; opened = 0; router.push('/blog')">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
      </button>
      <h3 class="m-5 md:m-16">{{ data.title }}</h3>
      <article class="m-5 md:m-16" v-html="data.content" />
    </div>
    <div v-if="Object.keys(data).length" class="bg-white/75 fixed w-[100vw] h-[100vh] top-0 left-0 z-40" />
    <section class="appear flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5 !mb-0 md:!mb-8 lg:!mb-24">
      <span>
        <h1 class="font-bold lg:text-left text-center leading-tight text-4xl md:text-8xl 2xl:text-9xl my-2">Insights First</h1>
        <p>Opinions, Insights, and Random&nbsp;Talks</p>
      </span>
      <SearchInput
        @input="(e: any) => input(e.target.value)"
        placeholder="Search"
        class="search-input-wrapper ml-3"
        :search-icon="false"
        :clear-on-esc="false"
        :select-on-focus="false"
        :shortcut-icon="false"
      >
      </SearchInput>
    </section>
    <Blog @clicked="(e) => {data = e; opened = 1}" ref="component" :limit="0" :width="width" />
  </main>
</template>

<style lang="scss">
article {
  @media (min-width: 1536px) {
    p {
      font-size: 1rem;
    }
  }
}
</style>

<style scoped lang="scss">
section {
  min-height: 25vh;
  margin: 2rem 2rem; //12 24

  @media (min-width: 1024px) {
    margin: 3rem 6rem; //12 24
  }
}
</style>