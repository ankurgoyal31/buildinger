import React from "react";
import img from "../../../assets/img/iman-awards-resized-1-1.jpg";
import img1 from "../../../assets/img/awards-img.png";


export default function AwardsSection() {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] lg:h-[500px] flex flex-col justify-between"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Title (top center) */}
      <div className="relative z-10 flex justify-center pt-10">
      
      </div>

      {/* Button (bottom left) */}
      <div className="relative z-10 flex justify-start pb-10 pl-10">
        <a
          href="#"
          className="bg-black text-white px-7 py-2 font-light  transition"
        >
          Read More →
        </a>
      </div>
    </section>
  );
}
