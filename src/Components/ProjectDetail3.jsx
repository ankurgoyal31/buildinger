import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import video from "../assets/walkthrough/IS Paradise.mp4";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";
import { ChevronLeft, ChevronRight, ShowerHead } from "lucide-react";

import plan2 from '../assets/gallery/IsParadise/plan/1.png'
import plan3 from '../assets/gallery/IsParadise/plan/2.png'
import plan4 from '../assets/gallery/IsParadise/plan/3.png'

import intro from "../assets/projects/intro.png";
import plan from "../assets/projects/plan.png";
import gallery from "../assets/projects/gallery.png";
import gallery2 from '../assets/gallery/IsParadise/1.png'
import gallery3 from '../assets/gallery/IsParadise/2.png'
import gallery4 from '../assets/gallery/IsParadise/3.png'

import location from "../assets/projects/location.png";
import construction from "../assets/projects/con.jpg";
import about from "../assets/projects/about.png";
import amenitiese from "../assets/projects/ame.png";
import ame2 from '../assets/gallery/IsParadise/amenities/1.png'
import ame3 from "../assets/gallery/IsParadise/amenities/2.png"

import const2 from '../assets/gallery/IsParadise/construction/1.png'
import const3 from '../assets/gallery/IsParadise/construction/2.png'
import const4 from '../assets/gallery/IsParadise/construction/3.png'

import plan5 from '../assets/gallery/IsParadise/plan/4.png'
import plan6 from '../assets/gallery/IsParadise/plan/5.png'
import plan7 from '../assets/gallery/IsParadise/plan/6.png'
import plan8 from '../assets/gallery/IsParadise/plan/7.png'

const BASE_URL = "/proxy-api";

