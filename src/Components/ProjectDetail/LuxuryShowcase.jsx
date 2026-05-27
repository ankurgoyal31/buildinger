import React from "react";
import { motion } from "framer-motion";
import DownloadBrochureSection from "../ProjectDetail/DownloadBrochureSection";

import imgsecond from "../../assets/img/greenmedow.png";
import video from "../../assets/GreenMeadows.mov";

export default function LuxuryShowcase() {
  return (
    <div className="w-full bg-white text-black">

 
      <section className="pb-20 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10"
        >
     
        </motion.div>

        <DownloadBrochureSection />
      </section>


      <section
        className="relative h-[80vh] w-[90%] m-auto overflow-hidden flex items-center justify-center"
      >
 
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />

       
        <div className="absolute inset-0 bg-black/40"></div>

       
        <motion.h2
          className="relative text-white text-5xl font-light tracking-wide text-center z-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
       
        </motion.h2>
      </section>

   
    <section className="w-full bg-white py-16 md:py-24">
  <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 lg:px-40 items-center">

    {/* LEFT IMAGE */}
    <div className="w-full h-[300px] sm:h-[400px] md:h-[700px] overflow-hidden">
      <img
        src="https://fastly.picsum.photos/id/378/5000/3333.jpg?hmac=Jh9hcCIe9-6cNIvJnO5d33CuAR-3RKeOMRx4ki5nKt8"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex flex-col justify-center px-0 md:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
        About the project
      </h2>

      <p className="text-gray-600 leading-relaxed tracking-wide text-sm sm:text-base md:text-lg max-w-lg">
        Buying a bigger home doesn't necessarily mean spending more money.
        Get redefined luxury at a price that would help every owner find
        their dream. We are here to create real value in the property by
        prioritizing privacy with independent floors as everyone deserves
        an opportunity of luxury.
      </p>
    </div>

  </div>
</section>


    </div>
  );
}
