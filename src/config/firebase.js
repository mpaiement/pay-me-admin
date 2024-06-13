import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWlcwmf-H6dQsHlPvV1qbSl-OCHJBxouA",
  authDomain: "mobile-paiement.firebaseapp.com",
  projectId: "mobile-paiement",
  storageBucket: "mobile-paiement.appspot.com",
  messagingSenderId: "284229778540",
  appId: "1:284229778540:web:cdea6b25abcdc79f122c49",
  measurementId: "G-6THVCMKY4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);