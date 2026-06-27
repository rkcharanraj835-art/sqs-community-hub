import SectionHeader from "../../components/common/SectionHeader";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBullseye,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt />,
    title: "Who We Are",
    description:
      "Square Squad (SQS) is a passionate Mech Arena community built for players who value teamwork, strategy, and competitive gameplay. We welcome both casual and competitive pilots.",
  },
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    description:
      "To build one of the strongest Mech Arena communities by organizing tournaments, rewarding active members, and creating an environment where every player can improve.",
  },
  {
    icon: <FaRocket />,
    title: "Our Vision",
    description:
      "To become one of the most recognized Mech Arena communities by connecting players through exciting events, competitive gameplay, and lasting friendships.",
  },
  {
    icon: <FaUsers />,
    title: "Our Community",
    description:
      "Our members participate in weekly events, custom matches, giveaways, and community discussions while helping each other grow as better Mech Arena players.",
  },
];

function About() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          subtitle="About SQS"
          title="The Official Square Squad Community"
          description="More than just a clan. Square Squad is a growing Mech Arena community where teamwork, competition, and friendship come together."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                {card.icon}
              </div>

              <h3 className="mb-4 font-orbitron text-2xl font-bold text-white">
                {card.title}
              </h3>

              <p className="leading-8 text-slate-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 p-12 text-center"
        >
          <h2 className="font-orbitron text-4xl font-black text-white">
            Together We Fight.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Every battle strengthens our squad. Every victory belongs to the
            community. Join Square Squad and become part of something bigger.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

export default About;