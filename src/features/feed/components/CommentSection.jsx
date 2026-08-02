import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "BLACKSQUARE",
      text: "GG 🔥",
    },
    {
      id: 2,
      user: "Thiru",
      text: "Congratulations 🎉",
    },
  ]);

  const [text, setText] = useState("");

  const addComment = () => {
    if (!text.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        user: "Charan",
        text,
      },
    ]);

    setText("");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="mt-6 overflow-hidden"
      >
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl bg-black/20 p-4"
            >
              <h4 className="font-semibold text-cyan-400">
                {comment.user}
              </h4>

              <p className="mt-1 text-slate-300">
                {comment.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 rounded-xl bg-[#0F172A] p-3 text-white outline-none"
          />

          <button
            onClick={addComment}
            className="rounded-xl bg-cyan-500 px-5 text-black font-semibold"
          >
            Send
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CommentSection;