<template>
  <div class="CompareCart">
    <p class="CompareText">CompareCart</p>
  </div>
</template>

<script>
export default {
  name: 'CompareCart',
};
</script>

<style scoped>
.CompareCart {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.CompareText {
  font-size: 4vw; /* Adjust the font size relative to the webpage width */
  font-family:Helvetica, Arial, sans-serif;
  color: lightsalmon;
}
</style>