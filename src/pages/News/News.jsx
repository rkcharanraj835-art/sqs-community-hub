import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

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
  const [search, setSearch] = useState("");

  const filteredMechs = skins.filter((mech) => {
  const query = search.toLowerCase();

  

  return (
    mech.mech.toLowerCase().includes(query) ||
    mech.skins.some((skin) =>
      skin.toLowerCase().includes(query)
    )
    );
  });

  return (
    <section className="min-h-screen bg-[#070B14] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-4 text-center font-orbitron text-5xl font-bold text-white">
          Legendary Skins
        </h1>

        <p className="mb-14 text-center text-slate-400">
          Browse every legendary skin available in Mech Arena.
        </p>

        <div className="mx-auto mb-12 max-w-xl">
  <div className="relative">
    <Search
      size={22}
      className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
    />

    <input
      type="text"
      placeholder="Search by mech or skin..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-2xl border border-cyan-500/30 bg-white/5 py-4 pl-14 pr-5 text-white placeholder-slate-500 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
    />
  </div>
</div>

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
  <>
    {filteredMechs.length > 0 ? (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMechs.map((mech) => (
          <motion.div
            key={mech.mech}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedMech(mech);
              setSearch("");
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
    ) : (
      <div className="rounded-3xl border border-red-500/20 bg-white/5 py-20 text-center backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-white">
          No Mechs Found
        </h2>

        <p className="mt-4 text-slate-400">
          We couldn't find any mech or skin matching
          <span className="font-semibold text-cyan-400">
            {" "} "{search}"
          </span>.
        </p>

        <button
          onClick={() => setSearch("")}
          className="mt-8 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
        >
          Clear Search
        </button>
      </div>
    )}
  </>
)}
        {/* ==========================
            SKINS GRID
        ========================== */}

        {selectedMech && (
          <>
            <button
              onClick={() => {
              setSelectedMech(null);
              setSearch("");
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
              {selectedMech.skins
                .filter((skin) =>
                  search === ""
                    ? true
                    : skin.toLowerCase().includes(search.toLowerCase())
                )
                .map((skin) => (
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