<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import CompareCart from '@/components/CompareCart.vue';
import HomeButton from '@/components/HomeButton.vue';
import LogoutButton from '@/components/LogoutButton.vue';
import SearchContainer from '@/components/ProductSearchForm.vue';
import Header from '@/components/HeaderTitle.vue';
import Wishlist from '@/components/WishlistTitle.vue';
import FolderItem from '@/components/FolderItem.vue';

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
  console.log("inside goToFolder method with folder:" + folderName)
  router.push({ name: 'WishlistPageFolder', params: { folderName } });
  };

/*
  methods: {
    goToFolder() {
      return this.$router.push('WishlistPage');
    },
  },
*/
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

  <div id="add-folders-title">
    <Header headerText="Add Folders" />
  </div>

  <div id="products-to-add">
    <Header headerText="Products To Add" />
  </div>

  <div id="add-folder">
    <img src="@/assets/new-folder.png" alt="New Folder" class="add-folder-image"/>
    <div id="add-folder-name">
      <input v-model="newFolderName" placeholder="Enter new folder name" />
      <button @click="saveFolder">Save</button>
    </div>
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

#add-folder {
  position: absolute;
  left: 20%;
  top: 45%;
}

#add-folder-name {
  position: absolute;
  left: -5%;
  top: 100%;
}

.add-folder-image {
  width: 30%;
  height: auto;
} 

.folder-container {
  position: absolute;
  left: 20%;
  top: 45%; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.folder-item {
  margin-top: 10px;
}

.folder-list{
  position: absolute;
  left: 60%;
  top: 44%;
  font-size: 1.3vw;
}
</style>