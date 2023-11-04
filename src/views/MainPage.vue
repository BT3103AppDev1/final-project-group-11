<template>
  <div class="main-page" v-if="user">
    <div class="title">
      <BackButton />
      <CompareCart />
      <HomeButton />
      <Logout />
    </div>
    <br><br><br>
    <SearchBar />
    <PinkBox />
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue' 
import CompareCart from '../components/CompareCart.vue'
import HomeButton from '../components/HomeButton.vue'
// import LogoutButton from '../components/LogoutButton.vue'
import SearchBar from '../components/SearchBar.vue'
import Header from '../components/HeaderTitle.vue'
import PinkBox from '../components/PinkBox.vue'
import Logout from '@/components/LogOut.vue';
import { defineComponent } from "vue";
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
    name:"MainPage",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      PinkBox,
      SearchBar,
      Logout, 
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
          console.log("User object in MainPage:", this.user);
      }
    })
  },
}
</script>
