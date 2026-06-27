import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";
import announcements from "../../../data/announcements";

function AnnouncementSection() {
  return (
    <section className="relative py-24 bg-[#05070D] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.08),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold text-sm">
            Community Updates
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Latest Announcements
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg">
            Stay updated with the latest SQS news, events, rewards, and community
            announcements.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {announcements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 text-2xl group-hover:scale-110 transition">
                <FaBullhorn />
              </div>

              {/* Badge */}
              <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                {item.type}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Date */}
              <p className="mt-2 text-sm text-orange-400">
                {item.date}
              </p>

              {/* Description */}
              <p className="mt-5 leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnnouncementSection;