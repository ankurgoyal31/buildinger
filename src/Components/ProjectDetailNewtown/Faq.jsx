import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function FaqSection() {
  const [isOpen, setOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "What is Unique Green Meadows and where is it located? ",
      answer:
        "Unique Green Meadows is a residential project by Unique Builders. It is located on 200-ft Main Tonk Road, Shivdaspura / Choki Dhani area, Jaipur.   ",
    },
    {
      question: "What kinds of apartments are offered at Unique Green Meadows, and what are their sizes?  ",
      answer:
        "The project offers 1 BHK, 2 BHK and 3 BHK “luxury” apartments. Saleable areas are approximately: 1 BHK = 681 sq ft, 2 BHK = 1008 sq ft, 3 BHK = 1397 sq ft.",
    },
    {
      question: "What is the starting price of apartments at Unique Green Meadows? ",
      answer:
        "Prices start from around ₹ 30 lakhs (as stated in the official overview).     ",
    },
    {
      question: "Is Unique Green Meadows registered with RERA? ",
      answer:
        "Yes, its RERA Registration Number is RAJ/P/2017/200  ",
    },
    {
      question: " What amenities does Unique Green Meadows provide?",
      answer:
        "Amenities include a clubhouse, landscaped open spaces (-2 lakh sq ft), kids’ play area, cycling track, splash pool, yoga corner, gym, swimming pool, games room, senior-citizen corner, landscaped garden, and more. ",
    },
    {
      question: "What is the infrastructure / construction specification of apartments (flooring, structure etc.)? ",
      answer:
        "The structure is RCC framed. Interiors use vitrified / tile flooring; kitchens have granite tops with sinks; bathrooms have anti-skid tiles; balconies tiled with MS railings; corridors/lift lobbies have ceramic/vitrified or equivalent tile flooring; walls finished in oil-bound distemper. ",
    },
    {
      question: "What is the “master plan” or open-space / layout like?",
      answer:
        "The project claims - 2 lakh sq ft of open and landscaped area along with a grand clubhouse; spacious layout and significant open/green spaces. ",
    },
    {
      question: "What are the connectivity / nearby landmarks or conveniences? ",
      answer:
        "According to one listing: schools, airports (10–11 km), bus stands/transport links are reasonably accessible. ",
    },
    {
      question: " What is the current status of the project / construction (as per last update)?",
      answer:
        "As of the last noted construction status (on the project page), the date shown is 20-Sep-2022.  ",
    },
    {
      question: "Who is the developer / builder behind Unique Green Meadows?",
      answer:
        "The project is by Unique Builders a major real estate developer active in Jaipur and across Rajasthan. ",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      <section className="py-20 bg-white">
        <h2 className="text-center text-xl tracking-widest text-gray-600 mb-14">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-6xl mx-auto space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border-b px-6 py-5 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-md text-black font-medium">
                  {item.question}
                </h4>
                <span className="text-black text-xl leading-none">
                  {openFAQ === i ? "−" : "+"}
                </span>
              </div>

              {openFAQ === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-600 text-sm" style={{letterSpacing: "0.5px"}}
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
