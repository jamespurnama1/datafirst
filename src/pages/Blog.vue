<script setup lang="ts">
import { gsap, ScrollTrigger } from "@/gsap";
import * as SearchInput from 'vue-search-input/dist/vue-search-input.es'
import { onMounted, onBeforeUnmount, ref, type DefineComponent } from 'vue';
import Blog from '@/components/Blog.vue';

defineProps<{
  width: number
}>()

const searchVal = ref('')
const component = ref(null as null | DefineComponent);

function input(text:string) {
  searchVal.value = text
  component.value!.getKeys(searchVal.value)
}

onMounted(async () => {
  // component.value!.getKeys('')
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
  triggers.forEach(trigger => {
    trigger.kill()
  })
})
</script>

<template>
  <main class="mt-20 w-screen pb-10">
    <section class="appear flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5 !mb-0 md:!mb-8 lg:!mb-24">
      <span>
        <h1 class="font-bold lg:text-left text-center leading-tight text-4xl md:text-8xl 2xl:text-9xl my-2">Insights First</h1>
        <p>Opinions, Insights, and Random&nbsp;Talks</p>
      </span>
      <SearchInput
        @input="(e: any) => input(e.target.value)"
        placeholder="Search"
        class="search-input-wrapper"
        :search-icon="false"
        :clear-on-esc="false"
        :select-on-focus="false"
        :shortcut-icon="false"
      >
      </SearchInput>
    </section>
    <Blog ref="component" :limit="0" :width="width" />
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