import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "../Components/AutoReveal";

import BoardOfDirectors from "./aboutfounder/BoardOfDirectors";
import ManagementSection from "./aboutfounder/ManagementSection";

export default function AboutFounderPage() {
  return (
    <>
      <Header />

      <AutoReveal>
        <section className="px-6 pt-32 pb-20 text-center">
          <h2 className="text-3xl font-light md:text-4xl">
            Leadership & Founders
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Visionary leadership and experienced professionals driving
            excellence at Unique Group.
          </p>
        </section>
      </AutoReveal>

      <BoardOfDirectors />
      <ManagementSection />

      <Footer />
    </>
  );
}
