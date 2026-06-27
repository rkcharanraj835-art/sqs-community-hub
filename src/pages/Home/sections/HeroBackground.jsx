import { motion } from "framer-motion";

import heroBg from "../../../assets/backgrounds/hero-bg.webp";
import stars from "../../../assets/backgrounds/stars.webp";
import gridPattern from "../../../assets/backgrounds/grid-pattern.svg";

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Stars */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${gridPattern})`,
          backgroundSize: "70px",
        }}
      />

      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/30 blur-[150px]"
      />

      {/* Orange Orb */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1.15, 1, 1.15],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-[-180px] h-[460px] w-[460px] rounded-full bg-orange-500/25 blur-[170px]"
      />

      {/* Floating Particle 1 */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/4 top-1/3 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_#00CFFF]"
      />

      {/* Floating Particle 2 */}
      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-1/4 top-1/2 h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_25px_#FF8A00]"
      />

      {/* Floating Particle 3 */}
      <motion.div
        animate={{
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-1/3 left-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22D3EE]"
      />

      {/* Top Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090F]/30 via-transparent to-[#07090F]" />

      {/* Side Fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090F] via-transparent to-[#07090F]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#07090F] to-transparent" />

    </div>
  );
}

export default HeroBackground;