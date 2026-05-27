import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Home Pages */
import IndexHome from "./Components/HomePage/index.jsx";
import IndexHome2 from "./Components/HomePage/index2.jsx";

/* Project Detail Pages */
import GreenMeadows from "./Components/ProjectDetail/index.jsx";
import ISParadise from "./Components/ProjectDetailIS/indexIS.jsx";
import NewTown from "./Components/ProjectDetailNewtown/indexNew.jsx";
// chanin?÷
/* Other Pages */
import ProjectsPage from "./Components/ProjectsPage.jsx";
import ProjectsDetails from "./Components/ProjectDetail.jsx";

import ProjectsDetails3 from "./Components/ProjectDetail3.jsx";
import IndexContact from "./Components/Contact/index.jsx";
import AboutUsPage from "./Components/About.jsx";
import AboutUsPage2 from "./Components/About2.jsx";

import BlogPage from "./Components/BlogPage.jsx";
import OurImpactPage from "./Components/OurImpactPage.jsx";
import BlogDetail from "./Components/BlogDetail.jsx";
import Privacy from "./Components/Privacy.jsx";
import TermsAndConditions from "./Components/TermsAndConditions.jsx";
import AboutFounderPage from "./Components/AboutFounder.jsx";
import EcoLayout from "./Components/sustainablity.jsx";

import Career from "./Components/Career.jsx";
import CSR from "./Components/CSR.jsx";
import Media from "./Components/Media.jsx";
import Values from "./Components/Values.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<IndexHome />} />
        <Route path="/home2" element={<IndexHome2 />} />

        {/* Project Details */}
        <Route path="/green-meadows" element={<GreenMeadows />} />
        <Route path="/is-paradise" element={<ISParadise />} />
        <Route path="/new-town" element={<NewTown />} />

        {/* Static Pages */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectsDetails3 />} />
        
        <Route path="/connect" element={<IndexContact />} />
        <Route path="/ourstory" element={<AboutUsPage2 />} />
        {/* <Route path="/ourstory2" element={<AboutUsPage2 />} /> */}
        <Route path="/real-estate-journal" element={<BlogPage />} />
        <Route path="/our-impact" element={<OurImpactPage />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/t&c" element={<TermsAndConditions />} />
        <Route path="/about-founder" element={<AboutFounderPage />} />
        <Route path="/sustainblity" element={<EcoLayout />} />

        <Route path="/career" element={<Career />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/media" element={<Media />} />
        <Route path="/values" element={<Values />} />
      </Routes>
    </Router>
  );
}
