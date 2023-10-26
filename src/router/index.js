import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: "/",
        name: "LandingPage",
        component: () => import("../views/LandingPage.vue"),
      },
      {
        path: "/About",
        name: "About",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/ContactUs",
        name: "ContactUs",
        component: () => import("../views/ContactUs.vue"),
      },
      {
        path: "/Login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
      {
        path: "/MainPage",
        name: "MainPage",
        component: () => import("../views/MainPage.vue"),
      },
      {
        path: "/Register",
        name: "Register",
        component: () => import("../views/Register.vue"),
      },
      {
        path: "/SearchPage",
        name: "SearchPage",
        component: () => import("../views/SearchPage.vue"),
      },
    ],
});
export default router;