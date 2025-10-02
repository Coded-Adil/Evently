"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://i.ibb.co.com/LhSTMn66/pexels-wendywei-1190298.jpg", // Add this image to your public folder
    title: "Party",
    subtitle: "Let's plan your next event together",
    button: {
      text: "Learn More",
      link: "/about"
    }
  },
  {
    image: "https://i.ibb.co.com/ZRWgmXVB/pexels-jibarofoto-2833037.jpg", // Add this image to your public folder
    title: "Conference",
    subtitle: "Host professional conferences with ease",
    button: {
      text: "Get Started",
      link: "/contact"
    }
  },
  {
    image: "https://i.ibb.co.com/QL4rfBF/pexels-marcin-dampc-807808-1684187.jpg", // Add this image to your public folder
    title: "Festival",
    subtitle: "Experience unforgettable festivals",
    button: {
      text: "Explore Events",
      link: "/events"
    }
  }
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 500);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden shadow-2xl">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <h1 className={`text-7xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg font-[cursive] transition-all duration-700 ${fade ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>{slides[current].title}</h1>
        <p className={`text-2xl md:text-3xl text-white mb-8 transition-all duration-700 ${fade ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>{slides[current].subtitle}</p>
        <a
          href={slides[current].button.link}
          className={`px-8 py-4 rounded-full bg-pink-300 text-gray-900 font-semibold text-lg shadow-md hover:bg-pink-400 transition-all duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        >
          {slides[current].button.text}
        </a>
      </div>
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-3 hover:bg-black/50 transition"
        onClick={() => { setFade(true); setTimeout(() => { setCurrent((current - 1 + slides.length) % slides.length); setFade(false); }, 500); }}
        aria-label="Previous slide"
      >
        &#60;
      </button>
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-3 hover:bg-black/50 transition"
        onClick={() => { setFade(true); setTimeout(() => { setCurrent((current + 1) % slides.length); setFade(false); }, 500); }}
        aria-label="Next slide"
      >
        &#62;
      </button>
    </div>
  );
}
