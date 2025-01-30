import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_API_KEY),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
  ],

});

export default router;
