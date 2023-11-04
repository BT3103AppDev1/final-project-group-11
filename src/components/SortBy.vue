<template>
    <div class="sort-by" v-if="user">
        <h3>Sort by...</h3>
        <button class = "btn" style="margin: 20px;" v-on:click="buttonClick">Relevance</button>
        <button class = "btn" style="margin: 20px;" v-on:click="buttonClick">Sales Volume</button>
        <button class = "btn" style="margin: 20px;" v-on:click="buttonClick">Rating</button>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    methods:{
        buttonClick() {
            console.log("This button has been clicked")
        },
    },
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
}
</script>

<style scoped>
  .sort-by{
    text-align:left;
    padding: 25px;
  }
.btn{
    text-align: center; 
    color: black; 
    background-color: pink;
    font-size: 20px; 
    font-family: Poppins; 
    font-weight: 500; 
    word-wrap: break-word;
    border-radius: 8px;
  }
  h3 {
    font-size: 30px;
  }

</style>