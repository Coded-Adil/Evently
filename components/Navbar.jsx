
"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 border-b-2 border-indigo-400 flex items-center font-serif relative">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-indigo-300 font-[cursive]">Evently</h1>
      {/* Centered nav links on large screens */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="transition-colors duration-200 hover:text-indigo-400">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Login button on right for large screens */}
      <div className="hidden md:flex">
        <Link href="/login">
          <button className="ml-6 px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold text-lg shadow-md hover:bg-indigo-700 transition-all duration-200">
            Login
          </button>
        </Link>
      </div>
      {/* Hamburger menu for small/medium screens */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none ml-auto"
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
      {/* Mobile menu with links and login button */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-950/95 backdrop-blur-lg flex flex-col items-center py-6 space-y-6 z-50 shadow-xl md:hidden transition-all duration-500 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
        style={{ borderRadius: open ? '0 0 2rem 2rem' : '0 0 2rem 2rem' }}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="text-lg font-medium transition-colors duration-200 hover:text-indigo-400" onClick={() => setOpen(false)}>
            {link.name}
          </Link>
        ))}
        <Link href="/login" onClick={() => setOpen(false)}>
          <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold text-lg shadow-md hover:bg-indigo-700 transition-all duration-200">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
