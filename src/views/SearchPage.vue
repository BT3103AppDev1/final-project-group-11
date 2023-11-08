<template>
  <div class="search-page" v-if="user">
    <BackButton/>
    <CompareCart/>
    <HomeButton/>
    <LogOutButton/>
    <DropDown/>
    <div class="pink-box"></div>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue' 
import CompareCart from '../components/CompareCart.vue'
import HomeButton from '../components/HomeButton.vue'
import LogoutButton from '../components/LogoutButton.vue'
import Header from '../components/HeaderTitle.vue'
import DropDown from '../components/DropDown.vue'
import Product from '../components/Product.vue'
import { defineComponent } from "vue";
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

// console.log("SearchPage db", db);

export default {
    name:"SearchPage",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      LogoutButton,
      Product,
      DropDown
    },
    data(){
      return{
        user: false,
        useremail: "",
      };
    },
    async created() {
      const auth = getAuth();
      const user = auth.currentUser;

      await onAuthStateChanged(auth, (user) => {

        if (user) {
          this.user = user;
          this.useremail = user.email;
          this.checkAndCreateUserDocument();
        }
      });
    },

   methods: {
    async checkAndCreateUserDocument() {
      const db = getFirestore();
      const userDocRef = doc(db, 'wishlist', this.useremail);

      try {
        const docSnap = await getDoc(userDocRef);

        if (!docSnap.exists()) {
          // document does not exist -> create it
          await setDoc(userDocRef, { WishlistItems: [] });
          // console.log("doc set with docname:", this.useremail);
        }
        // console.log("doc already exists")
      } catch (error) {
        console.error('Error checking/creating user document:', error);
      }
    },
  },
}
</script>

<style scoped>
  h1{
    display:inline-block;
  }
  .pink-box{
  width: 1250px;
  height: 500px;
  background: rgba(255, 192, 203, 0.769);
  display: inline-block;
  overflow-y: scroll;
  }

</style>


