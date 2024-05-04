import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCj_4id2KTmMVwQpKpMbD4frqDMsZUjmz8",
  authDomain: "ayo-activity7-online-store.firebaseapp.com",
  projectId: "ayo-activity7-online-store",
  storageBucket: "ayo-activity7-online-store.appspot.com",
  messagingSenderId: "110752670309",
  appId: "1:110752670309:web:9dc5fe30e04ec507f55c8c",
  measurementId: "G-MGP445ZFYF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);