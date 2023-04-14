import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue')
    },
    // {
    //   path: "/solutions/",
    //   name: "solutions",
    //   component: () => import("../views/Solutions.vue")
    // },
    // {
    //   path: "/contact/",
    //   name: "contact",
    //   component: () => import("../views/Contact.vue")
    // },
    // {
    //   path: "/blog/",
    //   name: "blog",
    //   component: () => import("../views/Blog.vue")
    // },
    // {
    //   path: "/blog/:id",
    //   name: "post",
    //   component: () => import("../views/Post.vue")
    // },
  ]
})

export default router
