// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxTEj4XrtVcWmMc3pzCljoFaP4IL99xH0",
  authDomain: "storefront-97469.firebaseapp.com",
  databaseURL: "https://storefront-97469-default-rtdb.firebaseio.com",
  projectId: "storefront-97469",
  storageBucket: "storefront-97469.appspot.com",
  messagingSenderId: "156188490378",
  appId: "1:156188490378:web:7a78b71e03bbaa3c068b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db }