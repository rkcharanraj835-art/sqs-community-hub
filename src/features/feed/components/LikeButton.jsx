import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

function LikeButton({ initialLikes = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setLiked(!liked);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleLike}
      className={`flex items-center gap-2 transition-colors ${
        liked ? "text-red-500" : "text-slate-400 hover:text-red-400"
      }`}
    >
      <FaHeart />

      <span>{likes}</span>
    </motion.button>
  );
}

export default LikeButton;