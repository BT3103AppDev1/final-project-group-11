import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import About from '@/views/About.vue'
import ContactUs from '@/views/ContactUs.vue'
import Login from '@/views/Login.vue'
import MainPage from '@/views/MainPage.vue'
import Register from '@/views/Register.vue'
import SearchPage from '@/views/SearchPage.vue'
import WishlistPage from '@/views/WishlistPage.vue'

const routes = [
      {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
      }, 
      {
        path: "/About",
        name: "About",
        component: About,
      },
      {
        path: "/ContactUs",
        name: "ContactUs",
        component: ContactUs,
      },
      {
        path: "/Login",
        name: "Login",
        component: Login,
      },
      {
        path: "/MainPage",
        name: "MainPage",
        component: MainPage,
      },
      {
        path: "/Register",
        name: "Register",
        component:Register,
      },
      {
        path: "/SearchPage",
        name: "SearchPage",
        component: SearchPage,
      },
      {
        path: "/WishlistPage",
        name: "WishlistPage",
        component: WishlistPage,
      },
      {
        path: "/WishlistPage/:folderName",
        name: "WishlistPageFolder",
        component: SearchPage, // a placeholder for now cause i cant access innerwishlistpage
        // component: Inner-wishlist-page,
      },
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
});
export default router;