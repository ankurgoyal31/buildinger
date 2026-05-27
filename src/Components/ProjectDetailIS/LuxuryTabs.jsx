// src/Components/LuxuryTabs.jsx
import React, { useState } from "react";
import img1 from "../../assets/img/is/ame1.png"; 
import img2 from "../../assets/img/is/ame2.png"; 
import img3 from "../../assets/img/is/ame3.png"; 
import img4 from "../../assets/img/is/ame4.png"; 


const tabs = [
  {
    name: "Swimming Pool",
    img: img1,
  },
  {
    name: "GYM ",
    img: img2,
  },
  {
    name: "Game Area ",
    img: img3,
  },
    {
    name: " Kids Play Area",
    img: img4,
  },
];

export default function LuxuryTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full mx-auto py-20 px-6">

      {/* ---------- Heading ---------- */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-light mb-4">
         A Home that Reflects True Facilities
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
         A home that reflects true facilities, with warm spaces, thoughtful details, and a calm, inviting design that makes everyday living feel naturally beautiful and effortlessly comfortable.
        </p>
      </div>

      {/* ---------- Tabs ---------- */}
      <div className="flex items-center justify-center gap-16 mt-6 mb-10">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-lg transition-all text-center ${
              active === i ? "text-black font-medium" : "text-gray-400"
            }`}
          >
            <div><h3>{t.name}</h3></div>
            <div className="text-xs mt-1 opacity-60">{t.desc}</div>
          </button>
        ))}
      </div>

      {/* ---------- Image Section ---------- */}
      <div className="w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl">
        <img
          src={tabs[active].img}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* ---------- Content Below Image ---------- */}
      {/* <div className="text-center mt-10 max-w-2xl mx-auto">
        <h3 className="text-2xl font-medium mb-3">{tabs[active].name}</h3>
        <p className="text-gray-600 leading-relaxed">
          {tabs[active].content}
        </p>
      </div> */}
    </div>
  );
}
