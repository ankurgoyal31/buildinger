import React, { useState } from "react";

import img2 from "../../assets/img/site-plan.jpg";
import img3 from "../../assets/img/floorPlan1.jpg";
import img4 from "../../assets/img/cp.jpg";
import img5 from "../../assets/img/Location-Map.jpg";
import img6 from "../../assets/img/Location-Map.jpg";

const tabs = [
  "Location",
  "Master Plan",
  "Floor Plan",
  "Exclusive Club Stand",
  "Facilities Near By",
  "Construction Update",
];

const galleryData = {
  Location: {
    type: "map",
    src: "https://maps.google.com/maps?q=Unique%20Builders%20Jaipur&t=m&z=10&output=embed&iwloc=near",
    caption: "Project Location Overview",
  },

  "Master Plan": {
    type: "image",
    src: img2,
    caption: "Master Plan Layout",
  },

  "Floor Plan": {
    type: "image",
    src: img3,
    caption: "Detailed Floor Plan",
  },

  "Exclusive Club Stand": {
    type: "image",
    src: img4,
    caption: "Exclusive Club Stand View",
  },

  "Facilities Near By": {
    type: "image",
    src: img5,
    caption: "Nearby Facilities",
  },

  "Construction Update": {
    type: "image", 
    src: img6,
    caption: "Latest Construction Progress",
  },
};

export default function GalleryExact() {
  const [active, setActive] = useState("Location");
  const data = galleryData[active];

  return (

    <>
    <section className="w-full px-4 py-20 bg-white">
      {/* <h2 className="text-center text-4xl font-light mb-14 tracking-wide">
        Gallery
      </h2> */}

      {/* Tabs */}
      <div className="flex justify-center gap-14 mb-14 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 text-sm tracking-widest uppercase transition-all duration-300 ${
              active === tab
                ? "text-gray-800 border-b-2 border-gray-600"
                : "text-black hover:text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Media */}
      <div className="max-w-6xl mx-auto">
        {data.type === "map" ? (
          <iframe
            src={data.src}
            title="Project Location Map"
            loading="lazy"
            className="w-full h-[600px] border-0"
            allowFullScreen
          />
        ) : data.type === "video" ? (
          <iframe
            src={data.src}
            title="Construction Video"
            className="w-full h-[600px] border-0"
            allowFullScreen
          />
        ) : (
          <img
            src={data.src}
            alt={active}
            className="w-full h-[600px] object-cover"
          />
        )}
      </div>
    </section>


<section className="w-full bg-white py-20 md:py-10">
  <div className=" mx-auto px-6 sm:px-10 lg:px-20">

    {/* TITLE */}
    <h2 className="text-center text-4xl md:text-5xl font-light tracking-wide mb-20">
      Features & Amenities
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="border border-gray-400 p-10 min-h-[260px]">
        <h3 className="text-2xl font-light mb-6">Area & Lot</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed">
          <li>Status: Sold</li>
          <li>Living Space: 6,168 Sq.Ft.</li>
          <li>Type: Condo</li>
          <li>Year Built: 2015</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div className="border border-gray-400 p-10 min-h-[260px]">
        <h3 className="text-2xl font-light mb-6">Interior</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed">
          <li>Total Bedrooms: 6</li>
          <li>Total Bathrooms: 8</li>
          <li>Full Bathrooms: 8</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="border border-gray-400 p-10 min-h-[260px]">
        <h3 className="text-2xl font-light mb-6">Exterior</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed">
          <li>Garage Space: 1</li>
        </ul>
      </div>

    </div>

  </div>
</section>


    </>
  );
}
