import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCKUy1ZdpCEmzVpvZCSitXkvmxuTZOfPBc",
    authDomain: "whatsapp-clone-46f14.firebaseapp.com",
    projectId: "whatsapp-clone-46f14",
    storageBucket: "whatsapp-clone-46f14.appspot.com",
    messagingSenderId: "970622598185",
    appId: "1:970622598185:web:bb177cde688636d17a3038",
    measurementId: "G-1E6H6H94GN"
  };

const app= initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);