import { motion } from "framer-motion";
import {
  FaUsers,
  FaPen,
  FaHeart,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    title: "Friends",
    value: 128,
    color: "text-cyan-400",
  },
  {
    icon: <FaPen />,
    title: "Posts",
    value: 54,
    color: "text-green-400",
  },
  {
    icon: <FaHeart />,
    title: "Likes",
    value: "2.4K",
    color: "text-pink-400",
  },
  {
    icon: <FaTrophy />,
    title: "Tournaments",
    value: 18,
    color: "text-yellow-400",
  },
];

function ProfileStats() {
  return (
    <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -6,
          }}
          className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className={`text-3xl ${stat.color}`}>
            {stat.icon}
          </div>

          <h2 className="mt-5 text-4xl font-bold text-white">
            {stat.value}
          </h2>

          <p className="mt-2 text-slate-400">
            {stat.title}
          </p>
        </motion.div>
      ))}

    </section>
  );
}

export default ProfileStats;