<template>
    <div>
      <button class = "button" style="margin: 20px;" v-on:click="buttonClick">Back</button>
      <h1>CompareCart</h1>
    </div>
  <div class="search-page">
    <div class="top-bar">
      <button class = "button" style="margin: 20px;" src="/assets/icons8-home-50.png" v-on:click="buttonClick">Home</button>
      <input type="text" ref = "inputField" v-on:keyup.enter="consoleLogging" placeholder="Search..." />
      <button class = "button" style="margin: 20px;" v-on:click="buttonClick">Log Out</button>
    </div>
    <div class="pink-box">
      <p></p>
        <h2>Search: Bottles </h2>
        <div class="sort-by">
            <h3>Sort by...</h3>
            <button class = "button" style="margin: 20px;" v-on:click="buttonClick">Relevance</button>
            <button class = "button" style="margin: 20px;" v-on:click="buttonClick">Sales Volume</button>
            <button class = "button" style="margin: 20px;" v-on:click="buttonClick">Rating</button>
        </div>
        <div class = "item-box">
            <br><br>
            <img src = "https://contents.mediadecathlon.com/p1800013/5e3f2384cc33d5d67b7be56df9bcf7b6/p1800013.jpg" class = "image-fit">
            <div class="inner-text">
                <h3 style="text-align: left;"> $7 </h3>
                <h4> Shipped from Singapore </h4>
                <h4> Sold on Amazon </h4>
            </div>
        </div>
        <div class = "item-box">
            <br><br>
            <img src = "https://img.muji.net/img/item/4550182930801_1260.jpg" class = "image-fit">
            <h3 style="text-align: left;"> $6 </h3>
            <h4> Shipped from China </h4>
            <h4> Sold on Ebay </h4>
        </div>
        <div class = "item-box">
            <br><br>
            <img src = "https://images.lululemon.com/is/image/lululemon/LU9AHLS_8313_1?size=800,800" class = "image-fit">
            <h3 style="text-align: left;"> $6 </h3>
            <h4> Shipped from China </h4>
            <h4> Sold on Ebay </h4>
        </div>
                <div class = "item-box">
            <br><br>
            <img src = "https://images.lululemon.com/is/image/lululemon/LU9AHLS_8313_1?size=800,800" class = "image-fit">
            <h3 style="text-align: left;"> $6 </h3>
            <h4> Shipped from China </h4>
            <h4> Sold on Ebay </h4>
        </div>
        <div class = "item-box">
            <br><br>
            <img src = "https://images.lululemon.com/is/image/lululemon/LU9AHLS_8313_1?size=800,800" class = "image-fit">
            <h3 style="text-align: left;"> $6 </h3>
            <h4> Shipped from China </h4>
            <h4> Sold on Ebay </h4>
        </div>
                <div class = "item-box">
            <br><br>
            <img src = "https://images.lululemon.com/is/image/lululemon/LU9AHLS_8313_1?size=800,800" class = "image-fit">
            <h3 style="text-align: left;"> $6 </h3>
            <h4> Shipped from China </h4>
            <h4> Sold on Ebay </h4>
        </div>
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
    border: black;
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: inline-block;
  }
  .pink-box{
  width: 1080px;
  height: 500px;
  padding: 10px;
  margin: 10px;
  background: rgba(255, 192, 203, 0.769);
  display: inline-block;
  overflow-y: scroll;
  }
  .item-box {
  width: 300px;
  height: 400px;
  padding: 10px;
  margin: 10px;
  background: white;
  display: inline-block;
  align-items: flex-start;
  }
  .image-fit{
  height: 50%;
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
  .sort-by{
    text-align:left;
    padding: 25px;
  }
  h4 {
    font-size: 15px;
    font-style:normal
  }
  h1 {
    font-family: Poppins;
    color: purple;
  }
  h2 {
    font-size: 40px;
  }
</style>


