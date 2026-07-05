import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import clans from "./data/clans";

const uploadData = async () => {
  try {
    for (const clan of clans) {
      const docId =
        clan.name === "Square Squad"
          ? "sqs"
          : clan.name === "Square Squad 2"
          ? "sqs2"
          : clan.name.toLowerCase().replace(/\s+/g, "-");

      await setDoc(doc(db, "clans", docId), clan);
    }

    console.log("✅ All clan data uploaded successfully!");
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
};

uploadData();