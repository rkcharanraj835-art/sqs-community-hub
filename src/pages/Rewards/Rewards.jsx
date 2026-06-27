import { motion } from "framer-motion";
import { FaGift, FaStar } from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import rewards from "../../data/rewards";

const rarityColors = {
  Common: "border-gray-500 text-gray-300",
  Rare: "border-cyan-400 text-cyan-400",
  Epic: "border-purple-500 text-purple-400",
  Legendary: "border-orange-400 text-orange-400",
};

function Rewards() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="SQS Rewards"
          title="Unlock Exclusive Rewards"
          description="Participate in tournaments, contribute to the community, and earn exclusive SQS rewards."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {rewards.map((reward, index) => (

            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`rounded-3xl border bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] ${rarityColors[reward.rarity]}`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                <FaGift />
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider">
                <FaStar />
                {reward.rarity}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {reward.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {reward.description}
              </p>

              <div className="mt-8 rounded-2xl bg-black/20 p-4">
                <p className="text-sm text-slate-300">
                  Requirement
                </p>

                <p className="mt-2 font-semibold text-white">
                  {reward.requirement}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </main>
  );
}

export default Rewards;