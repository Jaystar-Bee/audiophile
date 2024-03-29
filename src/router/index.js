import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/headphones",
    name: "headphones",
    component: () => import("./../views/HeadphoneView.vue"),
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('./../views/SpeakerView.vue')
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: () => import('./../views/EarphoneView.vue')
  },
  {
    path: '/checkout-cart',
    name: 'checkout',
    component: () => import('./../views/CheckoutView.vue')
  },
  {
    path: "/headphones/:id",
    alias: ["/speakers/:id", "/earphones/:id"],
    name: "headphone",
    component: () => import('./../views/ProductView.vue'),
    props: true
  },{
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import('./../views/NotFoundView.vue')
    
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  }
});

export default router;
