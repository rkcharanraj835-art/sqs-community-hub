import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaGift,
  FaUsers,
  FaHourglassEnd,
} from "react-icons/fa";

import SectionHeader from "../../components/common/SectionHeader";
import events from "../../data/events";
import { socials } from "../../data/socials";

function Events() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          subtitle="SQS Tournaments"
          title="Upcoming Events"
          description="Compete with the best Mech Arena players, participate in exciting tournaments, and earn exclusive rewards."
        />

        <div className="space-y-10">

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">

                <div className="max-w-3xl">

                  <span className="rounded-full bg-orange-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-300">
                    {event.status}
                  </span>

                  <h2 className="mt-5 text-3xl font-bold text-white">
                    {event.title}
                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">
                    {event.description}
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaCalendarAlt className="text-cyan-400" />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaClock className="text-cyan-400" />
                      {event.time}
                    </div>

                    

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaGift className="text-cyan-400" />
                      {event.prize}
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaUsers className="text-cyan-400" />
                      {event.mode}
                    </div>

                  </div>

                </div>

               

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </main>
  );
}

export default Events;