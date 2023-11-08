<template>
  <div class="Header" v-if="user">
    <div class="HeaderContent">
      <p>{{ headerText }}</p>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {

    name: 'Header',

    props:{
    headerText: String 
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
        // console.log(this.useremail);
      }
    });
  },
    
   /* props: {
    headerText: {
      type: String,
      default: '', // Default value is an empty string
    },
  }, */
};
</script>

<style scoped>

.Header {
  /* position: absolute;
  left: 20%;
  top: 34%; */
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 2px;
  background-color: rgba(255, 160, 122, 0.497);
}

.HeaderContent {
  text-align: center;
  font-size: 1.5vw;
}
</style>