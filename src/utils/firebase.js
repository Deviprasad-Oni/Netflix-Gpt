// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6XnLyoV6g6yRPOYUvX59tcbMchwjN3Tc",
  authDomain: "netflixgpt-39636.firebaseapp.com",
  projectId: "netflixgpt-39636",
  storageBucket: "netflixgpt-39636.firebasestorage.app",
  messagingSenderId: "417815827658",
  appId: "1:417815827658:web:1833f6c4fe2860946bd033",
  measurementId: "G-P6XBKLER11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
