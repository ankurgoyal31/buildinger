import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/blogbBanner.jpg";
import img1 from "../assets/img/a1.png";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";

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

  const categories = [
    "All",
    "Architecture",
    "Interior Design",
    "Township Planning",
    "Lifestyle",
  ];

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="w-full bg-[#f8f6f2] text-[#2f2a26]">
        {/* ====== HERO ====== */}
        <section className="relative min-h-[72vh] md:min-h-[88vh] overflow-hidden">
          <img
            src={banner}
            alt="Blog Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/1"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),rgba(0,0,0,0.12),rgba(0,0,0,0.18))]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[72vh] md:min-h-[88vh] flex items-end pb-14 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-white/75 text-[12px] md:text-[12px] uppercase tracking-[0.34em] mb-4">
                Architecture · Design · Lifestyle
              </p>

              <h1 className="text-white text-[36px] sm:text-[46px] md:text-[60px] lg:text-[72px] font-light leading-[0.95] tracking-[-0.02em] mb-5">
                Journal
              </h1>

              <p className="text-white text-[16px] md:text-[18px] leading-8 max-w-2xl">
                A space where design insights, creative journeys, and everyday
                experiences come together. These stories explore homes,
                communities, and the details that shape the way people live.
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
        <section className="bg-[#fcfaf7]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">

    {/* ===== UNDERLINE CATEGORY TABS ===== */}
    <div className="flex justify-center gap-8 md:gap-12 mb-16 border-b border-[#ddd4c9] pb-4">
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

    {/* ===== SOFT CARDS GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">

      {filteredPosts.map((post, index) => (
        <Link key={index} to="/blogdetail" className="group block">

          <article className="transition-all duration-500 hover:-translate-y-1">

            {/* IMAGE */}
            <div className="overflow-hidden mb-6">
              <img
                src={post.image}
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
      ))}

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