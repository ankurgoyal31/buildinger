import React from "react";
import img1 from "../../assets/img/awrds-banner.avif";

const ITEM_HEIGHT = 180;
const VISIBLE_ITEMS = 3;

export default function Awards() {
  const awards = [
    {
      date: "2025",
      title: "GUINNESS WORLD RECORD",
      desc: "World’s largest ground breaking ceremony for My Haveli.",
    },
    {
      date: "2025",
      title: "HURUN INDIA INDUSTRY ACHIEVEMENT AWARD",
      desc: "Awarded in the Real Estate category.",
    },
    {
      date: "2025",
      title: "BEST REALTY BRAND",
      desc: 'Recognised by ET Now at "The Best Realty Brands Conclave."',
    },
    {
      date: "2025",
      title: "THE BEST RESIDENTIAL PROJECT",
      desc: "Awarded to Unique Green Meadows by ET Real Estate Award.",
    },
    {
      date: "2024",
      title: "ULTRA LUXURY PROJECT OF THE YEAR (RESIDENTIAL)",
      desc: "Awarded to Unique IS Paradise by ET Ascent at the Business Leader of the Year Award.",
    },
    {
      date: "2021",
      title: "INNOVATIVE PROJECT OF THE YEAR",
      desc: "Awarded to Unique New Town by National Awards for Excellence in Real Estate.",
    },
    {
      date: "2021",
      title: "DEVELOPER OF THE YEAR",
      desc: "Awarded by National Awards for Excellence in Real Estate.",
    },
    {
      date: "2021",
      title: "RAJASTHAN BUSINESS LEADER OF THE YEAR",
      desc: "Awarded to Vibhishek Pal Singh by CMO ASIA.",
    },
    {
      date: "2019",
      title: "WORLD'S GREATEST BRANDS & LEADERS AWARDS",
      desc: "Unique IS Paradise (Brand) & Vibhishek Pal Singh (Leader).",
    },
    {
      date: "2019",
      title: "BEST COMPANY IN THE REAL ESTATE SECTOR IN RAJASTHAN",
      desc: "Awarded by CNBC-AWAAZ Rajasthan Ratna Awards held at Jaipur.",
    },
    {
      date: "2017",
      title: "BEST RESIDENTIAL BUILDING AWARD",
      desc: "Awarded to Unique IS Paradise by National Infrastructure & Construction Awards.",
    },
    {
      date: "2015",
      title: "PRIDE OF RAJASTHAN AWARD",
      desc: "Awarded to Vibhishek Pal Singh for noteworthy contribution in Real Estate Development by Zee Media.",
    },
    {
      date: "2013",
      title: "YOUNG ACHIEVER AWARD (ASIA PACIFIC REGION)",
      desc: "Awarded to Vibhishek Pal Singh for retail excellence by ET Times Now Awards.",
    },
    {
      date: "2012",
      title: "JAIPUR REAL ESTATE AWARDS: TRENDSETTER",
      desc: "Recognized for excellence in real estate industry for PAN Rajasthan footprints.",
    },
    {
      date: "2012",
      title: "EMERGING ENTREPRENEUR AWARD",
      desc: "Awarded to Vibhishek Pal Singh by Planman Marcom.",
    },
    {
      date: "2012",
      title: "JAIPUR REAL ESTATE AWARDS: MARKETING",
      desc: "Awarded for the Best Innovative Marketing Campaign.",
    },
    {
      date: "2011-12",
      title: "POWER BRANDS RISING STAR AWARD",
      desc: "Awarded by Planman Marcom.",
    },
    {
      date: "2011",
      title: "INDIA ACHIEVERS PODIUM AWARD",
      desc: "Most Trusted Developer of Rajasthan & Young Entrepreneur Award (Vibhishek Pal Singh).",
    },
    {
      date: "2010",
      title: "INDIA INTERNATIONAL ACHIEVERS AWARD",
      desc: "Awarded for Infrastructure Excellence.",
    },
    {
      date: "2010",
      title: "BUILDING INDUSTRY LEADERSHIP AWARD",
      desc: "Fastest growing real estate group in affordable housing.",
    },
    {
      date: "2009-10",
      title: "BUILDING LEADERSHIP AWARD",
      desc: "Awarded by Building Information Bureau, New Delhi.",
    },
    {
      date: "2009",
      title: "MAPSOR INDIA PROPERTY AWARD",
      desc: "Awarded for Best Residential Project and Excellent Brand.",
    },
    {
      date: "2009",
      title: "MAPSOR INDIA PROPERTY AWARD",
      desc: "For Being an excellent Brand.",
    },
    {
      date: "2006",
      title: "CITYSCAPE ASIA AWARD",
      desc: "Best Developer in Mixed-Use Project.",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  const loopList = [...awards, ...awards];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (index === awards.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 1200);
    } else {
      setAnimate(true);
    }
  }, [index, awards.length]);

  return (
    <section
      className="relative py-24 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-white">
        <h2 className="mb-16 text-[36px] font-light tracking-wide text-center uppercase md:text-[36px]">
          Awards
        </h2>

        <div
          className="relative overflow-hidden"
          style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
        >
          <div
            className={`absolute left-0 w-full ${
              animate ? "transition-transform duration-[1200ms] ease-in-out" : ""
            }`}
            style={{
              transform: `translateY(-${index * ITEM_HEIGHT}px)`,
            }}
          >
            {loopList.map((a, i) => (
              <div
                key={i}
                className="h-[180px] py-5 border-b border-white/30 flex flex-col justify-center"
              >
                <p className="text-[14px] opacity-80 tracking-[2px]">{a.date}</p>
                <h3 className="mt-2 text-lg md:text-[20px] font-semibold tracking-[2px] uppercase">
                  {a.title}
                </h3>
                <p className="mt-2 text-[16px] md:text-[16px] opacity-85 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}