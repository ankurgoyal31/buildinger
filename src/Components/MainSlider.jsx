import React from "react";
import { Autoplay, Controller, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img3 from "../assets/img/haveli2.png";
import img1 from "../assets/img/newtown.png";
import img2 from "../assets/img/sapphire2.png";

import "swiper/css";
import "swiper/css/navigation";

export default function MainSlider() {
  const [thumbSwiper, setThumbSwiper] = React.useState(null);

  const slides = [
    {
      image: img1,
      title: "Unique New Town",
      description:
        "Redefined luxury meets affordability with spacious independent floors offering unmatched privacy and true value for every homeowner.",
      duration: "Jagatpura",
    },
    {
      image: img2,
      title: "Unique Sapphire",
      description:
        "Welcome To The Everlasting Charm, Of A Preferred Lifestyle At An Unmatched Location",
      duration: "Mansarovar Extension",
    },
    {
      image: img3,
      title: "My Haveli",
      description:
        "One Of The Jaipur's Largest Residential Project, That Holds Guinness World Record For World's Largest Ground Breaking Ceremony",
      duration: "Main Jaipur-Ajmer Expressway",
    },
  ];

  return (
    <section className="relative h-full">
      {/* MAIN SLIDER */}
      <Swiper
        modules={[Autoplay, Thumbs, Controller]}
        autoplay={{ delay: 3000 }}
        loop={true}
        controller={{ control: thumbSwiper }}
        thumbs={{ swiper: thumbSwiper }}
        className="w-full h-full opacity-100"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="grid grid-cols-1 px-3 py-20 bg-overlay lg:grid-cols-2 md:py-28 lg:py-32 xl:py-56 md:px-4 lg:px-8">
                <SlideContent slide={slide} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMB SLIDER */}
      <div className="hidden lg:block absolute top-[10%] -right-8 bg-gray-400 py-2 pl-2 w-[620px] h-[50vh] z-[1]">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, Controller]}
          onSwiper={setThumbSwiper}
          autoplay={{ delay: 3000 }}
          loop={true}
          controller={{ control: thumbSwiper }}
          slidesPerView={2}
          spaceBetween={12}
          className="thumbSlider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                alt="Thumb"
                className="object-cover w-75 h-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-row gap-3 pt-4">
          <button
            className="px-2 py-1 text-white rounded-sm thumb-prev bg-primary hover:bg-acent"
            onClick={() => thumbSwiper.slidePrev()}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            className="px-2 py-1 text-white rounded-sm thumb-next bg-primary hover:bg-acent"
            onClick={() => thumbSwiper.slideNext()}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

const SlideContent = ({ slide }) => (
  <div className="flex flex-col gap-5 md:gap-8">
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-light text-white md:text-3xl lg:text-4xl">
        {slide.title}
      </h2>

      <p className="font-light text-white w-[50%]"> {slide.description}</p>

      <div className="flex gap-3 font-light text-white">
        <p className="text-xl ">{slide.duration}</p>
      </div>
    </div>

    {/* <div className="flex flex-row items-center gap-3 font-light text-white md:gap-4">
      <a href="#" className="py-2 font-light text-white transition bg-black px-7">
        Watch Now <i className="pl-2 fa-solid fa-play"></i>
      </a>

      <button className="py-2 font-light text-white transition bg-black px-7">
        Add To List <i className="pl-2 fa-solid fa-plus"></i>
      </button>

    
    </div> */}
  </div>
);
