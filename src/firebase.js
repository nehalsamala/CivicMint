import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDaBEfVt1EQmxkqn-V1XMd9fP4IxI2EOYo",
    authDomain: "civicmint-70fda.firebaseapp.com",
    projectId: "civicmint-70fda",
    storageBucket: "civicmint-70fda.firebasestorage.app",
    messagingSenderId: "112857334472",
    appId: "1:112857334472:web:d73be545074439b7c0dbfd",
    measurementId: "G-Y2902XFGYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
export const db = getFirestore(app);

// Storage (for image upload)
export const storage = getStorage(app);