<template>
    <div class="recommended-products">
      <h3>Recommended Products</h3>
      <div class="product-list">
        <!-- Display recommended products -->
        <Product
          v-for="product in recommendedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      queriedProducts: [], 
      wishlistProducts: [], 
    },
    computed: {
      recommendedProducts() {
        const sortedProducts = this.sortProducts(this.queriedProducts, 'SalesVolume');
  
        const notInWishlist = sortedProducts.filter((product) => {
          return !this.isProductInWishlist(product);
        });
        // Change 5 to the number of recommendations you want to show
        return notInWishlist.slice(0, 5); 
      },
    },
    methods: {
      // Sort products based on given criteria
      sortProducts(products, criteria) {
      if (criteria === 'SalesVolume') {
          return products.slice().sort((a, b) => b.ProductSold - a.ProductSold);
      } else if (criteria === 'Price') {
          return products.slice().sort((a, b) => a.Price - b.Price);
      } else if (criteria === 'DeliveryFee') {
          return products.slice().sort((a, b) => a.DeliveryFee - b.DeliveryFee);
      } else if (critera == 'ProductSold') {
          return products.slice().sort((a, b) => a.ProductSold - b.ProductSold)
      }
      return products;
    },
  
      // Checking if the product is already in the wishlist
      isProductInWishlist(product) {
        return this.wishlistProducts.some((wishlistProduct) => wishlistProduct.id === product.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .recommended-products {
    text-align: left;
    max-width: 50%;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  </style>
  