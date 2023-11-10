<template>
  <div class="heart-click" v-if="user">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <span
      class="material-symbols-outlined"
      alt = "Add to Wishlist"
      :class="{ 'red-icon': isProductInWishlist }"
      @click="addToWishlist"
    >
      favorite
    </span>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc, getFirestore, getDoc, setDoc } from "firebase/firestore";

export default {
  name: 'HeartClick',

  /*
  props: {
    documentName: String; // !!! AFTERWARDS -> USE THIS.DOCUMENTNAME TO ACCESS PROP VALUE!!!
  }, */

  methods: {
    addToWishlist() {
      // Implement the logic to add the product to the user's wishlist
      // Use the documentName and useremail
      // Check if the product already exists in the wishlist
      // Show an alert if it does, otherwise add it to the array
      // console.log("wishlistRef:", wishlistRef)
      // console.log("isProductInWishlist", this.isProductInWishlist)

      const auth = getAuth();
      const user = auth.currentUser;
      const useremail = user.email;
      const wishlistRef = doc(db, "wishlist", useremail);

      getDoc(wishlistRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const wishlistData = docSnapshot.data();
                // console.log("wishlistData:", wishlistData)
                // console.log("wishlistData.WishlistItems:", wishlistData.WishlistItems)

                // check if the array exists
                if (wishlistData.WishlistItems) {
                // Check if the product already exists in the wishlist array
                    if (wishlistData.WishlistItems.includes(this.documentName)) {
                      this.isProductInWishlist = wishlistData.WishlistItems.includes(this.documentName);
                      alert("Product already exists in the wishlist.");
                      return;
                    }

                    // If it doesn't exist, add it to the array
                    wishlistData.WishlistItems.push(this.documentName);
                } else {
                    // WishlistItems is not defined, initialize it as an array with the current item
                    wishlistData.WishlistItems = [this.documentName];
                }

                // Update the Firestore document with the modified wishlist data
                setDoc(wishlistRef, wishlistData)
                .then(() => {
                    this.isProductInWishlist = wishlistData.WishlistItems.includes(this.documentName);
                    // console.log("setDoc", this.isProductInWishlist);
                    alert("Product added to the wishlist.");
                    this.toggleIsClicked(); // Turn the heart red after adding to wishlist
                    // console.log("WishlistItems after product added:", wishlistData.WishlistItems)
                })
                .catch((error) => {
                    console.error("Error adding product to wishlist:", error);
                });
            } else {
                // Handle case where wishlist document doesn't exist yet
                alert("Wishlist doesn't exist.");
            }
        })
        .catch((error) => {
            console.error("Error fetching wishlist data:", error);
        });

    },
    toggleIsClicked() {
      // Function to toggle the isClicked property
      this.isClicked = !this.isClicked;
      console.log(this.isClicked)
    },
  },

  data() {
    return {
      user: false,
      useremail: "",
      documentName: "Waterbottle-11",
      // isClicked: false, 
      isProductInWishlist: false,
    };
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.useremail = user.email;
        // console.log(this.useremail);
        // Check if the product is already in the wishlist upon component mount
        const wishlistRef = doc(db, "wishlist", this.useremail);
        getDoc(wishlistRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const wishlistData = docSnapshot.data();
              if (wishlistData.WishlistItems) {
                this.isProductInWishlist = wishlistData.WishlistItems.includes(this.documentName);
                // console.log(this.documentName + " " + this.isProductInWishlist)
              }
            }
          })
          .catch((error) => {
            console.error("Error checking wishlist data:", error);
          });
      }
    });
  },
};
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

.red-icon {
  color: red; 
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
