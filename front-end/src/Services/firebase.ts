
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDF5uZ9i3Y6mgtuWkopLBhMrZfnwBPkJF4",
  authDomain: "motoradelivery.firebaseapp.com",
  projectId: "motoradelivery",
  storageBucket: "motoradelivery.appspot.com",
  messagingSenderId: "846331802993",
  appId: "1:846331802993:web:9bc33590c1c0823c2272d0"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)