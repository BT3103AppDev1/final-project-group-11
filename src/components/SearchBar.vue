<template>
    <div class="top-bar">
      <input type="text" ref = "inputField" v-on:keyup.enter="consoleLogging" placeholder="Search..." />
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    consoleLogging() {
      const message = this.$refs.inputField.value;
      console.log(message)
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
input {
    width: 900px;
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 75px;
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


</style>