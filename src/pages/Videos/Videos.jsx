import { motion } from "framer-motion";
import { FaYoutube, FaPlay } from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import creators from "../../data/videos";

function Videos() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="SQS Creators"
          title="Creator Hub"
          description="Meet the content creators of Square Squad. Watch gameplay, tournaments, tips, and exciting Mech Arena content."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {creators.map((creator, index) => (

            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-3xl border border-red-500/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]"
            >

              <div className="relative">

                <img
                  src={creator.thumbnail}
                  alt={creator.name}
                  className="h-56 w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                  <div className="rounded-full bg-red-600 p-5 text-2xl text-white">
                    <FaPlay />
                  </div>

                </div>

              </div>

              <div className="p-6">

                <h3 className="font-orbitron text-2xl font-bold text-white">
                  {creator.name}
                </h3>

                <p className="mt-2 text-red-400">
                  {creator.role}
                </p>

                <p className="mt-4 text-slate-400">
                  Subscribers: {creator.subscribers}
                </p>

                <button
                  onClick={() => window.open(creator.channel, "_blank")}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500"
                >
                  <FaYoutube />
                  Visit Channel
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </main>
  );
}

export default Videos;