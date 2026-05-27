import React from "react";
import img1 from "../../../assets/img/a1.png";
import img2 from "../../../assets/img/a2.png";
import img3 from "../../../assets/img/a3.png";
import img4 from "../../../assets/img/a4.png";


export default function ValuesSection() {
  const values = [
    {
      title: "Excellence in Design & Delivery",
      desc: "Adopting global standards, advanced engineering, and refined craftsmanship to ensure superior quality in every development.",
      img: img1,
    },
    {
      title: "Customer-First Philosophy",
      desc: "Creating spaces that prioritise comfort, emotional well-being, positive energy, and long-term value for families and professionals.",
      img: img2,
    },
    {
      title: "Innovation & Vision-Driven Growth",
      desc: "Continuously redefining real estate with modern concepts, forward-thinking planning, and transformative lifestyle communities.",
      img: img3,
    },
     {
      title: "Commitment to Social Progress",
      desc: "Supporting national affordable housing initiatives and fostering inclusive community development through accessible and thoughtful housing solutions.",
      img: img4,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-6 ">
        <div className="grid md:grid-cols-4 gap-12 items-center justify-center">
         
          <div className="md:col-span-4 grid md:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col "
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-full h-[600px] object-cover mb-4"
                />
                <h3 className="text-3xl font-light mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed pr-10">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
