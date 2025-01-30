import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "test-vue-628c0.firebaseapp.com",
    projectId: "test-vue-628c0",
    storageBucket: "test-vue-628c0.firebasestorage.app",
    messagingSenderId: "200295548904",
    appId: "1:200295548904:web:86284af5f55b65e4e3065d"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

export const db = getFirestore(firebaseApp);
