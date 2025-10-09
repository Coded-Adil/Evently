import BannerCarousel from "../components/BannerCarousel";
import StatsSection from "../components/StatsSection";
import Link from "next/link";
import Image from "next/image";

async function getEvents() {
  // Fetch the latest 3 events from your backend
  const res = await fetch("http://localhost:5000/api/events", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  // Show the latest 3 events (assuming data is an array sorted by date desc)
  return data.slice(0, 3);
}

function EventCard({ event }) {
  return (
    <div className="w-full">
      <div className="bg-gray-950/80 rounded-2xl shadow-lg border border-gray-800 p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer">
        <img
          src={event.image || "/party.jpg"}
          alt={event.title}
          className="w-full h-40 object-cover rounded-xl mb-4 border border-gray-900"
        />
        <h3 className="text-2xl font-bold text-indigo-300 mb-2 text-center">{event.title}</h3>
        <p className="text-gray-300 mb-2 text-center">{event.description}</p>
        <div className="flex flex-col items-center text-sm text-gray-400 mb-2">
          <span>{event.date ? new Date(event.date).toLocaleDateString() : ""}</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  const events = await getEvents();

  return (
    <main className="min-h-screen mx-auto bg-gradient-to-br from-indigo-900 via-gray-900 to-indigo-900 backdrop-blur-xl">
      <BannerCarousel />
      <StatsSection />

      {/* Featured Events Section */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Events</h2>
          <Link href="/events">
            <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-all duration-200">
              See All
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {events.length > 0 ? (
            events.map((event) => (
              <Link key={event._id} href={`/events/${event._id}`}>
                <EventCard event={event} />
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-gray-400 text-center py-12">No events found.</div>
          )}
        </div>
      </section>
    </main>
  );
}