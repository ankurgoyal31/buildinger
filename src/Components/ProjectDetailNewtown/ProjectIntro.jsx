import React from "react";
import img from "../../assets/img/newtown/logo.png";
export default function ProjectIntro() {
  return (
    <section className="w-full  mx-auto px-6 py-16 text-center">

      {/* Breadcrumb */}
      {/* <nav className="text-gray-500 text-sm mb-6">
        <span className="cursor-pointer hover:text-black transition">Home</span>
        <span className="mx-2">›</span>
        <span className="cursor-pointer hover:text-black transition">Projects</span>
        <span className="mx-2">›</span>
        <span className="cursor-pointer hover:text-black transition">Residential</span>
        <span className="mx-2">›</span>
        <span className="font-semibold text-black">Piramal Aranya</span>
      </nav> */}

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={img}
          alt="Project Logo"
          className="h-22 object-contain"
        />
      </div>

      {/* Subtitle */}
      <h4 className=" text-lg font-medium mb-6" style={{letterSpacing:"0.7px"}}>
      Jagatpura, Jaipur
      </h4>

      {/* Main Description */}
      <p className="text-gray-700 px-100 text-sm leading-relaxed max-w-7xl mx-auto" style={{letterSpacing: "0.4px"}}>
  Buying a bigger home doesn't necessarily mean spending more money. Get redefined luxury at a price that would help every owner find their dream. We are here to create real value in the property by prioritizing privacy with independent floors as everyone deserves an opportunity of luxury.
      </p>
    </section>
  );
}
