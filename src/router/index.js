import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import About from '@/views/About.vue'
import ContactUs from '@/views/ContactUs.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import SearchPage from '@/views/SearchPage.vue'
import WishlistPage from '@/views/WishlistPage.vue'
import InnerWishlistPage from '@/views/innerwishlist.vue'
import PriceTracker from '@/views/PriceTracker.vue'

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
        path: "/Register",
        name: "Register",
        component:Register,
      },
      {
        path: "/pricetracker",
        name: "PriceTracker",
        component: PriceTracker,
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
      {
        path: "/InnerWishlistPage",
        name: "InnerWishlistPage",
        component: InnerWishlistPage,
      },
      
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
});
export default router;