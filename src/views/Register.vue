<template>
    <div class="signup">
      <h2>Sign Up</h2>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for = 'password'>Password:</label>
          <input type="password" id="password" required>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    // component logic can go here
  };
  </script>
  
  <style scoped>
  .signup {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  