import React, { useState } from "react";
import img1 from "../assets/img/2002.jpg";
import img2 from "../assets/img/2002.jpg";
import img3 from "../assets/img/2002.jpg";
import Header from "../Header";
import Footer from "../Footer";

export default function Media() {
  const [activeTab, setActiveTab] = useState("Articles");

  const articles = [
    {
      image: img1,
      category: "Press Release",
      title: "A New Standard of Contemporary Living in Jaipur",
      excerpt:
        "Discover how thoughtful architecture, premium amenities, and prime urban connectivity are redefining the residential experience.",
      date: "12 Feb 2026",
    },
    {
      image: img2,
      category: "Market Insight",
      title: "Why Premium Real Estate Continues to Lead Buyer Interest",
      excerpt:
        "From location value to long-term appreciation, premium projects continue to attract homebuyers seeking both comfort and confidence.",
      date: "18 Feb 2026",
    },
    {
      image: img3,
      category: "Project Update",
      title: "Design, Detail, and Delivery: What Shapes a Landmark Project",
      excerpt:
        "A closer look at the planning principles and construction priorities that influence truly distinguished developments.",
      date: "24 Feb 2026",
    },
  ];

  const galleryImages = [
    { image: img1, title: "Project Launch Event" },
    { image: img2, title: "Site Progress Update" },
    { image: img3, title: "Brand Showcase" },
    { image: img1, title: "Sales Gallery" },
    { image: img2, title: "Luxury Amenities Preview" },
    { image: img3, title: "Architectural Detail" },
  ];

  return (
    <>
      <Header />

      <main className="w-full bg-[#f8f6f2] text-[#171717]">
        {/* HERO */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-black/40 mb-5">
              Media & Editorial
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] max-w-5xl mx-auto">
              Stories, updates and insights from a more refined real estate perspective.
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-[15px] md:text-[16px] leading-8 text-black/55">
              Explore short articles, project updates, industry observations, and
              curated media features that reflect the vision behind exceptional developments.
            </p>
          </div>
        </section>

        {/* FEATURED STRIP */}
        <section className="pb-14 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10 ">
              <div className="px-6 py-7 md:px-8 md:py-8 border-b md:border-b-0 md:border-r border-black/10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-black/40 mb-2">
                  Curated Articles
                </p>
                <p className="text-[16px] leading-7 text-black/75">
                  Elegantly presented short-form editorial content.
                </p>
              </div>

              <div className="px-6 py-7 md:px-8 md:py-8 border-b md:border-b-0 md:border-r border-black/10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-black/40 mb-2">
                  Project Perspective
                </p>
                <p className="text-[16px] leading-7 text-black/75">
                  Updates and stories designed around trust, design, and delivery.
                </p>
              </div>

              <div className="px-6 py-7 md:px-8 md:py-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-black/40 mb-2">
                  Premium Reading Experience
                </p>
                <p className="text-[16px] leading-7 text-black/75">
                  A clean editorial layout with a luxury real estate visual language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TABS */}
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="flex items-center justify-center gap-8 md:gap-10 border-b border-black/10">
              <button
                onClick={() => setActiveTab("Articles")}
                className={`relative pb-4 text-[12px] md:text-[13px] uppercase tracking-[0.28em] transition-all duration-300 ${
                  activeTab === "Articles"
                    ? "text-black"
                    : "text-black/40 hover:text-black"
                }`}
              >
                Articles
                {activeTab === "Articles" && (
                  <span className="absolute left-0 bottom-0 w-full h-px bg-black"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab("Gallery")}
                className={`relative pb-4 text-[12px] md:text-[13px] uppercase tracking-[0.28em] transition-all duration-300 ${
                  activeTab === "Gallery"
                    ? "text-black"
                    : "text-black/40 hover:text-black"
                }`}
              >
                Gallery
                {activeTab === "Gallery" && (
                  <span className="absolute left-0 bottom-0 w-full h-px bg-black"></span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ARTICLES TAB */}
        {activeTab === "Articles" && (
          <section className="pb-20 md:pb-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                {articles.map((article, index) => (
                  <article
                    key={index}
                    className="group bg-white border border-black/8 overflow-hidden transition-all duration-500 hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
                  >
                    <div className="overflow-hidden">
                      <div
                        className="w-full h-[320px] md:h-[420px] bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${article.image})` }}
                      ></div>
                    </div>

                    <div className="p-6 md:p-7">
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span className="text-[10px] uppercase tracking-[0.24em] text-black/40">
                          {article.category}
                        </span>
                        <span className="text-[12px] text-black/40">
                          {article.date}
                        </span>
                      </div>

                      <h2 className="text-[24px] md:text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-4">
                        {article.title}
                      </h2>

                      <p className="text-[15px] leading-7 text-black/58 mb-6">
                        {article.excerpt}
                      </p>

                      <button className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-black border-b border-black pb-1 transition-all duration-300 group-hover:gap-4">
                        Read Article
                        <span>+</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* GALLERY TAB */}
        {activeTab === "Gallery" && (
          <section className="pb-20 md:pb-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {galleryImages.map((item, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden bg-white border border-black/8"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5 md:p-6">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-black/40 mb-2">
                        Gallery
                      </p>
                      <h3 className="text-[22px] md:text-[26px] font-light leading-[1.2] text-[#1a1a1a]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="bg-[#111111] text-white px-8 py-12 md:px-14 md:py-16">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-4">
                Media Enquiries
              </p>

              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
                <div>
                  <h3 className="text-3xl md:text-5xl font-light leading-[1.06] mb-4">
                    Stay connected with the latest stories, announcements, and project updates.
                  </h3>
                  <p className="text-white/70 text-[15px] md:text-[16px] leading-8 max-w-2xl">
                    A dedicated media section helps communicate brand value, progress,
                    and thought leadership in a polished editorial format.
                  </p>
                </div>

                <div className="lg:text-right">
                  <a
                    href="/connect"
                    className="inline-flex items-center justify-center border border-white/20 px-7 py-3 text-sm uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}