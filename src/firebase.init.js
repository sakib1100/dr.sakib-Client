// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrOc_4JWCkZWeVtUbpNaGY5xTNSsA2Kjo",
  authDomain: "new-doctor-client.firebaseapp.com",
  projectId: "new-doctor-client",
  storageBucket: "new-doctor-client.appspot.com",
  messagingSenderId: "363664784010",
  appId: "1:363664784010:web:f6441d99fac25b17658b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;