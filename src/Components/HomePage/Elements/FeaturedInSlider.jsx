import React from "react";
import img from "../../../assets/img/event.webp";

export default function FeaturedInScroll() {
  const logos = [
    "Langar Seva And Blanket Distribution Camp",
    "Mandir Sthapana At Unique Sapphire",
    "First Time Ever In Rajasthan",
    "Mission FATEH Fight Against Corona",
  ];

  return (
    <section className="relative w-full h-[200px] md:h-[350px] lg:h-[260px] overflow-hidden">
      {/* Background Image */}
      <img
        src={img}
        alt="Featured Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Infinite Smooth Scroll */}
      <div className="relative z-10 flex items-center h-full overflow-hidden">
        <div className="scroll-container flex whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center px-20 border-r border-white"
            >
              <h2
                className="text-white text-xl md:text-4xl lg:text-4xl font-serif whitespace-nowrap"
              >
                {logo}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
