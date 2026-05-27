import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import img1 from "../../assets/img/newtown/banner.jpg"
import img2 from "../../assets/img/newtown/banner2.jpg"
import img3 from "../../assets/img/newtown/banner3.jpg"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = [
    {
      image: img1,
      heading: "Living Space you Imagined",
      subheading: "Customised space that is built around your comfort, identity, and taste "
    },
    {
      image: img2,
      heading: "Your Dream, Our Expertise",
      subheading: "You dream it- we guide and build for you and bring it to life with care"
    },
    {
      image: img3,
      heading: "The Purest Luxury",
      subheading: "Minimal aesthetics blended with polished comfort and precious craftsmanship"
    }
  ];

  return (
    <div className="w-full h-[90vh] relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        speed={1200} 
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

            
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 animate-zoomSlow opacity-200"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

         
              <div className="absolute inset-0 " />

        
              <div className="absolute bottom-20 left-8 md:left-16 text-white 
                              drop-shadow-xl animate-fadeUpSmooth">
                {/* <h1 className="text-3xl md:text-6xl font-bold">{slide.heading}</h1>
                <p className="text-lg md:text-2xl font-light mt-2">{slide.subheading}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .animate-zoomSlow {
          animation: zoomSlow 6s ease-in-out forwards;
        }

        @keyframes fadeUpSmooth {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUpSmooth {
          animation: fadeUpSmooth 1.2s ease-out;
        }
      `}</style>
    </div>
  );
}
