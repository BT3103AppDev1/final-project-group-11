<template>
  <div class="folder-item">
    <div class="folder-icon">
        <img src="@/assets/folder.png" alt="Open Folder" />
    </div>

    <input
      v-model="folderName"
      @input="validateFolderName"
      @keydown.enter="createFolder" 
      placeholder="Enter folder name"
    />

    <div class="error-message" v-if="folderNameError">{{ folderNameError }}</div>
  
    <!-- <button @click="createFolder">Create Folder</button>  Add a button to create the folder -->

  </div>
</template>

<script>
export default {
  props: {
    value: String, 
  },

  data() {
    return {
      folderName: this.value,
      folderNameError: '',
    };
  },
  methods: {
    validateFolderName() {
      if (this.folderName.trim() === '') {
        this.folderNameError = 'Folder name cannot be empty';
      } else {
        this.folderNameError = '';
      }
    },
    createFolder() {
      if (!this.folderNameError) {
        this.$emit('folder-created', this.folderName); // Emit the event with the folderName
      }
    },
  },
};

</script>

<style scoped>
.folder-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.folder-icon img {
  width: 30%; 
  height: auto; 
}

input {
  border: none;
  border-bottom: 2px solid #0074d9;
  font-size: 16px;
  margin: 10px;
  text-align: center;
}

.error-message {
  color: red;
  font-size: 14px;
}
</style>

