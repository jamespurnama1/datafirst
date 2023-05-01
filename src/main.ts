// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
import { ViteSSG } from "vite-ssg"
// import { createApp } from 'vue';
import { createPinia } from 'pinia'
// import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
// import routes from "pages-generated"

import App from './App.vue'

import './assets/main.scss'

// const app = createApp(App)

export const createApp = ViteSSG(
  App,
  { routes },
  async ({ app, router, routes, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);

    // let handleOutsideClick: any

    // app.directive('closable', {
    //   mounted(el, binding, vnode) {
    //     const { handler, exclude } = binding.value
    //     el.clickOutsideEvent = function(event: MouseEvent) {
    //       if (!(el === event.target || el.contains(event.target))) {
    //         handler(event, el);
    //       }
    //     };
    //     document.body.addEventListener('click', el.clickOutsideEvent);
    //   },
    //   unmounted(el) {
    //     document.body.removeEventListener('click', el.clickOutsideEvent);
    //   }
    // });
    // if (import.meta.env.SSR) {
    //   const { data } = await API.graphql<GraphQLQuery<ListPostsQuery>>({
    //     query: queries.listPosts
    //   });
    //   initialState.data = data;
    // } else {
    //   // Restore or read the initial state on the client side in the browser
    //   const store = useBlogStore();
    //   store.posts = initialState.data || {};
    // }
  }
);

// const pinia = createPinia();

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// const app = createApp(App);
// app.use(router);
// app.use(pinia);
// app.mount('#app');