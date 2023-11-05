import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBxGWyTI5oXtnaMqgVoIaw1TEkF8DQUxDI",
  authDomain: "glamour-wardrobe.firebaseapp.com",
  projectId: "glamour-wardrobe",
  storageBucket: "glamour-wardrobe.appspot.com",
  messagingSenderId: "640369564151",
  appId: "1:640369564151:web:ed7592d937ad2fde5a36f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)