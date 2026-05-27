import React from "react";

import HeroSlider from "./HeroSlider";
import ProjectIntro from "./ProjectIntro";
import LuxuryShowcase from "./LuxuryShowcase";
import LuxuryTabs from "./LuxuryTabs";
import AmenitiesSection from "./AmenitiesSection";
import GallerySlider from "./GallerySlider";
import FaqSection from "./Faq";
import ContactFormSection from "./ContactFormSection";

import Header from "../../Header";
import Footer from "../../Footer";


import AutoReveal from "../AutoReveal";

const Index = () => {
  return (
    <>
      <Header />

      {/* HERO – no animation */}
      <HeroSlider />

      <AutoReveal>
        <ProjectIntro />
      </AutoReveal>

      <AutoReveal>
        <LuxuryShowcase />
      </AutoReveal>

      <AutoReveal>
        <LuxuryTabs />
      </AutoReveal>

      <AutoReveal>
        <AmenitiesSection />
      </AutoReveal>

      <AutoReveal>
        <GallerySlider />
      </AutoReveal>

      <AutoReveal>
        <FaqSection />
      </AutoReveal>

      <AutoReveal>
        <ContactFormSection />
      </AutoReveal>

      <Footer />
    </>
  );
};

export default Index;
