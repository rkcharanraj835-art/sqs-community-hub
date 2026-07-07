function CrudCard({
  item,
  fields,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 transition hover:border-cyan-400">

      {fields.map((field) => (
        <div key={field.name} className="mb-4">

          <p className="text-sm uppercase tracking-wide text-slate-400">
            {field.label}
          </p>

          {field.type === "image" ? (
            <img
              src={item[field.name]}
              alt={field.label}
              className="mt-2 h-40 w-full rounded-xl object-cover"
            />
          ) : (
            <p className="mt-1 break-words text-white">
              {item[field.name]}
            </p>
          )}

        </div>
      ))}

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
  );
}

export default CrudCard;