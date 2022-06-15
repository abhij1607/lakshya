// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaixxhZuMbo3WVnQa9QiY7IHxKT50MgOA",
  authDomain: "lakshya-c6923.firebaseapp.com",
  projectId: "lakshya-c6923",
  storageBucket: "lakshya-c6923.appspot.com",
  messagingSenderId: "233483935696",
  appId: "1:233483935696:web:492163df3f36b88d4563d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
