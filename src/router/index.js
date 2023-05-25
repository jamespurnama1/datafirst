import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Blog from "../views/Blog.vue";
import BlogEditor from "../views/components/BlogEditor.vue";
import Jobs from "../views/Jobs.vue";
import JobEditor from "../views/components/JobEditor.vue";
import Users from "../views/Users.vue";
// import VirtualReality from "../views/VirtualReality.vue";
// import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import { getCurrentUser, useCurrentUser } from 'vuefire';
import { getUser } from '@/firebase'
import { useStore } from 'vuex';
import { nextTick } from 'vue';

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: { requiresAuth: true }
  },
  {
    path: "/blog/:id",
    name: "Blog Editor",
    component: BlogEditor,
    meta: { requiresAuth: true }
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
    meta: { requiresAuth: true }
  },
  {
    path: "/jobs/:id",
    name: "Job Editor",
    component: JobEditor,
    meta: { requiresAuth: true }
  },
  // {
  //   path: "/virtual-reality",
  //   name: "Virtual Reality",
  //   component: VirtualReality,
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL",
  //   component: RTL,
  // },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true }
  },
  // {
  //   path: "/users",
  //   name: "Admins",
  //   component: Users,
  //   meta: { requiresAuth: true }
  // },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: Signup,
  // },
  {
    path: "/reset",
    name: "Reset",
    component: Signup,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: "/dashboard"
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: '/signin',
        query: {
          // we keep the current path in the query so we can redirect to it after login
          // with `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      }
    } else {
    }
  }
})

export default router;
