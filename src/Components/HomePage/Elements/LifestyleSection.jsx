import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video1 from "../../../assets/HomePage.mp4";

const BASE_URL = "https://ub-admin-ejs.onrender.com";

export default function LifestyleSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
     fetch("/proxy-api/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data.slice(0, 3));
        }
      })
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <section className="w-full bg-[#f8f8f6] ps-6">
      {/* Top intro row */}
      <div className="grid grid-cols-1 md:grid-cols-10 container-fluid mx-auto">
        {/* Left Text (50%) */}
        <div className="md:col-span-5 pr-70 ps-30 flex flex-col justify-center p-10">
          <h2 className="text-[32px]">Beyond the Horizon of Construction</h2>
         <p className="mt-6 mb-10 text-gray-700 text-[16px] leading-tight">
            Many build for the present; we build for the heritage. Our
            "Human-Centric Design" philosophy ensures that every corridor, every
            window placement, and every amenity is an answer to a lifestyle
            need. Each detail is thoughtfully considered — from natural light
            and ventilation to spatial flow and everyday convenience — creating
            homes that feel intuitive, comfortable, and timeless.
            <br />
            <br />
            By integrating the latest in construction technology and
            forward-thinking design principles, we eliminate the friction of
            home buying, replacing it with a journey defined by transparency,
            trust, and long-term value. Our approach goes beyond structures; it
            is about crafting environments where families grow, memories are
            created, and life unfolds seamlessly.
          </p>
        </div>

        {/* Right Video (50%) */}
        <div className="md:col-span-5 self-stretch">
          <video
            src={video1}
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          ></video>
        </div>
      </div>

      {/* Featured Projects Cards */}
      {/* {projects.length > 0 && (
        <div className="py-16 px-6 container-fluid mx-auto">
          <h3 className="text-2xl font-light tracking-wide uppercase mb-10 ps-30">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project._id}
                className="relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={project.heroImage1}
                  alt={project.name}
                  className="w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">{project.name}</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.address}
                  </p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block bg-white text-black px-5 py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white border border-white transition duration-300 w-fit"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
}
