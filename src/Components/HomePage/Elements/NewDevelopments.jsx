import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "THE HAMILTON",
    location: "33 HAMILTON AVENUE",
    img: "https://placehold.co/600x800/334155/ffffff?text=The+Hamilton",
  },
  {
    title: "99 HUDSON",
    location: "99 HUDSON STREET",
    img: "https://placehold.co/600x800/475569/ffffff?text=99+Hudson",
  },
  {
    title: "Casa Bella",
    location: "1444 BISCAYNE BOULEVARD",
    img: "https://placehold.co/600x800/64748B/ffffff?text=Casa+Bella",
  },
  {
    title: "Skyline Tower",
    location: "LONG ISLAND CITY",
    img: "https://placehold.co/600x800/94A3B8/ffffff?text=Skyline+Tower",
  },
  {
    title: "Project Five",
    location: "SOMEWHERE NICE",
    img: "https://placehold.co/600x800/334155/ffffff?text=Project+Five",
  },
];

const SliderStyles = () => (
  <style>{`
    .custom-swiper {
      padding: 40px 0;
    }

    .custom-swiper .swiper-slide {
      width: 280px;
      height: 400px;
      transition: all 0.4s ease;
      position: relative;
    }

    /* Center Slide */
    .custom-swiper .swiper-slide-active {
      transform: scale(1.1);
      z-index: 10;
    }

    /* Side Slides (Prev + Next) */
    .custom-swiper .swiper-slide-prev::after,
    .custom-swiper .swiper-slide-next::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.45); /* 👈 tint overlay */
      border-radius: 12px;
      z-index: 2;
    }

    /* Keep center clean */
    .custom-swiper .swiper-slide-active::after {
      display: none;
    }

    /* Navigation buttons */
    .custom-swiper .swiper-button-next,
    .custom-swiper .swiper-button-prev {
      color: #fff;
      background: rgba(0,0,0,0.3);
      width: 44px;
      height: 44px;
      border-radius: 50%;
    }
    .custom-swiper .swiper-button-next:hover,
    .custom-swiper .swiper-button-prev:hover {
      background: rgba(0,0,0,0.6);
    }
    .custom-swiper .swiper-button-next:after,
    .custom-swiper .swiper-button-prev:after {
      font-size: 18px;
      font-weight: bold;
    }
  `}</style>
);

export default function NewDevelopments() {
  return (
    <>
      <SliderStyles />
      <section className="py-16 text-center bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-slate-800">
            New Developments
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-sm md:text-base">
            Nest Seekers International is a game-changing firm in the rapidly
            expanding global real estate marketplace.
          </p>

          <div className="mt-10">
            <Swiper
              modules={[Navigation]}
              navigation
              centeredSlides
              loop
              slidesPerView={3}
              className="custom-swiper"
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full shadow-lg rounded-xl overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-left z-10">
                      <h3 className="text-xl font-bold uppercase">
                        {project.title}
                      </h3>
                      <p className="text-sm uppercase font-light mt-1">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
