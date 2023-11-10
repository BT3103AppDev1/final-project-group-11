import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";
import ContactUs from "@/views/ContactUs.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import SearchPage from "@/views/SearchPage.vue";
import WishlistPage from "@/views/WishlistPage.vue";
import InnerWishlistPage from "@/views/InnerWishlistPage.vue";


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
    component: Register,
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
    path: "/:folderName",
    name: "InnerWishlistPage",
    component: InnerWishlistPage,
  },
  {
    path: "/InnerWishlistPage",
    name: "InnerWishlist",
    component: InnerWishlistPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
