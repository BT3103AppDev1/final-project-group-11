<template>
  <div class="HeartButton">
    <img src="@/assets/heart.png" alt="Heart" @click="goToFolder" />
  </div>
</template>

<script>
export default {
  methods: {
    goToFolder() {
      // can use router.push('/folder')
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
  height: auto; 
}
</style>