"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import img1 from '../../../../assets/img/projectimg2.png';
import img2 from '../../../../assets/img/sapphire.png';
import img3 from '../../../../assets/img/haveli.png';
import img4 from '../../../../assets/img/vidhyadeep.png';

const slides = [
  {
    img: img1,
    title: 'Unique New Town',
    desc: 'Experience modern luxury homes designed for privacy, comfort, and value, offering spacious independent floors at an affordable price.'
  },
  {
    img: img2,
    title: 'Unique Sapphire',
    desc: 'Discover a refined lifestyle at a prime location, offering elegance, comfort, and timeless charm for modern living.'
  },
  {
    img: img3,
    title: 'My Haveli',
    desc: 'A landmark residential project in Jaipur, proudly holding a Guinness World Record for its grand groundbreaking scale.'
  },
  {
    img: img4,
    title: 'Unique Vidyadeep',
    desc: 'Perfect for frequent travellers and investors seeking a comfortable, modern residence with great rental and leasing potential.'
  },
];


export default function ElicyonStyleBlogBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const getPrev = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNext = () => (activeIndex + 1) % slides.length;

  return (
    <div className="relative flex w-screen overflow-hidden bg-[#f7f3ef] h-[300px] lg:h-screen">

      {/* Left Click Area */}
      <div
        className="absolute top-0 left-0 h-full w-1/3 z-30"
        style={{ cursor: "url('/cursors/left.png'), pointer" }}
        onClick={() => swiperRef.current?.slidePrev()}
      />

      {/* Right Click Area */}
      <div
        className="absolute top-0 right-0 h-full w-1/3 z-30"
        style={{ cursor: "url('/cursors/right.png'), pointer" }}
        onClick={() => swiperRef.current?.slideNext()}
      />

      {/* Left Preview */}
    <div className="w-[8%] lg:w-[15%] h-full">
  <img src={slides[getPrev()].img} className="h-full w-full object-cover" />
</div>

      {/* Main Slider */}
   <div className="w-[84%] lg:w-[70%] h-full flex items-center justify-center">
        <Swiper
          modules={[Mousewheel]}
          mousewheel={{ forceToAxis: true, sensitivity: 1 }}
          loop
          centeredSlides
          slidesPerView={1}
          speed={1000}
          onSwiper={(sw) => (swiperRef.current = sw)}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          className="w-full h-full"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i} className="group">
              <div className="h-full flex flex-col items-center justify-center cursor-pointer">

                <div className="relative w-fit mx-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[220px] lg:max-h-[80vh] object-contain transition-all duration-700"
                  />
                </div>

                <div className={`mt-4 lg:mt-6 text-center px-4 max-w-xl transition-opacity duration-700 
                  ${activeIndex === i ? "opacity-100" : "opacity-0"}`}>
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#1a1a1a]">
                    {item.title}
                  </h2>
                  <p className="text-sm lg:text-base text-[#555] mt-1 lg:mt-2">
                    {item.desc}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Preview */}
     <div className="w-[8%] lg:w-[15%] h-full">
  <img src={slides[getNext()].img} className="h-full w-full object-cover" />
</div>
    </div>
  );
}
