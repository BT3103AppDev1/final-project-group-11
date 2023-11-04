<template>
    <div class="nav-bar" v-if="user">
      <BackButton />
      <CompareCart />
      <HomeButton />
      <HeartButton />
      <Logout />
    </div>
</template>
  
<script>
  import BackButton from '@/components/BackButton.vue';
  import CompareCart from '@/components/CompareCart.vue';
  import HomeButton from '@/components/HomeButton.vue';
  import HeartButton from '@/components/HeartButton.vue';
  // import LogoutButton from '@/components/LogoutButton.vue';
  import Logout from '@/components/LogOut.vue';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default {
    name: "NavBar",

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
  components: {
    BackButton,
    CompareCart,
    HomeButton,
    HeartButton,
    Logout,
  },
};
</script>
  

  