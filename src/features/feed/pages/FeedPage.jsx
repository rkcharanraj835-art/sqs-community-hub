import { useState } from "react";

import CreatePost from "../components/CreatePost";
import FeedList from "../components/FeedList";
import demoPosts from "../data/demoPosts";

function FeedPage() {
  const [posts, setPosts] = useState(demoPosts);

  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      author: "Charan",
      role: "SQS Moderator",
      avatar: "https://i.pravatar.cc/150?img=12",
      time: "Just now",
      content,
      likes: 0,
      comments: 0,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <h1 className="text-5xl font-bold text-white">
          Community Feed
        </h1>

        <p className="mt-4 text-slate-400">
          Stay updated with tournaments, announcements and community posts.
        </p>

        <CreatePost onPost={addPost} />

        <FeedList posts={posts} />

      </div>
    </main>
  );
}

export default FeedPage;