import React, { useState } from "react";

import img2 from "../../assets/img/is/unit.png";
import img3 from "../../assets/img/is/master.png";
import img4 from "../../assets/img/cp.jpg";
import img5 from "../../assets/img/Location-Map.jpg";
import img6 from "../../assets/img/Location-Map.jpg";

const tabs = [
  "Location",
  "Master Plan",
   "Unit Plan",
  // "Exclusive Club Stand",
  // "Facilities Near By",
  // "Construction Update",
];

const galleryData = {
  Location: {
    type: "map",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.077760051532!2d75.7736391!3d26.9019672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db46efb1eaf25:0x70a50618b4db7a87!2sUnique%20IS%20Paradise!5e0!3m2!1sen!2sin!4v1706530000000",
    caption: "Unique IS Paradise – Project Location",
  },


  "Master Plan": {
    type: "image",
    src: img3,
    caption: "Master Plan Layout",
  },

  "Unit Plan": {
    type: "image",
    src: img2,
    caption: "Detailed unit Plan",
  },

  // "Exclusive Club Stand": {
  //   type: "image",
  //   src: img4,
  //   caption: "Exclusive Club Stand View",
  // },

  // "Facilities Near By": {
  //   type: "image",
  //   src: img5,
  //   caption: "Nearby Facilities",
  // },

  // "Construction Update": {
  //   type: "image", // can be "video" later
  //   src: img6,
  //   caption: "Latest Construction Progress",
  // },
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
