import React from "react";
import bannerImg from "../assets/images/aboutus-hero-section.png";
import dir1 from "../assets/img/director1.png";
import dir2 from "../assets/img/director2.png";
import img1 from "../assets/images/aboutus-crafting-landmarks.png";
import img2 from "../assets/img/about/UBBanner 4.png";
import img3 from "../assets/img/about/UBBanner 5.png";
import img4 from "../assets/img/about/UBBanner 6.png";
import Management1 from "../assets/img/M1.jpg";
import Management2 from "../assets/img/M2.jpg";
import Management3 from "../assets/img/M3.jpg";
import Management4 from "../assets/img/m4.jpg";

import Header from "../Header";
import Footer from "../Footer";
import StatsSection from "./HomePage/Elements/StatsSection";
import AutoReveal from "../Components/AutoReveal";
import InstagramSection from "./InstagramSection";

export default function AboutUsPage() {
  const stakeholders = [
    {
      name: "Mr. Abhishek Pal Singh",
      role: "Vice Chairman",
      image: dir1,
      text: "Driving strategic direction with a strong focus on scale, trust, and long-term value creation, he plays a key role in shaping the group’s growth while reinforcing its commitment to quality, credibility, and future-ready development.",
    },
    {
      name: "Mr. Vibhishek Pal Singh",
      role: "Managing Director",
      image: dir2,
      text: "With a vision rooted in innovation and execution, he leads the business with clarity and ambition, ensuring that every project reflects thoughtful planning, customer confidence, and the group’s evolving leadership in real estate.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      text: "We believe in transparency, accountability, and doing the right thing at every stage.",
      icon: "✦",
      link: "/values",
    },
    {
      title: "Innovation",
      text: "We continuously evolve through better design thinking, stronger systems, and smarter execution.",
      icon: "◈",
      link: "/values",
    },
    {
      title: "Quality",
      text: "From planning to delivery, our benchmark remains high, consistent, and detail-driven.",
      icon: "▣",
      link: "/values",
    },
    {
      title: "Customer Focus",
      text: "Every square foot is planned with the end-user in mind, ensuring meaningful value.",
      icon: "◆",
      link: "/values",
    },
  ];

  const certifications = [
    "ISO-aligned quality processes",
    "Strong compliance-led development approach",
    "Transparent documentation standards",
    "Customer-first construction and delivery practices",
  ];

  const testimonials = [
    {
      name: "Homebuyer",
      text: "Unique Builders delivered a premium experience with clarity, professionalism, and consistent communication throughout the process.",
    },
    {
      name: "Investor",
      text: "What stood out was the group’s credibility and long-term vision. It felt like a safe and value-driven investment.",
    },
    {
      name: "Resident",
      text: "The quality of planning, detailing, and community experience truly reflects the brand’s promise and commitment.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#f8f6f2] text-[#171717]">
        {/* 1. HOME BANNER */}
        <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
          <img
            src={bannerImg}
            alt="About Banner"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.18),rgba(0,0,0,0.46))]"></div>

          <div className="relative z-10 flex items-end min-h-screen px-6 md:px-10 lg:px-16 pb-16 md:pb-20">
            <div className="max-w-4xl text-white">
              <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-white/65">
                About Unique Builders
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-light leading-[0.94] mb-6">
                Building trust, legacy, and landmark spaces across generations.
              </h1>
              <p className="max-w-2xl text-[15px] md:text-[17px] leading-8 text-white/80">
                A story of ambition, integrity, architectural excellence, and a
                long-standing commitment to creating spaces that shape better
                living and stronger communities.
              </p>
            </div>
          </div>
        </section>

        {/* 2. QUOTE */}
        <AutoReveal>
          <section className="py-20 md:py-24 bg-white border-b border-black/6">
            <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-5">
                Group Quote
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-[#171717]">
                “We do not just construct buildings — we create lasting value,
                inspire confidence, and shape a legacy people can live with for
                generations.”
              </h2>
            </div>
          </section>
        </AutoReveal>

        {/* 3. INTRO ABOUT THE GROUP */}
        <AutoReveal>
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
                <div className="overflow-hidden border border-black/8 bg-white">
                  <img
                    src={img1}
                    alt="About Unique Builders"
                    className="w-full h-[420px] md:h-[620px] object-cover"
                  />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                    Introduction
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.04] mb-6">
                    A legacy built on vision, scale, and trust.
                  </h2>

                  <p className="text-[#5f5f5f] leading-8 text-[15px] md:text-[16px] mb-6">
                    Founded with the vision to redefine the real estate
                    landscape, Unique Builders has grown into a widely
                    recognized name known for design-led development, quality
                    execution, and customer confidence. Over the years, the
                    group has expanded its presence across Rajasthan and beyond
                    through residential, commercial, and lifestyle-driven
                    developments.
                  </p>

                  <p className="text-[#5f5f5f] leading-8 text-[15px] md:text-[16px] mb-6">
                    What sets the group apart is its commitment to transparency,
                    architectural character, timely delivery, and spaces created
                    with long-term value in mind. Through landmark projects,
                    trusted collaborations, and a strong market presence, the
                    group continues to shape communities that reflect both
                    aspiration and reliability.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    <div className="border border-black/8 bg-white px-5 py-5">
                      <p className="text-[12px] uppercase tracking-[0.18em] text-black/45 mb-2">
                        Founded
                      </p>
                      <p className="text-2xl font-light text-[#171717]">
                        Since Legacy Years
                      </p>
                    </div>
                    <div className="border border-black/8 bg-white px-5 py-5">
                      <p className="text-[12px] uppercase tracking-[0.18em] text-black/45 mb-2">
                        USP
                      </p>
                      <p className="text-2xl font-light text-[#171717]">
                        Trust + Design + Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 4. STAKEHOLDERS */}
        <AutoReveal>
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
                <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                  Stakeholders
                </p>
                <h2 className="text-4xl md:text-5xl font-light leading-[1.04] mb-5">
                  Leadership that shapes the group’s direction.
                </h2>
                <p className="text-[#666] leading-7 text-[15px] md:text-[16px]">
                  A brief introduction to the individuals who contribute to the
                  group’s vision, growth, governance, and long-term credibility.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {stakeholders.map((person, index) => (
                  <div
                    key={index}
                    className="grid sm:grid-cols-[220px_1fr] bg-[#f8f6f2] border border-black/8 overflow-hidden"
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-[280px] sm:h-full object-cover"
                    />
                    <div className="p-6 md:p-7">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-black/40 mb-2">
                        {person.role}
                      </p>
                      <h3 className="text-2xl font-light text-[#171717] mb-4">
                        {person.name}
                      </h3>
                      <p className="text-[15px] leading-7 text-black/58">
                        {person.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 5. TIMELINE */}
        <AutoReveal>
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                  Group Timeline
                </p>
                <h2 className="text-4xl md:text-5xl font-light leading-[1.04] mb-5">
                  A journey of growth and milestones.
                </h2>
              </div>

              <StatsSection />
            </div>
          </section>
        </AutoReveal>

        {/* 6. VALUES */}
        <AutoReveal>
          <section className="py-20 md:py-28 bg-white border-y border-black/6">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
                <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                  Our Values
                </p>
                <h2 className="text-4xl md:text-5xl font-light leading-[1.04] mb-5">
                  Principles that define every decision we make.
                </h2>
                <p className="text-[#666] leading-7 text-[15px] md:text-[16px]">
                  Explore the core values that shape our culture, our projects,
                  and the trust we build with every stakeholder.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <a
                    key={index}
                    href={value.link}
                    className="group border border-black/8 bg-[#f8f6f2] p-7 transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    <div className="text-3xl mb-6">{value.icon}</div>
                    <h3 className="text-2xl font-light mb-3">{value.title}</h3>
                    <p className="text-[15px] leading-7 text-black/55 group-hover:text-white/75 mb-6">
                      {value.text}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] border-b border-current pb-1">
                      View More <span>+</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 7. CSR */}
        <AutoReveal>
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                    CSR
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light leading-[1.04] mb-6">
                    Building communities beyond construction.
                  </h2>
                  <p className="text-[#5f5f5f] leading-8 text-[15px] md:text-[16px] mb-8">
                    Our CSR initiatives reflect a larger responsibility toward
                    society, sustainability, education, and meaningful community
                    impact. These efforts are an extension of the values that
                    guide us as a group.
                  </p>

                  <a
                    href="/csr"
                    className="inline-flex items-center justify-center border border-black px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Explore CSR
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={img2}
                    alt="CSR 1"
                    className="w-full h-[260px] md:h-[320px] object-cover border border-black/8"
                  />
                  <img
                    src={img3}
                    alt="CSR 2"
                    className="w-full h-[260px] md:h-[320px] object-cover border border-black/8 mt-8"
                  />
                </div>
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 8. CERTIFICATIONS */}
        <AutoReveal>
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                  Certifications & Standards
                </p>
                <h2 className="text-4xl md:text-5xl font-light leading-[1.04] mb-5">
                  Standards followed with discipline and responsibility.
                </h2>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {certifications.map((item, index) => (
                  <div
                    key={index}
                    className="border border-black/8 bg-[#f8f6f2] p-7"
                  >
                    <div className="w-11 h-11 border border-black/10 bg-white flex items-center justify-center text-lg mb-5">
                      ✓
                    </div>
                    <p className="text-[15px] leading-7 text-black/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 9. TESTIMONIALS */}
        <AutoReveal>
          <section className="py-20 md:py-28 bg-[#111111] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-4">
                  Testimonials
                </p>
                <h2 className="text-4xl md:text-5xl font-light leading-[1.04] mb-5">
                  What people value about the group.
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-white/75 leading-8 text-[15px] mb-6">
                      “{item.text}”
                    </p>
                    <p className="text-[12px] uppercase tracking-[0.2em] text-white/45">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AutoReveal>

        <AutoReveal>
          <InstagramSection />
        </AutoReveal>
      </main>

      <Footer />
    </>
  );
}
