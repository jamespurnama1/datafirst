import { createStore } from "vuex";

export default createStore({
  state: {
    hideConfigButton: true,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    user: null,
    progress: 0,
    progressColor: 'primary',
    counter: false,
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    setUser(state, payload) {
      state.user = payload;
    },
    progress(state, payload) {
      state.progress = Math.min(payload, 100)
      // if (state.progress = 100) {
      //   await new Promise(resolve => setTimeout(resolve, 2000));
      //   state.progress = 0;
      //   state.progressColor = 'primary'
      // };
    },
    colorChange(state, payload) {
      state.progressColor = payload
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    async incrementProgress({ commit, state }) {
      state.counter = true;
      while (state.progress < 100 && state.counter) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (state.counter)
          commit('progress', state.progress + 10);
      }
      state.counter = false;
    },
    async errorProgress({ commit }) {
      commit('progress', 100);
      commit('colorChange', 'error');
      await new Promise(resolve => setTimeout(resolve, 1500));
      commit('colorChange', 'info');
      commit('progress', 0);
    },
    async completeProgress({ commit }) {
      commit('progress', 100);
      commit('colorChange', 'info');
      await new Promise(resolve => setTimeout(resolve, 1500));
      commit('progress', 0);
    }
  },
  getters: {}
});
