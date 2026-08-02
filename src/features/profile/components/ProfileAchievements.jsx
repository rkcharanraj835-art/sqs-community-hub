import { motion } from "framer-motion";

const badges = [
  {
    name: "Founder",
    emoji: "💎",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Clan Leader",
    emoji: "👑",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Tournament Winner",
    emoji: "🏆",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Top Fragger",
    emoji: "🎯",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Early Supporter",
    emoji: "🔥",
    color: "from-emerald-500 to-green-600",
  },
];

function ProfileAchievements() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className={`rounded-2xl bg-gradient-to-r ${badge.color} p-[1px]`}
        >
          <div className="flex h-full items-center gap-4 rounded-2xl bg-[#070B14] p-5">
            <div className="text-4xl">
              {badge.emoji}
            </div>

            <div>
              <h3 className="font-bold text-white">
                {badge.name}
              </h3>

              <p className="text-sm text-slate-400">
                Community Achievement
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProfileAchievements;