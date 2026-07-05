import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function ClanManager() {
  const [clans, setClans] = useState([]);

  useEffect(() => {
    loadClans();
  }, []);

  const loadClans = async () => {
    const snapshot = await getDocs(collection(db, "clans"));

    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    setClans(data);
  };

  return (
    <div className="p-10">
      <h1 className="mb-10 text-4xl font-bold text-white">
        Clan Manager
      </h1>

      {clans.map((clan) => (
        <div
          key={clan.id}
          className="mb-10 rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
        >
          <h2 className="mb-5 text-2xl font-bold text-cyan-400">
            {clan.name}
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="py-3 text-cyan-400">Name</th>
                <th className="py-3 text-cyan-400">Power</th>
                <th className="py-3 text-cyan-400">Role</th>
                <th className="py-3 text-cyan-400">Action</th>
              </tr>
            </thead>

            <tbody>
              {clan.members.map((member) => (
                <tr
                  key={member.id}
                  className="border-b border-white/10"
                >
                  <td className="py-3 text-white">
                    {member.name}
                  </td>

                  <td className="py-3 text-cyan-400">
                    {member.power}
                  </td>

                  <td className="py-3 text-white">
                    {member.role}
                  </td>

                  <td>
                    <button className="rounded-lg bg-cyan-500 px-4 py-2 font-bold text-black">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      ))}
    </div>
  );
}

export default ClanManager;