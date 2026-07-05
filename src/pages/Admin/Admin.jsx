import { useState } from "react";

import Sidebar from "../../components/admin/Sidebar";
import Dashboard from "../../components/admin/Dashboard";
import ClanManager from "../../components/admin/ClanManager";
import EventManager from "../../components/admin/EventManager";
import GalleryManager from "../../components/admin/GalleryManager";
import Settings from "../../components/admin/Settings";

function Admin() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-[#070B14]">
      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 overflow-y-auto">
        {page === "dashboard" && <Dashboard />}

        {page === "clans" && <ClanManager />}

        {page === "events" && <EventManager />}

        {page === "gallery" && <GalleryManager />}

        {page === "settings" && <Settings />}
      </main>
    </div>
  );
}

export default Admin;