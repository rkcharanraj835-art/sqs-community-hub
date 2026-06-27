import { motion } from "framer-motion";
import {
  FaDiscord,
  FaWhatsapp,
  FaYoutube,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import { socials } from "../../data/socials";

const communityCards = [
  {
    title: "Discord Server",
    description:
      "Join our official Discord server for announcements, tournaments, voice chats, and community discussions.",
    icon: <FaDiscord />,
    color: "from-[#5865F2] to-[#7289DA]",
    link: socials.discord,
    button: "Join Discord",
  },
  {
    title: "WhatsApp Group",
    description:
      "Stay connected with the SQS family, receive quick updates, and chat with members anytime.",
    icon: <FaWhatsapp />,
    color: "from-[#25D366] to-[#1EBE5D]",
    link: socials.whatsapp,
    button: "Join WhatsApp",
  },
  {
    title: "YouTube Channel",
    description:
      "Watch tournament highlights, gameplay videos, tutorials, and exciting SQS community content.",
    icon: <FaYoutube />,
    color: "from-red-500 to-red-700",
    link: socials.youtube,
    button: "Visit Channel",
  },
];

const rules = [
  {
    icon: <FaUsers />,
    title: "Respect Everyone",
    description:
      "Treat every community member with kindness and respect.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Fair Play",
    description:
      "No cheating, exploiting, or toxic behavior during events.",
  },
  {
    icon: <FaHandshake />,
    title: "Support Your Squad",
    description:
      "Help teammates improve and contribute positively to the community.",
  },
];

function Community() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="Join Our Community"
          title="Become a Part of SQS"
          description="Connect with players, participate in tournaments, earn rewards, and grow together with one of the most active Mech Arena communities."
        />

        {/* Social Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {communityCards.map((card, index) => (

            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${card.color} text-4xl text-white`}
              >
                {card.icon}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {card.description}
              </p>

              <button
                onClick={() => window.open(card.link, "_blank")}
                className="mt-8 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                {card.button}
              </button>
            </motion.div>

          ))}

        </div>

        {/* Community Rules */}

        <div className="mt-24">

          <SectionHeader
            subtitle="Community Rules"
            title="Play Fair. Stay Respectful."
            description="These values help keep Square Squad welcoming, competitive, and enjoyable for everyone."
          />

          <div className="grid gap-8 md:grid-cols-3">

            {rules.map((rule, index) => (

              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 text-4xl text-cyan-400">
                  {rule.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {rule.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {rule.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </main>
  );
}

export default Community;