import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Bot,
  Gift,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "80+",
    label: "Community Members",
    color: "text-cyan-400",
  },
  {
    icon: Trophy,
    value: "25+",
    label: "Events Hosted",
    color: "text-orange-400",
  },
  {
    icon: Bot,
    value: "10",
    label: "Featured Mechs",
    color: "text-purple-400",
  },
  {
    icon: Gift,
    value: "100+",
    label: "Rewards",
    color: "text-green-400",
  },
];

function HeroStats() {
  return (
    <div className="grid w-full max-w-lg grid-cols-2 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]"
          >
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ${stat.color}`}
            >
              <Icon size={28} />
            </div>

            <h3 className="font-orbitron text-4xl font-black text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default HeroStats;