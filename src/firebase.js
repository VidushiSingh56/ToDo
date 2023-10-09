
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArf3_M8f8ioZrOCDOBNfLut0Xbr3CanS0",
  authDomain: "todoapp-5003f.firebaseapp.com",
  projectId: "todoapp-5003f",
  storageBucket: "todoapp-5003f.appspot.com",
  messagingSenderId: "1034774779731",
  appId: "1:1034774779731:web:8459c30652b1c5e806f3a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };