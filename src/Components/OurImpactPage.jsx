import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";
import banner from "../assets/impact/banner.png";
import sustainability from '../assets/impact/sustainability.png'
import community from '../assets/impact/communities.png'
import { useEffect,useState } from "react";

const OurImpactPage = () => {
  const [data,setData] = useState([])

 useEffect(() => {
    
    try{
      fetch("https://back-bulding-code-ofzs.onrender.com/impacts").then((res) => res.json()).then((data) => {
          console.log("Fetched media data:", data);
          let reverse_data = data.reverse()
           setData(reverse_data);
           console.log(reverse_data)
        })
        .catch((err) => console.log("Error fetching media data:", err));

    }catch(err){
      console.log("not data found",err)
    }
  }, [])

  console.log(data)
  return (
    <>
      <Header />

      <main className="w-full bg-[#f8f6f2] text-[#2b2b2b]">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[72vh] md:min-h-[86vh] overflow-hidden">
          <img
            src={data[0]?.heroImage||banner}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Our Impact"
          />
          <div className="absolute inset-0 bg-[#6b5f52]/35" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(76,76,76,0.58),rgba(23,23,23,0.12),rgba(12,12,12,0.28))]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[72vh] md:min-h-[86vh] flex items-end pb-14 md:pb-18">
            <div className="max-w-4xl">
              <p className="text-white/80 text-[17px] md:text-[11px] uppercase tracking-[0.32em] mb-4">
                Responsibility · Sustainability · Long-Term Value
              </p>

              <h1 className="text-white text-[34px] sm:text-[44px] md:text-[58px] lg:text-[70px] leading-[0.95] font-light tracking-[-0.02em] mb-5">
                Our Impact
              </h1>

              <p className="text-white/85 max-w-2xl text-[16px] md:text-[18px] leading-8">
               {data[0]?.content || "Designing responsibly. Building sustainably. Creating meaningful environmental and social value that continues far beyond project delivery."}
              </p>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="border-b border-[#d9d1c7] bg-[#f8f6f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-22">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-[17px] uppercase tracking-[0.28em] text-[#8a7f73] mb-4">
                 Sustainable Design Philosophy
                </p>

                <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-light leading-[1.06] mb-5 text-[#3c352f]">
                 {data[0]?.title1|| "Sustainability is integrated into the way we plan, design, and shape each development."}
                </h2>

                <p className="text-[#6a625a] text-[15px] md:text-[17px] leading-8 max-w-xl">
                  {data[0]?.content1 ||"We bring together climate-responsive architecture, energy-efficient planning, and responsible material choices to  create projects that are more future-ready, more efficient, and more conscious in the way they respond to their context."}
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden">
                  <img
                    src={data[0]?.image1 || sustainability}
                    className="w-full h-[340px] md:h-[500px] object-cover"
                    alt="Sustainable design in real estate"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDITORIAL STATEMENT BAND ================= */}
        <section className="relative bg-[#efe9e1]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-[380px] md:min-h-[500px]">
            <div className="relative order-2 lg:order-1">
              <img
                src={data[0]?.image2 ||community}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Green real estate environment"
              />
              <div className="absolute inset-0 bg-[#7a6d5e]/20" />
            </div>

            <div className="order-1 lg:order-2 bg-[#f3ede5] text-[#3c352f] flex items-center">
              <div className="px-6 md:px-10 lg:px-16 py-14 md:py-16 max-w-xl">
                <p className="text-[17px] uppercase tracking-[0.32em] text-[#8a7f73] mb-4">
                  Our Commitment
                </p>

                <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-light leading-[1.05] mb-5">
                 {data[0]?.title2 || "Building communities that balance modern living with a more thoughtful environmental approach."}
                </h2>

                <p className="text-[#6a625a] text-[15px] md:text-[17px] leading-8">
                  {data[0]?.content2 || "Our developments are planned to support better efficiency, healthier surroundings, and long-term value through more responsible design and construction decisions."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= IMPACT METRICS ================= */}
        <section className="border-y border-[#d9d1c7] bg-[#f6f1ea]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-22">
            {/* ===== CENTERED HEADER ===== */}
            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
              <p className="text-[17px] uppercase tracking-[0.28em] text-[#8a7f73] mb-4">
                Measurable Progress
              </p>

              <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-light leading-[1.1] text-[#3c352f]">
                Tangible outcomes that reflect our long-term environmental
                commitment.
              </h2>
            </div>

            {/* ===== 2x2 GRID ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* CARD 1 */}
              <div className="bg-white border border-[#d9d1c7] p-10 md:p-12 min-h-[300px] md:min-h-[360px] flex flex-col justify-between">
                <div>
                  <p className="text-[17px] uppercase tracking-[0.24em] text-[#8a7f73] mb-6">
                    Performance Snapshot
                  </p>

                  <h3 className="text-[24px] md:text-[30px] font-light leading-[1.15] text-[#3c352f] mb-6">
                  {data[0]?.title6 ||  "Better building outcomes through more conscious development."}
                  </h3>
                </div>

                <p className="text-[#6a625a] text-[16px] md:text-[17px] leading-8 max-w-md">
                 {data[0]?.content6|| "Our focus remains on improving efficiency, supporting greener standards, and creating developments that are more future-ready in both planning and execution."}
                </p>
              </div>

              {/* CARD 2 */}
              <div className="relative overflow-hidden min-h-[300px] md:min-h-[360px] border border-[#d9d1c7]">
                <img
                  src={data[0]?.image3 || "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop"}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.25))]" />

                <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12">
                  <p className="text-white/80 text-[17px] uppercase tracking-[0.24em] mb-3">
                  Environmental Impact
                  </p>
                  <h3 className="text-white text-[42px] md:text-[54px] font-light leading-none mb-3">
                   { data[0]?.title3 || "52%"}
                  </h3>
                  <p className="text-white text-[11px] uppercase tracking-[0.24em]">
                    {data[0]?.content3 ||"Absolute Emissions Reduction"}
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative overflow-hidden min-h-[300px] md:min-h-[360px] border border-[#d9d1c7]">
                <img
                  src={data[0]?.image4 ||"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.22))]" />

                <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12">
                  <p className="text-white text-[17px] uppercase tracking-[0.22em] mb-3">
                   Energy Use
                  </p>
                  <h3 className="text-white text-[40px] md:text-[52px] font-light leading-none mb-3">
                    {data[0]?.title4 ||"44%"}
                  </h3>
                  <p className="text-white text-[11px] uppercase tracking-[0.22em]">
                    {data[0]?.content4 || "Energy Consumption Reduction"}
                  </p> 
                </div>
              </div>

              {/* CARD 4 */}
                  {/* <div className="relative overflow-hidden min-h-[300px] md:min-h-[360px] border border-[#d9d1c7]">
              <div className="border border-[#d9d1c7] min-h-[300px] md:min-h-[360px] p-10 md:p-12 flex flex-col justify-end">
                 <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt=""
                />
                <p className="text-[#8a7f73] text-[17px] uppercase tracking-[0.22em] mb-3">
                   Green Compliance
                </p>
                <h3 className="text-[#3c352f] text-[40px] md:text-[52px] font-light leading-none mb-3">
                  97%
                </h3>
                <p className="text-[#6a625a] text-[11px] uppercase tracking-[0.22em]">
                  Projects Meeting Green Standards
                </p>
                </div>
              </div> */}


 <div className="relative overflow-hidden min-h-[300px] md:min-h-[360px] border border-[#d9d1c7]">
                <img
                  src={data[0]?.image5 || "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.22))]" />

                <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12">
                  <p className="text-white text-[17px] uppercase tracking-[0.22em] mb-3">
                     Green Compliance
                  </p>
                  <h3 className="text-white text-[40px] md:text-[52px] font-light leading-none mb-3">
                      { data[0]?.title5||"97%"}
                  </h3>
                  <p className="text-white text-[11px] uppercase tracking-[0.22em]">
                    {data[0]?.content5||"Projects Meeting Green Standards"}
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* ================= SUPPORTING BLOCK ================= */}
        <section className="bg-[#fcfaf7] border-b border-[#d9d1c7]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-22">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
              <div>
                <p className="text-[17px] uppercase tracking-[0.28em] text-[#8a7f73] mb-4">
                  What Drives Us
                </p>
                <h2 className="text-[26px] md:text-[34px] font-light leading-[1.08] text-[#3c352f]">
                  {data[0]?.title7||"Our impact is shaped through responsible choices across every stage of development."}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="border-t border-[#d9d1c7] pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a7f73] mb-3">
                    Energy Efficiency
                  </p>
                  <p className="text-[#6a625a] text-[15px] md:text-[16px] leading-8">
{data[0]?.content7||"Smarter layouts and better-performing systems help reduce unnecessary consumption."}
                  </p>
                </div>

                <div className="border-t border-[#d9d1c7] pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a7f73] mb-3">
                    Material Responsibility
                  </p>
                  <p className="text-[#6a625a] text-[15px] md:text-[16px] leading-8">
                   {data[0]?.content8||" We emphasize choices that support durability, efficiency, and long-term performance."}
                  </p>
                </div>

                <div className="border-t border-[#d9d1c7] pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a7f73] mb-3">
                    Climate Response
                  </p>
                  <p className="text-[#6a625a] text-[15px] md:text-[16px] leading-8">
                   {data[0]?.content9||"Planning is informed by local conditions, sunlight, orientation, and environmental context."}
                  </p>
                </div>

                <div className="border-t border-[#d9d1c7] pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a7f73] mb-3">
                    Long-Term Value
                  </p>
                  <p className="text-[#6a625a] text-[15px] md:text-[16px] leading-8">
                    {data[0]?.content10||" We aim to create developments that remain efficient, desirable, and relevant over time."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLOSING VISUAL ================= */}
        <section className="relative h-[56vh] md:h-[76vh] overflow-hidden">
          <img
            src={data[0]?.image6 || "https://www.uniquegroup.in/wp-content/uploads/2021/04/5-1.png"}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Luxury residential real estate"
          />
          <div className="absolute inset-0 bg-[#7b6b59]/18" />
        </section>
      </main>

      <AutoReveal>
        <InstagramSection />
      </AutoReveal>

      <Footer />
    </>
  );
};

export default OurImpactPage;
