<template>
  <div class="main-page">
    <div class = "title">
      <BackButton/>
      <CompareCart/>
      <HomeButton/>
      <LogoutButton/>
    </div>
    <br><br><br>
    <SearchBar/>
    <PinkBox/>
  </div>
</template>
<script>
import BackButton from '../components/BackButton.vue' 
import CompareCart from '../components/CompareCart.vue'
import HomeButton from '../components/HomeButton.vue'
import LogoutButton from '../components/LogoutButton.vue'
import Header from '../components/HeaderTitle.vue'
import PinkBox from '../components/PinkBox.vue'
import SearchBar from '../components/SearchBar.vue'
import { defineComponent } from "vue";
export default {
    name:"MainPage",
    components: {
      BackButton,
      CompareCart,
      HomeButton,
      LogoutButton,
      SearchBar,
      PinkBox,
    },
}
</script>
