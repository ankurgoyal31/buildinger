import React from "react";
import bannerImg from "../assets/ourStory/banner.png";
import dir1 from "../assets/img/director1.png";
import dir2 from "../assets/img/director2.png";
import img1 from "../assets/ourStory/intro.png";
import img2 from "../assets/img/about/UBBanner 4.png";
import img3 from "../assets/img/about/UBBanner 5.png";
import img4 from "../assets/img/about/UBBanner 6.png";
import Management1 from "../assets/img/M1.jpg";
import Management2 from "../assets/img/M2.jpg";
import OurHistory from "./HomePage/OurHistory.jsx";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "../Components/AutoReveal";
import InstagramSection from "./InstagramSection";
import {
  ShieldCheck,
  BadgeCheck,
  Award,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Newsletter from "./Newsletter";

const swiperCss = `
  .testimonial-swiper .swiper-pagination {
    position: relative;
    margin-top: 10px;
  }
  .testimonial-swiper .swiper-pagination-bullet {
    width: 28px;
    height: 2px;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  .testimonial-swiper .swiper-pagination-bullet-active {
    background: #111111;
  }
`;

export default function AboutUsPage() {
  const certIcons = [ShieldCheck, Award, BadgeCheck, CheckCircle2, FileCheck];

  const stakeholders = [
    {
      role: "Leadership",
      name: "Mr. Abhishek Pal Singh",
      post: "Vice Chairman",
      image: dir1,
      text: "Driving strategic direction with a strong focus on scale, trust, and long-term value creation, he plays a key role in shaping the group’s growth while reinforcing its commitment to quality, credibility, and future-ready development.",
    },
    {
      role: "Leadership",
      name: "Mr. Vibhishek Pal Singh",
      post: "Managing Director",
      image: dir2,
      text: "With a vision rooted in innovation and execution, he leads the business with clarity and ambition, ensuring that every project reflects thoughtful planning, customer confidence, and the group’s evolving leadership in real estate.",
    },
  ];

  const managementTeam = [
    {
      name: "Mr. Alok Verma",
      post: "VP-Sales",
      image: Management1,
      text: "Leads strategic operations with a focus on execution excellence, delivery discipline, and long-term organizational growth.",
    },
    {
      name: "Mr. Chandramohan Sharma",
      post: "VP-Finance",
      image: Management2,
      text: "Strengthens market presence through customer-first planning, brand positioning, and high-value business development.",
    },
    {
      name: "Mr. Ritesh Raina",
      post: "AVP- Marketing",
      image: Management1,
      text: "Oversees operational systems and interdepartmental alignment to ensure consistency across planning and delivery.",
    },
    {
      name: "Mr. Sandeep Heda",
      post: "AVP - Customer Relationship Manager",
      image: Management2,
      text: "Brings focus to project execution, on-ground coordination, timelines, and quality benchmarks across developments.",
    },
    {
      name: "Lokesh Kumar Soni",
      post: "GM- Human Resources",
      image: Management1,
      text: "Enhances customer confidence by streamlining communication, service experience, and long-term relationship building.",
    },
    {
      name: "Mr. Rohan Gupta",
      post: "Chief Engineer",
      image: Management2,
      text: "Supports sustainable growth through financial planning, governance, compliance, and responsible resource management.",
    },
  ];

  const timeline = [
    {
      year: "1988",
      title: "Foundation",
      text: "The group began its journey with a clear vision to create trust-led developments with long-term value.",
    },
    {
      year: "1998",
      title: "Growth Phase",
      text: "Expansion across key markets and stronger recognition through disciplined project execution.",
    },
    {
      year: "2008",
      title: "Brand Strength",
      text: "The organization established a stronger identity through quality, consistency, and landmark presence.",
    },
    {
      year: "2018",
      title: "Modern Expansion",
      text: "A sharper focus on premium lifestyle projects, customer confidence, and design-forward development.",
    },
    {
      year: "Today",
      title: "Future Forward",
      text: "Continuing to build communities, improve living standards, and shape the future with ambition and purpose.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      text: "We believe in clarity, honesty, and accountability in everything we do.",
      icon: "✦",
      link: "/values",
    },
    {
      title: "Innovation",
      text: "We adopt forward thinking and stronger systems to improve what we build.",
      icon: "◈",
      link: "/values",
    },
    {
      title: "Quality",
      text: "We maintain high benchmarks in design, execution, and final delivery.",
      icon: "▣",
      link: "/values",
    },
    {
      title: "Customer Focus",
      text: "We create spaces around people, needs, and long-term confidence.",
      icon: "◆",
      link: "/values",
    },
  ];

  const certifications = [
    "Quality-driven execution standards",
    "Compliance-first project processes",
    "Transparent documentation practices",
    "Responsible construction methodology",
    "Customer-centric delivery systems",
    "Structured project governance",
  ];

  return (
    <>
      <style>{swiperCss}</style>
      <Header />

      <main className="bg-[#f7f4ef] text-[#171717]">
        {/* 1. HOME BANNER */}
        <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
          <img
            src={bannerImg}
            alt="About Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.22),rgba(0,0,0,0.50))]"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide">
              Our Story
            </h1>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-screen flex items-end pb-16 md:pb-20">
            <div className="max-w-5xl text-white">
              <p className="mb-5 text-[17px] uppercase tracking-[0.32em] text-white/65">
                About Unique Builders
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-light leading-[0.92] mb-6">
                A legacy of trust, ambition, and landmark development.
              </h1>
              <p className="max-w-2xl text-[14px] md:text-[16px] mb-8 mt-[-16px] leading-7 text-white/80">
                We create more than spaces—we build value, community, and lasting trust.
              </p>
            </div>
          </div>
        </section>

        {/* 2. QUOTE */}
        <AutoReveal>
          <section className="relative z-20 -mt-16 md:-mt-20 px-6 md:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto bg-white border border-black/8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <div className="grid lg:grid-cols-[220px_1fr]">
                <div className="border-b lg:border-b-0 lg:border-r border-black/8 px-6 py-8 md:px-8 md:py-10 flex items-center justify-center">
  <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 text-center">
    Philosophy
  </p>
</div>  
                <div className="px-6 py-10 md:px-10 md:py-12">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-light leading-[1.2] text-[#171717]">
                    “We do not just build projects. We create trust, shape
                    communities, and leave behind a legacy people are proud to
                    belong to.”
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 3. INTRO ABOUT THE GROUP */}
        <AutoReveal>
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start">
                <div>
                  <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 mb-4">
                    Introduction
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.02] mb-8">
                    A group defined by scale, consistency, and long-term value.
                  </h2>

                  <div className="space-y-6 text-[14px] md:text-[15px] leading-7 text-black/60">
                    <p>
                      Founded with a vision to create meaningful developments,
                      Unique Builders has grown into a trusted real estate name
                      recognized for quality, strong planning, and customer
                      confidence. Through the years, the group has strengthened
                      its presence across multiple cities and project
                      categories.
                    </p>

                    <p>
                      The group’s USP lies in combining trust, design thinking,
                      execution discipline, and long-term value creation. Its
                      journey includes major developments, respected market
                      presence, and collaborations that continue to reinforce
                      its position in the industry.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden border border-black/8 bg-white">
                    <img
                      src={img1}
                      alt="Group Introduction"
                      className="w-full h-[420px] md:h-[520px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 4. STAKEHOLDERS */}
        <AutoReveal>
          <section className="py-20 md:py-28 bg-white border-y border-black/6">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                <div className="max-w-3xl">
                    <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 mb-4">
                    The Management
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light leading-[1.04] mb-4">
                    The Minds Behind the Vision
                  </h2>
                </div>
              </div>

              <div className="space-y-8">
                {stakeholders.map((person, index) => (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-0 overflow-hidden ${
                      index % 2 === 0 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center ">
                      <h3 className="text-2xl md:text-3xl font-light text-[#171717] mb-5">
                        {person.name}
                      </h3>

                      <p className="text-[14px] md:text-[15px] leading-7 text-black/58">
                        {person.text}
                      </p>

                      <div className="mt-6 pt-5 border-t border-black/10">
                        <p className="text-[14px] md:text-[16px] font-medium text-[#171717]">
                          {person.post}
                        </p>
                      </div>
                    </div>

                    <div className="min-h-[420px] md:min-h-[720px]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Secondary Management Team - Clean Editorial Style */}
<div className="mt-20 md:mt-24">
  <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
    <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 mb-3">
      Leadership Team
    </p>

    <h3 className="text-2xl md:text-3xl font-light leading-[1.08] text-[#171717] mb-4">
      A wider management team supporting growth and execution.
    </h3>

    <p className="text-[14px] md:text-[15px] leading-7 text-black/58">
      Alongside the core leadership, the group is supported by an
      experienced team across operations, projects, strategy, and customer relations.
    </p>
  </div>

  {/* GRID WITHOUT CARDS */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-20 gap-x-8 md:gap-x-12">
    {managementTeam.map((member, index) => (
      <div key={index} className="text-center max-w-sm mx-auto">
        
        {/* IMAGE */}
        <div className="overflow-hidden mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[320px] md:h-[360px] object-cover transition-transform duration-500 hover:scale-[1.04]"
          />
        </div>

        {/* NAME */}
        <h4 className="text-[22px] md:text-[24px] font-light text-[#171717] mb-2">
          {member.name}
        </h4>

        {/* DESIGNATION */}
        <p className="text-[11px] uppercase tracking-[0.26em] text-black/45 mb-4">
          {member.post}
        </p>

        {/* TEXT */}
        <p className="text-[14px] leading-7 text-black/58">
          {member.text}
        </p>
      </div>
    ))}
  </div>
</div>
            </div>
          </section>
        </AutoReveal>

        <AutoReveal>
          <OurHistory />
        </AutoReveal>

        {/* 6. VALUES */}
        <AutoReveal>
          <section className="py-16 md:py-20 bg-white border-y border-black/6">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="space-y-10 md:space-y-12">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 mb-3">
                    Our Values
                  </p>

                  <h2 className="text-3xl md:text-4xl font-light leading-[1.04] mb-4 text-[#171717]">
                    Principles that shape how we build.
                  </h2>

                  <p className="text-black/60 text-[16px] md:text-[18px] leading-7">
                    The values of the group go beyond statements. They influence
                    every decision, relationship, process, and promise we make.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {values.map((value, index) => (
                    <a
                      key={index}
                      href={value.link}
                      className="group border border-black/10 bg-white p-6 md:p-7 transition-all duration-300 hover:bg-[#f7f2eb] hover:text-black"
                    >
                      <div className="text-3xl mb-4">{value.icon}</div>

                      <h3 className="text-xl font-light mb-3 text-[#171717] group-hover:text-black">
                        {value.title}
                      </h3>

                      <p className="text-[16px] leading-7 text-black/60 group-hover:text-black/70 mb-5">
                        {value.text}
                      </p>

                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] border-b border-current pb-1">
                        Explore <span>+</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 7. CSR */}
        <AutoReveal>
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-stretch">
                <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-4 md:gap-5">
                  <img
                    src={img2}
                    alt="CSR"
                    className="w-full h-[280px] md:h-[520px] object-cover border border-black/8"
                  />

                  <div className="grid grid-rows-2 gap-4 md:gap-5">
                    <img
                      src={img3}
                      alt="CSR"
                      className="w-full h-[138px] md:h-[250px] object-cover border border-black/8"
                    />
                    <img
                      src={img4}
                      alt="CSR"
                      className="w-full h-[138px] md:h-[250px] object-cover border border-black/8"
                    />
                  </div>
                </div>

                <div className="bg-[#f7f4ef] border border-black/8 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 mb-4">
                    CSR
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light leading-[1.04] mb-5">
                    Creating impact beyond development.
                  </h2>
                  <p className="text-[14px] md:text-[15px] leading-7 text-black/58 mb-8">
                    Our CSR vision reflects responsibility toward people,
                    sustainability, and community growth. It is an extension of
                    the same care, intent, and integrity that defines our work
                    as a group.
                  </p>

                  <a
                    href="/csr"
                    className="inline-flex items-center justify-center border border-black px-7 py-3 text-sm uppercase tracking-[0.18em] hover:bg-black hover:text-white transition-all duration-300 self-start"
                  >
                    View Initiatives
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AutoReveal>

        {/* 8. CERTIFICATIONS */}
        <AutoReveal>
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="text-[17px] uppercase tracking-[0.28em] text-black/40 mb-4">
                  Certifications & Standards
                </p>
                <h2 className="text-3xl md:text-4xl font-light leading-[1.04] mb-5">
                  Standards followed with consistency and care.
                </h2>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {certifications.map((item, index) => {
                  const Icon = certIcons[index % certIcons.length];

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-t border-black/10 pt-5"
                    >
                      <div className="w-10 h-10 flex items-center justify-center shrink-0 text-black">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>

                      <p className="text-[18px] leading-7 text-black/60">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </AutoReveal>

        <AutoReveal>
          <InstagramSection />
        </AutoReveal>

        <AutoReveal>
          <Newsletter />
        </AutoReveal>
      </main>

      <Footer />
    </>
  );
}