import React from "react";
import buildingImg from "../../../assets/img/22.png";

export default function ExperienceSection() {
  return (
    <section className="w-full min-h-[500px] bg-white flex items-center px-6 md:px-16 lg:px-28">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-12">
        
        {/* Left big 22 with background image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className=""
          
          >
           <img src={buildingImg} />
          </div>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 flex flex-col justify-end text-center md:text-left pb-10 md:pb-20">
          <p className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-[#a7cf46] pb-5">
            YEARS OF EXPERIENCE
          </p>
          <p
            className="text-4xl md:text-6xl lg:text-6xl font-[500] text-[#0498d8]"
            style={{ letterSpacing: "-2px" }}
          >
            IN REAL ESTATE DEVELOPMENT
          </p>
        </div>
      </div>
    </section>
  );
}
