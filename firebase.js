// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoNd3-dBfBdHtrvnBUEzAmuqjFpx1K3To",
  authDomain: "driver-a2c74.firebaseapp.com",
  projectId: "driver-a2c74",
  storageBucket: "driver-a2c74.appspot.com",
  messagingSenderId: "293982838870",
  appId: "1:293982838870:web:eb7a4cfe7290319130dbf7",
  measurementId: "G-8EWL2YF4H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth};