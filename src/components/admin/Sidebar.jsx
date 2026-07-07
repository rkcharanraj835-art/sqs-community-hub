
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
function Sidebar({ page, setPage }) {
  const menus = [
  { id: "dashboard", title: "📊 Dashboard" },
  { id: "members", title: "👤 Members" },   // <-- ADD THIS
  { id: "clans", title: "👥 Clan Manager" },
  { id: "events", title: "📅 Events" },
  { id: "gallery", title: "🖼 Gallery" },
  { id: "settings", title: "⚙ Settings" },
];

const handleLogout = async () => {
  await signOut(auth);
};

  return (
    <aside className="w-72 border-r border-cyan-500/20 bg-[#0B1120] p-6">
      <h1 className="mb-10 text-3xl font-bold text-cyan-400">
        SQS Admin
      </h1>

      <div className="space-y-3">
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setPage(menu.id)}
            className={`w-full rounded-xl px-4 py-3 text-left font-semibold transition ${
              page === menu.id
                ? "bg-cyan-500 text-black"
                : "text-white hover:bg-white/10"
            }`}
          >
            {menu.title}
          </button>
        ))}
      </div>
      <button
  onClick={handleLogout}
  className="mt-10 w-full rounded-xl bg-red-500 px-4 py-3 font-bold text-white transition hover:bg-red-600"
>
  Logout
</button>
    </aside>
  );
}

export default Sidebar;