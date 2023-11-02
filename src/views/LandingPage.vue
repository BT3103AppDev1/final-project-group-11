<!-- <template>
    <div class="landing-page">
      <div class="bg-container">
      <img v-bind:src="SHOP.png" id="bg-ratio">
      </div>
      
        <div class="begin-your-journey-container">
          <p class="begin-your-journey">BEGIN YOUR JOURNEY WITH COMPARE CART!
          </p>
          <p class="begin-your-journey">
            COMPARE PRICES OF PRODUCTS ALL AT ONE PLACE NOW.
          </p>
          <p class="begin-your-journey">
            LOGIN TO CONTINUE YOUR PERSONALISED JOURNEY
          </p>
        </div>
      
      < <div class="sign-uplogin-button">
        <div class="sign-uplogin-button1">
          <button class="sign-uplogin-button-child" />
          <div class="sign-uplogin">SIGN UP/LOGIN</div>
        </div>
      </div>
      <div class="contact-us-group">
        <div class="background1" />
        <div class="button3">
          <button class="button4">
            <div class="button-child" />
            <b class="button5">Contact Us</b>
          </button>
        </div>
        <div class="click-to-contact-container">
          <p class="begin-your-journey">Click to</p>
          <p class="begin-your-journey">Contact us</p>
        </div>
        <img class="phone-icon" alt="" src="/phone-icon@2x.png" />
      </div>
      <div class="about-us-group">
        <div class="background1" />
        <div class="click-to-find">Click to find out more</div>
        <button class="button6">
          <div class="sign-uplogin-button1">
            <div class="button-child" />
            <b class="about-us">About Us</b>
          </div>
        </button>
        <img class="question-mark-icon2" alt="" src="/question-mark1.svg" />
      </div>
      <div class="top-logo2">CompareCart</div>
    </div>
  </template>

  <script>
    </div>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "LandingPage",
    });
  </script>
  <style scoped>
    .centre-image {
      position: absolute;
      top: 83px;
      left: calc(50% - 1206.5px);
      width: 2413px;
      height: 1368px;
      background-image: url("/public/centreimage@2x.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
    }
    .background {
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: var(--color-pink);
      width: 1006px;
      height: 162px;
    }
    .begin-your-journey {
      margin: 0;
    }
    .begin-your-journey-container {
      position: absolute;
      top: 0px;
      left: calc(50% - 482px);
      letter-spacing: -0.02em;
      line-height: 150%;
      font-weight: 500;
    }
    .subtext-group {
      position: absolute;
      top: 1135px;
      left: 703px;
      width: 1006px;
      height: 162px;
    }
    .sign-uplogin-button-child {
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: var(--color-black);
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
      border-radius: 16.51px;
    }
    .sign-uplogin {
      position: absolute;
      top: 27.94%;
      left: 10.66%;
    }
    .sign-uplogin-button1 {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
    }
    .sign-uplogin-button {
      position: absolute;
      top: 1339px;
      left: 1061px;
      width: 298.89px;
      height: 112.29px;
      font-size: var(--font-size-13xl);
      color: var(--color-white);
    }
    .background1 {
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: var(--color-pink);
      width: 318px;
      height: 435px;
    }
    .button-child {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
      border-radius: var(--br-3xs);
      background-color: var(--color-black);
    }
    .button5 {
      position: absolute;
      top: 27.94%;
      left: 12.15%;
      font-size: var(--font-size-5xl);
      font-family: var(--font-poppins);
      color: var(--color-white);
      text-align: center;
    }
    .button4 {
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: transparent;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
    }
    .button3 {
      position: absolute;
      top: 333px;
      left: 68px;
      width: 181px;
      height: 68px;
    }
    .click-to-contact-container {
      position: absolute;
      top: 34px;
      left: calc(50% - 105px);
      letter-spacing: -0.02em;
      line-height: 150%;
      font-weight: 500;
      display: inline-block;
      width: 211px;
      height: 108px;
    }
    .phone-icon {
      position: absolute;
      top: 144px;
      left: calc(50% - 91px);
      width: 183.5px;
      height: 222.79px;
      object-fit: cover;
    }
    .contact-us-group {
      position: absolute;
      top: 549px;
      left: 1963px;
      width: 318px;
      height: 435px;
    }
    .click-to-find {
      position: absolute;
      top: 36px;
      left: calc(50% - 105px);
      letter-spacing: -0.02em;
      line-height: 150%;
      font-weight: 500;
      display: inline-block;
      width: 211px;
      height: 108px;
    }
    .about-us {
      position: absolute;
      top: 27.94%;
      left: 19.34%;
      font-size: var(--font-size-5xl);
      font-family: var(--font-poppins);
      color: var(--color-white);
      text-align: center;
    }
    .button6 {
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: transparent;
      position: absolute;
      top: 333px;
      left: 68.52px;
      width: 181px;
      height: 68px;
    }
    .question-mark-icon2 {
      position: absolute;
      top: 183px;
      left: calc(50% - 25.48px);
      width: 51.82px;
      height: 125.06px;
    }
    .about-us-group {
      position: absolute;
      top: 549px;
      left: 175px;
      width: 318px;
      height: 435px;
    }
    .top-logo2 {
      position: absolute;
      top: 0px;
      left: 1006px;
      font-size: var(--font-size-29xl);
      letter-spacing: -0.3px;
      font-family: var(--font-mochiy-pop-one);
      color: var(--color-purple);
    }
    .landing-page {
      position: relative;
      border-radius: var(--br-xs);
      background-color: var(--color-white);
      border: 1px solid var(--color-white);
      box-sizing: border-box;
      width: 100%;
      height: 1502px;
      overflow: hidden;
      text-align: center;
      font-size: var(--font-size-17xl);
      color: var(--color-gray-200);
      font-family: var(--font-poppins);
    }
  </style>
   -->

  <template>
    <NavBar/>
    <Login />
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
  import Login from '@/components/Login.vue';
  console.log("on LandingPage")

  export default {
    name:"LandingPage",
    components: {
      Login,
    },
  }
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
  