   <template>
    <div class="landing-page">
      <header>
        <h1>Welcome to Compare Cart</h1>
        <p>Your go-to source for amazing products.</p>
        <Login/>
      </header>
      <section>
        <h2>Discover Our Products</h2>
        <p>Explore our wide range of high-quality products at great prices.</p>
        <router-link to="/SearchPage">
          <button>View Products</button>
        </router-link>
      </section>
      <section>
        <h2>About Us</h2>
        <p>Learn about our mission and commitment to customer satisfaction.</p>
        <router-link to="/About">
          <button>About Us</button>
        </router-link>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Contact us today.</p>
        <router-link to="/ContactUs">
          <button>Contact Us</button>
        </router-link>
      </section>
    </div>
</template>

<script>

  import Login from '@/components/Login.vue'
  export default {
    components: {
      Login,
    }
  
  };
  </script>

  <style scoped>
  .landing-page {

    padding: 50px; 
    padding-right: 300px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position:relative;
    
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
  