// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsW-6QUHPbbgQIbj_lyT-AmBLDKz9O8AI",
  authDomain: "toykids-react-firebase.firebaseapp.com",
  projectId: "toykids-react-firebase",
  storageBucket: "toykids-react-firebase.firebasestorage.app",
  messagingSenderId: "679001863852",
  appId: "1:679001863852:web:639ac900c2814b01915109",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;