import { doc, collection, addDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase'; 
// console.log(db);
// console.log(firestore)
// console.log("database", db)

// const productsRef = db.collection('products');

// Function to add a product to Firestore
export async function generateAndAddProducts() {
  const productCounts = {
    Waterbottle: 1,
    Birthday: 1,
    'Dog Products': 1,
    Electronics: 1,
    Fashion: 1,
    'Home and Kitchen': 1,
    'Beauty and Personal Care': 1,
    'Sports and Outdoors': 1,
    'Books and Media': 1, 
    'Toys and Games': 1,
  };

  for (let i = 0; i < 100; i++) {
    const product = generateRandomProduct(productCounts);
    const docName = `${product.ProductCategory.replace(/\s+/g, '-')}-${productCounts[product.ProductCategory]}`;
    productCounts[product.ProductCategory] += 1;
    const docRef = await setDoc(doc(db, "products", docName), product);
    // console.log("Document written with ID: ", docName);
  }
}

function generateProductPicture(productCategory) {
  // Normalize the category name to lowercase and remove spaces
  const normalizedCategory = productCategory.toLowerCase().replace(/\s+/g, '-');
  
  // Construct the path to the image file
  const imagePath = `@/assets/products/${normalizedCategory}.png`;
  // console.log(productCategory)
  // console.log(imagePath)
  return imagePath;
}

function generateProductSourceURL(source) {
  // Convert the source name to lowercase and remove spaces
  const formattedSource = source.toLowerCase().replace(/\s/g, '');
  
  // Combine the formatted source with '.com' to create the URL
  const sourceURL = formattedSource + '.com';
  // console.log(source)
  // console.log(sourceURL)
  return sourceURL;

}

// Function to generate a random product
function generateRandomProduct() {
  const productCategories = [
    'Waterbottle', 'Birthday', 'Dog Products', 'Electronics', 'Fashion',
    'Home and Kitchen', 'Beauty and Personal Care', 'Sports and Outdoors',
    'Books and Media', 'Toys and Games'
  ];
  const sources = ['Amazon', 'Lazada', 'Shopee', 'Ezbuy', 'Alibaba'];

  // Define pre-defined names for different product categories
  let categoryNames;
  const waterbottleNames = [
    'Blue Water Bottle', 'Green Sports Bottle', 'Stainless Steel Water Flask', 'Reusable Glass Water Bottle', 'Hiking Water Jug', 'Kids Sippy Cup', 'Hydration Pack', 'Infuser Water Bottle'
  ];
  const birthdayNames = [
    'Birthday Cake', 'Party Balloons', 'Gift Wrapping Paper', 'Party Hats', 'Confetti Poppers', 'Birthday Candles'
  ];
  const dogProductNames = [
    'Dog Collar', 'Pet Bed', 'Dog Chew Toys', 'Dog Food Bowl', 'Dog Leash', 'Pet Grooming Kit', 'Puppy Training Pads'
  ];
  const electronicsNames = [
    'Smartphone', 'Laptop', 'Tablet', 'TV', 'Camera', 'Headphones', 'Gaming Console', 'Smartwatch'
  ];

  const fashionNames = [
    'Dress', 'Shirt', 'Jeans', 'Sneakers', 'Handbag', 'Necklace', 'Sunglasses', 'Wristwatch'
  ];

  const homeAndKitchenNames = [
    'Sofa', 'Refrigerator', 'Dining Table', 'Coffee Maker', 'Bed', 'Vacuum Cleaner', 'Toaster', 'Blender'
  ];

  const beautyAndPersonalCareNames = [
    'Skincare Set', 'Lipstick', 'Shampoo', 'Razor', 'Perfume', 'Hair Dryer', 'Toothbrush', 'Nail Polish'
  ];

  const sportsAndOutdoorsNames = [
    'Tennis Racket', 'Bicycle', 'Running Shoes', 'Camping Tent', 'Fitness Tracker', 'Hiking Boots', 'Yoga Mat', 'Soccer Ball'
  ];

  const booksAndMediaNames = [
    'Novel', 'Action Movie', 'Music Album', 'Cookbook', 'Sci-Fi Book', 'Documentary Film', 'Mystery Novel', 'Romantic Comedy'
  ];

  const toysAndGamesNames = [
    'Action Figure', 'Board Game', 'Puzzle', 'Doll', 'LEGO Set', 'Video Game', 'Remote Control Car', 'Chess Set'
  ];

  const productCategory = productCategories[Math.floor(Math.random() * productCategories.length)];
  let productName = '';

  switch (productCategory) {
    case 'Waterbottle':
      categoryNames = waterbottleNames;
      break;
    case 'Birthday':
      categoryNames = birthdayNames;
      break;
    case 'Dog Products':
      categoryNames= dogProductNames;
      break;
    case 'Electronics':
      categoryNames = electronicsNames;
      break;
    case 'Fashion':
      categoryNames = fashionNames;
      break;
    case 'Home and Kitchen':
      categoryNames = homeAndKitchenNames;
      break;
    case 'Beauty and Personal Care':
      categoryNames = beautyAndPersonalCareNames;
      break;
    case 'Sports and Outdoors':
      categoryNames = sportsAndOutdoorsNames;
      break;
    case 'Books and Media':
      categoryNames = booksAndMediaNames;
      break;
    case 'Toys and Games':
      categoryNames = toysAndGamesNames;
      break;
    default:
      categoryNames = 'Default Category Name';
      break;
  }

  productName = categoryNames[Math.floor(Math.random() * categoryNames.length)];
  const picturePath = generateProductPicture(productCategory);

  const generatedSource = sources[Math.floor(Math.random() * sources.length)];
  const sourceURL = generateProductSourceURL(generatedSource);

  const productData = {
    ProductName: productName,
    ProductCategory: productCategory,
    Price: Math.floor(Math.random() * 50 + 5), // Random price between $5 and $55
    DeliveryFee: Math.floor(Math.random() * 10), // Random delivery fee
    DeliveryTime: `${Math.floor(Math.random() * 4) + 1} Weeks`, // Random delivery time between 1-4 weeks
    ProductReviews: Math.floor(Math.random() * 2001), // Random number of reviews between 0 and 2000
    ProductSold: Math.floor(Math.random() * 3001) + 2000, // Random number of products sold between 2000 and 5000
    Source: generatedSource, // Random source
    sourceURL: sourceURL,
    Picture: picturePath, 
    IsInWishList: Math.random() < 0.11, // Random true or false
    FolderName: '', // Folder name is the same as the product category
  };
  // console.log(picturePath);
  // console.log(sourceURL);

  return productData;
} 

  /* 
export async function generateAndAddProducts() {
  for (let i = 0; i < 20; i++) {
      const product = generateRandomProduct();
      productsRef.add(product)
        .then((docRef) => {
          console.log(`Product added with ID: ${docRef.id}`);
        })
        .catch((error) => {
          console.error('Error adding product: ', error);
        });
    }
} */


  