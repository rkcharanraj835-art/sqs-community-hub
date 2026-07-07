function MemberForm({
  member,
  setMember,
  onSubmit,
  onCancel,
  submitText,
}) {
  return (
    <div className="mb-8 rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

      <div className="grid gap-4 md:grid-cols-2">

        <input
          placeholder="IGN"
          value={member.ign}
          onChange={(e) =>
            setMember({
              ...member,
              ign: e.target.value,
            })
          }
          className="rounded-lg bg-slate-800 p-3 text-white outline-none"
        />

        <input
          placeholder="Real Name"
          value={member.name}
          onChange={(e) =>
            setMember({
              ...member,
              name: e.target.value,
            })
          }
          className="rounded-lg bg-slate-800 p-3 text-white outline-none"
        />

        <input
          placeholder="Favorite Mech"
          value={member.favoriteMech}
          onChange={(e) =>
            setMember({
              ...member,
              favoriteMech: e.target.value,
            })
          }
          className="rounded-lg bg-slate-800 p-3 text-white outline-none"
        />

        <input
          placeholder="Image URL"
          value={member.image}
          onChange={(e) =>
            setMember({
              ...member,
              image: e.target.value,
            })
          }
          className="rounded-lg bg-slate-800 p-3 text-white outline-none"
        />

        <select
          value={member.role}
          onChange={(e) =>
            setMember({
              ...member,
              role: e.target.value,
            })
          }
          className="rounded-lg bg-slate-800 p-3 text-white"
        >
          <option>Leader</option>
          <option>SQS_Moderator</option>
          <option>Discord_Developer</option>
          <option>Web_Developer</option>
          <option>Elite</option>
          <option>Member</option>
        </select>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onSubmit}
          className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          {submitText}
        </button>

        <button
          onClick={onCancel}
          className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default MemberForm;