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
  },
}
/*
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

onMounted(() => {
  onAuthStateChanged(auth, (authUser) => {
    if (authUser) {
      user = authUser;
      useremail = authUser.useremail;
      console.log('(WishlistPage function) User:', user)
    }
  });
});
*/

</script>

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
  width: 40%;
  height: auto;
  margin-right: 460px;
} 

.folder-list{
  position: absolute;
  left: 60%;
  top: 44%;
  font-size: 1.3vw;
}
</style>