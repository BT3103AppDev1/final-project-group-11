<!-- User -->
<template>
  <div class="BackButton" v-if="user">
    <img src="@/assets/backbutton.png" alt="Back" @click="goBack" />
    <!-- <button @click="goBack">Back</button> -->
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
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
        // console.log("Back Button auth", this.useremail);
      }
    });
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.BackButton {
  position: absolute;
  top: 0%;
  left: 0.5%;
  width: 7%; 
}

img {
  width: 100%; 
  height: 100%; 
}
</style>