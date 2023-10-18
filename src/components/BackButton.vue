<template>
  <div class="BackButton">
    <img src="@/assets/backbutton.png" alt="Back" @click="goBack" />
    <!-- <button @click="goBack">Back</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.BackButton {
  position: absolute;
  top: 0%;
  left: 0.5%;
  width: 7%; 
}

img {
  width: 100%; 
  height: 100%; 
}
</style>