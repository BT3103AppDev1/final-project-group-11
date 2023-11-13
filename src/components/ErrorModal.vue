<template>
    <div v-if="show" class="error-modal">
      <div class="error-box">
        <p class="error-message">Please sign in first to view products</p>
        <span class="close" @click="closeError">&times;</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
    },
    methods: {
      closeError() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>

  
  .error-message {
    color: red;
    font-weight: bold;
  }
  
  .close {
    position: absolute;
    top: 5px;
    right: 5px; /* Adjusted position */
    font-size: 16px;
    cursor: pointer;
    color: #990000; /* Dark red color for the close button */
  }
  </style>
  