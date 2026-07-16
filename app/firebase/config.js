import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOA5WejUkIIWcoz4WtHcoSOci8p_6ymE0",
  authDomain: "fes-adv-internship.firebaseapp.com",
  projectId: "fes-adv-internship",
  storageBucket: "fes-adv-internship.firebasestorage.app",
  messagingSenderId: "303925885735",
  appId: "1:303925885735:web:d005812660b0a6b8244702"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();