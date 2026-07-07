import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

function EventManager() {
  const [events, setEvents] = useState([]);

  const [editing, setEditing] = useState(null);

  const [showAdd, setShowAdd] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    prize: "",
    mode: "",
    status: "",
    featured: false,
  });

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    prize: "",
    mode: "",
    status: "Coming Soon",
    featured: false,
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const snapshot = await getDocs(collection(db, "events"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setEvents(data);
  };

  const saveEvent = async (eventId) => {
    try {
      await updateDoc(doc(db, "events", eventId), formData);

      setEvents(
        events.map((event) =>
          event.id === eventId
            ? {
                ...event,
                ...formData,
              }
            : event
        )
      );

      setEditing(null);

      toast.success("Event updated!");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEvent = async (eventId) => {
    if (!window.confirm("Delete this event?")) return;

    try {
      await deleteDoc(doc(db, "events", eventId));

      setEvents(events.filter((event) => event.id !== eventId));

      toast.success("Event deleted!");
    } catch (err) {
      console.error(err);
    }
  };

  const addEvent = async () => {
    try {
      const docRef = await addDoc(collection(db, "events"), newEvent);

      setEvents([
        ...events,
        {
          id: docRef.id,
          ...newEvent,
        },
      ]);

      setShowAdd(false);

      setNewEvent({
        title: "",
        description: "",
        date: "",
        time: "",
        prize: "",
        mode: "",
        status: "Coming Soon",
        featured: false,
      });

      toast.success("Event created!");
    } catch (err) {
      console.error(err);
    }
  };

    return (
    <div className="p-10">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          Event Manager
        </h1>

        <button
          onClick={() => setShowAdd(!showAdd)}
          className="rounded-xl bg-green-500 px-5 py-3 font-bold text-black"
        >
          {showAdd ? "Close" : "+ Add Event"}
        </button>
      </div>

      {showAdd && (
        <div className="mb-10 rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

          <div className="grid gap-4 md:grid-cols-2">

            <input
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="rounded-lg bg-slate-800 p-3 text-white"
            />

            <input
              placeholder="Date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="rounded-lg bg-slate-800 p-3 text-white"
            />

            <input
              placeholder="Time"
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
              className="rounded-lg bg-slate-800 p-3 text-white"
            />

            <input
              placeholder="Prize"
              value={newEvent.prize}
              onChange={(e) =>
                setNewEvent({ ...newEvent, prize: e.target.value })
              }
              className="rounded-lg bg-slate-800 p-3 text-white"
            />

            <input
              placeholder="Mode"
              value={newEvent.mode}
              onChange={(e) =>
                setNewEvent({ ...newEvent, mode: e.target.value })
              }
              className="rounded-lg bg-slate-800 p-3 text-white"
            />

            <select
              value={newEvent.status}
              onChange={(e) =>
                setNewEvent({ ...newEvent, status: e.target.value })
              }
              className="rounded-lg bg-slate-800 p-3 text-white"
            >
              <option>Coming Soon</option>
              <option>Registration Open</option>
              <option>Live</option>
              <option>Completed</option>
            </select>

            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  description: e.target.value,
                })
              }
              className="col-span-2 rounded-lg bg-slate-800 p-3 text-white"
              rows={4}
            />

          </div>

          <button
            onClick={addEvent}
            className="mt-6 rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
          >
            Create Event
          </button>

        </div>
      )}

      <div className="space-y-6">

        {events.map((event) => (

          <div
            key={event.id}
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
          >

            {editing === event.id ? (
              <input
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-2xl font-bold text-white"
              />
            ) : (
              <h2 className="text-2xl font-bold text-cyan-400">
                {event.title}
              </h2>
            )}

            <p className="mt-3 text-slate-400">
              {event.description}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 text-white">

              <p>📅 {event.date}</p>
              <p>🕒 {event.time}</p>
              <p>🎁 {event.prize}</p>
              <p>👥 {event.mode}</p>
              <p>Status: {event.status}</p>

            </div>

            <div className="mt-6 flex gap-3">

              {editing === event.id ? (
                <>
                  <button
                    onClick={() => saveEvent(event.id)}
                    className="rounded-lg bg-green-500 px-5 py-2 font-bold text-black"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditing(null)}
                    className="rounded-lg bg-red-500 px-5 py-2 font-bold text-white"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditing(event.id);
                      setFormData(event);
                    }}
                    className="rounded-lg bg-cyan-500 px-5 py-2 font-bold text-black"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="rounded-lg bg-red-500 px-5 py-2 font-bold text-white"
                  >
                    Delete
                  </button>
                </>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default EventManager;