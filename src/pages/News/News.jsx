import { useState } from "react";
import { motion } from "framer-motion";

import skins from "../../data/skins";

// Automatically import ALL skin images
const images = import.meta.glob(
  "../../assets/images/skins/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Helper function to find an image
function getSkinImage(folder, skinName) {
  const path = Object.keys(images).find(
    (key) =>
      key.toLowerCase().includes(`/skins/${folder.toLowerCase()}/`) &&
      key.toLowerCase().endsWith(`${skinName.toLowerCase()}.png`)
  );

  return path ? images[path] : null;
}

const scrollPageTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function LegendarySkins() {
  const [selectedMech, setSelectedMech] = useState(null);

  return (
    <section className="min-h-screen bg-[#070B14] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-4 text-center font-orbitron text-5xl font-bold text-white">
          Legendary Skins
        </h1>

        <p className="mb-14 text-center text-slate-400">
          Browse every legendary skin available in Mech Arena.
        </p>

          {/* Missing Skin CTA */}

<div className="mb-12 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
  <h2 className="mb-3 text-2xl font-bold text-white">
    Missing a Skin?
  </h2>

  <p className="mb-6 text-slate-400">
    Help us expand the Legendary Skin Collection! If you own a skin that isn't
    listed here, submit it using the form below and we'll add it to the gallery.
  </p>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdqOZkANp21-mm7bCK5TaM5Lf_Gxjv-QMasZg9lPR8sKPwcZg/viewform?usp=publish-editor"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
  >
    📤 Submit a Skin
  </a>
</div>

        {/* ==========================
            MECH GRID
        ========================== */}

        {!selectedMech && (
          
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {skins.map((mech) => (
      <motion.div
        key={mech.mech}
        whileHover={{ y: -8, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setSelectedMech(mech);
          scrollPageTop();
          }}
        className="group cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,.25)]"
      >
        <img
          src={getSkinImage(mech.folder, mech.skins[0])}
          alt={mech.mech}
          className="h-72 w-full object-contain p-6 transition duration-300 group-hover:scale-110"
        />

        <div className="border-t border-white/10 p-5 text-center">
          <h2 className="text-2xl font-bold text-white">
            {mech.mech}
          </h2>

          <p className="mt-1 text-cyan-400">
            {mech.skins.length} Skins
          </p>
        </div>
      </motion.div>
    ))}
  </div>
)}

        {/* ==========================
            SKINS GRID
        ========================== */}

        {selectedMech && (
          <>
            <button
              onClick={() => {
              setSelectedMech(null);
              scrollPageTop();
              }}
              className="mb-10 rounded-xl border border-cyan-500 px-5 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              ← Back
            </button>

            <h2 className="mb-10 text-4xl font-bold text-white">
              {selectedMech.mech}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {selectedMech.skins.map((skin) => (
                <motion.div
                  key={skin}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <img
                    src={getSkinImage(selectedMech.folder, skin)}
                    alt={skin}
                    className="h-72 w-full object-contain p-5"
                  />

                  <div className="border-t border-white/10 p-5">
                    <h3 className="text-center text-lg font-semibold text-white">
                      {skin}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default LegendarySkins;