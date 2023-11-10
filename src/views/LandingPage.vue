   <template>
    <NavBar/>
    <div class="landing-page">
      <header>
        <h1>Welcome to Compare Cart</h1>
        <p>Your go-to source for amazing products.</p>
      </header>
      <section>
        <h2>Discover Our Products</h2>
        <p>Explore our wide range of high-quality products at great prices.</p>
        <router-link to="/products">
          <button>View Products</button>
        </router-link>
      </section>
      <section>
        <h2>About Us</h2>
        <p>Learn about our mission and commitment to customer satisfaction.</p>
        <router-link to="/about">
          <button>About Us</button>
        </router-link>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Contact us today.</p>
        <router-link to="/contact-us">
          <button>Contact Us</button>
        </router-link>
      </section>
    </div>
  </template>

  <script>
  export default {
    // need to complete logic 
  };
  </script>

  <style scoped>
  .landing-page {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh; */
    padding-top: 200px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
  }
  
  header {
    background-color: lightsalmon;
    color: white;
    padding: 30px 0;
    padding-left: 400px;
    padding-right: 400px;
    text-align: center;
    position: relative;
    left: 110px;
    transform: translateX(-50%, -50%);
    
  }
  
  header h1 {
    font-size: 2rem;
  }
  
  section {
    margin: 20px 0;
    position: relative;
    left: 110px;
    transform: translateX(-50%, -50%);
  }
  
  button {
    background-color: lightsalmon;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: lightsalmon;
  }
  </style>
  