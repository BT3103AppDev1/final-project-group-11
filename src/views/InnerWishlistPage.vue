<template>
  <div class="inner-wishlist-page" v-if="user">
    <div class="title">
      <BackButton />
      <CompareCart />
      <HomeButton />
      <LogoutButton />
    </div>

    <div class="sort-by-buttons">
      <SortBy />
    </div>

    <div class="wishlist-pink-box">
      <!-- Add a section for wishlist products using a loop (v-for) -->
      <div class="products-list">
        <Product v-for="(product, index) in wishlistProducts" :key="index" :product="product" />
      </div>
    </div>

    <div class="recommended">
      <h3>Recommended Products</h3>
      <RecommendedProducts :wishlistProducts="wishlistProducts" :queriedProducts="queriedProducts" />
    </div>

    <!--
    <div class="price-tracker">
      <PriceTracker />
    </div>

  <div id="products-title">
      <Header headerText="Products" />
    </div>

    <div id="recommended-title">
      <Header headerText="Recomended Product" />
    </div>
  </div> -->
  </div>
</template>

<style scoped>
  .sort-by-buttons {
    position: absolute;
    left: 10%;
    top: 5%;
    justify-content: space-around; /* Space buttons evenly along the horizontal axis */
    padding: 15px; /* Adjust the padding as needed */
  }

  #products-title {
    position: absolute;
    left: 20%;
    top: 30%;
  }

  #recommended-title {
    position: absolute;
    left: 20%;
    top: 70%;
  }
</style>
  
<script>
  import BackButton from '../components/BackButton.vue' 
  import CompareCart from '../components/CompareCart.vue'
  import HomeButton from '../components/HomeButton.vue'
  import LogoutButton from '../components/LogoutButton.vue'
  import SortBy from '../components/SortBy.vue'
  import Product from '../components/Product.vue'
//import RecommendedProducts from '../components/RecommendedProducts.vue'
//import PriceTracker from '../components/PriceTracker.vue'
  import SearchBar from '../components/SearchBar.vue';
//import { fetchProducts } from 'firebase.js/firebase'; // Import the fetchProducts function from your firebase.js
  import firebaseApp from '../firebase.js';
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import Header from '@/components/HeaderTitle.vue';
  import HeartClick from '@/components/HeartClick.vue';

  export default {
    name: "InnerWishlistPage",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      LogoutButton,
      SortBy,
      Product,
      // RecommendedProducts,
      // PriceTracker,
      SearchBar,
      Header,
      HeartClick,
    },
    data() {
      return {
        wishlistProducts: [],
        user:false,
        useremail: "",
      }
    },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.useremail = user.email;
      }
    })
    const folderName = this.$route.params.folderName;
    },

    async created() {
      // Fetch products from Firebase when the component is created
      // this.wishlistProducts = await fetchProducts();
    },

    methods: {
      // fetchProducts() -> based on the foldername, query all the products in the wishlist with
      // productCategory == folderName

      // fetchRecommended() -> based on folderName, query product collection -> filter and
      // display product with lowest cost
    }
  };
</script>
  