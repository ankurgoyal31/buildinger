import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import ContactBanner from "./ContactBanner";
import ContactDetails from "./Location";
import AssistSection from "./AssistSection";
import AutoReveal from "../AutoReveal";
import InstagramSection from "../InstagramSection";

const IndexContact = () => {
  return (
    <>
      <Header />

      <AutoReveal>
        <ContactBanner />
      </AutoReveal>

      <AutoReveal>
        <AssistSection />
      </AutoReveal>

      <AutoReveal>
        <ContactDetails />
      </AutoReveal>
      <AutoReveal><InstagramSection /></AutoReveal>

      <Footer />
    </>
  );
};

export default IndexContact;
