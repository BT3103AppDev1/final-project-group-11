import firebase from 'firebase/compat/app';

// Use your accounts config

const firebaseConfig = {
    apiKey: "AIzaSyDO59NiVbKhH-TtZ5KuIxgbHrXrJx7nouw",
    authDomain: "bt3103-group-project-53928.firebaseapp.com",
    projectId: "bt3103-group-project-53928",
    storageBucket: "bt3103-group-project-53928.appspot.com",
    messagingSenderId: "586260998655",
    appId: "1:586260998655:web:e9a73f7e1c37969b255fca",
    measurementId: "G-EEZZXV0W37"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;