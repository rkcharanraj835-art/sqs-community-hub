import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getClans() {
  const snapshot = await getDocs(collection(db, "clans"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}