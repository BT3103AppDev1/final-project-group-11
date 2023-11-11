<template>
    <div class="nav-bar">
      <BackButton />
      <CompareCart />
      <HomeButton />
      <HeartButton />
    </div>
</template>
  
<script>
  import BackButton from '@/components/BackButton.vue';
  import CompareCart from '@/components/CompareCart.vue';
  import HomeButton from '@/components/HomeButton.vue';
  import HeartButton from '@/components/HeartButton.vue';
  // import LogoutButton from '@/components/LogoutButton.vue';
//   import Logout from '@/components/LogOut.vue';

  
  export default {
    name: "NavBar_Before",

    data() {
    return {
      user: false,
      useremail: "",
    };
  },

  components: {
    BackButton,
    CompareCart,
    HomeButton,
    HeartButton,
  },
};
</script>
  

  