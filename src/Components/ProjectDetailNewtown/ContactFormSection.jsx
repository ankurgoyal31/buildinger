import React from "react";
import img from "../../assets/img/newtown/banner4.jpg"

export default function ContactFormSection() {
  return (
    <section className="w-full bg-white">

      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

        {/* LEFT SIDE IMAGE */}
        <div className="h-full">
          <img
            src={img}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE = FORM + ADDRESS */}
        <div className="bg-[#F7F9FB] flex flex-col h-full">

          {/* FORM SECTION */}
          <div className="p-10 lg:p-20 flex-grow">
            <p className="text-sm tracking-widest text-gray-500">CONTACT US</p>
            <h2 className="text-4xl font-light mt-2 mb-10">Get in Touch</h2>

            <form className="space-y-10">

              <input type="text" placeholder="Name"
                className="w-full p-2 bg-transparent border-b border-gray-200" />
              <>
                <style>{`
                  input:focus, select:focus, textarea:focus {
                    outline: none !important;
                    box-shadow: none !important;
                  }
                `}</style>
              </>
              <input type="text" placeholder="Mobile"
                className="w-full p-2 bg-transparent border-b border-gray-200" />

              <input type="email" placeholder="Email"
                className="w-full p-2 bg-transparent border-b border-gray-200" />
{/* 
              <select className="w-full p-2 bg-transparent border-b border-gray-200 text-gray-600">
                <option>India</option>
                <option>United States</option>
                <option>UAE</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select> */}

              <button
                className="bg-black text-white px-10 py-2 font-light transition mt-20">
                Submit
              </button>
            </form>
          </div>

          {/* ADDRESS ONLY RIGHT-SIDE */}
          <div className="bg-[#1E2A36] text-white flex-grow py-30 px-5">
            <h3 className="text-xl font-semibold">Site Address</h3>
            <p className="mt-2 leading-relaxed">
              Jagatpura, Jaipur
            </p>

            <div className="flex items-center gap-3 mt-5 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" fill="#fff">
                <path d="M5 3h14v2H5V3zm2 4h10v2H7V7zm-2 4h14v2H5v-2zm2 4h10v2H7v-2z" />
              </svg>
              <span>022-50647563</span>
            </div>

            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5364852389646!2d75.86319631525856!3d26.811062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d9c3ea8443b9f%3A0x12667372355503891881!2s%2B26.811062%2C%2075.865385!5e0!3m2!1sen!2sin!4v1706700000000"
              target="_blank"
              className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-md w-[200px] hover:bg-gray-200 transition mt-5"
            >
              <img
                src="https://www.piramalrealty.com/_next/image?url=%2Fimages%2Ficon-map.png&w=48&q=75"
                className="w-7"
              />
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
