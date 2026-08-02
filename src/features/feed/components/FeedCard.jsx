import { motion } from "framer-motion";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";

function FeedCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">

        <img
          src={post.avatar}
          alt={post.author}
          className="h-14 w-14 rounded-full border-2 border-cyan-400 object-cover"
        />

        <div className="flex-1">

          <h3 className="font-bold text-white">
            {post.author}
          </h3>

          <p className="text-sm text-cyan-400">
            {post.role}
          </p>

        </div>

        <span className="text-sm text-slate-500">
          {post.time}
        </span>

      </div>

      <p className="mt-6 leading-8 text-slate-300">
        {post.content}
      </p>

      <div className="mt-6 flex gap-8 text-slate-400">

        <button className="flex items-center gap-2 hover:text-red-400">
          <FaHeart />
          {post.likes}
        </button>

        <button className="flex items-center gap-2 hover:text-cyan-400">
          <FaCommentDots />
          {post.comments}
        </button>

        <button className="flex items-center gap-2 hover:text-green-400">
          <FaShare />
          Share
        </button>

      </div>

    </motion.div>
  );
}

export default FeedCard;