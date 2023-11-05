<template>
    <div class="sort-by" v-if="user">
        <h3>Sort by...</h3>
        <button class = "btn" style="margin: 20px;" v-on:click="sortProducts('SalesVolume')">Sales Volume</button>
        <button class = "btn" style="margin: 20px;" v-on:click="sortProducts('Price')">Price</button>
        <button class = "btn" style="margin: 20px;" v-on:click="sortProducts('DeliveryFee')">Delivery Fee</button>
        <button class = "btn" style="margin: 20px;" v-on:click="sortProducts('ProductSold')">Products Sold</button>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from '../firebase'
import firebaseApp from '../firebase'
import {db} from '../firebase'
import { collection, getDocs, doc, deleteDoc, getFirestore } from "firebase/firestore";
const itemsRef = collection(db, "products");

export default {
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
            return productA.ProductSold - productB.ProductSold;
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
        } else if (option === "ProductSold") {
          this.queriedProducts.sort((productA, productB) => {
            // Sort in descending order, highest rating first
            return productB.ProductSold - productA.ProductSold;
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
        console.log(this.useremail);
      }
    });
  },
}
</script>

<style scoped>
  .sort-by{
    text-align:left;
    padding: 25px;
  }
.btn{
    text-align: center; 
    color: black; 
    background-color: pink;
    font-size: 20px; 
    font-family: Arial, Helvetica, sans-serif; 
    font-weight: 500; 
    word-wrap: break-word;
    border-radius: 8px;
  }
  h3 {
    font-size: 30px;
  }

</style>