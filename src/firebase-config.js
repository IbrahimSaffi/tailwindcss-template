// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHwEJ_9ML_9RRippYka4Pa4st7Ypf9JfY",
  authDomain: "tailwind-template-14a14.firebaseapp.com",
  projectId: "tailwind-template-14a14",
  storageBucket: "tailwind-template-14a14.appspot.com",
  messagingSenderId: "245440261052",
  appId: "1:245440261052:web:e1d2f0211dfd2810fa99b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }