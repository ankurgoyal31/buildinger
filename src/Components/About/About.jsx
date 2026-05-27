import React from "react";

import bannerImg from "../assets/images/aboutus-hero-section.png";
import dir1 from "../assets/img/director1.png";
import dir2 from "../assets/img/director2.png";
import img1 from "../assets/img/ourjourneysection.jpg"
import img2 from "../assets/img/about/UBBanner 4.png"
import img3 from "../assets/img/about/UBBanner 5.png"
import img4 from "../assets/img/about/UBBanner 6.png"
import Management1 from "../assets/img/Management.jpg";
import Management2 from "../assets/img/Management2.jpg";
import Management3 from "../assets/img/Management3.jpg";
import Management4 from "../assets/img/m4.jpg";


import Header from "../Header";
import Footer from "../Footer";
import StatsSection from "./HomePage/Elements/StatsSection";
import PurposeSection from "./PurposeSection";
import AutoReveal from "../Components/AutoReveal";
import InstagramSection from "./InstagramSection";

export default function AboutUsPage() {
  const managementImages = [
    Management1,
    Management2,
    Management3,
    Management4,
  ];

  const managementNames = ["Iqbal Singh", "Rahul", "Aashita", "aasish"];

  return (
    <>
      <Header />

      {/* ===== BANNER ===== */}
      <div className="w-full h-screen">
        <img
          src={bannerImg}
          alt="About Banner"
          className="object-cover w-full h-full"
        />
      </div>
  <AutoReveal>
        <PurposeSection />
      </AutoReveal>
      

  
      <AutoReveal>
        <section className="px-6 py-20">
          <div className="grid items-center max-w-7xl gap-12 mx-auto md:grid-cols-2">
            <img src={img1} alt="About" className="object-cover w-[650px] h-[700px]" />

            <div>
              <p className="mb-3 text-sm tracking-wide text-gray-600 uppercase">
                About Us
              </p>
              <h2 className="mb-4 text-2xl font-light md:text-3xl">
                Crafting Landmarks. Creating Enduring Value.
              </h2>
              <p className="leading-relaxed text-gray-600">
                Unique Group is a professionally managed real estate development
                company dedicated to shaping thoughtfully planned residential
                and commercial spaces. With a strong legacy of trust, quality,
                and ethical practices, the Group has established itself as a
                reliable name in the real estate sector.
              </p>
            </div>
          </div>
        </section>
      </AutoReveal>


    

      <AutoReveal>
        <section className="px-6  pb-10 text-center">
        
         

          <div className="max-w-6xl mx-auto space-y-24">
            <AutoReveal>
              <div className="grid items-center gap-16 md:grid-cols-1">
              
                <div className="text-center">
                 <h2 className="mb-3 text-2xl tracking-wide text-gray-500 uppercase">
            Our Story
          </h2>
                  <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </AutoReveal>

        
          </div>
        </section>
      </AutoReveal>


  <section className="relative my-24 w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of video */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Video Heading
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Add a short description or call to action here
          </p>
        </div>
      </div>
    </section>



      <AutoReveal>
        <section className="pb-40">
          <h2 className="mb-12 text-xl font-light text-center md:text-4xl">
            Board Of Directors
          </h2>

          <div className="grid max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">
            <AutoReveal>
              <div className="text-center">
                <img src={dir1} className="object-cover w-full" alt="" />
                <h3 className="mt-4 font-medium text-gray-800">
                  Mr. Abhishek Pal Singh
                </h3>
                <h4 className="text-gray-800">Vice Chairman</h4>
                {/* <p className="mt-2 text-sm text-gray-600">
                  Driving financial strength and strategic growth.
                </p> */}
              </div>
            </AutoReveal>

            <AutoReveal>
              <div className="text-center">
                <img src={dir2} className="object-cover w-full" alt="" />
                <h3 className="mt-4 font-medium text-gray-800">
                  Mr. Vibhishek Pal Singh
                </h3>
                <h4 className="text-gray-800">Managing Director</h4>
                {/* <p className="mt-2 text-sm text-gray-600">
                  Visionary leader with extensive real estate expertise.
                </p> */}
              </div>
            </AutoReveal>
          </div>
        </section>
      </AutoReveal>
      {/* ===== MANAGEMENT ===== */}
      <AutoReveal>
        <section className="pb-20">
          <h2 className="mb-12 text-xl font-light text-center md:text-4xl">
            Management
          </h2>

          <div className="grid max-w-6xl grid-cols-2 gap-4 px-6 mx-auto md:grid-cols-4">
            {managementNames.map((name, i) => (
              <AutoReveal key={i}>
                <div className="text-center">
                  <img
                    src={managementImages[i]}
                    className="w-full h-[400px] object-cover centered"
                    alt={name}
                  />
                  <p className="mt-3 text-sm text-gray-700">Mr. {name}</p>
                </div>
              </AutoReveal>
            ))}
          </div>
        </section>
      </AutoReveal>
      <AutoReveal><InstagramSection /></AutoReveal>

      <Footer />
    </>
  );
}
