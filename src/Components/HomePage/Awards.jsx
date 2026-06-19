import React from "react";
import img1 from "../../assets/img/awrds-banner.avif";
import { useEffect,useState } from "react";
const ITEM_HEIGHT = 180;
const VISIBLE_ITEMS = 3;

export default function Awards() {
  const [data,setdata] = useState([])

 useEffect(() => {
     
     try{
       fetch("https://back-bulding-code-ofzs.onrender.com/home_data").then((res) => res.json()).then((data) => {
          //  console.log("Fetched media data:", data);
           let reverse_data = data.reverse()
            setdata(reverse_data);
            // console.log(reverse_data)
         })
         .catch((err) => console.log("Error fetching media data:", err));
 
     }catch(err){
      
 console.log(err)

     }
 
   }, [])

  const awards = data[0]?.AwardSections.length>0 ? data[0]?.AwardSections : [
    {
      year: "2025",
      title: "GUINNESS WORLD RECORD",
      content: "World’s largest ground breaking ceremony for My Haveli.",
    },
    {
      year: "2025",
      title: "HURUN INDIA INDUSTRY ACHIEVEMENT AWARD",
      content: "Awarded in the Real Estate category.",
    },
    {
      year: "2025",
      title: "BEST REALTY BRAND",
      content: 'Recognised by ET Now at "The Best Realty Brands Conclave."',
    },
    {
      year: "2025",
      title: "THE BEST RESIDENTIAL PROJECT",
      content: "Awarded to Unique Green Meadows by ET Real Estate Award.",
    },
    {
      year: "2024",
      title: "ULTRA LUXURY PROJECT OF THE YEAR (RESIDENTIAL)",
      content: "Awarded to Unique IS Paradise by ET Ascent at the Business Leader of the Year Award.",
    },
    {
      year: "2021",
      title: "INNOVATIVE PROJECT OF THE YEAR",
      content: "Awarded to Unique New Town by National Awards for Excellence in Real Estate.",
    },
    {
      year: "2021",
      title: "DEVELOPER OF THE YEAR",
      content: "Awarded by National Awards for Excellence in Real Estate.",
    },
    {
      year: "2021",
      title: "RAJASTHAN BUSINESS LEADER OF THE YEAR",
      content: "Awarded to Vibhishek Pal Singh by CMO ASIA.",
    },
    {
      year: "2019",
      title: "WORLD'S GREATEST BRANDS & LEADERS AWARDS",
      content: "Unique IS Paradise (Brand) & Vibhishek Pal Singh (Leader).",
    },
    {
      year: "2019",
      title: "BEST COMPANY IN THE REAL ESTATE SECTOR IN RAJASTHAN",
      content: "Awarded by CNBC-AWAAZ Rajasthan Ratna Awards held at Jaipur.",
    },
    {
      year: "2017",
      title: "BEST RESIDENTIAL BUILDING AWARD",
      content: "Awarded to Unique IS Paradise by National Infrastructure & Construction Awards.",
    },
    {
      year: "2015",
      title: "PRIDE OF RAJASTHAN AWARD",
      content: "Awarded to Vibhishek Pal Singh for noteworthy contribution in Real Estate Development by Zee Media.",
    },
    {
      year: "2013",
      title: "YOUNG ACHIEVER AWARD (ASIA PACIFIC REGION)",
      content: "Awarded to Vibhishek Pal Singh for retail excellence by ET Times Now Awards.",
    },
    {
      year: "2012",
      title: "JAIPUR REAL ESTATE AWARDS: TRENDSETTER",
      content: "Recognized for excellence in real estate industry for PAN Rajasthan footprints.",
    },
    {
      year: "2012",
      title: "EMERGING ENTREPRENEUR AWARD",
      content: "Awarded to Vibhishek Pal Singh by Planman Marcom.",
    },
    {
      year: "2012",
      title: "JAIPUR REAL ESTATE AWARDS: MARKETING",
      content: "Awarded for the Best Innovative Marketing Campaign.",
    },
    {
      year: "2011-12",
      title: "POWER BRANDS RISING STAR AWARD",
      content: "Awarded by Planman Marcom.",
    },
    {
      year: "2011",
      title: "INDIA ACHIEVERS PODIUM AWARD",
      content: "Most Trusted Developer of Rajasthan & Young Entrepreneur Award (Vibhishek Pal Singh).",
    },
    {
      year: "2010",
      title: "INDIA INTERNATIONAL ACHIEVERS AWARD",
      content: "Awarded for Infrastructure Excellence.",
    },
    {
      year: "2010",
      title: "BUILDING INDUSTRY LEADERSHIP AWARD",
      content: "Fastest growing real estate group in affordable housing.",
    },
    {
      year: "2009-10",
      title: "BUILDING LEADERSHIP AWARD",
      content: "Awarded by Building Information Bureau, New Delhi.",
    },
    {
      year: "2009",
      title: "MAPSOR INDIA PROPERTY AWARD",
      content: "Awarded for Best Residential Project and Excellent Brand.",
    },
    {
      year: "2009",
      title: "MAPSOR INDIA PROPERTY AWARD",
      content: "For Being an excellent Brand.",
    },
    {
      year: "2006",
      title: "CITYSCAPE ASIA AWARD",
      content: "Best Developer in Mixed-Use Project.",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  const loopList = [...awards, ...awards];

  console.log("Awards =>", awards);
console.log("Loop =>", loopList);
console.log(index);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => prev + 1);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);


  React.useEffect(() => {
  if (awards.length <= 1) return;

  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % awards.length);
  }, 3000);

  return () => clearInterval(interval);
}, [awards.length]);

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
                <p className="text-[14px] opacity-80 tracking-[2px]">{a.year}</p>
                <h3 className="mt-2 text-lg md:text-[20px] font-semibold tracking-[2px] uppercase">
                  {a.title}
                </h3>
                <p className="mt-2 text-[16px] md:text-[16px] opacity-85 leading-relaxed">
                  {a.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
