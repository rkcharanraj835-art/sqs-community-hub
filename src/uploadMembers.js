import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";

import members from "./data/members";

export async function uploadMembers() {
  try {
    for (const member of members) {
      await addDoc(collection(db, "members"), member);
    }

    console.log("✅ Members uploaded successfully!");
  } catch (err) {
    console.error("❌ Upload failed:", err);
  }
}