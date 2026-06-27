import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import resources from "../../data/resources";

function Resources() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="Mech Arena Hub"
          title="Resources & Tools"
          description="Access powerful calculators, statistics, maps, skins, and other useful Mech Arena resources powered by InfoHub."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10 text-4xl text-cyan-400">
                  <Icon />
                </div>

                <h3 className="mt-8 font-orbitron text-3xl font-bold text-white">
                  {resource.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {resource.description}
                </p>

                <button
                  onClick={() => window.open(resource.link, "_blank")}
                  className="mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                >
                  Open Resource
                  <FaExternalLinkAlt size={14} />
                </button>
              </motion.div>
            );
          })}

        </div>

        {/* InfoHub Banner */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 p-10 text-center"
        >
          <h2 className="font-orbitron text-4xl font-black text-white">
            Mech Arena InfoHub
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Looking for even more guides, calculators, statistics, and game
            information? Visit the official Mech Arena InfoHub.
          </p>

          <button
            onClick={() =>
              window.open("https://mecharena.infohubhq.in/", "_blank")
            }
            className="mt-8 rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-orange-400"
          >
            Visit InfoHub
          </button>
        </motion.div>

      </div>
    </main>
  );
}

export default Resources;