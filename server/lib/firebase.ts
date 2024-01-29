// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo3lSFFCkHAse5luWhzuZjB5GY1FEZbGM",
  authDomain: "frontend-mentor-69dc9.firebaseapp.com",
  projectId: "frontend-mentor-69dc9",
  storageBucket: "frontend-mentor-69dc9.appspot.com",
  messagingSenderId: "950569069450",
  appId: "1:950569069450:web:4a97d0d57d6f2c53d73673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export { firestoreDB };
