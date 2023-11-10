<template>
    <div class = "item-box" v-if="user">
      <br><br>
      <!-- <img :src="product.Picture" class="image-fit"> -->
      <div class="inner-text" @click="openSourceURL">
          <h2 style="text-align: left;"> Price: {{ product.Price }} </h2>
          <br>
          <h4> Source: {{product.Source}} </h4>
          <h4> Product Reviews: {{product.ProductReviews}} </h4>
          <h4> Products Sold: {{product.ProductSold}} </h4>
      </div>
      <button @click="openPriceTracker">View Price History</button>
      <!-- Display the PriceTracker component when showPriceTracker is true -->
      
      <PriceTracker v-if="showPriceTracker" :PreviousPrices= product.PreviousPrices />
    </div>
</template>

<script>
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import SortBy from '../components/SortBy.vue'
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PriceTracker from "@/components/PriceTracker.vue";

const storage = getStorage();
export default {
  name: 'Product',
  components: {
    PriceTracker
  },
  data() {
    return {
      user: false,
      useremail: "",
      showPriceTracker: false, 
    };
  },
  props: {
    product: Object,
  },
  methods: {
    
    openSourceURL() {
      if (this.product.sourceURL) {
        window.open('https://' + this.product.sourceURL, '_blank');
      }
    },
    openPriceTracker() {
      // Toggle the value of showPriceTracker to display/hide the PriceTracker component
      this.showPriceTracker = !this.showPriceTracker;
    },

    goToFolder() {
      return this.$router.push('WishlistPage');
    },
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

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
  .item-box {
  width: 250px;
  height: 400px;
  padding: 25px;
  margin: 25px;
  background: whitesmoke;
  display: inline-block;
  align-items: flex-start;
  }
  .image-fit{
  width: 50%; 
  height: 50%; 
  object-fit: cover;
  }
</style>
