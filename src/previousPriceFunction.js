import { doc, collection, getDocs, updateDoc, query } from 'firebase/firestore';
import { db } from './firebase';

// Function to update 'PreviousPrices' field in existing documents
export async function updatePreviousPrices() {
  const productsRef = collection(db, 'products');
  const querySnapshot = await getDocs(productsRef);

  querySnapshot.forEach(async (docSnapshot) => {
    const product = docSnapshot.data();
    const currentPrice = product.Price;
    
    // Generate 4 random 'PreviousPrices' values within plus/minus 2 of the current price
    const previousPrices = [];
    for (let i = 0; i < 4; i++) {
      const minPrice = Math.max(3, currentPrice - 2); // Ensure minimum price is $3
      const maxPrice = currentPrice + 2;
      const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
      previousPrices.push(randomPrice);
    }
    
    // Update the document with the 'PreviousPrices' field
    await updateDoc(doc(productsRef, docSnapshot.id), { PreviousPrices: previousPrices });
    console.log(`Updated 'PreviousPrices' for document with ID: ${docSnapshot.id}`);
  });
} 

// Function to add a field called document name (which is the same as the document ID inside the document)
export async function addDocName() {
    try {
      const productsCollection = collection(db, "products"); 

      // Fetch all documents from the collection
      const querySnapshot = await getDocs(productsCollection);

      // Iterate through each document
      querySnapshot.forEach(async(docSnapshot) => {
        const documentId = docSnapshot.id;

        // Update the document by adding the DocumentName field
        const productDocRef = doc(db, "products", documentId); 
        await updateDoc(productDocRef, {
          DocumentName: documentId,
        });

        console.log(`Added DocumentName for document with ID: ${documentId}`);
      });

      console.log("Finished updating documents");
    } catch (error) {
      console.error("Error adding DocumentName field:", error);
    }
  }

// Call the updatePreviousPrices function to update existing documents
// updatePreviousPrices();