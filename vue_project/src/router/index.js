import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/search",
    },
    {
      path: "/search",
      component: () => import("../views/search/search.vue"),
    },
  ],
});

export default router;
