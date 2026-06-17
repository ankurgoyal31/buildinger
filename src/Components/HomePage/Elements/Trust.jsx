import React from "react";
import leftImg from "../../../assets/img/left.png";
import rightImg from "../../../assets/img/home-img.jpg";
import { useEffect,useState } from "react";
export default function TrustSection() {
const [data,setdata] = useState([])

 useEffect(() => {
     
     try{
       fetch("https://back-bulding-code.onrender.com/home_data").then((res) => res.json()).then((data) => {
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


  return (
    <section className="w-full mt-20 bg-[#f8f8f6]">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[25%_30%_45%]">
        
        {/* LEFT IMAGE */}
        <div className="w-full h-[550px]">
          <img
            src={data[0]?.image2 ||leftImg}
            alt="Left Visual"
            className="object-cover w-full h-full"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="flex items-center justify-center px-10 py-10 text-center">
          <div className="max-w-md">

            {/* subtle accent line */}
            <div className="w-8 h-[1px] bg-[#0095e6]/40 mx-auto mb-5"></div>

            <h2 className="mb-6 text-[36px] font-light leading-snug tracking-wider text-gray-700 md:text-4xl uppercase relative inline-block">
             {data[0]?.title6 || "The Spirit <br />That Reimagined Homes"}

              {/* subtle hover underline */}
              <span className="absolute left-1/2 -bottom-2 w-0 h-[1px] bg-[#0095e6] -translate-x-1/2 transition-all duration-300 group-hover:w-12"></span>
            </h2>

            <p className="text-gray-600 leading-tight text-[16px] md:text-[16px] mb-10">{data[0]?.content2 || "A home should be more than a place to stay, it should be a place where you thrive. At Unique Builders, we bring a fresh 'spirit' to every project, reimagining what a home can be. It’s not just about the design; it’s about shifting the energy of your space to match the way you live and breathe. Because you aren't just buying a house; you’re choosing a new way to live."}</p>

            {/* ✅ BUTTON UNCHANGED */}
            <a
              href="/ourstory"
              className="bg-black text-white px-6 py-3 text-sm tracking-wide uppercase hover:bg-gray-800 transition"
            >
              Know More
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[550px]">
          <img src={data[0]?.image3 ||rightImg} alt="Right Visual"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}