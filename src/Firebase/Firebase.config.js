// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsf3Ldk0jJdHDFfa8jwgYpGtFpg_M04bQ",
  authDomain: "assignment-11-crud.firebaseapp.com",
  projectId: "assignment-11-crud",
  storageBucket: "assignment-11-crud.appspot.com",
  messagingSenderId: "636167469464",
  appId: "1:636167469464:web:5adf2e04d83f8dcace93ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;