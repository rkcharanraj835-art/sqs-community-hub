import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../../firebase/firebase";

const postsRef = collection(db, "posts");

export function subscribeToPosts(callback) {
  const q = query(postsRef, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(posts);
  });
}

export async function createPost(post) {
  await addDoc(postsRef, {
    ...post,
    createdAt: serverTimestamp(),
  });
}