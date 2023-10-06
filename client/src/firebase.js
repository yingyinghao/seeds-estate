// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e4da3.firebaseapp.com",
  projectId: "mern-estate-e4da3",
  storageBucket: "mern-estate-e4da3.appspot.com",
  messagingSenderId: "276701226268",
  appId: "1:276701226268:web:be5f66a185e5e8bd3906d9",
  measurementId: "G-7XH3RG62EZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

