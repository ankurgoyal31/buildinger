import React from "react";
import img1 from "../assets/images/aboutus-our-journey-section.png"  
import img2 from "../assets/img/about/UBLongBanner 2.png"

export default function PurposeSection() {
  return (
    <div className="w-full flex h-screen">
      
      {/* LEFT SECTION */}
      <div className="w-1/2 bg-[#f7f1df] flex items-center justify-center px-20">
        <div>
          <p className="text-sm tracking-wide text-[#bfa544] mb-4">
           
          </p>
          <h2 className="text-4xl font-semibold text-[#bfa544] mb-6"> Our Journey</h2>
          <p className="text-gray-700 leading-relaxed max-w-md">
            Journey with Unique Builders is a more precious real estate transaction; it is a groundbreaking transition from a conceptual blueprint to a tangible lifestyle. Starting with the initial spark of choosing a property whether it’s a high-rise luxury apartment or an extending township the process involves navigating a complex landscape of architectural planning, legal formalities, and financial milestones. 
          </p>

      
        </div>
      </div>

      {/* MIDDLE IMAGE */}
      <div className="w-1/2 h-full">
        <img
          src={img1}
          className="w-full h-full object-cover"
          alt="Middle Visual"
        />
      </div>

      {/* RIGHT IMAGE */}
      {/* <div className="w-1/4 h-full">
        <img
          src={img2}
          className="w-full h-full object-cover"
          alt="Right Visual"
        />

        <button className="absolute bottom-10 right-10 text-white font-medium flex items-center gap-2 group">
          Our Impact
          <span className="group-hover:translate-x-1 transition">›</span>
        </button>
      </div> */}

    </div>
  );
}
