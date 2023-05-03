import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about.vue"),
    },
    {
      path: "/cps",
      component: () => import("../views/cps.vue"),
    },
    {
      path: "/cps2",
      component: () => import("../views/cps2.vue"),
    },
    {
      path: "/propro",
      component: () => import("../views/propro.vue"),
    },
  ],
});

export default router;
