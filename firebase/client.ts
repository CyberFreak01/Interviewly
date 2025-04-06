// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDy49fvMast8UTjlv1QcqYfGCOqQ38sYBk",
    authDomain: "interviewly-317b4.firebaseapp.com",
    projectId: "interviewly-317b4",
    storageBucket: "interviewly-317b4.firebasestorage.app",
    messagingSenderId: "1054337012574",
    appId: "1:1054337012574:web:ae28ba3969d3bf0b65b5cf",
    measurementId: "G-GTY0PL5TKL"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export  const auth = getAuth(app);
export const db = getFirestore(app);