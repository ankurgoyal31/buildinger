import React from "react";
import img from "../../../assets/img/usp.png";


export default function About() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            WE BUILD LIFESTYLES
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
           Founded in 2002, Unique Builders has grown into Rajasthan’s leading real estate company, now expanding projects across Mumbai and NCR.
          </p>

          <button className="bg-black text-white px-7 py-2 font-light  transition">
            Discover →
          </button>

       {/* Stats Grid */}
<div className="mt-12 grid grid-cols-2 gap-6">
  <div className="border-b border-gray-300 p-6 text-left">
    <h3 className="text-3xl font-[400] text-gray-900">60+</h3>
    <p className="text-sm text-green-800 mt-1 flex items-center gap-2">
      <span className="w-2 h-2 bg-[#0498d8] rounded-sm inline-block"></span>
     Projects Delivered
    </p>
  </div>

  <div className="border-b border-gray-300 p-6 text-left">
    <h3 className="text-3xl font-[400] text-gray-900">13000+</h3>
    <p className="text-sm text-green-800 mt-1 flex items-center gap-2">
      <span className="w-2 h-2 bg-[#0498d8] rounded-sm inline-block"></span>
     Happy Customers
    </p>
  </div>

  <div className="border-b border-gray-300 p-6 text-left">
    <h3 className="text-3xl font-[400] text-gray-900">22</h3>
    <p className="text-sm text-green-800 mt-1 flex items-center gap-2">
      <span className="w-2 h-2 bg-[#0498d8] rounded-sm inline-block"></span>
      years of commitment
    </p>
  </div>

  <div className="border-b border-gray-300 p-6 text-left">
    <h3 className="text-3xl font-[400] text-gray-900">35+</h3>
    <p className="text-sm text-green-800 mt-1 flex items-center gap-2">
      <span className="w-2 h-2 bg-[#0498d8] rounded-sm inline-block"></span>
     million sq.ft. Spaces planned
    </p>
  </div>
</div>

</div>

        {/* Right Section (Image) */}
        <div>
          <img
            src={img}
            alt="IMAN Developers Office"
            className="w-full  object-cover h-[400px] md:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
