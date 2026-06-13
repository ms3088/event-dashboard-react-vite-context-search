import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN2_efsYxsK86CseE3eCbxuipKpm2CTkM",
  authDomain: "event-dashboard-4c4ef.firebaseapp.com",
  projectId: "event-dashboard-4c4ef",
  storageBucket: "event-dashboard-4c4ef.firebasestorage.app",
  messagingSenderId: "935750153569",
  appId: "1:935750153569:web:50cca912cc822828d14120"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);