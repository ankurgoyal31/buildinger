import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";
import banner from "../assets/values/banner.png";
import centric from '../assets/values/centric.png';
import thoughtful from '../assets/values/thoughtful.png';
import trust from '../assets/values/trust.png'; 

/* ================= REAL ESTATE IMAGES ================= */
const heroImg = banner;
const residentialImg = centric;
const planningImg = thoughtful;
const trustImg = trust;
/* ================= VALUES DATA ================= */
const valuesData = [
  {
    title: "Customer-Centric Thinking",
    desc: "We place people at the center of every decision, creating spaces that respond to evolving lifestyles, aspirations, and everyday needs with greater clarity and care.",
    image: residentialImg,
  },
  {
    title: "Thoughtful Planning",
    desc: "Our developments are guided by long-term vision, balanced layouts, and purposeful design choices that bring together function, aesthetics, and lasting value.",
    image: planningImg,
  },
  {
    title: "Trust & Transparency",
    desc: "We believe strong relationships are built through honesty, accountability, and consistent delivery, ensuring every experience reflects confidence and credibility.",
    image: trustImg,
  },
];

export default function Values() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="w-full min-h-screen bg-[#f7f3ee] text-[#2f2a26] overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section
          className="relative w-full min-h-[74vh] md:min-h-[90vh] bg-center bg-cover flex items-end"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.10),rgba(0,0,0,0.25))]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-14 md:pb-20">
            <div className="max-w-4xl">
              <p className="text-white/75 text-[17px] md:text-[11px] uppercase tracking-[0.34em] mb-4">
                Principles · Purpose · Perspective
              </p>

              <h1 className="text-white text-[36px] sm:text-[46px] md:text-[62px] lg:text-[76px] font-light tracking-[-0.03em] leading-[0.92] mb-5">
                Our Values
              </h1>

              {/* UPDATED TEXT SIZE */}
              <p className="text-white text-[16px] md:text-[18px] leading-8 max-w-2xl">
                The values that guide how we design, build, and deliver
                meaningful spaces with integrity, care, and long-term vision.
              </p>
            </div>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-white/20 pt-6 md:pt-8 gap-6 md:gap-8 max-w-4xl">
              <div>
                <p className="text-[17px] uppercase tracking-[0.24em] text-white/55 mb-2">
                  Design Ethos
                </p>
                <p className="text-white text-[15px] md:text-[16px] font-light">
                  Human-Centered
                </p>
              </div>

              <div>
                <p className="text-[17px] uppercase tracking-[0.24em] text-white/55 mb-2">
                  Approach
                </p>
                <p className="text-white text-[15px] md:text-[16px] font-light">
                  Thoughtful & Long-Term
                </p>
              </div>

              <div>
                <p className="text-[17px] uppercase tracking-[0.24em] text-white/55 mb-2">
                  Foundation
                </p>
                <p className="text-white text-[15px] md:text-[16px] font-light">
                  Trust & Clarity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="border-b border-[#ddd4c9] bg-[#f7f3ee]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-end">
              <div>
                <p className="text-[17px] uppercase tracking-[0.28em] text-[#8b8074] mb-4">
                  What We Stand For
                </p>

                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-light leading-[1.04] text-[#3c342d]">
                  Values that shape every decision, every detail, and every
                  development.
                </h2>
              </div>

              {/* UPDATED TEXT SIZE */}
              <div className="lg:pl-10 lg:border-l lg:border-[#ddd4c9]">
                <p className="text-[#6f655b] text-[15px] md:text-[17px] leading-8 max-w-2xl">
                  Our approach is rooted in clarity, responsibility, and
                  purposeful design. These principles influence the way we plan
                  communities, engage with people, and create spaces that remain
                  relevant over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="bg-[#fcfaf7]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20 space-y-20 md:space-y-28">
            {valuesData.map((item, index) => {
              const reverse = index % 2 === 1;

              return (
                <section
                  key={index}
                  className={`grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-end ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-7 relative">
                    <div className="overflow-hidden border border-[#ddd4c9] bg-white">
                      <div
                        className="h-[340px] md:h-[520px] lg:h-[640px] bg-center bg-cover transition-transform duration-700 hover:scale-[1.03]"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>

                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.22),rgba(0,0,0,0.02))]" />

                  </div>

                  {/* UPDATED TEXT SIZE */}
                  <div className="lg:col-span-5">
                    <div className="border-t border-[#d8cdc0] pt-6 md:pt-8">
                      <p className="text-[17px] uppercase tracking-[0.28em] text-[#8b8074] mb-4">
                        Core Principle
                      </p>

                      <h3 className="text-[26px] md:text-[34px] lg:text-[40px] font-light leading-[1.02] text-[#3c342d] mb-5">
                        {item.title}
                      </h3>

                      <p className="text-[#6f655b] leading-8 text-[15px] md:text-[17px] max-w-lg">
                        {item.desc}
                      </p>

                      <div className="mt-8 flex items-center gap-4">
                        <span className="w-10 h-px bg-[#c8b9a8]"></span>
                        <span className="text-[11px] uppercase tracking-[0.22em] text-[#8b8074]">
                          Enduring Principle
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        {/* ================= HIGHLIGHT ================= */}
        <section className="border-y border-[#ddd4c9] bg-[#efe7dd]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div>
                <p className="text-[17px] uppercase tracking-[0.24em] text-[#8b8074] mb-2">
                  Clarity
                </p>
                <p className="text-[#3c342d] text-[16px] md:text-[18px] font-light">
                  Every decision begins with purpose.
                </p>
              </div>

              <div>
                <p className="text-[17px] uppercase tracking-[0.24em] text-[#8b8074] mb-2">
                  Responsibility
                </p>
                <p className="text-[#3c342d] text-[16px] md:text-[18px] font-light">
                  Long-term trust matters more than short-term noise.
                </p>
              </div>

              <div>
                <p className="text-[17px] uppercase tracking-[0.24em] text-[#8b8074] mb-2">
                  Design
                </p>
                <p className="text-[#3c342d] text-[16px] md:text-[18px] font-light">
                  Meaningful spaces are shaped with intention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLOSING ================= */}
        <section className="bg-[#f7f3ee]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-8 md:pt-20 md:pb-10">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
              <div>
                <p className="text-[17px] uppercase tracking-[0.28em] text-[#8b8074] mb-4">
                  Building With Intention
                </p>

                <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-light leading-[1.06] text-[#3c342d]">
                  Strong values create stronger spaces, better experiences, and
                  more meaningful developments.
                </h2>
              </div>

              <div className="lg:pl-10 lg:border-l lg:border-[#ddd4c9]">
                <p className="text-[#6f655b] text-[15px] md:text-[17px] leading-8 max-w-2xl">
                  Our values are not separate from our work. They are reflected
                  in the way we imagine, design, and deliver environments that
                  people can trust and connect with for years to come.
                </p>
              </div>
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
