import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export async function getProfile(uid) {
  const profileRef = doc(db, "users", uid);

  const snapshot = await getDoc(profileRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}