<template>
    <div class="pink-box">
        <br> <br>
        <img src="https://cdn2.vectorstock.com/i/1000x1000/46/21/young-woman-choosing-between-two-t-shirts-during-vector-31884621.jpg" class = "image-fit"/>
        <br>
        <h1> What are you comparing today? </h1>
    </div>
</template>

<script>
export default {
  name: 'PinkBox',
}
</script>

<style scoped>
  .pink-box{
  width: 1250px;
  height: 500px;
  padding: 10px;
  margin: 10px;
  background: pink;
  text-align: center;
  display: inline-block;
  }
  .image-fit{
  height: 50%;
  width: 50%;
  object-fit: cover;
  /* display: inline-block; */
  }
</style>