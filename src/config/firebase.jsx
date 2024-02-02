// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDfQQac08JDmSiiyHxRYYXIazhtPld8wc",
  authDomain: "hericon-2.firebaseapp.com",
  projectId: "hericon-2",
  storageBucket: "hericon-2.appspot.com",
  messagingSenderId: "159988089101",
  appId: "1:159988089101:web:6881f8ee0c4e4b10647044",
  measurementId: "G-JGVBDMB01C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
