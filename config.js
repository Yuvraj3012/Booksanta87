import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAzFn6-qRt32mIez9HS982V7Re_3zYWL5Y",
  authDomain: "booksanta-66ba0.firebaseapp.com",
  projectId: "booksanta-66ba0",
  storageBucket: "booksanta-66ba0.appspot.com",
  messagingSenderId: "1060834386202",
  appId: "1:1060834386202:web:89c9e9e50b3a314bcecca3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
