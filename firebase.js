// NOTES Materials: Firebase web configuration
// This is a browser app configuration, not an Admin SDK private key.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwAOrYFZWVgbhUpgX66kVaxv_pGIO0-Fg",
  authDomain: "notes-materials.firebaseapp.com",
  projectId: "notes-materials",
  storageBucket: "notes-materials.firebasestorage.app",
  messagingSenderId: "986093204453",
  appId: "1:986093204453:web:691d9f5fd45de57923350c",
  measurementId: "G-HK1TCRRR0J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
