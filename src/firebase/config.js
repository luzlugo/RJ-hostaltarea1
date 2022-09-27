// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm6W_lI7HaZiZ1OhgCG9fcHJvAbtjA6mk",
  authDomain: "react-b4243.firebaseapp.com",
  projectId: "react-b4243",
  storageBucket: "react-b4243.appspot.com",
  messagingSenderId: "172051953977",
  appId: "1:172051953977:web:8fce395004596041c850e8",
  measurementId: "G-PDM1NK8P3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)