<template>
  <div class="main-page">
    <div class = "title">
      <h1>CompareCart</h1>
    </div>
    <div class="search-bar">
      <button class = "button" style="margin: 20px;" src="/assets/icons8-home-50.png" v-on:click="buttonClick">Home</button>
      <input type="text" ref = "inputField" v-on:keyup.enter="consoleLogging" placeholder="Search..." />
      <button class = "button" style="margin: 20px;" v-on:click="buttonClick">Log Out</button>
    </div>
    <div class="pink-box">
      <p></p>
      <img src="https://cdn2.vectorstock.com/i/1000x1000/46/21/young-woman-choosing-between-two-t-shirts-during-vector-31884621.jpg" class = "image-fit"/>
      <h1> What are you comparing today? </h1>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  export default {
    methods: {
      consoleLogging() {
        const message = this.$refs.inputField.value;
        console.log(message)
      },
      buttonClick() {
        console.log("This button has been clicked")
      },
    },
  }
</script>
<style scoped>
  h1{
    display:inline-block;
  }
  input {
    width: 900px;
    margin: 20px auto;
    padding: 10px 45px;
    background: white;
    background-size: 30px 30px;
    font-size: 25px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: inline-block;
  }
  .pink-box{
  width: 1080px;
  height: 500px;
  padding: 10px;
  margin: 10px;
  background: pink;
  display: inline-block;
  }
  .image-fit{
  height: 60%;
  width: 50%;
  object-fit: cover;
  }
  .button{
    text-align: center; 
    color: black; 
    background-color: pink;
    font-size: 15px; 
    font-family: Poppins; 
    font-weight: 500; 
    word-wrap: break-word;
    border-radius: 8px;
  }
  h1 {
    font-family: Poppins;
    color: purple;
  }
</style>
