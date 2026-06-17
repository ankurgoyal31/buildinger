import React, { useMemo, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/blogbBanner.jpg";
import img1 from "../assets/img/a1.png";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const blogPosts = [
  {
    title: "Designing Homes That Feel Timeless",
    category: "Architecture",
    image: img1,
  },
  {
    title: "How Natural Light Shapes Better Living Spaces",
    category: "Interior Design",
    image: img1,
  },
  {
    title: "Details That Elevate Everyday Residential Living",
    category: "Lifestyle",
    image: img1,
  },
  {
    title: "The Role of Landscape in Premium Communities",
    category: "Township Planning",
    image: img1,
  },
  {
    title: "Materials, Mood, and the Character of a Home",
    category: "Interior Design",
    image: img1,
  },
  {
    title: "Creating Spaces That Balance Elegance and Function",
    category: "Architecture",
    image: img1,
  },
];

export default function BlogPage() {
const [activeCategory, setActiveCategory] = useState("All");
const [blogs, setBlogs] = useState([]);
const [activeSlide, setActiveSlide] = useState(0);
useEffect(() => {
     try {
      fetch("https://back-bulding-code.onrender.com/blogs").then((res) => res.json()).then((data) => {
          console.log("Fetched blogs:", data);
          let reversedData = data.reverse();
          console.log("Reversed blogs:", reversedData);
          setBlogs(reversedData);
        })
        .catch((err) => console.log("Error fetching blogs:", err));
     } catch (error) {
      console.error("Error in useEffect:", error);
     }
    }, []);

    console.log("Blogs state:", blogs);

  const categories = [
    "All",
    "Architecture",
    "Interior Design",
    "Township Planning",
    "Lifestyle",
  ];

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogs;
    return blogs.filter((post) =>post.category === activeCategory);
  }, [activeCategory, blogs]);

  console.log("Filtered posts:", activeCategory);

  return (
    <>
      <Header />

      <main className="w-full bg-[#f8f6f2] text-[#2f2a26]">
        {/* ====== HERO ====== */}
        <section className="relative h-[72vh] md:h-[88vh] w-full overflow-hidden flex flex-col justify-end">
          {/* Swiper Background */}
          {blogs.length > 0 ? (
            <div className="absolute inset-0 z-0">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 4500 }}
                loop
                className="h-full w-full"
              >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog._id} className="relative h-full w-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${blog.heroImage || blog.main_blog_image || banner})`,
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#1d1d1d,#434343)] z-0" />
          )}

          {/* Overlays for better text visibility */}
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.2),rgba(0,0,0,0))] z-10 pointer-events-none"></div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full pb-16 md:pb-24 pointer-events-none">
            <div className="max-w-3xl pointer-events-auto">
              <p className="text-white/80 text-[12px] md:text-[13px] uppercase tracking-[0.34em] mb-4 font-medium drop-shadow-md">
                Architecture · Design · Lifestyle
              </p>

              <h1 className="text-white text-[36px] sm:text-[46px] md:text-[60px] lg:text-[72px] font-light leading-[0.95] tracking-[-0.02em] mb-6 drop-shadow-lg">
                Journal
              </h1>

              <p className="text-white/90 text-[16px] md:text-[18px] leading-8 max-w-2xl drop-shadow-md">
                {blogs[0]?.Banner_content || "A space where design insights, creative journeys, and everyday experiences come together. These stories explore homes, communities, and the details that shape the way people live."}
              </p>
            </div>
          </div>
        </section>


 


        {/* ====== INTRO BAND ====== */}
        <section className="border-b border-[#ddd4c9] bg-[#f8f6f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-end">
              <div>
                <p className="text-[12px] uppercase tracking-[0.28em] text-[#8b8074] mb-4">
                  Editorial Stories
                </p>
                <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-light leading-[1.08] text-[#3c342d]">
                  Writing that reflects the design philosophy behind better
                  living.
                </h2>
              </div>

              <div>
                <p className="text-[#6f655b] text-[16px] md:text-[18px] leading-7 max-w-2xl">
                  From thoughtful interiors to the atmosphere of a neighborhood,
                  our journal captures ideas, inspirations, and perspectives
                  that connect architecture, lifestyle, and meaningful design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== BLOG GRID ====== */}

              <section style={{paddingBottom:'40px'}} className="sticky top-[76px] z-30 backdrop-blur-md bg-[#f8f6f2]/85 border-y">
              <div  className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4">
     {/* ===== UNDERLINE CATEGORY TABS ===== */}
                 <div className="flex justify-center  border-b border-[#ddd4c9]">
          <div className="flex gap-6 md:gap-8 overflow-x-auto py-4 text-[12px] md:text-[12px] tracking-[0.22em] whitespace-nowrap">
       {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button  
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative text-[11px] md:text-[12px] uppercase tracking-[0.28em] transition ${
              isActive ? "text-[#3c342d]" : "text-[#8b8074] hover:text-[#3c342d]"
            }`}
          >
            {category}

            {isActive && (
              <span className="absolute left-0 -bottom-[5px] w-full h-[1px] bg-[#0095e6]" />
            )}
          </button>
        );
      })}
    </div>
 </div>
    {/* ===== SOFT CARDS GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">

      {filteredPosts.length > 0 ? filteredPosts.map((post, index) => (
        <Link key={index} to={`/blogdetail/${post._id}`} className="group block">

          <article className="transition-all duration-500 hover:-translate-y-1">

            {/* IMAGE */}   
            <div className="overflow-hidden mb-6 pt-12">
              <img
                src={post.main_blog_image||"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png"}
                alt={post.title}
                className="w-full h-[320px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b8074] mb-3">
                {post.category}
              </p>

              <h3 className="text-[22px] md:text-[24px] font-light leading-[1.25] text-[#3c342d] mb-4 transition-colors duration-300 group-hover:text-[#8b6f56]">
                {post.title}
              </h3>

              <div className="flex items-center gap-3 text-[#8b8074]">
                <span className="text-[11px] uppercase tracking-[0.22em]">
                  Read Story
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

            </div>

          </article>

        </Link>
      )) : (
        <p className="text-center text-gray-500 col-span-full pt-12">No blog posts found.</p>
      )}

    </div>

  </div>
</section>

        {/* ====== CLOSING TEXT BAND ====== */}
        <section className="border-t border-[#ddd4c9] bg-[#efe7dd]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 ">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#8b8074] mb-4">
                More Than Articles
              </p>
              <h2 className="text-[22px] md:text-[30px] lg:text-[34px] font-light leading-[1.08] text-[#3c342d] mb-4">
                Stories that bring together design, atmosphere, and the feeling
                of home.
              </h2>
              <p className="text-[#6f655b] text-[16px] md:text-[18px] leading-7 max-w-2xl">
                Each piece is intended to be thoughtful, visual, and rooted in
                the experience of better living — from architecture and spatial
                planning to mood, materiality, and lifestyle.
              </p>
            </div>
          </div>
        </section>
      </main>

      <AutoReveal>
        <InstagramSection />
      </AutoReveal>

      <Footer />
    </>
  );
}