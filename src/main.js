import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebase'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ArgonDashboard);
app
  .use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
app.mount("#app");
