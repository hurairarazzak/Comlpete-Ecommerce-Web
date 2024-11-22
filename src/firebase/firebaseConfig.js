// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyByESU4bulCPcGLdoAgpcUSGEWJ7mh_GO4",
    authDomain: "complete-ecommerce-c430b.firebaseapp.com",
    projectId: "complete-ecommerce-c430b",
    storageBucket: "complete-ecommerce-c430b.firebasestorage.app",
    messagingSenderId: "266555526876",
    appId: "1:266555526876:web:1c384faa46794780f9ee19",
    measurementId: "G-RYDW4ER0EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };