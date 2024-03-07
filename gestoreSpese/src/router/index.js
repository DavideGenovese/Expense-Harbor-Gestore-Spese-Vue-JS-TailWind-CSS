import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import AboutView from "@/views/AboutView.vue";
import ExpenseChartView from "@/views/ExpenseChartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: ListView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/chart",
      name: "chart",
      component: ExpenseChartView,
    },
  ],
});

export default router;
