// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX47-tIQuYUvYir-iBvRIQamPLyo5sUE0",
    authDomain: "streamgenie-673d1.firebaseapp.com",
    projectId: "streamgenie-673d1",
    storageBucket: "streamgenie-673d1.firebasestorage.app",
    messagingSenderId: "1043380717925",
    appId: "1:1043380717925:web:ab1dc3772954a57ae9f98c",
    measurementId: "G-EFELN0KGY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };