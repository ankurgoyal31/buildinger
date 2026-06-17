import React, { useEffect, useRef, useState } from "react"; 
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/homeBan1.jpg";
import img2 from "../../../assets/img/homeBan2.jpg";
import img3 from "../../../assets/img/homeBan3.jpg";
import img4 from "../../../assets/img/homeBan4.jpg";

export default function CommunitiesSection() {
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

const [data,setdata] = useState([])

 useEffect(() => {
     
     try{
       fetch("https://back-bulding-code.onrender.com/home_data").then((res) => res.json()).then((data) => {
           console.log("Fetched media data:", data);
           let reverse_data = data.reverse()
            setdata(reverse_data);
            console.log(reverse_data)
         })
         .catch((err) => console.log("Error fetching media data:", err));
 
     }catch(err){
 
     }
 
   }, [])

  const communities = data[0]?.journeySections.length>0 ?data[0]?.journeySections: [
    {
      title: "Crafting With Integrity",
      image: img1,
      content: "Every project by Unique Builders is guided by transparent practices, responsible planning, and a commitment to deliver what is promised—earning long-standing trust from customers.",
    },
    {
      title: "Designing Future-Ready Living Spaces",
      image: img2,
      content: "We focus on practical layouts, efficient planning, and environments that support modern lifestyles, ensuring homes remain relevant and comfortable over time.",
    },
    {
      title: "Delivering Beyond Expectations",
      image: img3,
      content: "With attention to detail and consistent execution, Unique Builders strives to exceed expectations through construction quality, timely delivery, and thoughtful amenities.",
    },
    {
      title: "Creating Communities With Purpose & Pride",
      image: img4,
      content: "Our developments are planned as complete living ecosystems—bringing together open spaces, infrastructure, and connectivity to create meaningful communities.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      setOffsetY(clampedProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container px-6 mx-auto text-center lg:px-10">
        
        <h2 className="mb-12 text-[36px] font-light tracking-wide uppercase md:text-4xl relative inline-block">
          Our Values
          <span className="absolute left-1/2 -bottom-2 w-10 h-[2px] bg-[#0095e6] -translate-x-1/2 opacity-70"></span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  {communities.map((community, index) => {
    return (
      <div
        key={index}
        className="relative h-[500px] overflow-hidden shadow-lg group transition-all duration-500 ease-out hover:shadow-[0_10px_30px_rgba(0,149,230,0.15)]"
      >
        <img
          src={community.image}
          alt={community.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Title */}
        <div className="absolute text-left text-white top-5 left-5 right-5 z-10">
          <h3
            className="text-[18px] font-medium leading-snug"
            style={{ letterSpacing: "0.5px" }}
          >
            {community.title}
          </h3>
        </div>

        {/* Description */}
        <div
          className="absolute px-5 text-[14px] font-light text-white bottom-5 left-0 right-0 text-start z-10 leading-6"
          style={{ letterSpacing: "0.2px" }}
        >
          {community.content}
        </div>

        {/* subtle blue accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0095e6] group-hover:w-full transition-all duration-500"></div>
      </div>
    );
  })}
</div>

        <div className="mt-14">
          <Link
            to="/values"
            className="inline-block px-8 py-3 text-sm tracking-wider text-white uppercase transition-all duration-300 bg-black hover:bg-gray-800"
          >
            Read More 
          </Link>
        </div>
      </div>
    </section>
  );
}