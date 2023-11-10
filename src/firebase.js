// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Rest of the code remains the same

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* 
const firebaseConfig = {
  apiKey: "AIzaSyDO59NiVbKhH-TtZ5KuIxgbHrXrJx7nouw",
  authDomain: "bt3103-group-project-53928.firebaseapp.com",
  projectId: "bt3103-group-project-53928",
  storageBucket: "bt3103-group-project-53928.appspot.com",
  messagingSenderId: "586260998655",
  appId: "1:586260998655:web:e9a73f7e1c37969b255fca",
  measurementId: "G-EEZZXV0W37"
}; */

const firebaseConfig = {
  apiKey: "AIzaSyA_ljRJJ1BgkLQV96CuKrWyBgkAc6bm4k0",
  authDomain: "bt3103-group-proj-1.firebaseapp.com",
  projectId: "bt3103-group-proj-1",
  storageBucket: "bt3103-group-proj-1.appspot.com",
  messagingSenderId: "175015674518",
  appId: "1:175015674518:web:0ee7b8e6701985fca738b7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firebaseApp = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

// console.log(firebaseApp)
console.log('initialisation to firebase app successful');

export default firebaseApp;
