import { motion, AnimatePresence } from "framer-motion";
import eventRules from "../../data/eventRules";

function EventRulesModal({ open, onClose, registerUrl }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-orange-500/20 bg-[#070B14] p-8"
        >
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">
              {eventRules.title}
            </h2>

            <button
              onClick={onClose}
              className="text-3xl text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* General Rules */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              General Rules
            </h3>

            <ol className="list-decimal space-y-2 pl-6 text-slate-300">
              {eventRules.general.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ol>
          </div>

          {/* Controller */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-cyan-400">
              🎮 Controller
            </h3>

            <ul className="list-disc space-y-2 pl-6 text-slate-300">
              {eventRules.controller.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Attacker */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-red-400">
              ⚔️ Attacker
            </h3>

            <ul className="list-disc space-y-2 pl-6 text-slate-300">
              {eventRules.attacker.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Cannon */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-yellow-400">
              🎯 Cannon
            </h3>

            <ul className="list-disc space-y-2 pl-6 text-slate-300">
              {eventRules.cannon.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Important */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Important
            </h3>

            <ul className="list-disc space-y-2 pl-6 text-slate-300">
              {eventRules.important.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="rounded-xl border border-slate-600 px-6 py-3 text-white"
            >
              Close
            </button>

            <button
              onClick={() => window.open(registerUrl, "_blank")}
              className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
            >
              I Agree & Register
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default EventRulesModal;