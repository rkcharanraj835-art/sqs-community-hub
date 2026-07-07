import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function Dashboard() {
  const [stats, setStats] = useState({
    members: 0,
    clans: 0,
    events: 0,
    news: 0,
    rewards: 0,
    gallery: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const [
      members,
      clans,
      events,
      news,
      rewards,
      gallery,
    ] = await Promise.all([
      getDocs(collection(db, "members")),
      getDocs(collection(db, "clans")),
      getDocs(collection(db, "events")),
      getDocs(collection(db, "news")),
      getDocs(collection(db, "rewards")),
      getDocs(collection(db, "gallery")),
    ]);

    setStats({
      members: members.size,
      clans: clans.size,
      events: events.size,
      news: news.size,
      rewards: rewards.size,
      gallery: gallery.size,
    });
  };

  const cards = [
    {
      title: "Members",
      value: stats.members,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Clans",
      value: stats.clans,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Events",
      value: stats.events,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Gallery",
      value: stats.gallery,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "News",
      value: stats.news,
      color: "from-red-500 to-rose-500",
    },
    {
      title: "Rewards",
      value: stats.rewards,
      color: "from-violet-500 to-indigo-500",
    },
  ];

  return (
    <div className="p-10">

      <h1 className="mb-10 text-4xl font-bold text-white">
        Dashboard
      </h1>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => (

          <div
            key={card.title}
            className={`rounded-3xl bg-gradient-to-br ${card.color} p-[1px]`}
          >
            <div className="rounded-3xl bg-[#070B14] p-8">

              <h2 className="text-lg text-slate-400">
                {card.title}
              </h2>

              <p className="mt-4 text-5xl font-bold text-white">
                {card.value}
              </p>

            </div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;