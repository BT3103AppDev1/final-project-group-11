<template>
    <div class="contact-us">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <!-- Display success message if not empty -->
      <div v-if="successMessage" class="successMessage">
      {{ successMessage }}
      </div>
    </div>
</template>
  
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        successMessage: "", 
        user: false,
        useremail: "",

      };
    },
  //   data() {
  //   return {
  //     user: false,
  //     useremail: "",
  //   };
  // },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.useremail = user.email;
        // console.log(this.useremail);
      }
    });
  },
    methods: {
      async submitForm() {
        const auth = getAuth();
        const db = getFirestore();

        // Create a new message document in Firestore
        const messageData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      try {
        const docRef = await addDoc(collection(db, "messages"), messageData);

        // Clear the input fields
        this.name = "";
        this.email = "";
        this.message = "";

        // Set the success message
        this.successMessage = "Message sent successfully! We will contact you back within 48 hours";
      } catch (error) {
        // Handle the error if message submission fails
        console.error("Error sending message: ", error);
        this.successMessage = "Message sending failed. Please try again later.";
      }
    },
  },
};
</script>      
   

  
  <style scoped>
  .contact-us {
    margin-top: -20px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border: 2px solid lightsalmon;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  textarea {
    width: 100%;
    padding: 5px;
    resize: vertical;
  }
  .successMessage {
  color: green; 
}
  </style>
  