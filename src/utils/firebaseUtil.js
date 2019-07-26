import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDjDHJudcfhcerXMXBt0bmzU1RgnNGlrAI",
    authDomain: "brainpizza-89818.firebaseapp.com",
    databaseURL: "https://brainpizza-89818.firebaseio.com",
    projectId: "brainpizza-89818",
    storageBucket: "brainpizza-89818.appspot.com",
    messagingSenderId: "180733894872",
    appId: "1:180733894872:web:bc958e4ea8dbdd90"
  };
  // Initialize Firebase
  export const firebaseImpl = firebase.initializeApp(firebaseConfig);
  export const firebaseDatabase = firebase.firestore();