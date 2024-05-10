import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBU5RyikXqVF5u0koNS26TlrqaSLO45R7c",
  authDomain: "chatapp-88b45.firebaseapp.com",
  projectId: "chatapp-88b45",
  storageBucket: "chatapp-88b45.appspot.com",
  messagingSenderId: "1000952219603",
  appId: "1:1000952219603:web:96684665dbbb9e2da91126",
  measurementId: "G-S4PDRWKMET"
};

const app= initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);