<template>
  <div class="inner-wishlist-page" v-if="user">
    <div class="title">
        <NavBar />
    </div>

    <div class="sort-by-buttons">
      <SortBy :queriedProducts="queriedProducts" />
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
    -->
    <HeartClick />

  <div id="products-title">
      <Header headerText="Products" />
    </div>

    <div id="recommended-title">
      <Header headerText="Recomended Product" />
    </div>
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
        // Fetch WishlistItems from the user's wishlist
        const wishlistRef = doc(db, "wishlist", this.useremail);
        // console.log("wishlistRef", wishlistRef)
        const wishlistDoc = await getDoc(wishlistRef);

        if (wishlistDoc.exists()) {
          const wishlistData = wishlistDoc.data();
          // console.log("wishlistData", wishlistData)
          const wishlistItems = wishlistData.WishlistItems || [];
          //console.log("wishlistItems", wishlistItems)

            // Fetch the products that match the WishlistItems and productCategory
          const q = query(
            collection(db, "products"),
            where("DocumentName", "in", wishlistItems),
            where("ProductCategory", "==", this.folderName)
          ); 

          /* const wishlistItemDocs = await getDocs(collection(db, "products"));
          const matchingDocs = wishlistItemDocs.docs.filter(doc => wishlistItems.includes(doc.id));
          const filteredDocs = matchingDocs.filter(doc => doc.data().productCategory === this.folderName);
          console.log("filteredDocs", filteredDocs) */
          ///////////////////

          // Execute the query
          const querySnapshot = await getDocs(q);

          console.log(querySnapshot)

          this.queriedProducts = []; // Clear the array before populating it

          querySnapshot.forEach((doc) => {
          // Populate the queriedProducts array with the query results
          this.queriedProducts.push(doc.data());
          });
          console.log(this.queriedProducts[0]);
/*
          querySnapshot.forEach((doc) => {
          // Populate the queriedProducts array with the query results
          this.queriedProducts.push(doc.data());
          // this.queriedProducts = filteredDocs.map(doc => doc.data()); 
          // Create a query for documents in productsCollection
         const q = query(productsCollection);

         // Fetch documents where the document ID is in wishlistItems
         const wishlistItemDocs = await getDocs(q);
         const matchingDocs = wishlistItemDocs.docs.filter(doc => wishlistItems.includes(doc.id));
          // Log or inspect the fields of each document
          matchingDocs.forEach(doc => {
            const data = doc.data();
            console.log(`Document ID: ${doc.id}, Data:`, data);
          });

        // Filter documents based on productCategory and populate queriedProducts
        this.queriedProducts = matchingDocs
          .filter(doc => doc.data().productCategory === this.folderName)
          .map(doc => doc.data()); */
        
        console.log("queriedProducts after filtering", this.queriedProducts)

        } else {
          console.log('error...');
          return [];
        }
        console.log(this.queriedProducts)
      }
    }
  }
</script>