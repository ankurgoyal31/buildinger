import React from "react";
import calSvg from "../../assets/whatsapp.svg";
import callSvg from "../../assets/call.svg";
import handSvg from "../../assets/project.svg";

export default function AssistSection() {
  const phoneNumber = "+912267161111";
  const whatsappNumber = "912267161111";

  const items = [
  {
    icon: calSvg,
    title: "Schedule an Appointment",
    desc: "Connect with our team instantly on WhatsApp and book your consultation.",
    link: `https://wa.me/${whatsappNumber}`,
    target: "_blank",
    tag: "WhatsApp",
    cta: "Chat on WhatsApp",
  },
  {
    icon: callSvg,
    title: "Speak to an Expert",
    desc: "Discuss upcoming investment opportunities and get personalized assistance.",
    link: `tel:${phoneNumber}`,
    tag: "Call",
    cta: "Call Now",
  },
  {
    icon: handSvg,
    title: "Enquire About Projects",
    desc: "Get details on current and upcoming developments across our locations.",
    link: `tel:${phoneNumber}`,
    tag: "Projects",
    cta: "Connect Now",
  },
];

  return (
    <section className="w-full bg-[#f8f6f2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-black/40">
            Assistance
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.05] text-[#171717] mb-5">
            How can we assist you today?
          </h2>
          <p className="text-[15px] md:text-[16px] leading-7 text-black/55">
            Choose the most convenient way to connect with us for appointments,
            investment guidance, or project-related enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.target || "_self"}
              rel={item.target ? "noopener noreferrer" : ""}
              className="group block bg-white border border-black/8 p-8 md:p-9 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4 mb-10">
                <div className="w-16 h-16 border border-black/10 bg-[#f6f2ec] flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="object-contain w-8 h-8"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-[0.24em] text-black/35">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-[24px] md:text-[28px] font-light leading-[1.2] text-[#171717] mb-4">
                {item.title}
              </h3>

              <p className="text-[15px] leading-7 text-black/55 mb-8">
                {item.desc}
              </p>

              <div className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-black border-b border-black pb-1 transition-all duration-300 group-hover:gap-4">
                {item.cta}
                <span>+</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}