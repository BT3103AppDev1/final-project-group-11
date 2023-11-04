<template>
  <div class="HomeButton" v-if="user">
    <img src="@/assets/home.png" alt="Home" @click="goHome" />
  </div>
  
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'HomeButton',

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

  methods: {
    goHome() {
      return this.$router.push('SearchPage');
    },
  },
};
</script>

<style scoped>
.HomeButton {
  position: absolute;
  top: 13%;
  left: 2.5%;
  width: 4%; 
}

img {
  width: 80%; 
  height: auto; 
}
</style>