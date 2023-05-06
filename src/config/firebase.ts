import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA6MQw0X9zHdGN-ozUbh4ajfHaBV3dd9-w",
  authDomain: "shopfirebase-92155.firebaseapp.com",
  projectId: "shopfirebase-92155",
  storageBucket: "shopfirebase-92155.appspot.com",
  messagingSenderId: "677808920488",
  appId: "1:677808920488:web:a1ac56d9fa57547cd02f9d",
  measurementId: "G-YTQLXGZPCM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth(app);

const userLogin = getDatabase(app);
const provider = new GoogleAuthProvider();
export {
  app,
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  storage,
  userLogin,
};
