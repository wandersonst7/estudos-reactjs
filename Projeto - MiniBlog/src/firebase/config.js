import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB2OubSeriJRj2KbkEn9Bjysh0mmDbUzPg",
  authDomain: "miniblog---curso-react.firebaseapp.com",
  projectId: "miniblog---curso-react",
  storageBucket: "miniblog---curso-react.appspot.com",
  messagingSenderId: "1074058286430",
  appId: "1:1074058286430:web:7ab3e8aaacd9a86a662bcf"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };