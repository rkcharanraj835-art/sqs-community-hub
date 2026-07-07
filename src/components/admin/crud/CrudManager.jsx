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

import CrudForm from "./CrudForm";
import CrudCard from "./CrudCard";

function CrudManager({
  title,
  collectionName,
  fields,
}) {
  const emptyData = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [items, setItems] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const [editing, setEditing] = useState(null);

  const [formData, setFormData] = useState(emptyData);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const snapshot = await getDocs(
      collection(db, collectionName)
    );

    const data = snapshot.docs.map((doc) => ({
      firestoreId: doc.id,
      ...doc.data(),
    }));

    setItems(data);
  };

  const addItem = async () => {
    const docRef = await addDoc(
      collection(db, collectionName),
      formData
    );

    setItems([
      ...items,
      {
        firestoreId: docRef.id,
        ...formData,
      },
    ]);

    setFormData(emptyData);

    setShowAdd(false);
  };

  const saveItem = async () => {
    await updateDoc(
      doc(db, collectionName, editing),
      formData
    );

    setItems(
      items.map((item) =>
        item.firestoreId === editing
          ? {
              ...item,
              ...formData,
            }
          : item
      )
    );

    setEditing(null);

    setFormData(emptyData);
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete this item?")) return;

    await deleteDoc(doc(db, collectionName, id));

    setItems(
      items.filter(
        (item) => item.firestoreId !== id
      )
    );
  };

  return (
    <div className="p-10">

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>

        <button
          onClick={() => {
            setShowAdd(true);
            setEditing(null);
            setFormData(emptyData);
          }}
          className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          + Add
        </button>

      </div>

      {(showAdd || editing) && (
        <CrudForm
          formData={formData}
          setFormData={setFormData}
          fields={fields}
          onSubmit={
            editing ? saveItem : addItem
          }
          onCancel={() => {
            setShowAdd(false);
            setEditing(null);
          }}
          submitText={
            editing ? "Save Changes" : "Create"
          }
        />
      )}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => (
          <CrudCard
            key={item.firestoreId}
            item={item}
            fields={fields}
            onEdit={() => {
              setEditing(item.firestoreId);
              setFormData(item);
              setShowAdd(false);
            }}
            onDelete={() =>
              deleteItem(item.firestoreId)
            }
          />
        ))}

      </div>

    </div>
  );
}

export default CrudManager;