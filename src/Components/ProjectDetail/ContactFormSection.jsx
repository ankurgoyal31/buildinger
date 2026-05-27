import React from "react";
import img from "../../assets/img/contact.png"

export default function ContactFormSection() {
  return (

    <section className="w-full bg-white py-20 md:py-28">
  <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24">

      <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
        Schedule a Showing
      </h2>

      <p className="text-gray-600 leading-relaxed tracking-wide max-w-md mb-10">
        We would love to show you our beautiful property. Please select your
        preferred date and time below. An agent will be in touch shortly to
        confirm your appointment.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="border border-gray-800 px-8 py-3 tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300">
          CHAT WITH US FOR MORE DETAILS
        </button>

        <button className="border border-gray-800 px-8 py-3 tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300">
          GO TO MORE PROJECTS
        </button>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-full">
      <img
        src="https://fastly.picsum.photos/id/391/2980/2151.jpg?hmac=Vm7g1uyLxiCTfcFr1aXyYGRwqi7LMjpXzkatkqekPGQ"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>

//     <section className="w-full bg-white">

//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

//         {/* LEFT SIDE IMAGE */}
//         <div className="h-full">
//           <img
//             src={img}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* RIGHT SIDE = FORM + ADDRESS */}
//         <div className="bg-[#F7F9FB] flex flex-col h-full">

//           {/* FORM SECTION */}
//           <div className="p-10 lg:p-20 flex-grow">
//             <p className="text-sm tracking-widest text-gray-500">CONTACT US</p>
//             <h2 className="text-4xl font-light mt-2 mb-10">Get in Touch</h2>

//             <form className="space-y-10">

//               <input type="text" placeholder="Name"
//                 className="w-full p-2 bg-transparent border-b border-gray-200" />
//               <>
//                 <style>{`
//                   input:focus, select:focus, textarea:focus {
//                     outline: none !important;
//                     box-shadow: none !important;
//                   }
//                 `}</style>
//               </>
//               <input type="text" placeholder="Mobile"
//                 className="w-full p-2 bg-transparent border-b border-gray-200" />

//               <input type="email" placeholder="Email"
//                 className="w-full p-2 bg-transparent border-b border-gray-200" />
// {/* 
//               <select className="w-full p-2 bg-transparent border-b border-gray-200 text-gray-600">
//                 <option>India</option>
//                 <option>United States</option>
//                 <option>UAE</option>
//                 <option>United Kingdom</option>
//                 <option>Australia</option>
//               </select> */}

//               <button
//                 className="bg-black text-white px-10 py-2 font-light transition mt-20">
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* ADDRESS ONLY RIGHT-SIDE */}
//           <div className="bg-[#1E2A36] text-white flex-grow py-30 px-5">
//             <h3 className="text-xl font-semibold">Site Address</h3>
//             <p className="mt-2 leading-relaxed">
//               200 Ft. Main Tonk Road,
//               Jaipur
//             </p>

//             <div className="flex items-center gap-3 mt-5 text-lg">
//               <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" fill="#fff">
//                 <path d="M5 3h14v2H5V3zm2 4h10v2H7V7zm-2 4h14v2H5v-2zm2 4h10v2H7v-2z" />
//               </svg>
//               <span>022-50647563</span>
//             </div>

//             <a
//               href="https://www.google.com/maps?ll=26.722291,75.875966&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=7878779660923457151"
//               target="_blank"
//               className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-md w-[200px] hover:bg-gray-200 transition mt-5"
//             >
//               <img
//                 src="https://www.piramalrealty.com/_next/image?url=%2Fimages%2Ficon-map.png&w=48&q=75"
//                 className="w-7"
//               />
//               Get Directions
//             </a>
//           </div>

//         </div>
//       </div>
//     </section>
  );
}
