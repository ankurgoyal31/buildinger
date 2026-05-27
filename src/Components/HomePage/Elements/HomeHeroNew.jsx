import React, { useState, useEffect } from "react";
import heroVideo from "../../../assets/img/video-home.mp4";


const slides = [
  {
    title: "CRAFTING SPACES",
    title2: "THAT INSPIRE",
    desc: "Unique Builders creates thoughtfully planned homes combining strong design, quality construction, and practical everyday living.",
  },
  {
    title: "BUILDING LANDMARKS.",
    title2: "SHAPING LIFESTYLES",
    desc: "Unique Builders develops well-planned residences that balance smart design, reliable construction, and long-term value.",
  },
  {
    title: "WHERE ARCHITECTURE MEETS",
    title2: "EVERYDAY LIVING",
    desc: "Unique Builders delivers functional spaces through careful planning, dependable construction, and attention to everyday living.",
  },
];

const HomeHero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Center Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div
          key={active}
          className="max-w-5xl text-center text-white animate-fadeUp"
        >
          {/* <h1 className="text-5xl font-light leading-tight tracking-wide md:text-6xl">
            {slide.title}
          </h1> */}
          {/* <h1 className="mb-6 text-5xl font-light tracking-wide md:text-6xl">
            {slide.title2}
          </h1> */}
          {/* <p className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl opacity-90">
            {slide.desc}
          </p> */}
        </div>
      </div>

      {/* Indicators */}
      {/* <div className="absolute z-30 flex gap-3 -translate-x-1/2 bottom-16 left-1/2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-14 h-[2px] transition-all duration-300
              ${active === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HomeHero;
