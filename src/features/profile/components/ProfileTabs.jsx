import { useState } from "react";
import ProfileOverview from "./ProfileOverview";
import ProfileAchievements from "./ProfileAchievements";

const tabs = [
  "Overview",
  "Posts",
  "Media",
  "Activity",
  "Achievements",
];

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="mt-10">

      {/* Tabs */}

      <div className="flex flex-wrap gap-3 rounded-2xl border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-xl px-5 py-3 font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-cyan-500 text-black"
                : "text-slate-300 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Content */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

        {activeTab === "Overview" && (
          <ProfileOverview />
        )}

        {activeTab === "Posts" && (
          <p className="text-slate-300">
            User posts will appear here.
          </p>
        )}

        {activeTab === "Media" && (
          <p className="text-slate-300">
            Uploaded images and videos will appear here.
          </p>
        )}

        {activeTab === "Activity" && (
          <p className="text-slate-300">
            Recent activity will appear here.
          </p>
        )}

        {activeTab === "Achievements" && (
          <ProfileAchievements />
        )}

      </div>

    </section>
  );
}

export default ProfileTabs;