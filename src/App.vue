<template>
  <div
    v-show="store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <sidenav
    :custom_class="store.state.mcolor"
    :class="[
      store.state.isTransparent,
      store.state.isRTL ? 'fixed-end' : 'fixed-start'
    ]"
    v-if="store.state.showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
  >
    <!-- nav -->
    <navbar
      :class="[navClasses]"
      :textWhite="
        store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
      "
      :minNav="navbarMinimize"
      v-if="store.state.showNavbar"
    />
    <router-view />
    <app-footer v-show="store.state.showFooter" />
    <configurator
      :toggle="toggleConfigurator"
      :class="[
        store.state.showConfig ? 'show' : '',
        store.state.hideConfigButton ? 'd-none' : ''
      ]"
    />
  </main>
</template>
<script setup>
import Sidenav from "@/examples/Sidenav/index.vue";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { reactive, onBeforeMount } from 'vue';
import { useStore } from "vuex";
import { useCurrentUser } from 'vuefire';

const user = useCurrentUser();
const store = useStore();

// export default {
//   name: "App",
//   components: {
//     Sidenav,
//     Configurator,
//     Navbar,
//     AppFooter
//   },
//   methods: {
//     ...mapMutations(["toggleConfigurator", "navbarMinimize"])
//   },
  const toggleConfigurator = () => store.commit('toggleConfigurator');
  const navbarMinimize = () => store.commit('navbarMinimize');
  const navClasses = reactive({
      "position-sticky bg-white left-auto top-2 z-index-sticky":
        store.state.isNavFixed && !store.state.darkMode,
      "position-sticky bg-default left-auto top-2 z-index-sticky":
        store.state.isNavFixed && store.state.darkMode,
      "position-absolute px-4 mx-0 w-100 z-index-2": store.state
        .isAbsolute,
      "px-0 mx-4": !store.state.isAbsolute
    });
  onBeforeMount(() => {
    store.state.isTransparent = "bg-transparent";
  })
</script>
