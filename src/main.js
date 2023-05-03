import { createApp } from "vue";
import App from "./App.vue";

// import "normalize.css";
import "./assets/css/index.less";

import router from "./router";
import pinia from "./stores";

import VueLazyload from "vue-lazyload";
import lazy from "./directives/v-lazy";

import "./mock";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueLazyload);
app.directive("lazy", lazy);
app.mount("#app");

// createApp(App).mount("#app");
