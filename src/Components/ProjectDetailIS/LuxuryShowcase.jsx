import React from "react";
import { motion } from "framer-motion";
import DownloadBrochureSection from "../ProjectDetail/DownloadBrochureSection";

import imgsecond from "../../assets/img/is/banner4.png";
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

   
      <motion.h2
        className="text-black text-5xl py-10 font-light text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience Nature in Every Corner
      </motion.h2>


      <motion.section
        className="relative h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgsecond})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  );
}
