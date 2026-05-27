import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import video from "../assets/GreenMeadows.mov";

const BASE_URL = "/proxy-api";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeGallery, setActiveGallery] = useState("Location");
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
     fetch(`${BASE_URL}/api/projects/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Project fetch response:", data.data);
        if (data.success) setProject(data.data);
      });
  }, [slug]);

  if (!project) return <div className="text-center py-20">Loading...</div>;

  /* ================= HERO IMAGES ================= */
  const heroImages = [
    project.heroImage1,
    project.heroImage2,
    project.heroImage3,
  ].filter(Boolean);

  /* ================= GALLERY TABS ================= */
  const galleryTabs = [
    { label: "Location", img: project.locationImage },
    { label: "Master Plan", img: project.masterPlanImage },
    { label: "Floor Plan", img: project.floorPlanImage },
    { label: "Exclusive Club Stand", img: project.exclusiveClubImage },
    { label: "Facilities Near By", img: project.facilitiesNearbyImage },
    { label: "Construction Update", img: project.constructionUpdateImage },
  ].filter((tab) => tab.img);

  return (
    <>
      <Header />

      {/* ================= HERO SLIDER ================= */}
      <div className="w-full h-[90vh]">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-[90vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= PROJECT INTRO ================= */}
      <section className="py-20 text-center px-6">
        {project.logoImage && (
          <img
            src={project.logoImage}
            className="h-24 mx-auto mb-6"
            alt="Project Logo"
          />
        )}

        {/* <h2 className="text-4xl font-light mb-4">{project.name}</h2> */}

        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          {project.address}
        </p>

        {/* ===== BUTTONS ===== */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Download Brochure */}
          {project.brochureFile && (
            <a
              href={project.brochureFile}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-gray-800 transition"
            >
              Download Brochure
            </a>
          )}

          {/* Enquire Now */}
          <a
            href="/connect"
            className="border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition"
          >
            Enquire Now
          </a>
        </div>
      </section>

      

      {/* ================= LUXURY SHOWCASE (ABOUT IMAGE) ================= */}
      {project.aboutImage && (
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-10 items-center">
            <img
              // src={project.aboutImage}
               src={
                "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-full h-[600px] object-cover"
              alt="About Project"
            />
            <div>
              <h2 className="text-4xl font-light mb-6">About The Project</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.aboutDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= FEATURES & AMENITIES ================= */}
      {(project.areaAndLot?.length > 0 ||
        project.interior?.length > 0 ||
        project.exterior?.length > 0) && (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/15 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
            <div className="absolute top-20 left-[-120px] w-[260px] h-[260px] rounded-full bg-[#f5f1eb] blur-3xl opacity-70"></div>
            <div className="absolute bottom-10 right-[-120px] w-[260px] h-[260px] rounded-full bg-[#f8f5f0] blur-3xl opacity-80"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            {/* heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.04em] text-[#111] mb-6">
                Features & Amenities
              </h2>
              <div className="w-24 h-[1px] bg-black/20 mx-auto"></div>
            </div>

            {/* new layout */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              <div className="xl:col-span-4">
                <FeatureCard
                  index="01"
                  title="Area & Lot"
                  items={project.areaAndLot}
                />
              </div>

              <div className="xl:col-span-4">
                <FeatureCard
                  index="02"
                  title="Interior"
                  items={project.interior}
                />
              </div>

              <div className="xl:col-span-4">
                <FeatureCard
                  index="03"
                  title="Exterior"
                  items={project.exterior}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= GALLERY ================= */}
      {galleryTabs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="flex justify-center gap-10 mb-12 flex-wrap">
            {galleryTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveGallery(tab.label)}
                className={`pb-2 transition-all duration-300 ${
                  activeGallery === tab.label
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <img
              src={galleryTabs.find((t) => t.label === activeGallery)?.img}
              className="w-full h-[600px] object-cover"
              alt={activeGallery}
            />
          </div>
        </section>
      )}

      {/* ================= LUXURY VIDEO SHOWCASE ================= */}
      <section className="relative h-[80vh] w-[90%] mx-auto overflow-hidden flex items-center justify-center rounded-2xl">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <h2 className="relative text-white text-5xl font-light tracking-wide text-center z-10">
          Experience Luxury Living
        </h2>
      </section>   
      
      {/* ================= HIGHLIGHTS (TABS STYLE) ================= */}
      {project.highlights?.length > 0 && (
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-light mb-10">Highlights</h2>

          <div className="flex justify-center gap-12 mb-10 flex-wrap">
            {project.highlights.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveHighlight(i)}
                className={`transition-all duration-300 ${
                  activeHighlight === i
                    ? "text-black font-medium"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <img
              src={project.highlights[activeHighlight].image}
              className="w-full h-[500px] object-cover rounded-xl"
              alt={project.highlights[activeHighlight].title}
            />
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      {project.faqs?.length > 0 && (
        <section className="py-20 bg-white">
          <h2 className="text-center text-xl mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="max-w-4xl mx-auto">
            {project.faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b py-5 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="flex justify-between">
                  <h4>{faq.question}</h4>
                  <span>{openFAQ === i ? "−" : "+"}</span>
                </div>

                {openFAQ === i && (
                  <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= CONTACT FORM ================= */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
              Schedule a Showing
            </h2>

            <p className="text-gray-600 leading-relaxed tracking-wide max-w-md mb-10">
              We would love to show you our beautiful property. Please select
              your preferred date and time below. An agent will be in touch
              shortly to confirm your appointment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border border-gray-800 px-8 py-3 tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300">
                CHAT WITH US FOR MORE DETAILS
              </button>

              <button className="border border-gray-800 px-8 py-3 tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300">
                GO TO MORE PROJECTS
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-full">
            <img
              src="https://fastly.picsum.photos/id/391/2980/2151.jpg?hmac=Vm7g1uyLxiCTfcFr1aXyYGRwqi7LMjpXzkatkqekPGQ"
              alt="Schedule a Showing"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= FEATURE CARD ================= */
function FeatureCard({ index, title, items }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // animate only once
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  if (!items || items.length === 0) return null;

  const bgStyles = {
    "01": "bg-[#f5f1eb]",
    "02": "bg-[#f2f4f3]",
    "03": "bg-[#f6f3f0]",
  };

  return (
    <div
      ref={cardRef}
      className={`group relative h-full rounded-[28px] border border-black/10 ${
        bgStyles[index]
      } p-8 md:p-10 will-change-transform transition-all duration-700 ease-out
      ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-10 blur-[6px]"
      }
      hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.06)]`}
      style={{
        transitionDelay:
          index === "01" ? "0ms" : index === "02" ? "120ms" : "240ms",
      }}
    >
      {/* subtle glow on hover */}
      <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-white/40"></div>

      {/* header */}
      <div className="flex items-start justify-between mb-8 relative z-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/35 mb-3">
            {index}
          </p>

          <h3 className="text-2xl md:text-[30px] font-light tracking-wide text-[#111] leading-tight transition duration-300">
            {title}
          </h3>
        </div>

        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 text-sm transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
          ✦
        </div>
      </div>

      {/* divider */}
      <div className="w-full h-px bg-gradient-to-r from-black/15 via-black/5 to-transparent mb-8 relative z-10"></div>

      {/* items */}
      <ul className="space-y-4 relative z-10">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-4 text-[#444] leading-relaxed transition-all duration-500 group-hover:translate-x-[2px] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isVisible
                ? `${180 + i * 90 + (index === "02" ? 80 : index === "03" ? 160 : 0)}ms`
                : "0ms",
            }}
          >
            <span className="mt-[6px] inline-block w-2 h-2 rounded-full bg-black/60 shrink-0 transition-all duration-300 group-hover:scale-125"></span>

            <span className="text-sm md:text-[15px] tracking-[0.01em]">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}