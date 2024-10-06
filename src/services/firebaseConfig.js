// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy2LQTcSjMSV3aF4pOTdNlA546AIzzDAo",
  authDomain: "dragon-news-ce32f.firebaseapp.com",
  projectId: "dragon-news-ce32f",
  storageBucket: "dragon-news-ce32f.appspot.com",
  messagingSenderId: "539882528895",
  appId: "1:539882528895:web:86ba80f2e79a0b29261f4a",
  measurementId: "G-J8JQWZJYC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);