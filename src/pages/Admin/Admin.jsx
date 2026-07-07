import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";

import Sidebar from "../../components/admin/Sidebar";
import Dashboard from "../../components/admin/Dashboard";
import ClanManager from "../../components/admin/ClanManager";
import EventManager from "../../components/admin/EventManager";
import GalleryManager from "../../components/admin/GalleryManager";
import Settings from "../../components/admin/Settings";
import MemberManager from "../../components/admin/members/MemberManager";

function Admin() {
  const [page, setPage] = useState("dashboard");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/admin");
      return;
    }

    const allowedEmails = [
      "rkcharanraj835@gmail.com",
      "gnanavelv123@gmail.com",
    ];

    if (!allowedEmails.includes(user.email)) {
      signOut(auth);
      navigate("/admin");
      return;
    }

    setLoading(false);
  });

  return () => unsubscribe();
}, [navigate]);

  if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070B14] text-white text-2xl">
      Checking access...
    </div>
  );
}

  return (
    <div className="flex min-h-screen bg-[#070B14]">
      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 overflow-y-auto">
        {page === "dashboard" && <Dashboard />}

        {page === "clans" && <ClanManager />}

        {page === "events" && <EventManager />}

        {page === "gallery" && <GalleryManager />}

        {page === "settings" && <Settings />}

        {page === "members" && <MemberManager />}
      </main>
    </div>
  );
}

export default Admin;