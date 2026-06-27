import { motion } from "framer-motion";
import {
  FaDiscord,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import { socials } from "../../data/socials";

const contacts = [
  {
    title: "Discord",
    description: "Join the official SQS Discord server.",
    icon: <FaDiscord />,
    color: "from-[#5865F2] to-[#7289DA]",
    action: "Join Server",
    link: socials.discord,
  },
  {
    title: "WhatsApp",
    description: "Stay connected with the SQS community.",
    icon: <FaWhatsapp />,
    color: "from-[#25D366] to-[#1EBE5D]",
    action: "Join Group",
    link: socials.whatsapp,
  },
  {
    title: "YouTube",
    description: "Watch SQS gameplay and tournaments.",
    icon: <FaYoutube />,
    color: "from-red-500 to-red-700",
    action: "Visit Channel",
    link: socials.youtube,
  },
  {
    title: "Email",
    description: "Contact the SQS leadership team.",
    icon: <FaEnvelope />,
    color: "from-cyan-500 to-blue-600",
    action: "Send Email",
    link: "mailto:square.squad.community@gmail.com",
  },
];

function Contact() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="Contact SQS"
          title="Let's Connect"
          description="Whether you want to join our clan, ask a question, collaborate, or simply say hello, we'd love to hear from you."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {contacts.map((contact, index) => (

            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${contact.color} text-4xl text-white`}
              >
                {contact.icon}
              </div>

              <h3 className="mt-8 font-orbitron text-3xl font-bold text-white">
                {contact.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {contact.description}
              </p>

              <button
                onClick={() => window.open(contact.link, "_blank")}
                className="mt-8 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                {contact.action}
              </button>
            </motion.div>

          ))}

        </div>

      </div>
    </main>
  );
}

export default Contact;