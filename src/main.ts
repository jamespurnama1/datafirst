import { ViteSSG } from "vite-ssg"
import { createPinia } from 'pinia'
import routes from '~pages'

import App from './App.vue'

import './assets/main.scss'

// const app = createApp(App)

export const createApp = ViteSSG(
  App,
  { routes },
  async ({ app, router, routes, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);

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