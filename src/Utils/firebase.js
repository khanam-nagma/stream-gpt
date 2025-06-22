// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCam3908vMgq7WZ3T04T10G6Z2_-_mfTaA",
  authDomain: "streamgpt-ecdab.firebaseapp.com",
  projectId: "streamgpt-ecdab",
  storageBucket: "streamgpt-ecdab.firebasestorage.app",
  messagingSenderId: "6422931698",
  appId: "1:6422931698:web:0809f3da90eacaeb67886b",
  measurementId: "G-JWL2HBV1E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();