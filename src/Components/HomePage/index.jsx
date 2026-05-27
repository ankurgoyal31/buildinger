import React from "react";
import HomeHero from "./Elements/HomeHero";
import HomeHeroNew from "./Elements/HomeHeroNew";
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
import Header from "../../Header";
import Footer from "../../Footer";
import StatsSection from "./Elements/StatsSection";
import FeaturedDevelopments from "./Elements/FeaturedDevelopments";
import Awards from "./Awards";
import TrustSection from "./Elements/Trust";
import AutoReveal from "../AutoReveal.jsx";
import InstagramSection from "../InstagramSection.jsx";
import Newsletter from "../Newsletter.jsx";

import OurHistory from './OurHistory.jsx'

const IndexHome = () => {
  return (
    <>
    <Header />
      <AutoReveal><HomeHeroNew /></AutoReveal>
      <AutoReveal><CommunitiesSection /></AutoReveal>
      <AutoReveal><StatsSection /></AutoReveal>
      <AutoReveal><MilestonesSection /></AutoReveal>
      <AutoReveal><TrustSection /></AutoReveal>
      <AutoReveal><FeaturedDevelopments /></AutoReveal> 
      <AutoReveal><LifestyleSection /></AutoReveal>
      <AutoReveal><Awards /></AutoReveal>
      <AutoReveal><Newsletter /></AutoReveal>
      <AutoReveal><InstagramSection /></AutoReveal>
      <Footer />
    </>
  );
};

export default IndexHome;