const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeMedia, setActiveMedia] = useState("Location");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const[videoUrl,setVideoUrl]=useState([]);
  const[locationMapLink,setLocationMapLink]=useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  //==============================STATIC SHOWCASE START==============================

  const showcaseItems = [
    // Turn any item into a slider by providing an array of image URLs / imports.
    {
      label: "Plans",
      img:videoUrl[0]?.masterPlanImages?.length > 0 ? videoUrl[0]?.masterPlanImages : ["https://img.magnific.com/free-vector/no-data-concept-illustration_114360-536.jpg"]  ,
    },
    {
      label: "Amenities",
      img:videoUrl[0]?.floorPlanImages?.length > 0 ? videoUrl[0]?.floorPlanImages : ["https://img.magnific.com/free-vector/no-data-concept-illustration_114360-536.jpg"]  ,
    },
    {
      label: "Location",
      img:location,
    },
    {
      label: "Gallery",
      img: videoUrl[0]?.facilitiesNearbyImages?.length > 0 ? videoUrl[0]?.facilitiesNearbyImages : ["https://img.magnific.com/free-vector/no-data-concept-illustration_114360-536.jpg"],
    },
  ]; 

  console.log("showcase items ",showcaseItems[0]);
  const [activeShowcase, setActiveShowcase] = useState(showcaseItems[0].label);

  const activeShowcaseItem =
    showcaseItems.find((item) => item.label === activeShowcase) ||
    showcaseItems[0];

  const activeShowcaseIndex = showcaseItems.findIndex(
    (item) => item.label === activeShowcase,
  );
  // ---- NEW: map link + embed URL for Location tab (improved) ----
  const MAP_SHORT_LINK = "https://maps.app.goo.gl/qvp2BhAjUssJgx3v5";
  
  const mapEmbedUrl = useMemo(() => {
    if (activeShowcase !== "Location") return null;
    
    // Get link from API or fallback
    const link = videoUrl[0]?.locationMapLink || 
      project?.googleMapsLink ||
      project?.locationLink ||
      project?.locationMapUrl ||
      project?.mapUrl || 
      project?.location ||
      project?.address ||
      MAP_SHORT_LINK;
      
    if (!link) return null;
    
    // If it's already an embed URL, return it
    if (link.includes("/embed") || link.includes("output=embed")) {
      return link;
    }
    
    // If link is a "lat,lng" pair (e.g. "26.9145,75.7878") embed using coords.
    const latLngMatch = String(link).match(/(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/);
    if (latLngMatch) {
      const q = encodeURIComponent(`${latLngMatch[1]},${latLngMatch[2]}`);
      return `https://www.google.com/maps?q=${q}&z=17&output=embed`;
    }
    
    // Fallback: use link as query
    const q = encodeURIComponent(link);
    return `https://www.google.com/maps?q=${q}&z=17&output=embed`;
  }, [activeShowcase, project, videoUrl]);


useEffect(() => {
  fetch(`https://back-bulding-code-ofzs.onrender.com/projects_video/${slug}`) 
    .then((res) => res.json())
    .then((data) => {
      console.log("FULL RESPONSE:", data);
      // if (data?.length>0) {
        // const lastProject = data[7];
        console.log("VIDEO URL:", data);
        setVideoUrl([data]);
        setProject(data);
    //  setLocationMapLink(data?.locationMapLink || data?.location || data?.address || "");
// setLocationMapLink(projectData?.locationMapLink || projectData?.location || projectData?.address || "");
      // } 
    })
    .catch((err) => console.error("Project fetch error:", err));
}, []);

console.log("LOCATION MAP LINK: ->>>>>", locationMapLink);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 110;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
console.log("video url->>>> ",videoUrl[0]?.projectVideo);

  const heroImages = useMemo(() => {
    if (!project) return [];
    return [project.heroImage1, project.heroImage2, project.heroImage3]
      .filter(Boolean)
      .map(getImageUrl);
  }, [project]);

  const mediaTabs = useMemo(() => {
    if (!project) return [];
    return [
      { label: "Location", img:getImageUrl(project.locationImage) },
      { label: "Master Plan", img: project.masterPlanImage ? getImageUrl(project.masterPlanImage) : null },
      { label: "Floor Plan", img: project.floorPlanImage ? getImageUrl(project.floorPlanImage) : null },
      { label: "Clubhouse", img: project.clubhouseImage ? getImageUrl(project.clubhouseImage) : null },
      {
        label: "Nearby Facilities",
        img: project.nearbyFacilitiesImage ? getImageUrl(project.nearbyFacilitiesImage) : null,
      },
//      {
//   label: "Construction",
//   img:
//     videoUrl[0]?.constructionUpdateImages?.length > 0
//       ? videoUrl[0]?.constructionUpdateImages
//       : [ 
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
//         ],
// },
    ].filter((tab) => tab.img);  
  }, [project]);
console.log("media tabs->>>>>>ooollkmkmlcnb ",videoUrl[0]?.constructionUpdateImage);
  useEffect(() => {
    if (
      mediaTabs.length > 0 &&
      !mediaTabs.some((item) => item.label === activeMedia)
    ) {
      setActiveMedia(mediaTabs[0].label);
    }
  }, [mediaTabs, activeMedia]);

  const activeMediaItem = useMemo(
    () =>
      mediaTabs.find((item) => item.label === activeMedia) ||
      mediaTabs[0] ||
      null,
    [mediaTabs, activeMedia],
  );
console.log("active media item ",videoUrl);
  const activeMediaIndex = useMemo(
    () => mediaTabs.findIndex((item) => item.label === activeMedia),
    [mediaTabs, activeMedia],
  );

  const featureGroups = useMemo(() => {
    if (!project) return [];
    return [
      {
        title: "Area & Planning",
        items:
          project.areaAndLot ||
          project.area_and_lot ||
          project.areaPlanning ||
          project.area_and_planning ||
          project.areaLot ||
          [],
      },
      {
        title: "Interior Features",
        items:
          project.interior ||
          project.interiorFeatures ||
          project.interior_features ||
          [],
      },
      {
        title: "Exterior Features",
        items:
          project.exterior ||
          project.exteriorFeatures ||
          project.exterior_features ||
          [],
      },
    ].filter((group) => Array.isArray(group.items) && group.items.length > 0);
  }, [project]);

  const allFeatureCount = featureGroups.reduce(
    (acc, group) => acc + group.items.length,
    0,
  );
console.log("feature groups ",videoUrl[0]?.locationMapLink);
  const highlights = useMemo(() => {
    const raw =
      project?.highlights ||
      project?.projectHighlights ||
      project?.project_highlights ||
      [];
    return Array.isArray(raw) ? raw : [];
  }, [project]);

console.log("LOCATION:", videoUrl[0]?.mapLocationLink || videoUrl[0]?.location || videoUrl[0]?.address);
console.log("MAP LINK:", videoUrl);

  const faqs = useMemo(() => {
    const raw = project?.faqs || [];
    return Array.isArray(raw) ? raw : [];
  }, [project]);

  const openEnquireModal = () => {
    setModalOpen(true);
    setFormSubmitted(false);
  };

  const closeEnquireModal = () => setModalOpen(false);

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.phone) return;
    console.log("Enquiry submitted:", { project: project?.name, ...formData });
    setFormSubmitted(true);
  };

  if (!project) {
    return (
      <div style={S.loadingWrap}>
        <div style={S.loadingBar} />
        <p style={S.loadingText}>Loading project</p>
      </div>
    );
  }

