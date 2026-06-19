import React from "react";
import { useEffect,useState } from "react";
import heroVideo1 from "../../../assets/img/homevideo2.mp4";

const HomeHero = () => {
const [data,setdata] = useState([])

 useEffect(() => {
     
     try{
       fetch("https://back-bulding-code-ofzs.onrender.com/home_data").then((res) => res.json()).then((data) => {
           console.log("Fetched media data:", data);
           let reverse_data = data.reverse()
            setdata(reverse_data);
            console.log(reverse_data)
         })
         .catch((err) => console.log("Error fetching media data:", err));
 
     }catch(err){
 
     }
 
   }, [])

console.log("video" ,data[0]?.herovideo)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={heroVideo1} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
};

export default HomeHero;
