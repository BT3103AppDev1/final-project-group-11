<template>
  <div class="Wishlist" v-if="user">
    <p class="WishlistText">Wishlist</p>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Wishlist',
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

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

.Wishlist {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.WishlistText {
  font-size: 4vw; /* Adjust the font size relative to the webpage width */
  font-family: 'Roboto', sans-serif;
  color: rgb(221, 94, 43);
}
</style>