import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("stats-section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      onClick={scrollToNext}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 text-slate-400 transition hover:text-cyan-400"
    >
      <span className="text-xs uppercase tracking-[0.35em]">
        Scroll
      </span>

      <div className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-cyan-400/50 p-2">
        <motion.div
          animate={{
            y: [0, 16, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="h-2.5 w-2.5 rounded-full bg-cyan-400"
        />
      </div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </motion.button>
  );
}

export default ScrollIndicator;