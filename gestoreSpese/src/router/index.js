<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
=======
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import AboutView from "@/views/AboutView.vue";
>>>>>>> 3a80bb75f2e535a1aec747b4c928e51350a568af

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
      
    }
  ]
})
=======
      path: "/list",
      name: "list",
      component: ListView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {},
  ],
});
>>>>>>> 3a80bb75f2e535a1aec747b4c928e51350a568af

export default router;
