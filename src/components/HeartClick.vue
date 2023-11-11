<template>
  <div class="heart-click" v-if="user">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <span
      class="material-symbols-outlined"
      alt="Add to Wishlist"
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
import { doc, getDoc, setDoc } from "firebase/firestore";

export default {
  name: 'HeartClick',

  methods: {
    addToWishlist() {
      const auth = getAuth();
      const user = auth.currentUser;
      const useremail = user.email;
      const wishlistRef = doc(db, "wishlist", useremail);

      getDoc(wishlistRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const wishlistData = docSnapshot.data();

            if (wishlistData.WishlistItems) {
              if (wishlistData.WishlistItems.includes(this.documentName)) {
                // If the product is already in the wishlist, remove it
                // @onClick -> toggle the values (so if already in wishlist, onClick = remove it.)
                this.isProductInWishlist = wishlistData.WishlistItems.includes(this.documentName);
                wishlistData.WishlistItems = wishlistData.WishlistItems.filter(item => item !== this.documentName);
              } else {
                // If the product is not in the wishlist, add it
                wishlistData.WishlistItems.push(this.documentName);
              }
            } else {
              // If the array doesn't exist, initialize it with the current item
              wishlistData.WishlistItems = [this.documentName];
            }

            // Update the Firestore document with the modified wishlist data
            setDoc(wishlistRef, wishlistData)
              .then(() => {
                this.isProductInWishlist = !this.isProductInWishlist; // Toggle the value
                alert(this.isProductInWishlist ? "Product added to the wishlist." : "Product removed from the wishlist.");
              })
              .catch((error) => {
                console.error("Error updating wishlist data:", error);
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
  },

  props: {
    documentName: String,
  },

  data() {
    return {
      user: false,
      useremail: "",
      isProductInWishlist: null,
    };
  },

  mounted() {
  const auth = getAuth();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      this.user = user;
      this.useremail = user.email;

      // Updating isProductInWishlist onMounted
      // console.log("this.documentName", this.documentName)

      const productRef = doc(db, "products", this.documentName); 
      getDoc(productRef)
        .then((productSnapshot) => {
          if (productSnapshot.exists()) {
            const productData = productSnapshot.data();
            // Update the DocumentName with the value from the product data
            // this.documentName = productData.DocumentName;

            // Check if the product is already in the wishlist upon component mount
            const wishlistRef = doc(db, "wishlist", this.useremail);
            getDoc(wishlistRef)
              .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                  const wishlistData = docSnapshot.data();

                  // console.log("wishlistData" + wishlistData)

                  if (wishlistData.WishlistItems) {
                    // console.log("wishlistData.WishlistItems" + wishlistData.WishlistItems)
                    this.isProductInWishlist = wishlistData.WishlistItems.includes(this.documentName);
                    // console.log("this.isProductInWishlist" + this.isProductInWishlist)
                  } else {
                    this.isProductInWishlist = false;
                  }
                }
              })
              .catch((error) => {
                console.error("Error checking wishlist data:", error);
              });
          } else {
            console.error("Product not found.");
            this.isProductInWishlist = false;
          }
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  });
},
};
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.red-icon {
  color: red;
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
