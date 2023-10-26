<template>
  <div class="SearchContainer">
    <input type="text" placeholder="Enter Your Search Here" v-model="searchQuery" @input="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      // Add your search logic here
    },
  },
};
</script>

<style scoped>
/*
.SearchContainer {
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: -25vh;
  margin-left: 30vh;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 250%;
} */

.SearchContainer {
  position: absolute;
  top: 16%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 250px; 
}
</style>