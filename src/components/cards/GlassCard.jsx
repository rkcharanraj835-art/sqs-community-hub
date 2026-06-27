import { motion } from "framer-motion";
import clsx from "clsx";

function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "md",
  blur = true,
}) {
  const paddingSize = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        blur && "backdrop-blur-xl",
        "shadow-lg",
        "transition-all duration-300",
        hover &&
          "hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]",
        paddingSize[padding],
        className
      )}
    >
      {/* Glow Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;