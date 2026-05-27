"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import img1 from "../../../assets/img/newtown2.png";
import img2 from "../../../assets/img/sapphire3.png";
import img3 from "../../../assets/img/haveli3.png";

const slides = [
  {
    img: img1,
    title: 'Unique New Town',
    desc: 'Modern luxury homes designed for comfort and privacy, offering spacious independent floors at an affordable, value-driven price.'
  },
  {
    img: img2,
    title: 'Unique Sapphire',
    desc: 'A refined lifestyle destination offering timeless elegance, premium comfort, and unmatched connectivity in a highly desirable location.'
  },
  {
    img: img3,
    title: 'My Haveli',
    desc: 'One of Jaipur’s largest residential projects, proudly recognized with a Guinness World Record for its massive groundbreaking ceremony.'
  },
];


export default function ElicyonStyleBlogBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const getPrev = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNext = () => (activeIndex + 1) % slides.length;

  return (
    <div className="bg-[#f7f3ef] py-16">
    <div className="relative max-w-[1300px] mx-auto px-4 h-[550px] lg:h-[70vh] flex items-center">


        {/* LEFT CLICK AREA */}
        <div
          className="absolute left-0 top-0 h-full w-1/3 z-30"
          style={{ cursor: "url('/cursors/left.png'), pointer" }}
          onClick={() => swiperRef.current?.slidePrev()}
        />

        {/* RIGHT CLICK AREA */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 z-30"
          style={{ cursor: "url('/cursors/right.png'), pointer" }}
          onClick={() => swiperRef.current?.slideNext()}
        />

        {/* LEFT PREVIEW */}
        <div className="absolute left-4 inset-y-0 flex items-center 
                        w-[110px] lg:w-[150px]  grayscale z-10">
          <img
            src={slides[getPrev()].img}
            className="w-full h-[160px] lg:h-[300px] object-cover shadow-sm"
          />
        </div>

        {/* RIGHT PREVIEW */}
        <div className="absolute right-4 inset-y-0 flex items-center 
                        w-[110px] lg:w-[150px]  grayscale z-10">
          <img
            src={slides[getNext()].img}
            className="w-full h-[160px] lg:h-[300px] object-cover  shadow-sm"
          />
        </div>

        {/* MAIN SLIDER */}
        <div className="relative w-[80%] mx-auto flex items-center justify-center z-20">
          <Swiper
            modules={[Mousewheel]}
            mousewheel={{ forceToAxis: true, sensitivity: 1 }}
            loop
            centeredSlides
            slidesPerView={1}
            speed={900}
            onSwiper={(sw) => (swiperRef.current = sw)}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="w-full"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-center">
                  {/* Main Image */}
                  <img
                    src={item.img}
                    className="max-h-[350px] lg:max-h-screen object-contain transition-all duration-700"
                  />

                  {/* Title + description */}
                  <div
                    className={`mt-4 text-center transition-opacity duration-700 ${
                      activeIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h2 className="text-xl lg:text-2xl  text-[#1a1a1a]">
                      {item.title}
                    </h2>
                    <p className="text-sm  text-[#555] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}
