// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxEqOjj7Y8Qtu6j_jRaDLvL0Sxh0B6rwU",
  authDomain: "netflixgpt-f252e.firebaseapp.com",
  projectId: "netflixgpt-f252e",
  storageBucket: "netflixgpt-f252e.firebasestorage.app",
  messagingSenderId: "632537498703",
  appId: "1:632537498703:web:d302427a4c1f838a42163a",
  measurementId: "G-B9RPFEVN51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);