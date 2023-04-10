import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKsYuaQcRwRTRDEBbtTsTFEnCXyvfxD5w",
  authDomain: "linksaula-f9136.firebaseapp.com",
  projectId: "linksaula-f9136",
  storageBucket: "linksaula-f9136.appspot.com",
  messagingSenderId: "364206134463",
  appId: "1:364206134463:web:e5f25dfe0862015e7fa20a",
  measurementId: "G-6WBWESM00Y",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
