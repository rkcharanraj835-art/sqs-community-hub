import { motion } from "framer-motion";

function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[8px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-4 font-orbitron text-4xl font-black text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;