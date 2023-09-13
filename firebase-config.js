import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAvdhrH7UKcIrusfpjO4-YTUW32gZbBbtM",
    authDomain: "weshare-d93c8.firebaseapp.com",
    projectId: "weshare-d93c8",
    storageBucket: "weshare-d93c8.appspot.com",
    messagingSenderId: "471537411767",
    appId: "1:471537411767:web:7950e126e6cc0a758c0f32"
  };

// Initialize Firebase
const firebaseApplication = initializeApp(firebaseConfig);
const firebaseStorage = getStorage();
const firebaseDatabase = getDatabase();

export { firebaseStorage, firebaseDatabase };