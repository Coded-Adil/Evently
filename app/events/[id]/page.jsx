import React from "react";

async function getEvent(id) {
  const res = await fetch(`http://localhost:5000/api/events/${id}`);
  if (!res.ok) return null;
  return await res.json();
}

export default async function EventDetailsPage({ params }) {
  const event = await getEvent(params.id);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-xl px-4">
        <div className="text-center text-gray-400 text-2xl">Event not found.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-xl px-4">
      <div className="bg-gray-950/80 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-gray-800 flex flex-col gap-6 items-center">
        <img
          src={event.image || "/party.jpg"}
          alt={event.title}
          className="w-full h-64 object-cover rounded-xl mb-4 border border-gray-900"
        />
        <h2 className="text-4xl font-bold text-indigo-300 mb-2 text-center">{event.title}</h2>
        <p className="text-gray-300 mb-4 text-center text-lg">{event.description}</p>
        <div className="flex flex-col items-center text-md text-gray-400 mb-2">
          <span>Date: {new Date(event.date).toLocaleDateString()}</span>
          <span>Location: {event.location}</span>
          {/* <span>Created By: {event.createdBy || "Unknown"}</span> */}
          <span>Created At: {event.createdAt ? new Date(event.createdAt).toLocaleString() : "Unknown"}</span>
        </div>
      </div>
    </main>
  );
}
