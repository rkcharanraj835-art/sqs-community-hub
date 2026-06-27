import { motion } from "framer-motion";
import { FaDiscord, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { socials } from "../../../data/socials";

function CommunityCTA() {
  return (
    <section className="relative overflow-hidden bg-[#04060B] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,229,255,0.08),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[8px] text-cyan-400"
        >
          Join The Squad
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-5 text-5xl font-black text-white md:text-6xl"
        >
          Become Part of
          <span className="block bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
            Square Squad
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-400"
        >
          Join our official community to participate in tournaments, earn
          exclusive rewards, meet skilled Mech Arena players, and stay updated
          with the latest SQS announcements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <button
            onClick={() => window.open(socials.discord, "_blank")}
            className="flex items-center gap-3 rounded-2xl bg-[#5865F2] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <FaDiscord size={22} />
            Discord
          </button>

          <button
            onClick={() => window.open(socials.whatsapp, "_blank")}
            className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </button>

          <button
            onClick={() => window.open(socials.youtube, "_blank")}
            className="flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <FaYoutube size={22} />
            YouTube
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CommunityCTA;