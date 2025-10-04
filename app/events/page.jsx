
import Link from "next/link";

function EventCard({ event }) {
  return (
    <Link href={`/events/${event._id}`} className="w-full">
      <div className="bg-gray-950/80 rounded-2xl shadow-lg border border-gray-800 p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer">
        <img
          src={event.image || "/party.jpg"}
          alt={event.title}
          className="w-full h-40 object-cover rounded-xl mb-4 border border-gray-900"
        />
        <h3 className="text-2xl font-bold text-indigo-300 mb-2 text-center">{event.title}</h3>
        <p className="text-gray-300 mb-2 text-center">{event.description}</p>
        <div className="flex flex-col items-center text-sm text-gray-400 mb-2">
          <span>{new Date(event.date).toLocaleDateString()}</span>
          <span>{event.location}</span>
        </div>
      </div>
    </Link>
  );
}

export default async function EventsPage() {
  let events = [];
  try {
    const res = await fetch("http://localhost:5000/api/events", { next: { revalidate: 60 } });
    if (res.ok) {
      events = await res.json();
    }
  } catch (err) {
    events = [];
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-xl py-16 px-4">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center">Our Events</h1>
      {events.length === 0 ? (
        <div className="text-center text-gray-400 text-xl">No events found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}
