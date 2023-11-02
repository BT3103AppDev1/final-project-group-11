<template>
  <div class="main-page" v-if="user">
    <div class = "title">
      <BackButton/>
      <CompareCart/>
      <HomeButton/>
      <LogoutButton/>
    </div>
    <br><br><br>
    <SearchBar/>
    <PinkBox/>
  </div>
</template>
<script>
import BackButton from '../components/BackButton.vue' 
import CompareCart from '../components/CompareCart.vue'
import HomeButton from '../components/HomeButton.vue'
import LogoutButton from '../components/LogoutButton.vue'
import Header from '../components/HeaderTitle.vue'
import PinkBox from '../components/PinkBox.vue'
import { defineComponent } from "vue";
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
    name:"MainPage",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      LogoutButton,
      PinkBox,
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
