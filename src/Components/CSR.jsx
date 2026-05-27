import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";

const csrData = [
  {
    title: "Hunger & Health Support",
    desc: "We organize regular Langar Seva to ensure no one goes hungry and hold Blood Donation camps to support local hospitals in saving lives.",
    image:
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Seasonal Care & Comfort",
    desc: "Through our Blanket Distribution and Donation Drives, we provide essential warmth and resources to the underprivileged during the harshest times of the year.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Environmental Harmony",
    desc: "Our Drop of Life initiative ensures food and water management for birds, while our Plantation Drives focus on growing a greener, healthier canopy for our cities.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Education & Awareness",
    desc: "We believe in a brighter future through Education Drives for children and advocate for healthier lifestyles through our No Tobacco awareness campaigns.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
  },
];

const initiatives = [
  { title: "Education Support", subtitle: "Learning access and local outreach" },
  { title: "Community Care", subtitle: "Programs that support wellbeing" },
  { title: "Environmental Awareness", subtitle: "Greener habits and better futures" },
  { title: "Social Development", subtitle: "Long-term value for communities" },
];

export default function CSRPage() {
  return (
    <>
      <Header />

      <main className="w-full bg-[#f8f6f2] text-[#2f2a26]">

        {/* HERO */}
        <section className="relative min-h-[72vh] md:min-h-[88vh] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.18),rgba(0,0,0,0.28))]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[72vh] md:min-h-[88vh] flex items-end pb-14 md:pb-20">
            <div className="max-w-4xl">
              <p className="text-white/75 text-[17px] md:text-[11px] uppercase tracking-[0.34em] mb-4">
                With Every Brick, We Honor Our Commitment
              </p>

              <h1 className="text-white text-[36px] md:text-[62px] font-light mb-5">
                Corporate Social Responsibility
              </h1>

              {/* ✅ increased */}
              <p className="text-white text-[16px] md:text-[18px] leading-8 max-w-2xl">
                We integrate sustainable practices and community welfare into the heart of our urban developments. We believe that true growth is measured by the positive impact we leave on the environment and the lives we touch. By investing in education, healthcare, and green living. 
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-[#ddd4c9]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
            
            <div>
              <p className="text-[17px] uppercase tracking-[0.28em] text-[#8b8074] mb-4">
                Commitment to humanity.
              </p>

              <h2 className="text-[26px] md:text-[34px] font-light">
                Small Acts, Big Impact Through Corporate Social Responsibility.
              </h2>
            </div>

            {/* ✅ increased */}
            <div>
              <p className="text-[#6f655b] text-[15px] md:text-[17px] leading-8 max-w-2xl">
                Our work isn't just about big buildings; it's about the small, vital details like ensuring a thirsty bird finds water on a hot afternoon. By integrating nature and humanity into our daily operations, we ensure that every community we build is a compassionate one.
              </p>
            </div>

          </div>
        </section>

        {/* CSR CARDS */}
        <section className="bg-[#fcfaf7]">
  <div className="max-w-[95%] mx-auto px-2 py-16 md:py-20 grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">

    {csrData.map((item, i) => (
      <div key={i} className="group">

        {/* IMAGE */}
        <div className="h-[400px] md:h-[480px] overflow-hidden mb-6">
          <img
            src={item.image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt=""
          />
        </div>

        {/* CONTENT */}
        <div className="text-center px-2">

          {/* <p className="text-[17px] uppercase tracking-[0.24em] text-[#8b8074] mb-3">
            {String(i + 1).padStart(2, "0")}
          </p> */}

          <h3 className="text-[20px] md:text-[22px] font-light text-[#3c342d] mb-4">
            {item.title}
          </h3>

          <p className="text-[#6f655b] text-[12px] md:text-[12px] leading-4">
            {item.desc}
          </p>

        </div>

      </div>
    ))}

  </div>
</section>

        {/* INITIATIVES */}
        <section className="bg-[#f3ece3]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {initiatives.map((item, i) => (
              <div key={i}>
                <p className="text-[17px] mb-2">{String(i + 1).padStart(2, "0")}</p>

                <h3 className="text-[18px] font-medium mb-2">
                  {item.title}
                </h3>

                {/* ✅ increased */}
                <p className="text-[#6f655b] text-[16px] leading-7">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE */}
       <section className="bg-[#fcfaf7] w-full min-h-screen">
  <div className="grid md:grid-cols-2 w-full h-full">

    {/* IMAGE SIDE */}
    <div className="relative w-full h-[50vh] md:h-screen">
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
    </div>

    {/* CONTENT SIDE */}
    <div className="flex items-center justify-center px-8 md:px-16 lg:px-20 py-12 md:py-0 bg-[#f7f2eb]">
      <div className="max-w-md">

        <p className="text-[17px] uppercase tracking-[0.24em] text-[#8b8074] mb-4">
          FEATURED STORY
        </p>

        <h3 className="text-[28px] md:text-[34px] font-light leading-[1.1] mb-6 text-[#3c342d]">
          Building a better world with every small act of kindness.
        </h3>

        <p className="text-[#6f655b] text-[15px] md:text-[17px] leading-8">
         Our CSR work is more than just a policy; it is a promise to care for the community we call home. 
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