<template>
    <div class="inner-wishlist-page">
      <div class="title">
        <BackButton />
        <CompareCart />
        <HomeButton />
        <LogoutButton />
        <SearchBar />
      </div>
  
      <div class="wishlist-pink-box">
        <!-- Add a section for wishlist products using a loop (v-for) -->
        <SortBy />
        <div class="products-list">
          <Product v-for="(product, index) in wishlistProducts" :key="index" :product="product" />
        </div>
      </div>
  
      <div class="recommended">
        <!-- Add content for the "recommended" section -->
        <RecommendedProducts />
      </div>
  
      <div class="price-tracker">
        <!-- Add content for the "price tracker" section -->
        <PriceTracker />
      </div>
    </div>
  </template>
  
  <script>
  import BackButton from '../components/BackButton.vue' 
  import CompareCart from '../components/CompareCart.vue'
  import HomeButton from '../components/HomeButton.vue'
  import LogoutButton from '../components/LogoutButton.vue'
  import SortBy from '../components/SortBy.vue'
  import Product from '../components/Product.vue'
  import RecommendedProducts from '../components/RecommendedProducts.vue'
  import PriceTracker from '../components/PriceTracker.vue'
  import SearchBar from '../components/SearchBar.vue';
  import { fetchProducts } from 'firebase.js/firebase'; // Import the fetchProducts function from your firebase.js
  
  export default {
    name: "Inner-wishlist-page",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      LogoutButton,
      SortBy,
      Product,
      RecommendedProducts,
      PriceTracker,
      SearchBar,
    },
    data() {
      return {
        wishlistProducts: [],
      };
    },
    async created() {
      // Fetch products from Firebase when the component is created
      this.wishlistProducts = await fetchProducts();
    },
  };
  </script>
  