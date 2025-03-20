import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAooXgl7BFxpjp70sKbPvCqZYnB51JUOmo",
  authDomain: "react-course-20e0c.firebaseapp.com",
  projectId: "react-course-20e0c",
  storageBucket: "react-course-20e0c.firebasestorage.app",
  messagingSenderId: "173111329190",
  appId: "1:173111329190:web:c8ef5f325c5f9c93948f67"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );

