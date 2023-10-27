<template>
  <div class="HeartButton">
    <img src="@/assets/heart.png" alt="Heart" @click="goToFolder" />
  </div>
  
</template>

<script>
export default {
  name: 'HeartButton',

  methods: {
    goToFolder() {
      return this.$router.push('WishlistPage');
    },
  },
};
</script>

<style scoped>
.HeartButton {
  position: absolute;
  top: 14%;
  right: 7%;
  width: 4%; 
}

img {
  width: 70%; 
  height: 70%; 
}
</style>