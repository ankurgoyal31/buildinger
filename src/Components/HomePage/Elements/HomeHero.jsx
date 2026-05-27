import React from "react";
import heroVideo1 from "../../../assets/img/homevideo2.mp4";

const HomeHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={heroVideo1} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
};

export default HomeHero;