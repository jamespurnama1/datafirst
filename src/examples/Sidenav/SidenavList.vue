<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/" @click="store.commit('navbarMinimize');" :class="getRoute() === 'dashboard' ? 'active' : ''"
          :navText="store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/blog" @click="store.commit('navbarMinimize');" :class="getRoute() === 'blog' ? 'active' : ''"
          :navText="store.state.isRTL ? 'الجداول' : 'Blog Posts'">
          <template v-slot:icon>
            <i class="ni ni-align-left-2 text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item
          url="/new"
          :class="getRoute() === 'billing' ? 'active' : ''"
          :navText="store.state.isRTL ? 'الفواتیر' : 'New Post'"
        >
          <template v-slot:icon>
            <i class="ni ni-pencil text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <li class="nav-item">
        <sidenav-item url="/jobs" @click="store.commit('navbarMinimize');" :class="getRoute() === 'jobs' ? 'active' : ''"
          :navText="store.state.isRTL ? 'الجداول' : 'Job Posts'">
          <template v-slot:icon>
            <i class="ni ni-paper-diploma text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item
          url="/virtual-reality"
          :class="getRoute() === 'virtual-reality' ? 'active' : ''"
          :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Virtual Reality'
          "
        >
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <!-- <li class="nav-item">
        <sidenav-item
          url="/rtl-page"
          :class="getRoute() === 'rtl-page' ? 'active' : ''"
          navText="RTL"
        >
          <template v-slot:icon>
            <i class="ni ni-world-2 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <li class="nav-item nav-divider">
        <h6 v-if="store.state.isRTL" class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="store.state.isRTL ? 'me-4' : 'ms-2'">
          صفحات المرافق
        </h6>
        <h6 v-else class="text-xs ps-4 text-uppercase font-weight-bolder"
          :class="store.state.isRTL ? 'me-4' : 'ms-2'">
          ACCOUNT PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item url="/profile" @click="store.commit('navbarMinimize');" :class="getRoute() === 'profile' ? 'active' : ''"
          :navText="store.state.isRTL ? 'حساب تعريفي' : 'Profile'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item" @click="store.commit('navbarMinimize');" v-if="store.state.user && store.state.user.uid === superAdmin">
        <sidenav-item url="/users" :class="getRoute() === 'users' ? 'active' : ''"
          :navText="store.state.isRTL ? 'تسجيل الدخول' : 'Admins'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <li class="nav-item">
        <sidenav-item @click.prevent="logOut()" url="/signin" :navText="store.state.isRTL ? 'اشتراك' : 'Logout'">
          <!-- <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template> -->
        </sidenav-item>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card :class="props.cardBg" />
  </div>
</template>
<script setup>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";
import { logOut } from '@/firebase'
import { defineProps, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const props = defineProps(['cardBg', 'collapsed'])
const store = useStore()
const route = useRoute()
const title = "DataFirst Dashboard";
const controls = "dashboardsExamples";
const isActive = "active";
const superAdmin = ref('ES68S2SIKWbS97tjBXTQ3J1kVbe2')

function getRoute ()
{
  const routeArr = route.path.split("/");
  return routeArr[1];
}

</script>
