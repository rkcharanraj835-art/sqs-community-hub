import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import GlowButton from "../buttons/GlowButton";
import { navigation } from "../../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#07090F]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 font-bold text-black shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              SQS
            </div>

            <div>
              <h1 className="font-orbitron text-xl font-bold tracking-wider text-white">
                SQUARE SQUAD
              </h1>

              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Mech Arena
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}

          
          <NavLink to="/community">
            <GlowButton>
              Join SQS
            </GlowButton>
          </NavLink>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-40 bg-[#07090F]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-28 pb-10">

          {/* Navigation */}

          <nav className="flex flex-col gap-5">

            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-bold transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Bottom */}

          <div className="mt-auto">

            <GlowButton fullWidth>
              Join Community
            </GlowButton>

            <p className="mt-6 text-center text-sm text-slate-500">
              © 2026 Square Squad
            </p>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;