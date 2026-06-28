import { motion } from "framer-motion";
import { FaCrown, FaRobot } from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import members from "../../data/members";

const roleColors = {
  Leader: "bg-yellow-500 text-black",
  SQS_Moderator: "bg-cyan-500 text-black",
  Elite: "bg-purple-500 text-white",
  Member: "bg-slate-700 text-white",
  Discord_Developer: "bg-[#5865F2] text-white",
  Web_Developer: "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 text-black",
};

function Gallery() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="SQS Roster"
          title="Meet The Squad"
          description="Every member of Square Squad plays an important role in our success. Meet the pilots behind the community."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {members.map((member, index) => (

            <motion.div
              key={member.id}
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
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={member.image}
                  alt={member.ign}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                {member.role === "Leader" && (
                  <div className="absolute right-4 top-4 rounded-full bg-yellow-500 p-3 text-black shadow-lg">
                    <FaCrown />
                  </div>
                )}

              </div>

              {/* Content */}

              <div className="p-6">

                <span
                  className={`rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${roleColors[member.role]}`}
                >
                  {member.role}
                </span>

                <h3 className="mt-5 font-orbitron text-3xl font-bold text-white">
                  {member.ign}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {member.name}
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-black/20 p-4">

                  <FaRobot className="text-orange-400 text-xl" />

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Top Mech
                    </p>

                    <p className="font-semibold text-white">
                      {member.favoriteMech}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </main>
  );
}

export default Gallery;