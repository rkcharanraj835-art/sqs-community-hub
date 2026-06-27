import { motion } from "framer-motion";
import mechs from "../../../data/mechs";

function FeaturedMechs() {
  return (
    <section className="relative py-28 bg-[#070B14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[8px] text-sm font-semibold">
            Elite Arsenal
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Featured Mechs
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Discover the powerful machines used by the warriors of Square Squad.
            Every mech has its own unique role and combat style.
          </p>
        </motion.div>

        {/* Mech Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {mechs.map((mech, index) => (

            <motion.div
              key={mech.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,0.3)]"
            >

              {/* Image */}

              <div className="relative h-64 flex items-center justify-center p-6">

                <div className="absolute w-36 h-36 rounded-full bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20 transition-all duration-300" />

                <img
                  src={mech.image}
                  alt={mech.name}
                  className="relative h-48 object-contain transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              {/* Info */}

              <div className="border-t border-white/10 px-5 py-6">

                <h3 className="text-xl font-bold text-white">
                  {mech.name}
                </h3>

                <p className="mt-2 text-sm text-cyan-300">
                  {mech.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMechs;