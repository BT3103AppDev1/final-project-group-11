<script setup>
import BackButton from './components/BackButton.vue' 
import CompareCart from './components/CompareCart.vue'
import HomeButton from './components/HomeButton.vue'
import LogoutButton from './components/LogoutButton.vue'
import HeartButton from './components/HeartButton.vue'
import SearchContainer from './components/ProductSearchForm.vue'
// import Login from './components/Login.vue'
</script>

<template>
  <div>
    <BackButton />
    <CompareCart />
    <HomeButton />
    <LogoutButton />
    <HeartButton />
    <SearchContainer />
  </div>

  <router-view />  

<!--
  <div id="nav">
    <router-link to = "WishlistPage">Wishlist</router-link>
    
  </div>
-->
  
  <div id="app"></div>  
</template>

<!--
<style scoped>
#app {
  background-color: rgba(235, 103, 51, 0.149);
  width: 80vw;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>
-->

<!--
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
-->