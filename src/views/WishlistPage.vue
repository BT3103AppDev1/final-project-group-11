<script setup>
import BackButton from '@/components/BackButton.vue' 
import CompareCart from '@/components/CompareCart.vue'
import HomeButton from '@/components/HomeButton.vue'
import LogoutButton from '@/components/LogoutButton.vue'
import SearchContainer from '@/components/ProductSearchForm.vue'
import Header from '@/components/HeaderTitle.vue'
import Wishlist from '@/components/WishlistTitle.vue'
import FolderItem from '@/components/FolderItem.vue';
// import Login from './components/Login.vue'
const components = {
  Header,
  FolderItem,
}
</script>

<template>
  <div>
    <BackButton />
    <CompareCart />
    <HomeButton />
    <LogoutButton />
    <SearchContainer />
    <Wishlist />
  </div>

  <div id="foldersTitle">
    <Header headerText="Folders" />
  </div>

  <div id="productsToAdd">
    <Header headerText="Products To Add" />
  </div>

  <div id="addFolder">
    <img src="@/assets/new-folder.png" alt="New Folder" class="addFolderImage"/>
  </div>

  <div id="folder">
    <FolderItem />
  </div>

  <div id="app"></div>  
</template>

<style scoped>
#foldersTitle {
  position: absolute;
  left: 20%;
  top: 34%; 
}

#productsToAdd {
  position: absolute;
  left: 20%;
  top: 70%; 
}

#folder {
  position: absolute;
  left: 25%;
  top: 45%;
} 

#addFolder {
  position: absolute;
  left: 20%;
  top: 45%; 
} 

.addFolderImage {
  width: 30%; 
  height: auto;
}
</style>