import { motion } from "framer-motion";

function ProfileHeader() {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl">

      {/* Banner */}

      <div className="relative h-72 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">

        <div className="absolute inset-0 bg-black/25" />

      </div>

      {/* Profile Content */}

      <div className="relative px-8 pb-8">

        {/* Avatar */}

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="-mt-20 h-40 w-40 overflow-hidden rounded-full border-4 border-[#05070D] bg-slate-800 shadow-2xl"
        >
          <img
            src="https://i.pravatar.cc/300"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* User Info */}

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <h1 className="text-5xl font-bold text-white">
              Charan
            </h1>

            <p className="mt-2 text-cyan-400">
              @charan
            </p>

            <p className="mt-5 max-w-2xl text-slate-300">
              Passionate Mech Arena player, developer, and founder of the
              Square Squad Community.
            </p>

          </div>

          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Edit Profile
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProfileHeader;