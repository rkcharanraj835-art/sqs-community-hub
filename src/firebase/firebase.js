import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyC3o-QdqsY4Pgn9Tpsii2kCieJfK0h0aSI",
  authDomain: "sqs-community-hub.firebaseapp.com",
  projectId: "sqs-community-hub",
  storageBucket: "sqs-community-hub.firebasestorage.app",
  messagingSenderId: "556095230502",
  appId: "1:556095230502:web:827c03232aa6b1ce114ce7",
  measurementId: "G-JEHGQ489QM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();