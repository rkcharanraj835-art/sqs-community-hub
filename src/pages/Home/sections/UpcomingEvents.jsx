import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaGift,
  FaUsers,
  FaHourglassEnd,
} from "react-icons/fa";

import events from "../../../data/events";
import { socials } from "../../../data/socials";

function UpcomingEvents() {
  // Show only featured events
  const featuredEvents = events.filter((event) => event.featured);

  return (
    <section className="relative overflow-hidden bg-[#070B14] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,119,0,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[8px] text-orange-400">
            Battle Schedule
          </p>

          <h2 className="mt-4 text-5xl font-black text-white md:text-6xl">
            Upcoming Events
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Participate in tournaments, community nights, and exciting squad
            battles hosted by SQS.
          </p>
        </motion.div>

        <div className="space-y-8">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_35px_rgba(255,119,0,0.25)]"
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div className="max-w-3xl">
                  <span className="rounded-full bg-orange-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-300">
                    {event.status}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-400">
                    {event.description}
                  </p>

                  {/* Registration Closing */}
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-orange-300">
                    <FaHourglassEnd className="text-orange-400" />
                    <span className="font-medium">
                      Registration closes:
                    </span>
                    <span>{event.registrationClose}</span>
                  </div>

                  {/* Event Details */}
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="flex items-center gap-3 text-slate-300">
                      <FaCalendarAlt className="text-orange-400" />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaClock className="text-orange-400" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaGift className="text-orange-400" />
                      {event.prize}
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaUsers className="text-orange-400" />
                      {event.mode}
                    </div>
                  </div>
                </div>

                {/* Register Button */}
                <div className="flex justify-center lg:justify-end">
                  <button
                    onClick={() => window.open(socials.eventForms, "_blank")}
                    className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,119,0,0.45)]"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;