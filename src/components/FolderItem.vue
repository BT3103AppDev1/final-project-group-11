<template>
  <div class="folder-item">
    <div class="folder-icon">
        <img src="@/assets/folder.png" alt="Open Folder" />
    </div>

    <div class="folder-content">
        <input v-model="folderName" :placeholder="isEditing ? 'Edit folder name' : 'Folder Name'" @blur="saveFolderName" @input="editingFolderName" @click="startEditing" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FolderItem',

  props: {
    initialName: String, // Initial folder name
  },
  data() {
    return {
      folderName: this.initialName || '',
      isEditing: false,
    };
  },
  methods: {
    startEditing() {
      this.isEditing = true;
    },
    saveFolderName() {
      this.isEditing = false;
      // Implement code to save the folder name (e.g., emit an event to parent component)
    },
    editingFolderName() {
      // Implement any additional logic while editing the folder name, if needed
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
  margin-left: 10px;
}

</style>

