import React from "react";
import bannerImg from "../../assets/img/contactBanner.jpg";

export default function ContactBanner() {
  return (
    <section
      className="relative w-full min-h-[72vh] md:min-h-[86vh] bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.48),rgba(0,0,0,0.12),rgba(0,0,0,0.18))]"></div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[72vh] md:min-h-[86vh] px-6 md:px-10 lg:px-16 flex items-end pb-14 md:pb-20">
        <div className="w-full max-w-5xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/70">
              Contact Unique Builders
            </p>

            <h1 className="mb-5 text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-light leading-[0.98] tracking-[-0.02em] text-white">
              Let’s help you find the right space, investment, or opportunity.
            </h1>

            <p className="max-w-2xl text-[14px] md:text-[16px] leading-7 md:leading-8 text-white">
              We are here to assist you with project enquiries, office
              locations, appointments, investment discussions, and all the
              information you need to connect with our team.
            </p>
          </div>

          {/* bottom info strip */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-white/20 pt-6 md:pt-8 gap-6 md:gap-8 max-w-4xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/55 mb-2">
                Project Enquiries
              </p>
              <p className="text-white text-[15px] md:text-[16px] font-light">
                Sales & Site Visits
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/55 mb-2">
                Office Visits
              </p>
              <p className="text-white text-[15px] md:text-[16px] font-light">
                Appointments Available
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/55 mb-2">
                Assistance
              </p>
              <p className="text-white text-[15px] md:text-[16px] font-light">
                Investment & Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}