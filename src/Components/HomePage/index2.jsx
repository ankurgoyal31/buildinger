import React from "react";
import HomeHero from "./Elements/HomeHero";
import NewDevelopments from "./Elements/NewDevelopments";

import BusinessHighlights from "./Elements/BusinessHighlights";
import ExperienceSection from "./Elements/ExperienceSection";
import RajasthanMap from "./Elements/Map";
import ValuesSection from "./Elements/ValuesSection";
import CommunitiesSection from "./Elements/CommunitiesSection";
import MilestonesSection from "./Elements/MilestonesSection";
import About from "./Elements/About";
import LifestyleSection from "./Elements/LifestyleSection";
import FeaturedInSlider from "./Elements/FeaturedInSlider";
import AwardsSection from "./Elements/AwardsSection";
import ResponsiveCarousel from "./Elements/ResponsiveCarousel";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import ElicyonStyleBlogBanner from "./Elements/Newblog/FeaturedBlogBanner";
import StatsSection from "./Elements/StatsSection";
import MainSlider from "../MainSlider"
import Header from "../../Header"
import Footer from "../../Footer"
import MapNew  from "../HomePage/Elements/MapNew"


const IndexHome2 = () => {
  return (
    <>

 <Header />
      <HomeHero />
   <StatsSection />
   <MainSlider />
   <BusinessHighlights />
      <ValuesSection />
      <CommunitiesSection />
      <MilestonesSection />
        <ElicyonStyleBlogBanner />
      <About />
     <LifestyleSection />
       <FeaturedInSlider />
     {/* <RajasthanMap /> */}
     <AwardsSection />
     <Footer />
    </>
  );
};

export default IndexHome2;
