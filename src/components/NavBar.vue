<template>
    <div class="nav-bar">
      <BackButton />
      <CompareCart />
      <HomeButton />
      <HeartButton />
      <LogoutButton />
    </div>
  </template>
  
  <script>
  import BackButton from '@/components/BackButton.vue';
  import CompareCart from '@/components/CompareCart.vue';
  import HomeButton from '@/components/HomeButton.vue';
  import HeartButton from '@/components/HeartButton.vue';
  import LogoutButton from '@/components/LogoutButton.vue';
  
  export default {
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      HeartButton,
      LogoutButton,
    },
  };
  </script>
  

  