import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCd7jeDHXS1l9cgXRNAq2wmcgGTjWW2lHc",
    authDomain: "fb-crud-react-c39f8.firebaseapp.com",
    databaseURL: "https://fb-crud-react-c39f8.firebaseio.com",
    projectId: "fb-crud-react-c39f8",
    storageBucket: "fb-crud-react-c39f8.appspot.com",
    messagingSenderId: "496114270601",
    appId: "1:496114270601:web:89e0ec7c39d98891ace158"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
