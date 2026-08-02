import {
  FaRobot,
  FaCrosshairs,
  FaUsers,
  FaGlobe,
  FaCalendarAlt,
  FaCircle,
} from "react-icons/fa";

const items = [
  {
    icon: <FaRobot />,
    label: "Favorite Mech",
    value: "Outlaw",
    color: "text-cyan-400",
  },
  {
    icon: <FaCrosshairs />,
    label: "Favorite Weapon",
    value: "Railgun 16",
    color: "text-red-400",
  },
  {
    icon: <FaUsers />,
    label: "Clan",
    value: "Square Squad",
    color: "text-purple-400",
  },
  {
    icon: <FaGlobe />,
    label: "Country",
    value: "India",
    color: "text-green-400",
  },
  {
    icon: <FaCalendarAlt />,
    label: "Joined",
    value: "July 2026",
    color: "text-yellow-400",
  },
  {
    icon: <FaCircle />,
    label: "Status",
    value: "Online",
    color: "text-emerald-400",
  },
];

function ProfileOverview() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-4 rounded-2xl border border-cyan-500/10 bg-black/20 p-5"
        >
          <div className={`text-2xl ${item.color}`}>
            {item.icon}
          </div>

          <div>
            <p className="text-sm text-slate-400">
              {item.label}
            </p>

            <h3 className="text-lg font-semibold text-white">
              {item.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileOverview;