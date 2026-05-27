import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/IsParadise.mp4";
import img2 from "../../../assets/Greenmeadow.mp4";
import img3 from "../../../assets/Newtown.mp4";

export default function FeaturedDevelopments() {
  const tabs = {
    "IS PARADISE": {
      slug: "is-paradise",
      title: "Where 70% of Life Feels Green",
      desc: "IS Paradise reshapes city living through its rare 70:30 green-to-built ratio, expansive water features and thoughtfully created celebration spaces. Spacious flat layouts, calm landscapes and refined planning come together to offer a living experience distinctly ahead of Jaipur’s contemporary residential developments.",
      img: img1,
    },
    "UNIQUE GREEN MEADOWS": {
      slug: "unique-green-meadows",
      title: "More Life with More Amenities",
      desc: "With fifteen acres of thoughtfully planned openness, Green Meadows offers space for children to play, adults to unwind and families to grow comfortably together, supported by calm surroundings and smooth connectivity along the expanding 200-foot Tonk Road development corridor.",
      img: img2,
    },
    "UNIQUE NEW TOWN": {
      slug: "unique-new-town",
      title: "A New Benchmarks of Low-Density Living",
      desc: "By dedicating each floor to a single family, the project brings a rare clarity to planning, emphasising quiet environments, spatial freedom and a premium sense of belonging. Its nearly five-acre total land area with curated clubhouse and thoughtfully designed outdoor spaces further strengthen its distinct residential character.",
      img: img3,
    },
  };

  const tabKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-10 px-6">
        <h2 className="text-[36px] md:text-[36px] font-light tracking-wider uppercase">
          Our Featured Developments
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto pb-10 text-base leading-tight">
          Explore uniquely crafted residential spaces with immaculate design,
          vast landscaping, and a premium lifestyle.
        </p>
      </div>

      <div className="flex justify-center gap-40 flex-wrap">
        {tabKeys.map((tab) => (
          <button
            key={tab}
            className="uppercase tracking-wide text-[16px] relative pb-2"
            onClick={() => setActiveTab(tab)}
          >
            <span
              className={`transition ${
                activeTab === tab ? "text-black font-medium" : "text-gray-600"
              }`}
            >
              {tab}
            </span>

            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400"></span>
            )}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-16 mt-12 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-[70%]">
          <video
            key={tabs[activeTab].img}
            src={tabs[activeTab].img}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: 1 }}
          />
        </div>

        <div className="w-full lg:w-[30%]">
          <h3 className="text-[32px] font-light mb-3">{tabs[activeTab].title}</h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            {tabs[activeTab].desc}
          </p>

          <Link
            to={`/projects/${tabs[activeTab].slug}`}
            className="inline-block bg-black text-white px-6 py-3 text-[16px] tracking-wide uppercase hover:bg-gray-800 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}