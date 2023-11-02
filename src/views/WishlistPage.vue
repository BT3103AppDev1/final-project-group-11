<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchContainer from '@/components/ProductSearchForm.vue';
import Header from '@/components/HeaderTitle.vue';
import Wishlist from '@/components/WishlistTitle.vue';
import FolderItem from '@/components/FolderItem.vue';
import firebaseApp from '../firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const newFolderName = ref('');
const folderNames = ref([]);
const router = useRouter();
let user = false;
let useremail = '';

const saveFolder = () => {
  if (newFolderName.value.trim() !== '') {
    folderNames.value.push(newFolderName.value);
    console.log(newFolderName.value);
    newFolderName.value = ''; // reset newFolderName
  }
};

const goToFolder = (folderName) => {
  console.log('inside goToFolder method with folder:' + folderName);
  router.push({ name: 'WishlistPageFolder', params: { folderName } });
};

const auth = getAuth();
onAuthStateChanged(auth, (authUser) => {
  if (authUser) {
    user = authUser;
    useremail = authUser.useremail;
  }
});

console.log('(Login.vue) User:', user) // Log the value of the user variable
</script>

<!--
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchContainer from '@/components/ProductSearchForm.vue';
import Header from '@/components/HeaderTitle.vue';
import Wishlist from '@/components/WishlistTitle.vue';
import FolderItem from '@/components/FolderItem.vue';
import firebaseApp from '../firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const newFolderName = ref('');
const folderNames = ref([]);
const router = useRouter();

const saveFolder = () => {
  if (newFolderName.value.trim() !== '') {
    folderNames.value.push(newFolderName.value);
    console.log(newFolderName.value);
    newFolderName.value = ''; // reset newFolderName
  }
};

// Function to navigate to a specific folder page
const goToFolder = (folderName) => {
  console.log('inside goToFolder method with folder:' + folderName);
  router.push({ name: 'WishlistPageFolder', params: { folderName } });
};
</script>
-->

<template>
<div class="wishlist-page" v-if="user">
  <div>
    <NavBar />
    <SearchContainer />
    <Wishlist />
  </div>

  <div id="add-folders-title">
    <Header headerText="Add Folders" />
  </div>

  <div id="products-to-add">
    <Header headerText="Products To Add" />
  </div>

  
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
  </div>
</div>
</template>

<style scoped>

#add-folders-title {
  position: absolute;
  left: 20%;
  top: 34%;
}

#folders-title {
  position: absolute;
  left: 60%;
  top: 34%;
}

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
  width: 60%;
  height: auto;
  margin-right: 40px;
} 

.folder-list{
  position: absolute;
  left: 60%;
  top: 44%;
  font-size: 1.3vw;
}
</style>