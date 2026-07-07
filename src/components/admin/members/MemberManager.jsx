import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../../firebase/firebase";

import MemberCard from "./MemberCard";
import MemberForm from "./MemberForm";

function MemberManager() {
  const emptyMember = {
    ign: "",
    name: "",
    role: "Member",
    favoriteMech: "",
    image: "",
  };

  const [members, setMembers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const [editing, setEditing] = useState(null);

  const [newMember, setNewMember] = useState(emptyMember);

  const [formData, setFormData] = useState(emptyMember);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    const snapshot = await getDocs(collection(db, "members"));

    const data = snapshot.docs.map((doc) => ({
      firestoreId: doc.id,
      ...doc.data(),
    }));

    setMembers(data);
  };

  const addMember = async () => {
    const docRef = await addDoc(
      collection(db, "members"),
      newMember
    );

    setMembers([
      ...members,
      {
        firestoreId: docRef.id,
        ...newMember,
      },
    ]);

    setNewMember(emptyMember);

    setShowAdd(false);
  };

  const saveMember = async (firestoreId) => {
    await updateDoc(
      doc(db, "members", firestoreId),
      formData
    );

    setMembers(
      members.map((member) =>
        member.firestoreId === firestoreId
          ? {
              ...member,
              ...formData,
            }
          : member
      )
    );

    setEditing(null);
  };

  const deleteMember = async (firestoreId) => {
    if (!window.confirm("Delete this member?")) return;

    await deleteDoc(doc(db, "members", firestoreId));

    setMembers(
      members.filter(
        (member) =>
          member.firestoreId !== firestoreId
      )
    );
  };

  return (
    <div className="p-10">

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-white">
          Member Manager
        </h1>

        <button
          onClick={() => setShowAdd(true)}
          className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          + Add Member
        </button>

      </div>

      {showAdd && (
        <MemberForm
          member={newMember}
          setMember={setNewMember}
          onSubmit={addMember}
          onCancel={() => setShowAdd(false)}
          submitText="Create Member"
        />
      )}

      {editing && (
        <MemberForm
          member={formData}
          setMember={setFormData}
          onSubmit={() =>
            saveMember(editing)
          }
          onCancel={() =>
            setEditing(null)
          }
          submitText="Save Changes"
        />
      )}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {members.map((member) => (
          <MemberCard
            key={member.firestoreId}
            member={member}
            onEdit={() => {
              setEditing(member.firestoreId);

              setFormData(member);
            }}
            onDelete={() =>
              deleteMember(member.firestoreId)
            }
          />
        ))}

      </div>

    </div>
  );
}

export default MemberManager;