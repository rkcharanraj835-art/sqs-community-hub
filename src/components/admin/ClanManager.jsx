import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

function ClanManager() {
  const [clans, setClans] = useState([]);

  const [editing, setEditing] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
  id: "",
  power: "",
  role: "",
});

const [showAdd, setShowAdd] = useState(null);

const [newMember, setNewMember] = useState({
  name: "",
  id: "",
  power: "",
  role: "Member",
});

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

    const saveMember = async (clanId, memberId) => {
  try {
    const clan = clans.find((c) => c.id === clanId);

    const updatedMembers = clan.members
  .map((member) =>
    member.id === memberId
      ? {
          ...formData,
          power: Number(formData.power),
        }
      : member
  )
  .sort((a, b) => b.power - a.power);
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

    alert("Member updated successfully!");
  } catch (err) {
    console.error(err);
  }
};

const deleteMember = async (clanId, memberId) => {
  if (!window.confirm("Delete this member?")) return;

  try {
    const clan = clans.find((c) => c.id === clanId);

    const updatedMembers = clan.members.filter(
      (member) => member.id !== memberId
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

    alert("Member deleted!");
  } catch (err) {
    console.error(err);
  }
};

const createMember = async (clanId) => {
  try {
    const clan = clans.find((c) => c.id === clanId);

    const updatedMembers = [
  ...clan.members,
  {
    ...newMember,
    power: Number(newMember.power),
  },
].sort((a, b) => b.power - a.power);
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

    setShowAdd(null);

    setNewMember({
      name: "",
      id: "",
      power: "",
      role: "Member",
    });

    alert("Member created successfully!");
  } catch (err) {
    console.error(err);
  }
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

        <button
          onClick={() => {
            setShowAdd(clan.id);

            setNewMember({
              name: "",
              id: "",
              power: "",
              role: "Member",
            });
          }}
          className="mb-6 rounded-xl bg-green-500 px-5 py-3 font-bold text-black"
        >
            + Add Member
        </button>

        {showAdd === clan.id && (
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl bg-white/5 p-6">

          <input
            placeholder="Player Name"
            value={newMember.name}
            onChange={(e)=>
              setNewMember({...newMember,name:e.target.value})
            }
            className="rounded-lg bg-slate-800 p-3 text-white"
          />

          <input
            placeholder="Player ID"
            value={newMember.id}
            onChange={(e)=>
              setNewMember({...newMember,id:e.target.value})
            }
            className="rounded-lg bg-slate-800 p-3 text-white"
          />

          <input
            placeholder="Power"
            value={newMember.power}
            onChange={(e)=>
              setNewMember({...newMember,power:e.target.value})
            }
            className="rounded-lg bg-slate-800 p-3 text-white"
          />

          <select
            value={newMember.role}
            onChange={(e)=>
              setNewMember({...newMember,role:e.target.value})
            }
            className="rounded-lg bg-slate-800 p-3 text-white"
          >
            <option>Leader</option>
            <option>Member</option>
          </select>

          <button
            onClick={() => createMember(clan.id)}
            className="rounded-lg bg-green-500 p-3 font-bold text-black"
          >
            Create Member
          </button>

        </div>
      )}

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
                  <td className="py-3">
                  {editing === member.id ? (
                    <input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-lg bg-slate-800 p-2 text-white"
                    />
                  ) : (
                    <span className="text-white">{member.name}</span>
                  )}
                </td>
                  <td className="py-3">
                    {editing === member.id ? (
                      <input
                        type="number"
                        value={formData.power}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            power: e.target.value,
                          })
                        }
                        className="w-full rounded-lg bg-slate-800 p-2 text-cyan-400"
                      />
                    ) : (
                      <span className="text-cyan-400">
                        {member.power}
                      </span>
                    )}
                  </td>

                  <td className="py-3">
                  {editing === member.id ? (
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          role: e.target.value,
                        })
                      }
                      className="rounded-lg bg-slate-800 p-2 text-white"
                    >
                      <option>Leader</option>
                      <option>Member</option>
                    </select>
                  ) : (
                    <span className="text-white">{member.role}</span>
                  )}
                </td>

                  <td className="py-3">
                  {editing === member.id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => saveMember(clan.id, member.id)}
                        className="rounded-lg bg-green-500 px-4 py-2 font-bold text-black"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => setEditing(null)}
                        className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditing(member.id);

                        setFormData({
                          name: member.name,
                          id: member.id,
                          power: member.power,
                          role: member.role,
                        });
                      }}
                      className="rounded-lg bg-cyan-500 px-4 py-2 font-bold text-black"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteMember(clan.id, member.id)}
                      className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white"
                    >
                      Delete
                    </button>
                  </div>
                                    )}
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