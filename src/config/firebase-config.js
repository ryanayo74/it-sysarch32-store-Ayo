import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb5dcRFY7FppGaIU5TSXt7uWCMTMp7y3Q",
  authDomain: "it-sysarch32-store-ayo.firebaseapp.com",
  projectId: "it-sysarch32-store-ayo",
  storageBucket: "it-sysarch32-store-ayo.appspot.com",
  messagingSenderId: "820071796113",
  appId: "1:820071796113:web:a4298b1bee73170079de30"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);