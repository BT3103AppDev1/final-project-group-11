<template>
  <div class="CompareCart">
    <p class="CompareText">CompareCart</p>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'CompareCart',

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
        console.log("Compare cart auth", this.useremail);
      }
    });
  },
};
</script>

<style scoped>
.CompareCart {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.CompareText {
  font-size: 4vw; /* Adjust the font size relative to the webpage width */
  font-family:Helvetica, Arial, sans-serif;
  color: lightsalmon;
}
</style>