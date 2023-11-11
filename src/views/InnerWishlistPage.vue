<template>
  <div class="inner-wishlist-page" v-if="user">
    <div class="title">
        <NavBar />
    </div>

    <div v-if="queriedProducts.length > 0" class="sort-by-buttons">
      <SortBy :queriedProducts="queriedProducts" />
    </div>

    <!-- <div id="products-title">
      <Header headerText="Products" />
    </div> 

      <div id="recommended-title">
        <Header headerText="Recomended Product" />
      </div> 

      <div class="recommended-product" v-if="recommendedProduct">
        <h3>Recommended Product</h3>
        <Product :product="recommendedProduct" />
      </div>
    -->

    <!-- <div class="wishlist-pink-box">
      <div class="products-list">
        <Product v-for="(product, index) in wishlistProducts" :key="index" :product="product" />
      </div>
    </div> -->
    
    <!-- 
    <div class="recommended">
      <RecommendedProducts :wishlistProducts="wishlistProducts" :queriedProducts="queriedProducts" />
    </div>
    -->

  </div>
</template>

<style scoped>
  .sort-by-buttons {
    position: absolute;
    left: 10%;
    top: 5%;
    justify-content: space-around; 
    padding: 15px; 
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
  import SearchBar from '../components/SearchBar.vue';
   import firebaseApp from '../firebase.js';
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import Header from '@/components/HeaderTitle.vue';
  import HeartClick from '@/components/HeartClick.vue';
  import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, query, where, orderBy,
  limit} from "firebase/firestore";
  import { db } from '../firebase';
  import NavBar from '../components/NavBar.vue'

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
      SearchBar,
      Header,
      HeartClick,
      NavBar,
    },
    data() {
      return {
        // wishlistProducts: [],
        user: false,
        useremail: "",
        folderName: this.$route.params.folderName,
        queriedProducts: [],
        recommendedProduct: null, 
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
          await this.fetchRecommendedProduct();
          })();
        }
      });
    },

    async created() {
      // Fetch products from Firebase when the component is created
      // this.wishlistProducts = await fetchProducts();
    },

    methods: {

      async fetchQueriedProducts() {
        console.log("this.folderName " + this.folderName)
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

            // Show alert when queriedProducts is empty
            if (this.queriedProducts.length === 0) {
              alert("There are no products added to this folder yet.");
            }

            // console.log("queried products in folder:" + this.folderName + " " + this.queriedProducts);
          } else {
            console.log("Wishlist is empty");
            alert("Please add items into Wishlist before accessing folders");
          }
        } else {
          console.log("Error fetching wishlist data");
        }
      },

      async fetchRecommendedProduct() {
        const q = query(
          collection(db, "products"),
          where("ProductCategory", '==', this.folderName),
          orderBy("Price"),
          limit(1)
        );

        const querySnapshot = await getDocs(q);
        console.log(this.querySnapshot)

        if (!querySnapshot.empty) {
          const recommendedProductData = querySnapshot.docs[0].data();
          this.recommendedProduct = recommendedProductData;
          console.log("this.recommendedProduct", this.recommendedProduct)
        }
      },
    }
  }
</script>