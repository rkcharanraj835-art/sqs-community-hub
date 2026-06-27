import { motion } from "framer-motion";

function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignment[align]} max-w-3xl mx-auto mb-14`}
    >
      {/* Small Label */}
      {subtitle && (
        <span className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {subtitle}
        </span>
      )}

      {/* Main Title */}
      <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {/* Accent Line */}
      <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />

      {/* Description */}
      {description && (
        <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;