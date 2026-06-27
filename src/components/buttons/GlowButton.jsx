import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-cyan-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]",

  secondary:
    "bg-orange-500 text-white shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)]",

  outline:
    "border border-cyan-500 text-cyan-400 bg-transparent hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_35px_rgba(6,182,212,0.8)]",

  ghost:
    "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function GlowButton({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
}) {
  // Safe fallbacks (prevents crash if wrong prop is passed)
  const safeVariant = variants[variant] || variants.primary;
  const safeSize = sizes[size] || sizes.md;

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.96 }}
      transition={{ duration: 0.2 }}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold",
        "transition-all duration-300 uppercase tracking-wide",
        "cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-cyan-400",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        safeSize,
        safeVariant,
        fullWidth && "w-full"
      )}
    >
      {icon && <span className="flex items-center text-lg">{icon}</span>}
      {children}
    </motion.button>
  );
}

export default GlowButton;