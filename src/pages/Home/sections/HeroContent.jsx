import { motion } from "framer-motion";
import { FaDiscord, FaWhatsapp, FaYoutube } from "react-icons/fa";

import GlowButton from "../../../components/buttons/GlowButton";
import { socials } from "../../../data/socials";

import surge from "../../../assets/images/mechs/surge.png";

function HeroContent() {
  return (
    <>
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            ⚡ Official SQS Community
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-orbitron text-5xl font-black uppercase leading-tight text-white md:text-7xl">
          DOMINATE
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-white to-orange-400 bg-clip-text text-transparent">
            THE BATTLEFIELD
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
          Welcome to <span className="font-bold text-cyan-400">Square Squad</span>,
          an elite Mech Arena community where teamwork, strategy and skill decide
          every battle. Join events, earn rewards, and fight beside the best pilots.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">


          <GlowButton
            variant="outline"
            icon={<FaDiscord />}
            onClick={() => window.open(socials.discord, "_blank")}
          >
            Discord
          </GlowButton>

          <GlowButton
            variant="secondary"
            icon={<FaWhatsapp />}
            onClick={() => window.open(socials.whatsapp, "_blank")}
          >
            WhatsApp
          </GlowButton>

          <GlowButton
            variant="ghost"
            icon={<FaYoutube />}
            onClick={() => window.open(socials.youtube, "_blank")}
          >
            YouTube
          </GlowButton>

        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1,
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative flex justify-center"
      >
        {/* Glow Behind Mech */}
        <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* Mech */}
        <img
          src={surge}
          alt="Surge"
          draggable="false"
          className="relative z-10 w-full max-w-xl drop-shadow-[0_0_70px_rgba(0,207,255,0.5)] select-none"
        />
      </motion.div>
    </>
  );
}

export default HeroContent;