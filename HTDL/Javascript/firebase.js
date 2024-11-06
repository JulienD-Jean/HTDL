
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkWX2kqwRHBKdwN7ZAI6x0sgMXytDxi98",
    authDomain: "htdl-6727f.firebaseapp.com",
    projectId: "htdl-6727f",
    storageBucket: "htdl-6727f.firebasestorage.app",
    messagingSenderId: "806532357302",
    appId: "1:806532357302:web:cd5d000426b46edaca1a17",
    measurementId: "G-2SK9MS80RF",
    databaseURL: "https://htdl-6727f-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
