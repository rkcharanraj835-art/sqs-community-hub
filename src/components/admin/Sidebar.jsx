function Sidebar({ page, setPage }) {
  const menus = [
    { id: "dashboard", title: "📊 Dashboard" },
    { id: "clans", title: "👥 Clan Manager" },
    { id: "events", title: "📅 Events" },
    { id: "gallery", title: "🖼 Gallery" },
    { id: "settings", title: "⚙ Settings" },
  ];

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
    </aside>
  );
}

export default Sidebar;