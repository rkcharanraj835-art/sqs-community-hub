function MemberCard({
  member,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 transition hover:border-cyan-400">

      <img
        src={member.image}
        alt={member.ign}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {member.ign}
        </h2>

        <p className="mt-1 text-cyan-400">
          {member.name}
        </p>

        <span className="mt-4 inline-block rounded-full bg-cyan-500 px-3 py-1 text-sm font-bold text-black">
          {member.role}
        </span>

        <div className="mt-5 rounded-xl bg-slate-800 p-4">

          <p className="text-sm text-slate-400">
            Favorite Mech
          </p>

          <p className="mt-1 font-bold text-white">
            {member.favoriteMech}
          </p>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={onEdit}
            className="flex-1 rounded-xl bg-cyan-500 py-3 font-bold text-black"
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-xl bg-red-500 py-3 font-bold text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default MemberCard;