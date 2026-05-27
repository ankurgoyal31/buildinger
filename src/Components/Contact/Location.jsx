import React from "react";

export default function ContactDetails() {
  const contacts = [
    {
      title: "Ajmer Office",
      email: "service.support@uniquebuilders.com",
      phone: "+91 (22) 6716 1111",
      location:
        "Adjoining City Hospital, Ana Sagar Circular Road, Ajmer (Rajasthan), India",
    },
    {
      title: "Jodhpur Office",
      email: "easylease@uniquebuilders.com",
      location:
        "Unique Builders, K.P. Tower, 2nd Floor, Near Bombay Motor Circle, Upper Chopasani Road, Jodhpur (Rajasthan), India",
    },
    {
      title: "Udaipur Office",
      email: "vendors@uniquebuilders.com",
      location:
        "Unique Sampada, Opp. Gyan Garh Vatika, Gaurav Path, New Navratan Complex, Bhuvana, Udaipur (Rajasthan), India",
    },
    {
      title: "Bhilwara Office",
      email: "mediarelations@uniquebuilders.com",
      location:
        "Samanvay Riverview, Badliyas House, Ajmer Road, Bhilwara (Rajasthan), India",
    },
    {
      title: "Mumbai Office",
      email: "careers@uniquebuilders.com",
      location:
        "310, Abhishek, Dalia Industrial Estate, Andheri Link Road, Andheri (West), Mumbai (Maharashtra), India",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-black/40">
            Branch Offices
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.05] text-[#171717] mb-5">
            Visit or connect with our offices.
          </h2>
          <p className="text-[15px] md:text-[16px] leading-7 text-black/55">
            Reach out to the nearest office for assistance related to projects,
            customer support, partnerships, or general enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f6f2] border border-black/8 p-7 md:p-8 transition-all duration-300 hover:bg-white hover:shadow-[0_14px_40px_rgba(0,0,0,0.05)]"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/35 mb-3">
                Office {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-[24px] font-light text-[#171717] mb-5">
                {item.title}
              </h3>

              <div className="space-y-4 text-[15px] leading-7 text-black/60">
                <p>{item.location}</p>

                <a
                  href={`mailto:${item.email}`}
                  className="block text-black hover:opacity-70 transition"
                >
                  {item.email}
                </a>

                {item.phone && (
                  <a
                    href={`tel:${item.phone.replace(/[^+\d]/g, "")}`}
                    className="block text-black hover:opacity-70 transition"
                  >
                    {item.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}