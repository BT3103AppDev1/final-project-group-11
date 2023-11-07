<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SearchContainer from '@/components/ProductSearchForm.vue';
import Header from '@/components/HeaderTitle.vue';
import Wishlist from '@/components/WishlistTitle.vue';
import FolderItem from '@/components/FolderItem.vue';
import firebaseApp from '../firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { computed } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: "WishlistPage",

  components: {
    NavBar,
    SearchContainer,
    Header,
    Wishlist,
    FolderItem,
    firebaseApp,
  },
  data() {
  return {
      user: false,
      useremail: "",
      newFolderName: "",
      folderNames: [],
      productCategories: [
      'Waterbottle', 'Birthday', 'Dog Products', 'Electronics', 'Fashion',
      'Home and Kitchen', 'Beauty and Personal Care', 'Sports and Outdoors',
      'Books and Media', 'Toys and Games'],
    };
  },
  mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.useremail = user.useremail;
          console.log("User object in WishlistPage:", this.user);
      }
    })
  },
  methods: {
    /* 
    saveFolder() {
      if (this.newFolderName.trim() !== '') {
      this.folderNames.push(this.newFolderName);
      console.log(this.newFolderName);
      this.newFolderName = ''; // reset newFolderName
    }
  },
  goToFolder(folderName){
      console.log('inside goToFolder method with folder:' + folderName);
      this.$router.push({ name: 'WishlistPageFolder', params: { folderName } });
    },
  }, */
}
}
</script>

<template>
<div class="wishlist-page" v-if="user">
  
  <div>
    <NavBar />
    <SearchContainer />
    <Wishlist />
  </div>

  <div id="curr-folders-title">
    <Header headerText="Current Folders" />
  </div>

<!--
  <div id="products-to-add">
    <Header headerText="Products To Add" />
  </div>
-->

  <div class="folder-container">
    <FolderItem v-for="(category, index) in productCategories" :key="index" :folderName="category" />
  </div>
</div>

  <!-- 
  <img src="@/assets/new-folder.png" alt="New Folder" class="add-folder-image"/>

  <div id="add-folder-name">
    <input v-model="newFolderName" placeholder="Enter new folder name" />
    <button @click="saveFolder">Save</button>
  </div>

  <div class="current-folders">
    <div id="folders-title">
      <Header headerText="Current Folders" />
    </div>
    <div class="folder-list">
      <ul>
        <li v-for="(folder, index) in folderNames" :key="index" 
        @click="goToFolder(folder)">{{ folder }}</li>
      </ul>
    </div>
  </div> -->

</template>

<style scoped>

#curr-folders-title {
  position: absolute;
  left: 20%;
  top: 40%;
}

#folders-title {
  position: absolute;
  left: 60%;
  top: 34%;
}

/* 
#products-to-add {
  position: absolute;
  left: 20%;
  top: 70%;
}

#add-folder-name {
  position: absolute;
  left: 20%;
  top: 63%;
}

.add-folder-image {
  width: 40%;
  height: auto;
  margin-right: 460px;
} 

.folder-list{
  position: absolute;
  left: 60%;
  top: 44%;
  font-size: 1.3vw;
} */

.folder-container {
  position: absolute;
  top: 50%;
  left: 15%;
  display: grid; /* Display items horizontally */
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  max-width: 100%; /* Allow the container to expand up to its content width */
}
</style>