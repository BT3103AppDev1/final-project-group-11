<template>
    <div class = "item-box" v-if="user">
        <br><br>
        <img src = "https://contents.mediadecathlon.com/p1800013/5e3f2384cc33d5d67b7be56df9bcf7b6/p1800013.jpg" class = "image-fit">
        <div class="inner-text">
            <h3 style="text-align: left;"> $7 </h3>
            <h4> Shipped from Singapore </h4>
            <h4> Sold on Amazon </h4>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Product',
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
  .item-box {
  width: 250px;
  height: 400px;
  padding: 25px;
  margin: 25px;
  background: white;
  display: inline-block;
  align-items: flex-start;
  }
  .image-fit{
  height: 50%;
  width: 50%;
  object-fit: cover;
  }

</style>