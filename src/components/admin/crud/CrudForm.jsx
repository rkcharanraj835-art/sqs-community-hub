function CrudForm({
  formData,
  setFormData,
  fields,
  onSubmit,
  onCancel,
  submitText,
}) {
  return (
    <div className="mb-8 rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

      <div className="grid gap-4 md:grid-cols-2">

        {fields.map((field) => (

          <div key={field.name}>

            <label className="mb-2 block text-sm text-slate-400">
              {field.label}
            </label>

            {field.type === "textarea" ? (

              <textarea
                rows={4}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field.name]: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none"
              />

            ) : (

              <input
                type={field.type || "text"}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field.name]: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none"
              />

            )}

          </div>

        ))}

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

export default CrudForm;