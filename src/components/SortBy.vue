<template>
  <div class="sort-by" v-if="user">
    <div class="sort-by-header">
      <h3>Sort by...</h3>
    </div>
    <div class="sort-by-buttons">
      <button class="btn" v-on:click="sortProducts('SalesVolume')">Sales Volume</button>
      <button class="btn" v-on:click="sortProducts('Price')">Price</button>
      <button class="btn" v-on:click="sortProducts('DeliveryFee')">Delivery Fee</button>
    </div>
    <br><br>
    <h3> Products: </h3>
    <div>
      <div class="pink-box">
        <br><br>
        <div class="products" v-for="product in queriedProducts" :key="product.id">
          <Product :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from '../firebase'
import firebaseApp from '../firebase'
import {db} from '../firebase'
import { collection, getDocs, doc, deleteDoc, getFirestore } from "firebase/firestore";
import Product from '../components/Product.vue';
const itemsRef = collection(db, "products");

export default {
    components: {
      Product,
    },
    props: {
      queriedProducts: Array,
    },
    methods:{
      buttonClick() {
          console.log("This button has been clicked")
      },
      sortProducts(option) {
        if (!this.queriedProducts) {
          console.error("Queried products is undefined.");
          return;
        }

        if (option === "SalesVolume") {
          this.queriedProducts.sort((productA, productB) => {
            // Sort by price in ascending order
            return productB.ProductSold - productA.ProductSold;
          });
        } else if (option === "Price") {
          this.queriedProducts.sort((productA, productB) => {
            // Sort by price in ascending order
            return productA.Price - productB.Price;
          });
        } else if (option === "DeliveryFee") {
          this.queriedProducts.sort((productA, productB) => {
            // Sort in descending order, highest rating first
            return productB.DeliveryFee - productA.DeliveryFee;
          });
        }
      }
    },
    data() {
    return {
      user: false,
      useremail: "",
    };
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.useremail = user.email;
        // console.log(this.useremail);
      }
    });
  },
}
</script>

<style scoped>
  .sort-by {
    text-align: left;
    padding: 25px;
    max-width: 50%;
  }
  .sort-by-header {
    text-align: left;
  }
  .sort-by-buttons {
    display: flex;
    justify-content: space-around; /* Arrange buttons horizontally with space between */
  }
  .btn {
    color: black;
    background-color: lightsalmon;
    font-size: 20px; 
    font-family: Arial, Helvetica, sans-serif; 
    font-weight: 500; 
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    word-wrap: break-word;
    border-radius: 8px;
    flex: 1; /* Distribute available space evenly among buttons */
    margin: 5px; /* Add margin between buttons as needed */
  }
  h3 {
    font-size: 30px;
    margin: 5px;
  }  
  .pink-box{
  width: 1200px;
  height: 500px;
  background: white;
  display: flex;
  overflow-y: scroll;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap:wrap;
  }
</style>