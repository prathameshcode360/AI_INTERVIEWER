import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterviewer-8c106.firebaseapp.com",
  projectId: "aiinterviewer-8c106",
  storageBucket: "aiinterviewer-8c106.firebasestorage.app",
  messagingSenderId: "418278796986",
  appId: "1:418278796986:web:8d8b3cc7057c311ce8dc83",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
