<template>
  <div class="inner-wishlist-page" v-if="user">
    <div class="title">
        <NavBar />
    </div>

    <div class="sort-by-buttons">
      <SortBy :queriedProducts="queriedProducts" />
    </div>
    <!-- <div id="products-title">
      <Header headerText="Products" />
    </div> -->

    <!-- <div class="wishlist-pink-box">
      <div class="products-list">
        <Product v-for="(product, index) in wishlistProducts" :key="index" :product="product" />
      </div>
    </div> -->

    <div class="recommended">
      <RecommendedProducts :wishlistProducts="wishlistProducts" :queriedProducts="queriedProducts" />
    </div>

    <!--
    <div class="price-tracker">
      <PriceTracker />
    </div>
    -->
    <HeartClick />


    <!-- <div id="recommended-title">
      <Header headerText="Recomended Product" />
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

  /* #products-title {
    position: absolute;
    left: 20%;
    top: 20%;
  } */

  #recommended-title {
    position: relative;
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
  import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, query, where} from "firebase/firestore";
  import { db } from '../firebase';

  const productsCollection = collection(db, 'products');

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
        // wishlistProducts: [],
        user: false,
        useremail: "",
        folderName: this.$route.params.folderName,
        queriedProducts: [],
      }
    },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.useremail = user.email;

          // Use an IIFE to create an asynchronous context
          (async () => {
          // Fetch queried products immediately upon loading the page
          await this.fetchQueriedProducts();
        })();
      }
    });
    // this.folderName = this.$route.params.folderName;
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

      async fetchQueriedProducts() {
        const wishlistRef = doc(db, "wishlist", this.useremail);
        const wishlistDoc = await getDoc(wishlistRef);

        if (wishlistDoc.exists()) {
          const wishlistData = wishlistDoc.data();
          const wishlistItems = wishlistData.WishlistItems || [];

          if (wishlistItems.length > 0) {
            const q = query(
              collection(db, "products"),
              where("DocumentName", "in", wishlistItems),
              where("ProductCategory", "==", this.folderName)
            );

            const querySnapshot = await getDocs(q);

            this.queriedProducts = []; // Clear the array before populating it

            querySnapshot.forEach((doc) => {
              this.queriedProducts.push(doc.data());
            });
            console.log(this.queriedProducts[0]);
          } else {
            console.log("Wishlist is empty");
            alert("Please add items into Wishlist before accessing folders");
          }
        } else {
          console.log("Error fetching wishlist data");
          // Handle the case where the wishlist document doesn't exist
        }
      }
    }
  }
</script>