import React, { useState } from "react";

import img2 from "../../assets/img/newtown/master.jpg";
import img3 from "../../assets/img/newtown/floorPlan.jpg";
import img4 from "../../assets/img/newtown/club.jpg";
import img5 from "../../assets/img/Location-Map.jpg";
import img6 from "../../assets/img/Location-Map.jpg";

const tabs = [
  "Location",
  "Master Plan",
  "Floor Plan",
  "Exclusive Club Stand",
  // "Facilities Near By",
  // "Construction Update",
];

const galleryData = {
  Location: {
    type: "map",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5364852389646!2d75.86319631525856!3d26.811062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d9c3ea8443b9f%3A0x12667372355503891881!2s%2B26.811062%2C%2075.865385!5e0!3m2!1sen!2sin!4v1706700000000",
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
    type: "image", // can be "video" later
    src: img6,
    caption: "Latest Construction Progress",
  },
};

export default function GalleryExact() {
  const [active, setActive] = useState("Location");
  const data = galleryData[active];

  return (
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
  );
}
