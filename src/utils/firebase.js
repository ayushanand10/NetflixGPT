// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0NJk7vxQ32VaYur4AN91euW0XI0f4780",
  authDomain: "netflixgpt-11f95.firebaseapp.com",
  projectId: "netflixgpt-11f95",
  storageBucket: "netflixgpt-11f95.appspot.com",
  messagingSenderId: "212871476575",
  appId: "1:212871476575:web:febda06bed8528ba5232ea",
  measurementId: "G-F1JDGMSZ95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);