<template>
  <div class="search-page" v-if="user">
    <BackButton/>
    <CompareCart/>
    <HomeButton/>
    <LogOutButton/>
    <DropDown/>
    <div class="pink-box">
      <SortBy/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  </div>
</template>
<script>
import BackButton from '../components/BackButton.vue' 
import CompareCart from '../components/CompareCart.vue'
import HomeButton from '../components/HomeButton.vue'
import LogoutButton from '../components/LogoutButton.vue'
import Header from '../components/HeaderTitle.vue'
import SortBy from '../components/SortBy.vue'
import DropDown from '../components/DropDown.vue'
import Product from '../components/Product.vue'
import { defineComponent } from "vue";
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
    name:"SearchPage",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      LogoutButton,
      Product,
      SortBy, 
      DropDown
    },
    data(){
      return{
        user: false,
        useremail: "",
      }
    },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.useremail = user.useremail;
      }
    })
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


