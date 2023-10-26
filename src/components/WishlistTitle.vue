<template>
  <div class="Wishlist">
    <p class="WishlistText">Wishlist</p>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

.Wishlist {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.WishlistText {
  font-size: 4vw; /* Adjust the font size relative to the webpage width */
  font-family: 'Roboto', sans-serif;
  color: rgb(221, 94, 43);
}
</style>