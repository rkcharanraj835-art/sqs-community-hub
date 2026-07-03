import { useState } from "react";
import { motion } from "framer-motion";

import clans from "../../data/clans";

function Clan() {
  const [selectedClan, setSelectedClan] = useState(null);

  const handleSelectClan = (clan) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setSelectedClan(clan);
  };

  const handleBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setSelectedClan(null);
  };

  return (
    <section className="min-h-screen bg-[#070B14] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {!selectedClan ? (
          <>
            <h1 className="mb-4 text-center font-orbitron text-5xl font-bold text-white">
              Our Clans
            </h1>

            <p className="mb-14 text-center text-slate-400">
              Choose a clan to view its members.
            </p>

            <div className="grid gap-10 md:grid-cols-2">

              {clans.map((clan) => (
                <motion.div
                  key={clan.name}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectClan(clan)}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,255,255,.25)]"
                >
                  {/* Image */}
                  <div className="flex justify-center bg-gradient-to-b from-slate-800 via-slate-900 to-[#070B14] p-8">
                    <img
                      src={clan.image}
                      alt={clan.name}
                      className="max-h-[650px] w-auto rounded-2xl object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="border-t border-white/10 p-6 text-center">
                    <h2 className="font-orbitron text-3xl font-bold text-white">
                      {clan.name}
                    </h2>

                    <p className="mt-2 text-lg text-cyan-400">
                      {clan.members.length} Members
                    </p>

                    <p className="mt-3 text-sm text-slate-400">
                      Click to view clan members →
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleBack}
              className="mb-8 rounded-xl border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              ← Back to Clans
            </button>

            <h1 className="mb-10 font-orbitron text-4xl font-bold text-white">
              {selectedClan.name}
            </h1>

            <div className="overflow-x-auto rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl">

  <table className="min-w-[700px] w-full">

                <thead className="bg-cyan-500/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-cyan-400">#</th>
                    <th className="px-6 py-4 text-left text-cyan-400">Player</th>
                    <th className="px-6 py-4 text-left text-cyan-400">Player ID</th>
                    <th className="px-6 py-4 text-left text-cyan-400">
                      Inventory Power
                    </th>
                    <th className="px-6 py-4 text-left text-cyan-400">
                        Role
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {selectedClan.members.map((member, index) => (
                    <tr
                      key={member.id}
                      className="border-t border-white/10 transition hover:bg-white/5"
                    >
                      <td className="px-6 py-5 text-white">
                        {index + 1}
                      </td>

                      <td className="px-6 py-5 font-semibold text-white">
                        {member.name}
                      </td>

                      <td className="px-6 py-5 text-slate-300">
                        {member.id}
                      </td>

                      <td className="px-6 py-5 font-semibold text-cyan-400">
                        {member.power.toLocaleString()}
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
                          {member.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Clan;