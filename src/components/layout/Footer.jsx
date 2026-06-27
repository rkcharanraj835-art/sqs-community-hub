import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { navigation } from "../../data/navigation";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#07090F]">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-black shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                SQS
              </div>

              <div>
                <h2 className="font-orbitron text-xl font-bold text-white">
                  SQUARE SQUAD
                </h2>

                <p className="text-sm text-cyan-400">
                  Mech Arena Community
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              India's futuristic Mech Arena community.
              Join tournaments, earn rewards, meet skilled players,
              and become part of the SQS family.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Community
            </h3>

            <div className="space-y-4">

              <a
                href="https://discord.gg/arqHG7P9dM"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <FaDiscord size={18} />
                Discord
              </a>

              <a
                href="https://chat.whatsapp.com/IQoL9gozNpcDLklvGbyERi"
                className="flex items-center gap-3 text-slate-400 transition hover:text-green-400"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>

              <a
                href="https://youtube.com/@blacksquare-sqs?si=m6cdZ4Wvf9ns-ZTT"
                className="flex items-center gap-3 text-slate-400 transition hover:text-red-400"
              >
                <FaYoutube size={18} />
                YouTube
              </a>

              <a
                href="mailto:brainy1008@gmail.com"
                className="flex items-center gap-3 text-slate-400 transition hover:text-orange-400"
              >
                <FaEnvelope size={18} />
                Email
              </a>

            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Ready to Join?
            </h3>

            <p className="mb-6 text-slate-400">
              Join Square Squad today and compete with the best
              Mech Arena players.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {currentYear} Square Squad (SQS). All Rights Reserved.
          </p>

          <p>
            Built by SQS clan
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;