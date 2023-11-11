<template>
  <div class="HeartButton" v-if="user">
    <img src="@/assets/heart.png" alt="Heart" @click="goToFolder" />
  </div>
  
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'HeartButton',

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

  methods: {
    goToFolder() {
      console.log("Heart Button Clicked")
      return this.$router.push('WishlistPage');
    },
  },
};
</script>

<style scoped>
.HeartButton {
  position: absolute;
  top: 14%;
  right: 7%;
  width: 4%; 
}

img {
  width: 70%; 
  height: 70%; 
}
</style>