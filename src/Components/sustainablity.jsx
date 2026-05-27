import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const EcoLayout = () => {
  return (
    <>
      <Header />

      <div className="w-full">

        {/* HERO */}
        <section className="w-full h-[60vh] sm:h-[75vh] md:h-[90vh]">
          <img
            src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
            className="w-full h-full object-cover"
            alt=""
          />
        </section>

        {/* TEXT + IMAGE */}
        <section className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 py-16 md:py-24 px-6 sm:px-10 lg:px-60">

          <div className="flex flex-col justify-center px-0 md:px-10 lg:px-30">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Embracing Nature: A Deep Dive into Biophilic Design
            </h2>
            <p className="text-gray-600 leading-relaxed tracking-wide">
              In a world increasingly dominated by urban landscapes and digital
              innovations, we yearn for connection to nature. This article explores
              how natural elements integrate into architectural design to create
              healthier, calmer spaces.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
              className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover rounded-xl shadow-xl"
              alt=""
            />
          </div>

        </section>

        {/* FULL WIDTH OVERLAY */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <img
            src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl tracking-widest">02</h3>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mt-4">
              KEEP EARTH COOL
            </h2>
          </div>
        </section>

        {/* STATS GRID */}
        <section className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 py-16 md:py-24">

          <div className="bg-[#efece6] flex items-center justify-center text-center p-10 sm:p-16 md:p-20">
            <p className="max-w-md text-gray-700 leading-relaxed tracking-wide">
              We commit to ambitious carbon reduction goals aligned with science
              based targets, achieving measurable environmental impact by 2030.
            </p>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[600px]">
            <img
              src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-light">52%</h2>
              <p className="text-white text-xs sm:text-sm tracking-widest mt-2">
                ABSOLUTE EMISSIONS REDUCTION
              </p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[600px]">
            <img
              src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-light">44%</h2>
              <p className="text-white text-xs sm:text-sm tracking-widest mt-2">
                ENERGY CONSUMPTION REDUCTION
              </p>
            </div>
          </div>

          <div className="bg-[#063b33] flex flex-col justify-center items-center text-center p-10 sm:p-16 md:p-20">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl">97%</h2>
            <p className="text-white text-xs sm:text-sm tracking-wider mt-2">
              PROJECTS MEETING GREEN STANDARDS
            </p>
          </div>

        </section>

        {/* FOOTER IMAGE */}
        <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <img
            src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
            className="w-full h-full object-cover"
            alt=""
          />
        </section>

      </div>

      <Footer />
    </>
  );
};

export default EcoLayout;
