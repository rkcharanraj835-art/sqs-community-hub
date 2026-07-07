import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";;
import { db } from "../../firebase/firebase";

function Dashboard() {
  const [clans, setClans] = useState([]);
  const [editing, setEditing] = useState(null);
  const [newPower, setNewPower] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "clans"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setClans(data);
    };

    fetchData();
  }, []);

  const savePower = async (clanId, memberId) => {
  try {
    const clan = clans.find((c) => c.id === clanId);

    const updatedMembers = clan.members.map((member) =>
      member.id === memberId
        ? {
            ...member,
            power: Number(newPower),
          }
        : member
    );

    await updateDoc(doc(db, "clans", clanId), {
      members: updatedMembers,
    });

    setClans(
      clans.map((c) =>
        c.id === clanId
          ? {
              ...c,
              members: updatedMembers,
            }
          : c
      )
    );

    setEditing(null);

    toast.success("Power updated successfully!");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <section className="min-h-screen bg-[#070B14] p-10">
      <h1 className="mb-10 text-5xl font-bold text-white">
        SQS Dashboard
      </h1>

      {clans.map((clan) => (
        <div
          key={clan.id}
          className="mb-8 rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
        >
          <h2 className="mb-5 text-3xl font-bold text-cyan-400">
            {clan.name}
          </h2>

          {clan.members.map((member) => (
            <div
              key={member.id}
              className="mb-2 flex items-center justify-between rounded-lg bg-white/5 p-3"
            >
              <div>
                <h3 className="text-white">
                  {member.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {member.role}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="font-bold text-cyan-400">
                    {member.power.toLocaleString()}
                </div>

                <button
                onClick={() => {
                    setEditing(member.id);
                    setNewPower(member.power);
                }}
                className="rounded-lg bg-cyan-500 px-3 py-1 text-sm font-bold text-black"
                >
                Edit
                </button>

                {editing === member.id && (
                <div className="mt-3 flex gap-3">
                    <input
                    type="number"
                    value={newPower}
                    onChange={(e) => setNewPower(e.target.value)}
                    className="rounded-lg bg-slate-800 p-2 text-white"
                    />

                    <button
                    onClick={() => savePower(clan.id, member.id)}
                    className="rounded-lg bg-green-500 px-4 py-2 font-bold"
                    >
                    Save
                    </button>
                </div>
                )}

                </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Dashboard;