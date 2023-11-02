<template>
  <div>
    <br><br><br>
    <br><br>
    <form name="form1" id="form1" action="/action_page.php">
      Product:
      <select v-model="selectedProduct" @change="onProductChange">
        <option value="" selected disabled>Select product</option>
        <option v-for="product in Object.keys(productObject)" :value="product">{{ product }}</option>
      </select>
      <br><br>

      Subcategory:
      <select v-model="selectedSubcategory" :disabled="selectedProduct === ''">
        <option value="" selected disabled>Please select product first</option>
        <option v-for="subcategory in productObject[selectedProduct]" :value="subcategory">{{ subcategory }}</option>
      </select>
      <br><br>
    </form>
    <button @click="logSelection">Log Selection</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: "",
      productObject: {
        "Water Bottle": [
          "Blue Water Bottle", 'Green Sports Bottle', 'Stainless Steel Water Flask', 'Reusable Glass Water Bottle', 'Hiking Water Jug', 'Kids Sippy Cup', 'Hydration Pack', 'Infuser Water Bottle'
        ],
        "Birthday Items": [
          'Birthday Cake', 'Party Balloons', 'Gift Wrapping Paper', 'Party Hats', 'Confetti Poppers', 'Birthday Candles'
        ],
        "Dog Products": [
           'Dog Collar', 'Pet Bed', 'Dog Chew Toys', 'Dog Food Bowl', 'Dog Leash', 'Pet Grooming Kit', 'Puppy Training Pads'
        ],
        "Electronics": [
          'Smartphone', 'Laptop', 'Tablet', 'TV', 'Camera', 'Headphones', 'Gaming Console', 'Smartwatch'
        ],
        "Fashion": [
          'Dress', 'Shirt', 'Jeans', 'Sneakers', 'Handbag', 'Necklace', 'Sunglasses', 'Wristwatch'
        ],
        "Home and Kitchen": [
          'Sofa', 'Refrigerator', 'Dining Table', 'Coffee Maker', 'Bed', 'Vacuum Cleaner', 'Toaster', 'Blender'
        ],
        "Beauty and Personal Care": [
          'Skincare Set', 'Lipstick', 'Shampoo', 'Razor', 'Perfume', 'Hair Dryer', 'Toothbrush', 'Nail Polish'
        ],
        "Sports and Outdoors": [
          'Tennis Racket', 'Bicycle', 'Running Shoes', 'Camping Tent', 'Fitness Tracker', 'Hiking Boots', 'Yoga Mat', 'Soccer Ball'
        ],
        "Books and Media": [
          'Novel', 'Action Movie', 'Music Album', 'Cookbook', 'Sci-Fi Book', 'Documentary Film', 'Mystery Novel', 'Romantic Comedy'
        ],
        "Toys and Games": [
          'Action Figure', 'Board Game', 'Puzzle', 'Doll', 'LEGO Set', 'Video Game', 'Remote Control Car', 'Chess Set'
        ],
      },
      selectedSubcategory: "",
    };
  },
  methods: {
    onProductChange() {
      this.selectedSubcategory = "";
    },
    logSelection() {
      if (this.selectedProduct && this.selectedSubcategory) {
        console.log("Selected Product: " + this.selectedProduct);
        console.log("Selected Subcategory: " + this.selectedSubcategory);
      } else {
        console.log("Please select a product and subcategory.");
      }
      // Change function when connecting to database
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
select {
    width: 750px;
    margin-left: 50px;
    background: pink;
    background-size: 30px 30px;
    font-size: 20px;
    border: black;
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 10px;
    display: inline-block;
}
button {
  width: 100px;
  display: inline-block;
  padding: 5px;
  background: pink;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: black;
  color: black;
  margin: 10px;
}
</style>