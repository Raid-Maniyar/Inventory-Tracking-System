import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBfzbT5LzbFuTZgkTVVlAZz3l9bRDp5GYQ",
  authDomain: "inventory-tracking-syste-33093.firebaseapp.com",
  databaseURL: "https://inventory-tracking-syste-33093-default-rtdb.firebaseio.com/",
  projectId: "inventory-tracking-syste-33093",
  storageBucket: "inventory-tracking-syste-33093.appspot.com",
  messagingSenderId: "846925804218",
  appId: "1:846925804218:web:3906ce868fd537834a0883",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);