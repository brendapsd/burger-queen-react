import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-Oh0BEIT7yXLNu9MprZcxuIkTepoR4dg",
    authDomain: "burgerqueen-fa58f.firebaseapp.com",
    databaseURL: "https://burgerqueen-fa58f.firebaseio.com",
    projectId: "burgerqueen-fa58f",
    storageBucket: "burgerqueen-fa58f.appspot.com",
    messagingSenderId: "458434977735",
    appId: "1:458434977735:web:1aa6eabb60ee0c83"

  });
  
  const db = firebaseApp.firestore();
  
  export { db };

  

