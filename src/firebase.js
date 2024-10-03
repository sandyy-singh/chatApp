// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import {getStorage } from "firebase/storage"
 import {getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxkK9Vm1gZjGe9sW0KUug0fPYfuldSymo",
  authDomain: "chat-19dcf.firebaseapp.com",
  projectId: "chat-19dcf",
  storageBucket: "chat-19dcf.appspot.com",
  messagingSenderId: "26540972273",
  appId: "1:26540972273:web:d4cb28d5719735ed143150",
  databaseURL:"https://chat-19dcf-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const appp = initializeApp(firebaseConfig);
export const auth = getAuth(appp)
export const storage = getStorage()
export const db = getFirestore()
