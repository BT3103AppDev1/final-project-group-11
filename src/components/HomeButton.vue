<template>
  <div class="HomeButton">
    <img src="@/assets/home.png" alt="Home" @click="goHome" />
  </div>
  
</template>

<script>
export default {
  name: 'HomeButton',

  methods: {
    goHome() {
      return this.$router.push('About');
    },
  },
};
</script>

<style scoped>
.HomeButton {
  position: absolute;
  top: 13%;
  left: 2.5%;
  width: 4%; 
}

img {
  width: 80%; 
  height: auto; 
}
</style>