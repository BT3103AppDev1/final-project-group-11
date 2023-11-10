import firebase from 'firebase/compat/app';

// Use your accounts config

const firebaseConfig = {
  apiKey: "AIzaSyA_ljRJJ1BgkLQV96CuKrWyBgkAc6bm4k0",
  authDomain: "bt3103-group-proj-1.firebaseapp.com",
  projectId: "bt3103-group-proj-1",
  storageBucket: "bt3103-group-proj-1.appspot.com",
  messagingSenderId: "175015674518",
  appId: "1:175015674518:web:0ee7b8e6701985fca738b7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;