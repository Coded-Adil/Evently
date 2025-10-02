
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 border-b-2 flex justify-between items-center font-serif">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-indigo-300 font-[cursive]">Evently</h1>
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <Link href="/" className="transition-colors duration-200 hover:text-indigo-400">Home</Link>
        <Link href="/events" className="transition-colors duration-200 hover:text-indigo-400">Events</Link>
        <Link href="/about" className="transition-colors duration-200 hover:text-indigo-400">About</Link>
        <Link href="/contact" className="transition-colors duration-200 hover:text-indigo-400">Contact</Link>
      </div>
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-7 h-7 text-indigo-300 transition-all duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>
      <div
        className={`absolute top-16 left-0 w-full bg-gray-950/95 backdrop-blur-lg flex flex-col items-center py-6 space-y-6 z-50 shadow-xl md:hidden transition-all duration-500 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
        style={{ borderRadius: open ? '0 0 2rem 2rem' : '0 0 2rem 2rem' }}
      >
        <Link href="/" className="text-lg font-medium transition-colors duration-200 hover:text-indigo-400" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/events" className="text-lg font-medium transition-colors duration-200 hover:text-indigo-400" onClick={() => setOpen(false)}>Events</Link>
        <Link href="/about" className="text-lg font-medium transition-colors duration-200 hover:text-indigo-400" onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" className="text-lg font-medium transition-colors duration-200 hover:text-indigo-400" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
