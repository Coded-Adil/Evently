"use client";
import React, { useEffect, useRef } from "react";

function useCountUp(target, end, duration = 2000) {
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    let startTime = null;
    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      if (ref.current) ref.current.textContent = value.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        if (ref.current) ref.current.textContent = end.toLocaleString();
      }
    }
    requestAnimationFrame(animateCount);
  }, [end, duration]);
  return ref;
}

export default function StatsSection() {
  const eventsRef = useCountUp("events", 1200, 1800);
  const usersRef = useCountUp("users", 350, 1800);

  return (
    <section className="w-full py-16 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900/80 backdrop-blur-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Evently by the Numbers</h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
        <div className="flex flex-col items-center">
          <span ref={eventsRef} className="text-5xl md:text-6xl font-extrabold text-indigo-400 mb-2">0</span>
          <span className="text-lg text-gray-300">Events Hosted</span>
        </div>
        <div className="hidden md:block h-16 border-l border-gray-700 mx-8"></div>
        <div className="flex flex-col items-center">
          <span ref={usersRef} className="text-5xl md:text-6xl font-extrabold text-indigo-400 mb-2">0</span>
          <span className="text-lg text-gray-300">Active Organizers</span>
        </div>
      </div>
    </section>
  );
}
