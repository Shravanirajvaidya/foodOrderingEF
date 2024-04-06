// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgAnjBoxo9FAwiAxokEnwoCQAETFb_CpM",
  authDomain: "fooddeliveryef.firebaseapp.com",
  databaseURL: "https://fooddeliveryef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fooddeliveryef",
  storageBucket: "fooddeliveryef.appspot.com",
  messagingSenderId: "606940076407",
  appId: "1:606940076407:web:2e40983ea653c42d9a2972",
  measurementId: "G-Q8ZT22DGTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);