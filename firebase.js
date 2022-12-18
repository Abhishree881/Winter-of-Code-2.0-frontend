// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhoLAEwkFCTOSs7NOPetDdFf7a0ol8kTs",
  authDomain: "woc-2-6e9fb.firebaseapp.com",
  projectId: "woc-2-6e9fb",
  storageBucket: "woc-2-6e9fb.appspot.com",
  messagingSenderId: "358241136612",
  appId: "1:358241136612:web:656c67d55fef0d302161f1",
  measurementId: "G-MGE7P74S7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