// console.log("this id video->>>>>",videoUrl[0]);
  return (
    <>
      <style>{css}</style>
      <Header />
      <main className="bg-[#f8f6f2] text-[#151515]">
        {/* ================= HERO ================= */}
        <section className="relative h-screen min-h-[760px] overflow-hidden">
          {heroImages.length > 0 ? (
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              effect="fade"
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500 }}
              loop
              className="h-full"
            >
              {heroImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />   
                </SwiperSlide>  
              ))}
            </Swiper>
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#1d1d1d,#434343)]" />
          )}

          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.12),rgba(0,0,0,0.42))]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex items-end pb-16 md:pb-20">
            <div className="w-full">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="border border-white/25 bg-white/10 backdrop-blur-sm text-white text-[11px] tracking-[0.25em] uppercase px-4 py-2 rounded-none">
                    Residential Project
                  </span>

                  {project.address && (
                    <span className="border border-white/25 bg-white/10 backdrop-blur-sm text-white/90 text-[11px] tracking-[0.18em] uppercase px-4 py-2 rounded-none">
                      Prime Address
                    </span>
                  )}
                </div>

                <h1 className="text-white text-5xl md:text-7xl font-light leading-[0.95] mb-5">
                  {project.name || "Project Details"}
                </h1>

                <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                  {project.aboutDescription
                    ? project.aboutDescription.length > 220
                      ? `${project.aboutDescription.slice(0, 220)}...`
                      : project.aboutDescription
                    : project.address}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.brochureFile && (
                    <a
                      href={getImageUrl(project.brochureFile)}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 text-sm tracking-[0.18em] uppercase rounded-none hover:bg-[#ece7df] transition-all duration-300"
                    >
                      Download Brochure
                    </a>
                  )}

                  <button
                    onClick={() => scrollToSection("enquire")}
                    className="inline-flex items-center justify-center border border-white/35 text-white px-8 py-3.5 text-sm tracking-[0.18em] uppercase rounded-none hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
                <InfoMiniItem label="Project Type" value="Luxury Residences" />
                <InfoMiniItem
                  label="Media Sections"
                  value={String(mediaTabs.length || 0).padStart(2, "0")}
                />
                <InfoMiniItem
                  label="Highlights"
                  value={String(highlights.length || 0).padStart(2, "0")}
                />
                <InfoMiniItem
                  label="Amenities"
                  value={String(allFeatureCount || 0).padStart(2, "0")}
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
              <InfoMiniItem label="Project Type" value="Luxury Residences" />
              <InfoMiniItem
                label="Media Sections"
                value={String(mediaTabs.length || 0).padStart(2, "0")}
              />
              <InfoMiniItem
                label="Highlights"
                value={String(highlights.length || 0).padStart(2, "0")}
              />
              <InfoMiniItem
                label="Amenities"
                value={String(allFeatureCount || 0).padStart(2, "0")}
              />
            </div>
          </div>
        </section>

        {project.logoImage && (
          <section className="relative z-20 px-6 md:px-10 lg:px-16 -mt-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center">
                {/* SMALL BOX */}
                <div className="relative inline-flex items-center justify-center bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] px-6 md:px-8 py-3 md:py-4">
                  {/* LOGO BIGGER */}
                  <img
                    src={getImageUrl(project.logoImage)}
                    alt={project.name || "Project Logo"}
                    className="h-[70px] md:h-[90px] lg:h-[110px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= QUICK FACT STRIP ================= */}
        <section className="relative z-10 mt-6 md:mt-8 px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto bg-white border border-black/8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <FactStripItem
                title="Location"
                value={videoUrl[0]?.location|| "Prime Location"}
              />
              <FactStripItem title="Price" value={videoUrl[0]?.priceRange || "Call for Price"} />
              <FactStripItem title="Type" value={videoUrl[0]?.category || "default: Apartment"} />
              <FactStripItem title="Bedrooms" value={videoUrl[0]?.bedrooms || "default: 2 & 3 BHK"} />
              <FactStripItem title="Area" value={videoUrl[0]?.area || "default: 4.38 Acres"} />
              <FactStripItem 
                title="RERA No."
                value={videoUrl[0]?.reraNumber || "RERA Registered"}
              />
            </div>
          </div>
        </section>

        {/* ================= STICKY SECTION NAV ================= */}
        <section className="sticky top-[76px] z-30 backdrop-blur-md bg-[#f8f6f2]/85 border-y border-black/6 mt-12">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            {/* CENTER ALIGN FIX */}
            <div className="flex justify-center">
              <div className="flex gap-6 md:gap-8 overflow-x-auto py-4 text-[12px] md:text-[12px] tracking-[0.22em] whitespace-nowrap">
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  Overview
                </button>

                {/* ✅ UPDATED */}
                <button
                  onClick={() => scrollToSection("plans")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  Plans
                </button>

                {/* ✅ NEW SECTION */}
                <button
                  onClick={() => scrollToSection("GALLERY")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  Gallery
                </button>

                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  Amenities
                </button>

                {/* <button
          onClick={() => scrollToSection("highlights")}
          className="text-[#1b1b1b] hover:text-black transition uppercase"
        >
          Highlights
        </button> */}

                <button
                  onClick={() => scrollToSection("walkthrough")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  Walkthrough
                </button>

                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  FAQ
                </button>

                <button
                  onClick={() => scrollToSection("enquire")}
                  className="text-[#1b1b1b] hover:text-black transition uppercase"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* ================= OVERVIEW ================= */}
        <section id="overview" style={S.section}>
          <div className="pd-overview-grid">
            <div>
              {/* <span style={S.label}>01 — Overview</span> */}
              <h2 style={{ ...S.heading, textAlign: "left" }}>
                Crafted for elevated living.
              </h2>
              <p style={S.body}>
                {project.aboutDescription ||
                  "This project is designed to offer a premium residential lifestyle through thoughtful planning, strong visual identity, and a better balance of architecture, comfort, and everyday convenience."}
              </p>
              <div style={S.overviewActions}>
                {project.brochureFile && (
                  <a
                    href={getImageUrl(project.brochureFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={S.btnDark}
                    className="pd-btn-dark"
                  >
                    Get Brochure
                  </a>
                )}
              </div>
            </div>

            <div style={S.overviewImgWrap}>
              <img src={intro} alt="Project" style={S.overviewImg} />
              {/* <div style={S.overviewImgTag}>Luxury Residences</div> */}
            </div>
          </div>
        </section>

       {/* ================= SHOWCASE STATIC ================= */}
<section id="plans" style={S.showcase}>
  <div style={S.showcaseShell}>
    <div style={S.showcaseHeader}>
      <h2 style={S.heading}>Project Showcase</h2>
    </div>

    <div className="pd-showcase-layout">
      {/* LEFT MENU */}
      <div className="pd-showcase-menu">
        {showcaseItems.map((item, i) => {
          const active = activeShowcase === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActiveShowcase(item.label)}
              style={{
                ...S.menuItem,
                ...(active ? S.menuItemActive : {}),
              }}
              className={`pd-menu-item${
                active ? " pd-menu-item--active" : ""
              }`}>

              <span style={S.menuItemNum}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <span style={S.menuItemLabel}>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* RIGHT VISUAL */}
      <div style={S.visual} className="pd-visual">
        <div style={S.visualFrame}>
          {/* ===== LOCATION (MAP) ===== */}
           {/* {activeShowcaseItem.label === "Location" ? (
            <div
              key="location-wrap"
              style={{
                position: "relative",
                width: "100%",
                height: S.visualImg.height,
                overflow: "hidden",
                background: "#eee",
              }}
            >
              {locationMapLink ? (
                <iframe
                  src={locationMapLink}
                  title="Project location"
                  style={{
                    width: "100%",
                    height: "100%", 
                    border: 0,
                    display: "block",
                  }}
                  className="pd-visual-img"
                  loading="lazy"  
                  allowFullScreen
                />
              ) : (
                <a
                  href={videoUrl[0]?.locationMapLink || project.address || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <img
                    src={activeShowcaseItem.img}
                    alt="Open location in maps"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
              )}
            </div>}: ( */}


      {activeShowcaseItem.label === "Location" ? (
  <div
    key="location-wrap"
    style={{
      position: "relative",
      width: "100%",
      height: S.visualImg.height,
      overflow: "hidden",
      background: "#eee",
    }}
  >
    {mapEmbedUrl ? (
      <iframe
        src={mapEmbedUrl}
        title="Project location"
        style={{
          width: "100%",
          height: "100%", 
          border: 0,
          display: "block",
        }}
        className="pd-visual-img"
        loading="lazy"  
        allowFullScreen
      />
    ) : (
      <a
        href={videoUrl[0]?.locationMapLink || project?.address || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <img
          src={activeShowcaseItem.img}
          alt="Open location in maps"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </a>
    )}
  </div>
) : (
  <>
    {/* Slider or single image code */}
    {Array.isArray(activeShowcaseItem.img) ? (
      <>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".pd-swiper-next",
            prevEl: ".pd-swiper-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          className="h-full"
        >
          {activeShowcaseItem.img.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${activeShowcaseItem.label}-${i}`}
                style={S.visualImg}
                className="pd-visual-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="pd-swiper-prev">
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>

        <button className="pd-swiper-next">
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </>
    ) : (
      <img
        src={activeShowcaseItem.img}
        alt={activeShowcaseItem.label}
        style={S.visualImg}
        className="pd-visual-img"
      />
    )}
  </>
)}

          {/* FOOTER */}
          <div style={S.visualFooter}>
            <span style={S.visualFooterLabel}>
              {activeShowcaseItem.label}
            </span>
            <span style={S.visualFooterCount}>
              {String(activeShowcaseIndex + 1).padStart(2, "0")} /{" "}
              {String(showcaseItems.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ================= AMENITIES ================= */}
        {featureGroups.length > 0 && (
          <section id="amenities" style={S.section}>
            {/* <span style={S.label}>03 — Features & Amenities</span> */}
            <h2 style={{ ...S.heading, marginBottom: 48 }}>
              Comfort and lifestyle — organised.
            </h2>

            <div className="pd-amenities-grid">
              {featureGroups.map((group, idx) => (
                <div key={group.title} className="pd-amenity-group">
                  <div style={S.amenityGroupHead}>
                    <span style={S.amenityNum}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 style={S.amenityTitle}>{group.title}</h3>
                  </div>

                  <div style={S.divider} />

                  <ul style={S.amenityList}>
                    {group.items.map((item, i) => (
                      <li key={i} style={S.amenityItem}>
                        <span style={S.amenityDash}>—</span>
                        <span style={S.amenityText}>
                          {item?.title || item?.name || item?.label || item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= HIGHLIGHTS ================= */}
        {highlights.length > 0 && (
          <section id="highlights" style={S.highlights}>
            <div style={S.highlightsHead}>
              {/* <span style={{ ...S.label, color: "#555" }}>
                04 — Signature Highlights
              </span> */}
              <h2 style={{ ...S.heading, color: "#f0ede8", maxWidth: 600 }}>
                Moments that define the project.
              </h2>
            </div>

            <div className="pd-highlights-grid">
              {highlights.map((item, i) => (
                <div key={i} className="pd-hl-card">
                  <div style={S.hlImgWrap}>
                    <img
src={
  item?.image || item?.img || item?.photo
    ? getImageUrl(item?.image || item?.img || item?.photo)
    : "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
}                      alt={item?.title || "Highlight"}
                      style={S.hlImg}
                      className="pd-hl-img"
                    />
                    <div style={S.hlOverlay} />
                  </div>

                  <div style={S.hlBody}>
                    <span style={S.hlNum}>
                      Highlight {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 style={S.hlTitle}>
                      {item?.title ||
                        item?.name ||
                        `Highlight ${String(i + 1).padStart(2, "0")}`}
                    </h3>
                    <p style={S.hlDesc}>
                      {item?.description || item?.desc || ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= WALKTHROUGH ================= */}
        <section id="walkthrough" style={S.section}>
          {/* <span style={S.label}>05 — Walkthrough</span> */}
          <h2 style={{ ...S.heading, marginBottom: 32 }}>
            Project Walkthrough
          </h2>

          <div style={S.walkthrough}>
            <video
           style={videoUrl ? S.walkthroughVideo : { display: "none" }}   
           src={videoUrl[0]?.projectVideo || video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>

        {/* ================= FAQ ================= */}
        {faqs.length > 0 && (
          <section id="faq" style={S.section}>
            <div className="pd-faq-grid">
              <div style={S.faqLeft}>
                {/* <span style={S.label}>06 — FAQ</span> */}
                <h2 style={{ ...S.heading, textAlign: "left", maxWidth: 320 }}>
                  Things You Should Know
                </h2>
              </div>

              <div style={S.faqRight}>
                {faqs.map((faq, i) => {
                  const open = openFAQ === i;
                  return (
                    <div key={i} style={S.faqItem}>
                      <button
                        onClick={() => setOpenFAQ(open ? null : i)}
                        style={S.faqQ}
                      >
                        <span style={S.faqQText}>{faq.question}</span>
                        <span
                          style={{
                            ...S.faqIcon,
                            transform: open ? "rotate(45deg)" : "none",
                          }}
                        >
                          +
                        </span>
                      </button>

                      {open && (
                        <div style={S.faqA}>
                          <p style={S.faqAText}>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================= ENQUIRE ================= */}
        <section id="enquire" className="pd-closing-strip">
          <div className="pd-closing-left">
            {/* <span style={S.label}>07 — Get In Touch</span> */}
            <h2
              style={{
                ...S.heading,
                textAlign: "left",
                maxWidth: 480,
                marginBottom: 12,
              }}
            >
              Ready to take the next step?
            </h2>
            <p style={{ ...S.body, marginBottom: 36 }}>
              Our team is available to walk you through the project, answer your
              questions, and help you find the right home.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={openEnquireModal}
                style={S.btnDark}
                className="pd-btn-dark"
              >
                Enquire Now
              </button>

              {project.brochureFile && (
                <a
                  href={getImageUrl(project.brochureFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={S.btnOutline}
                  className="pd-btn-outline"
                >
                  Download Brochure
                </a>
              )}
            </div>
          </div>

          <div className="pd-closing-right">
            <img
              src={
                heroImages[1] ||
                heroImages[0] ||
                "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1932&auto=format&fit=crop"
              }
              alt="Project"
              style={S.closingImg}
            />
          </div>
        </section>

        {/* ================= ENQUIRE MODAL ================= */}
        {modalOpen && (
          <div style={S.modalBackdrop} onClick={closeEnquireModal}>
            <div style={S.modalBox} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeEnquireModal}
                style={S.modalClose}
                className="pd-modal-close"
              >
                ✕
              </button>

              {formSubmitted ? (
                <div style={S.modalSuccess}>
                  <div style={S.modalSuccessTick}>✓</div>
                  <h3 style={S.modalSuccessTitle}>We'll be in touch.</h3>
                  <p style={S.modalSuccessText}>
                    Thank you for your interest in{" "}
                    {project.name || "this project"}. Our sales team will reach
                    out within 24 hours.
                  </p>
                  <button
                    onClick={closeEnquireModal}
                    style={{ ...S.btnDark, marginTop: 24 }}
                    className="pd-btn-dark"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div style={S.modalHeader}>
                    <span style={S.modalEyebrow}>Enquire Now</span>
                    <h3 style={S.modalTitle}>Schedule a Consultation</h3>
                    <p style={S.modalSubtitle}>
                      Fill in your details and we'll get back to you within 24
                      hours.
                    </p>
                  </div>

                  <div style={S.modalForm}>
                    <div className="pd-field-row">
                      <div style={S.fieldGroup}>
                        <label style={S.fieldLabel}>Full Name *</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Your name"
                          style={S.fieldInput}
                          className="pd-field-input"
                        />
                      </div>

                      <div style={S.fieldGroup}>
                        <label style={S.fieldLabel}>Phone Number *</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+91 00000 00000"
                          style={S.fieldInput}
                          className="pd-field-input"
                        />
                      </div>
                    </div>

                    <div style={S.fieldGroup}>
                      <label style={S.fieldLabel}>Email Address</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your@email.com"
                        style={S.fieldInput}
                        className="pd-field-input"
                      />
                    </div>

                    <div style={S.fieldGroup}>
                      <label style={S.fieldLabel}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Any specific questions or requirements…"
                        rows={3}
                        style={{
                          ...S.fieldInput,
                          resize: "vertical",
                          minHeight: 80,
                        }}
                        className="pd-field-input"
                      />
                    </div>

                    <button
                      onClick={handleFormSubmit}
                      style={{
                        ...S.btnDark,
                        width: "100%",
                        justifyContent: "center",
                        padding: "16px 28px",
                        fontSize: 11,
                        opacity: !formData.name || !formData.phone ? 0.5 : 1,
                        cursor:
                          !formData.name || !formData.phone
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      Submit Enquiry
                    </button>

                    <p style={S.modalDisclaimer}>
                      By submitting you agree to be contacted by the sales team
                      regarding this project.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>

      <AutoReveal>
        <InstagramSection />
      </AutoReveal>

      <Footer />
    </>
  );
}

/* ================= SMALL COMPONENTS ================= */

function InfoMiniItem({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-white/55 mb-2">
        {label}
      </p>
      <p className="text-white text-[20px] md:text-[22px] font-light">
        {value}
      </p>
    </div>
  );
}

function FactStripItem({ title, value, noBorder = false }) {
  return (
    <div
      className={`group relative px-6 md:px-7 py-6 md:py-7 
      bg-[linear-gradient(180deg,#ffffff,#fbf8f3)] 
      transition-all duration-300 
      hover:bg-[linear-gradient(180deg,#fffdf9,#f6f0e8)] 
      hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]   /* subtle lift */
      ${
        !noBorder ? "md:border-r border-black/8" : ""
      } border-b md:border-b-0 border-black/8`}
    >
      {/* Top subtle line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5"></div>

      {/* Title */}
      <p className="text-[14px] uppercase tracking-[0.22em] text-black/65 mb-2 transition-all duration-300 group-hover:text-[#0095e6]">
        {title}
      </p>

      {/* Value */}
      <p className="text-[#111] text-[18px] md:text-[18px] leading-[1.6] font-medium tracking-[0.02em] transition-all duration-300 group-hover:translate-x-[2px]">
        {value}
      </p>

      {/* Bottom hover underline */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#0095e6] transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}

const S = {
  loadingWrap: {
    minHeight: "100vh",
    background: "#f5f2ed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  loadingBar: {
    width: 40,
    height: 1,
    background: "#1a1a1a",
    animation: "pd-pulse 1.4s ease-in-out infinite",
  },
  loadingText: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "#999",
    margin: 0,
  },

  btnDark: {
    display: "inline-flex",
    alignItems: "center",
    background: "#1a1a1a",
    color: "#f5f2ed",
    padding: "13px 28px",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  btnOutline: {
    display: "inline-flex",
    alignItems: "center",
    background: "transparent",
    color: "#1a1a1a",
    padding: "13px 28px",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    border: "1px solid #d8d4cc",
    cursor: "pointer",
    transition: "all 0.2s",
    textDecoration: "none",
  },

  section: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "64px 40px",
    borderBottom: "1px solid #d8d4cc",
  },
  label: {
    display: "block",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 14,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "#4f4e4eff",
    marginBottom: 20,
    textAlign: "left",
  },
  heading: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "clamp(24px, 3vw, 42px)",
    fontWeight: 300,
    lineHeight: 1.04,
    color: "#1a1a1a",
    margin: "0 0 24px",
    letterSpacing: "-0.01em",
    textAlign: "center",
  },
  body: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 18,
    lineHeight: 1.85,
    color: "#555",
    margin: 0,
  },
  divider: {
    height: 1,
    background: "#d8d4cc",
    marginBottom: 24,
  },

  overviewActions: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 36,
  },
  overviewImgWrap: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  overviewImg: {
    width: "100%",
    maxWidth: "420px",
    aspectRatio: "3 / 4",
    objectFit: "cover",
    display: "block",
    marginLeft: "auto",
    transform: "none",
  },
  overviewImgTag: {
    position: "absolute",
    bottom: 0,
    right: 0,
    background: "#ffffff",
    padding: "14px 20px",
    borderTop: "1px solid #d8d4cc",
    borderLeft: "1px solid #d8d4cc",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#999",
  },

  showcase: {
    background: "#f1ece5",
    borderTop: "1px solid #d8d4cc",
    borderBottom: "1px solid #d8d4cc",
  },
  showcaseShell: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "80px 48px",
  },
  showcaseHeader: {
    marginBottom: 44,
  },
  menuMeta: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 14,
    marginBottom: 8,
    borderBottom: "1px solid rgba(26,26,26,0.12)",
    paddingLeft: 20,
  },
  menuMetaText: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#999",
  },
  menuItem: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "36px 1fr",
    textTransform: "uppercase",
    alignItems: "center",
    gap: 12,
    width: "100%",
    textAlign: "left",
    background: "transparent",
    border: "none",
    padding: "8px 0 8px 20px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    color: "#555",
  },
  menuItemActive: { color: "#1a1a1a" },
  menuItemNum: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 9,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#999",
  },
  menuItemLabel: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 1.05,
  },
  visual: {},
  visualFrame: {
    position: "relative",
    overflow: "hidden",
    background: "#ddd",
  },
  visualImg: {
    width: "100%",
    height: 580,
    objectFit: "cover",
    display: "block",
    transition: "transform 0.7s ease, opacity 0.3s ease",
  },
  visualFooter: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    background:
      "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 100%)",
  },
  visualFooterLabel: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: "#f3eee8",
  },
  visualFooterCount: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: "#f3eee8",
  },

  amenityGroupHead: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    marginBottom: 20,
  },
  amenityNum: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 9,
    color: "#999",
    letterSpacing: "0.2em",
    paddingTop: 4,
  },
  amenityTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 22,
    fontWeight: 300,
    color: "#1a1a1a",
    margin: 0,
  },
  amenityList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  amenityItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  amenityDash: {
    color: "#999",
    fontSize: 11,
    lineHeight: 1.9,
    flexShrink: 0,
  },
  amenityText: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 18,
    lineHeight: 1.75,
    color: "#555",
  },

  highlights: {
    background: "#141412",
    borderTop: "1px solid #2a2a28",
  },
  highlightsHead: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "64px 48px 40px",
    borderBottom: "1px solid #2a2a28",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  hlImgWrap: {
    position: "relative",
    overflow: "hidden",
  },
  hlImg: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    display: "block",
    transition: "transform 0.7s ease",
   },
  hlOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(14,14,12,0.6) 0%, transparent 55%)",
  },
  hlBody: {
    padding: "24px 28px 32px",
    borderTop: "1px solid #2a2a28",
  },
  hlNum: {
    display: "block",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: "#8f8b84",
    marginBottom: 12,
  },
  hlTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 22,
    fontWeight: 300,
    lineHeight: 1.05,
    color: "#f5f2ed",
    margin: "0 0 10px",
  },
  hlDesc: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 14,
    lineHeight: 1.8,
    color: "#aaa59d",
    margin: 0,
  },

  walkthrough: {
    position: "relative",
    height: "70vh",
    minHeight: 400,
    overflow: "hidden",
  },
  walkthroughVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  faqLeft: {},
  faqRight: {},
  faqItem: {
    borderTop: "1px solid #d8d4cc",
  },
  faqQ: {
    width: "100%",
    background: "transparent",
    border: "none",
    padding: "12px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    cursor: "pointer",
    textAlign: "left",
  },
  faqQText: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 18,
    lineHeight: 1.1,
    fontWeight: 300,
    color: "#1a1a1a",
  },
  faqIcon: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 28,
    color: "#999",
    transition: "transform 0.25s ease",
    flexShrink: 0,
  },
  faqA: {
    padding: "0 0 24px",
  },
  faqAText: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 16,
    lineHeight: 1.8,
    color: "#555",
    margin: 0,
    maxWidth: 760,
  },

  closingImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(10,10,10,0.55)",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  modalBox: {
    width: "100%",
    maxWidth: 760,
    background: "#f8f6f2",
    border: "1px solid #d8d4cc",
    position: "relative",
    padding: "42px 38px",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  modalClose: {
    position: "absolute",
    top: 18,
    right: 18,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 18,
    color: "#555",
  },
  modalHeader: {
    marginBottom: 28,
  },
  modalEyebrow: {
    display: "block",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.26em",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 12,
  },
  modalTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 32,
    lineHeight: 1.04,
    fontWeight: 300,
    color: "#1a1a1a",
    margin: "0 0 12px",
  },
  modalSubtitle: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 14,
    lineHeight: 1.8,
    color: "#555",
    margin: 0,
    maxWidth: 520,
  },
  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  fieldLabel: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#999",
  },
  fieldInput: {
    width: "100%",
    border: "1px solid #d8d4cc",
    background: "#fff",
    padding: "14px 16px",
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 14,
    color: "#1a1a1a",
    outline: "none",
  },
  modalDisclaimer: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 12,
    lineHeight: 1.7,
    color: "#888",
    margin: 0,
  },
  modalSuccess: {
    textAlign: "center",
    padding: "26px 10px 10px",
  },
  modalSuccessTick: {
    width: 62,
    height: 62,
    borderRadius: "50%",
    border: "1px solid #d8d4cc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: 26,
    color: "#1a1a1a",
  },
  modalSuccessTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 40,
    fontWeight: 300,
    margin: "0 0 12px",
    color: "#1a1a1a",
  },
  modalSuccessText: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: 14,
    lineHeight: 1.8,
    color: "#555",
    margin: "0 auto",
    maxWidth: 480,
  },
};

const css = `
@keyframes pd-pulse {
  0%, 100% { opacity: 0.25; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.8); }
}

* {
  box-sizing: border-box;
}

.pd-overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: 72px;
  align-items: center;
}

.pd-overview-grid > div:first-child {
  width: 100%;
  max-width: 700px;
}

.pd-overview-grid > div:last-child {
  width: 100%;
}

.pd-showcase-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
}

.pd-showcase-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.pd-amenities-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid #d8d4cc;
  border-left: 1px solid #d8d4cc;
}

.pd-amenity-group {
  padding: 28px;
  border-right: 1px solid #d8d4cc;
  border-bottom: 1px solid #d8d4cc;
  background: #fff;
  min-width: 0;
}

.pd-highlights-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.pd-hl-card {
  overflow: hidden;
  border-right: 1px solid #2a2a28;
  background: #141412;
  min-width: 0;
}

.pd-hl-card:last-child {
  border-right: none;
}

.pd-hl-card:hover .pd-hl-img {
  transform: scale(1.04);
}

.pd-faq-grid {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 72px;
  align-items: flex-start;
}

.pd-closing-strip {
  display: grid;
  grid-template-columns: minmax(0, 55%) minmax(0, 45%);
  min-height: 520px;
  background: #edeae4;
  border-top: 1px solid #d8d4cc;
  align-items: stretch;
}

.pd-closing-left {
  padding: 72px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.pd-closing-right {
  position: relative;
  overflow: hidden;
  border-left: 1px solid #d8d4cc;
  min-height: 360px;
  min-width: 0;
}

.pd-menu-item:hover {
  color: #1a1a1a !important;
  transform: translateX(5px);
}

.pd-menu-item::before {
  content: "";
  position: absolute;
  left: -1px;
  top: 50%;
  width: 20px;
  height: 1px;
  background: transparent;
  transform: translateY(-50%);
  transition: background 0.25s;
}

.pd-menu-item:hover::before {
  background: rgba(26, 26, 26, 0.8);
}
.pd-menu-item--active::before {
  background: transparent;
}

.pd-visual-img:hover {
  transform: scale(1.025);
}

.pd-btn-dark:hover {
  background: #2b2b2b;
}

.pd-btn-outline:hover {
  background: #1a1a1a;
  color: #f5f2ed;
  border-color: #1a1a1a;
}

.pd-modal-close:hover {
  color: #111;
}

.pd-field-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.pd-field-input:focus {
  border-color: #1a1a1a;
}

@media (max-width: 1024px) {
  .pd-overview-grid {
    gap: 48px;
  }

  .pd-showcase-layout {
    grid-template-columns: 200px 1fr;
    gap: 36px;
  }

  .pd-faq-grid {
    grid-template-columns: 240px 1fr;
    gap: 48px;
  }

  .pd-highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pd-hl-card:nth-child(2) {
    border-right: none;
  }

  .pd-amenities-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pd-amenity-group:nth-child(2) {
    border-right: none;
  }
}

@media (max-width: 768px) {
  .pd-overview-grid,
  .pd-showcase-layout,
  .pd-faq-grid,
  .pd-closing-strip,
  .pd-field-row {
    grid-template-columns: 1fr;
  }

  .pd-amenities-grid,
  .pd-highlights-grid {
    grid-template-columns: 1fr;
  }

  .pd-closing-right {
    border-left: none;
    border-top: 1px solid #d8d4cc;
  }

  .pd-closing-left {
    padding: 48px 24px;
  }
    
}
/* ===== PREMIUM GLASS ARROWS ===== */
.pd-swiper-prev,
.pd-swiper-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(0.95);
  z-index: 30;

  width: 52px;
  height: 52px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  color: #ffffff;

  border: 1px solid rgba(255, 255, 255, 0.18);

  cursor: pointer;

  transition: all 0.35s ease;

  opacity: 0;
  pointer-events: none;
}

/* Position */
.pd-swiper-prev {
  left: 24px;
}

.pd-swiper-next {
  right: 24px;
}

/* SHOW ON HOVER */
.pd-visual:hover .pd-swiper-prev,
.pd-visual:hover .pd-swiper-next {
  opacity: 1;
  pointer-events: all;
}

/* Hover Interaction */
.pd-swiper-prev:hover,
.pd-swiper-next:hover {
  background: #ffffff;
  color: #111;
  border-color: #fff;

  transform: translateY(-50%) scale(1.08);
}

/* Subtle shadow */
.pd-swiper-prev,
.pd-swiper-next {
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}
`;
