import React, { useState, useRef, useEffect } from "react";
import img1 from "../../../assets/milestones/2002.png";
import img2 from "../../../assets/milestones/2007.png";
import img3 from "../../../assets/milestones/2022.png";
import img4 from "../../../assets/milestones/2025.png";

export default function MilestonesSection() {
  const years = ["2002", "2010", "2011", "2013", "2015", "2018", "2024"];

  const milestones = {
    2002: {
      title: "The Foundation",
      desc: `• The Beginning of a Vision: Established with a commitment to quality and integrity.
• My Haveli: Launched as our flagship project, setting the benchmark for community living.`,
      img: img1,
    },
    2010: {
      title: "Reaching New Heights",
      desc: `• Iconic Landmarks: A landmark year featuring the development of Apex Tower, Golf, and Solitaire, defining the skyline with luxury and precision.`,
      img: img2,
    },
    2011: {
      title: "Revolutionizing Real Estate",
      desc: `• Umang – Dreams for All: Launched one of Rajasthan’s first truly affordable housing concepts. By introducing quality homes starting at just ₹5 lakhs, we turned the dream of homeownership into a reality for thousands.`,
      img: img3,
    },
    2013: {
      title: "Regional Expansion",
      desc: `• Golf Estate (Jodhpur): Brought world-class leisure to the Sun City. It remains one of the only golf-based residential projects in Rajasthan, blending sport with sophisticated living.`,
      img: img4,
    },
    2015: {
      title: "Global Design Standards",
      desc: `• IS Paradise: A fusion of international architectural aesthetics and modern comfort.
• Iridium (Mumbai): Expanded our footprint into the Mumbai market with high-end elevations and cutting-edge design.`,
      img: img1, // replace if you have new image
    },
    2018: {
      title: "Strengthening the Core",
      desc: `• Garden City (NCR/Neemrana): Solidified our presence in the National Capital Region (NCR) and Neemrana, catering to the growing industrial and residential demand in the corridor.`,
      img: img2,
    },
    2024: {
      title: "The Future of Urban Living",
      desc: `• City Unique Life: Venturing into expansive plotting townships. We are creating curated spaces that offer the freedom of independent living within a structured, modern community.`,
      img: img3,
    },
  };

  const [activeYear, setActiveYear] = useState(years[0]);
  const scrollRef = useRef(null);

  const handleYearClick = (year) => {
    setActiveYear(year);

    const index = years.indexOf(year);
    const width = scrollRef.current.clientWidth;

    scrollRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear((prev) => {
        const currentIndex = years.indexOf(prev);
        const nextIndex = (currentIndex + 1) % years.length;
        const nextYear = years[nextIndex];

        const width = scrollRef.current?.clientWidth || 0;

        scrollRef.current?.scrollTo({
          left: width * nextIndex,
          behavior: "smooth",
        });

        return nextYear;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      <div className="relative z-10 px-6 mx-auto lg:px-20">
        <h2 className="mb-12 text-[36px] font-light tracking-wide md:text-4xl">
          OUR MILESTONES
        </h2>

        <div
          ref={scrollRef}
          className="flex w-full overflow-hidden snap-x snap-mandatory no-scrollbar"
        >
          {years.map((year) => (
            <div
              key={year}
              className="relative flex flex-col items-center flex-shrink-0 w-full gap-8 snap-start md:flex-row"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 select-none pointer-events-none text-[10rem] md:text-[20rem] lg:text-[33rem] opacity-20 leading-none">
                {year}
              </span>

              <div className="relative z-20 md:w-[48%]">
                <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-gray-500">
                  {year}
                </p>
                <h3 className="mb-4 text-[32px] md:text-[32px] font-light leading-[1.1] text-[#2b2b2b]">
                  {milestones[year].title}
                </h3>
                <p className="text-[16px] md:text-[16px] font-light leading-8 text-gray-700 max-w-xl">
                  {milestones[year].desc}
                </p>
              </div>

              <div className="relative z-20 md:w-[52%] flex justify-end">
                <img
                  src={milestones[year].img}
                  alt={milestones[year].title}
                  className="w-full max-w-[500px] h-[420px] md:h-[580px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex pb-3 mt-16 overflow-x-auto text-sm font-light border-b border-gray-400 cursor-pointer flex-nowrap no-scrollbar">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`relative flex-shrink-0 px-2 transition ${
                activeYear === year
                  ? "text-[#a7cf46] font-medium"
                  : "text-gray-700 hover:text-[#a7cf46]"
              }`}
              style={{ minWidth: "calc(100% / 10)" }}
            >
              {year}

              {activeYear === year && (
                <>
                  <span className="absolute left-1/2 -translate-x-1/2 top-[35px] w-2.5 h-2.5 bg-[#a7cf46] rounded-full"></span>
                  <span
                    className="ml-1 text-[#a7cf46] opacity-80 text-lg font-bold inline-block"
                    style={{ transform: "rotate(-45deg)" }}
                  >
                    →
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
