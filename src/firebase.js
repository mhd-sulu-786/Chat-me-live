
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTlYOxHarGpBWHhlzzkxcK2FhjvWiYJ8c",
    authDomain: "chat-c3f01.firebaseapp.com",
    projectId: "chat-c3f01",
    storageBucket: "chat-c3f01.appspot.com",
    messagingSenderId: "409785853124",
    appId: "1:409785853124:web:06b4c3b6e4290e7c185591",
    measurementId: "G-F746TRWE0Y"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;

