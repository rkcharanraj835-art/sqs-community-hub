import { useState } from "react";
import { motion } from "framer-motion";

function CreatePost() {
  const [post, setPost] = useState("");

  const handlePost = () => {
  if (!post.trim()) return;

  onPost(post);

  setPost("");
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-5 text-2xl font-bold text-white">
        Create a Post
      </h2>

      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Share something with the SQS community..."
        rows={5}
        className="w-full resize-none rounded-2xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none transition focus:border-cyan-400"
      />

      <div className="mt-5 flex justify-end">
        <button
          onClick={handlePost}
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          Post
        </button>
      </div>
    </motion.div>
  );
}

export default CreatePost;