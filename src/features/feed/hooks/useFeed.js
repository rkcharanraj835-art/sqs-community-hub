import { useEffect, useState } from "react";

import {
  subscribeToPosts,
  createPost,
} from "../services/feedService";

export function useFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToPosts(setPosts);

    return unsubscribe;
  }, []);

  async function addPost(post) {
    await createPost(post);
  }

  return {
    posts,
    addPost,
  };
}