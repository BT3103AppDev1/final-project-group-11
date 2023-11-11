<template>
    <div class = "item-box" v-if="user">
      <HeartClick :documentName="product.DocumentName" />
      <div class="image-container" @click="openSourceURL">
        <img :src="imagePath" class="image-fit">
        <div class="overlay">
          <div class="text">Click to navigate to source URL</div>
        </div>
      </div>
      <div class="inner-text">
          <h2 style="text-align: left;"> Name: {{ product.DocumentName }} </h2>
          <h3 style="text-align: left;"> Price: {{ product.Price }} </h3>
          <br>
          <h4> Source: {{product.Source}} </h4>
          <h4> Product Reviews: {{product.ProductReviews}} </h4>
          <h4> Products Sold: {{product.ProductSold}} </h4>
          <h4> Delivery Fee: {{product.DeliveryFee}} </h4>
      </div>
      <button @click="openPriceTracker">View Price History</button>
      <!-- Display the PriceTracker component when showPriceTracker is true -->
      
      <PriceTracker v-if="showPriceTracker" :PreviousPrices= product.PreviousPrices />
    </div>
</template>

<script>
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import HeartClick from '../components/HeartClick.vue'
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
    PriceTracker,
    HeartClick
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
  // Inside your Vue component
  computed: {
    imagePath() {
      // Replace 'category1', 'category2', etc., with the actual category values you have in your data
      const categoryPaths = {
        "Waterbottle": "src/assets/products/waterbottle.png",
        "Birthday": "src/assets/products/birthday.png",
        "Dog Products": "src/assets/products/dog-products.png",
        "Electronics": "src/assets/products/electronics.png",
        "Fashion": "src/assets/products/fashion.png",
        "Home and Kitchen": "src/assets/products/home-and-kitchen.png",
        "Beauty and Personal Care": "src/assets/products/beauty-and-personal-care.png",
        "Sports and Outdoors": "src/assets/products/sports-and-outdoors.png",
        "Books and Media": "src/assets/products/books-and-media.png",
        "Toys and Games": "src/assets/products/toys-and-games.png",
        // Add more categories as needed
      };
      const category = this.product.ProductCategory;

      return categoryPaths[category];
    },
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
  height: 550px;
  padding: 25px;
  margin: 25px;
  background: whitesmoke;
  display: inline-block;
  align-items: flex-start;
  position: relative;
  outline-color: lightsalmon;
  outline-style: solid;
}

.image-container {
  position: relative;
  cursor: pointer;
}

.image-fit {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 150px;
  object-fit: scale-down;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 153, 112, 0.8); /* Use rgba for transparency */
  overflow: hidden;
  height: 0;
  transition: .5s ease;
}

.image-container:hover .overlay {
  height: 100%;
}
h3{
  font-size: 20px;
}
h4{
  font-size: 13px;
}

.text {
  white-space: wrap;
  color: rgb(11, 64, 34);
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>

