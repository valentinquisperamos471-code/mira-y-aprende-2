import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg_v6kN6ZTWXQ-HSMD2aV7bQuh3SNplcs",
  authDomain: "mira-y-aprende-321c0.firebaseapp.com",
  databaseURL: "https://mira-y-aprende-321c0-default-rtdb.firebaseio.com",
  projectId: "mira-y-aprende-321c0",
  storageBucket: "mira-y-aprende-321c0.firebasestorage.app",
  messagingSenderId: "1085961832739",
  appId: "1:1085961832739:web:da32eacb00fbe8c4a5a496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);",
  authDomain: "mira-y-aprende-321c0.firebaseapp.com",
  databaseURL: "https://mira-y-aprende-321c0-default-rtdb.firebaseio.com",
  projectId: "mira-y-aprende-321c0",
  storageBucket: "mira-y-aprende-321c0.firebasestorage.app",
  messagingSenderId: "1085961832739",
  appId: "1:1085961832739:web:da32eacb00fbe8c4a5a496"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.guardarTicket = function(datos){
  push(ref(db, "tickets"), datos);
};

window.db = db;
