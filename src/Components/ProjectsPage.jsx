import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import InstagramSection from "./InstagramSection";
import one from "../assets/UB Logos/1.png";
import two from "../assets/UB Logos/2.png";
import three from "../assets/UB Logos/3.png";
import four from "../assets/UB Logos/4.png";
import five from "../assets/UB Logos/5.png";
import six from "../assets/UB Logos/6.png";
import seven from "../assets/UB Logos/7.png";
import eight from "../assets/UB Logos/8.png";
import nine from "../assets/UB Logos/9.png";
import ten from "../assets/UB Logos/10.png";
import eleven from "../assets/UB Logos/11.png";
import twelve from "../assets/UB Logos/12.png";
import thirteen from "../assets/UB Logos/13.png";
import fourteen from "../assets/UB Logos/14.png";
import fifteen from "../assets/UB Logos/15.png";
import sixteen from "../assets/UB Logos/16.png";
import seventeen from "../assets/UB Logos/17.png";
import eighteen from "../assets/UB Logos/18.png";
import nineteen from "../assets/UB Logos/19.png";
import twenty from "../assets/UB Logos/20.png";
import twentyone from "../assets/UB Logos/21.png";
import twentytwo from "../assets/UB Logos/22.png";
import twentythree from "../assets/UB Logos/23.png";
import twentyfour from "../assets/UB Logos/24.png";
import twentyfive from "../assets/UB Logos/25.png";
import twentysix from "../assets/UB Logos/26.png";
import twentyseven from "../assets/UB Logos/27.png";
import twentyeight from "../assets/UB Logos/28.png";
import twentynine from "../assets/UB Logos/29.png";
import thirty from "../assets/UB Logos/30.png";
import thirtyone from "../assets/UB Logos/31.png";
import thirtytwo from "../assets/UB Logos/32.png";
import thirtythree from "../assets/UB Logos/33.png";
import thirtyfour from "../assets/UB Logos/34.png";
import thirtyfive from "../assets/UB Logos/35.png";
import thirtysix from "../assets/UB Logos/36.png";
import thirtyseven from "../assets/UB Logos/37.png";
import thirtyeight from "../assets/UB Logos/38.png";
import thirtynine from "../assets/UB Logos/39.png";
import forty from "../assets/UB Logos/40.png";
import fortyone from "../assets/UB Logos/41.png";
import fortytwo from "../assets/UB Logos/42.png";
import fortythree from "../assets/UB Logos/43.png";
import fortyfour from "../assets/UB Logos/44.png";
import fortyfive from "../assets/UB Logos/45.png";
import Newsletter from "./Newsletter";

/* ---------- KEEP CATEGORIES FIXED ---------- */
const categories = [
  "RESIDENTIAL",
  "COMMERCIAL",
  "HOSPITALITY",
  "PLOTTING TOWNSHIP",
  "UNIQUE SHREE", 
];

// console.log(allprojects);
// let locatin_set = 
// const locations = ["ALL",...location_filter];
const priceRanges = ["ALL", "50LAC-1CR", "1CR-5CR"];
const statusOptions = ["ALL", "Completed", "Ongoing", "Upcoming"];

const PROJECTS_CACHE_KEY = "ub_projects_cache_v1";


/* ================= CLICKABLE LOGOS ================= */
const demoLogos = [
  { image: one, url: "https://www.microsoft.com" },
  { image: two, url: "https://www.amazon.com" },
  { image: three, url: "https://www.google.com" },
  { image: four, url: "https://www.netflix.com" },
  { image: five, url: "https://www.apple.com" },
  { image: six, url: "https://www.spotify.com" },
  { image: seven, url: "https://www.spotify.com" },
  { image: eight, url: "https://www.spotify.com" },
  { image: nine, url: "https://www.spotify.com" },
  { image: ten, url: "https://www.spotify.com" },
  { image: eleven, url: "https://www.spotify.com" },
  { image: twelve, url: "https://www.spotify.com" },
  { image: thirteen, url: "https://www.spotify.com" },
  { image: fourteen, url: "https://www.spotify.com" },
  { image: fifteen, url: "https://www.spotify.com" },
  { image: sixteen, url: "https://www.spotify.com" },
  { image: seventeen, url: "https://www.spotify.com" },
  { image: eighteen, url: "https://www.spotify.com" },
  { image: nineteen, url: "https://www.spotify.com" },
  { image: twenty, url: "https://www.spotify.com" },
  { image: twentyone, url: "https://www.spotify.com" },
  { image: twentytwo, url: "https://www.spotify.com" },
  { image: twentythree, url: "https://www.spotify.com" },
  { image: twentyfour, url: "https://www.spotify.com" },
  { image: twentyfive, url: "https://www.spotify.com" },
  { image: twentysix, url: "https://www.spotify.com" },
  { image: twentyseven, url: "https://www.spotify.com" },
  { image: twentyeight, url: "https://www.spotify.com" },
  { image: twentynine, url: "https://www.spotify.com" },
  { image: thirty, url: "https://www.spotify.com" },
  { image: thirtyone, url: "https://www.spotify.com" },
  { image: thirtytwo, url: "https://www.spotify.com" },
  { image: thirtythree, url: "https://www.spotify.com" },
  { image: thirtyfour, url: "https://www.spotify.com" },
  { image: thirtyfive, url: "https://www.spotify.com" },
  { image: thirtysix, url: "https://www.spotify.com" },
  { image: thirtyseven, url: "https://www.spotify.com" },
  { image: thirtyeight, url: "https://www.spotify.com" },
  { image: thirtynine, url: "https://www.spotify.com" },
  { image: forty, url: "https://www.spotify.com" },
  { image: fortyone, url: "https://www.spotify.com" },
  { image: fortytwo, url: "https://www.spotify.com" },
  { image: fortythree, url: "https://www.spotify.com" },
  { image: fortyfour, url: "https://www.spotify.com" },
  { image: fortyfive, url: "https://www.spotify.com" },
];

/* ================= CUSTOM SELECT ================= */
function CustomSelect({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-300 px-4 py-3 bg-white cursor-pointer flex justify-between items-center hover:bg-black hover:text-white transition duration-300"
      >
        <span>{value === "ALL" ? placeholder : value}</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {open && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-3 cursor-pointer hover:bg-black hover:text-white transition duration-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const FALLBACK_IMAGE =
  "https://via.placeholder.com/1200x800?text=Project+Image";

function normalizeProjects(projects) {
  return [...projects].sort((a, b) => {
    const aTime = parseInt(a?._id?.substring(0, 8), 16);
    const bTime = parseInt(b?._id?.substring(0, 8), 16);
    return bTime - aTime;
  });
}

/* ================= MAIN COMPONENT ================= */
export default function ProjectsPage() {
  const [allProjects, setAllProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("RESIDENTIAL");
  const [locFilter, setLocFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [priceFilter, setPriceFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let location_filter = allProjects.length>0 ? allProjects.map(p => p.location) : [];
  location_filter = location_filter.map(loc => loc.trim());
  location_filter = [...new Set(location_filter)];
   console.log("loc ",location_filter);

  const locations = ["ALL",...location_filter];

  const repeatedLogos = useMemo(() => [...demoLogos, ...demoLogos], []);
  const location = useLocation();
  const navigate = useNavigate();
  const tabsSectionRef = useRef(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveTab(categoryFromUrl);
    }

    if (location.hash === "#project-tabs" && tabsSectionRef.current) {
      setTimeout(() => {
        const headerOffset = 130;
        const elementTop =
          tabsSectionRef.current.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementTop - headerOffset,
          behavior: "smooth",
        });
      }, 120);
    }
  }, [location.search, location.hash]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadCachedProjects = () => {
      try {
        const cached = sessionStorage.getItem(PROJECTS_CACHE_KEY);
        if (!cached) return false;

        const parsed = JSON.parse(cached);
        if (!Array.isArray(parsed)) return false;

        if (isMounted) {
          setAllProjects(parsed);
          setLoading(false);
        }
        return true;
      } catch {
        return false;
      }
    };
console.log("fetching projects from API...",allProjects);
    const fetchProjects = async () => {
      const hadCache = loadCachedProjects();

      if (!hadCache) {
        setLoading(true);
      }

      setError("");

      try {
        // const res = await fetch("/proxy-api/api/projects", {
         const res = await fetch("https://back-bulding-code.onrender.com/projects", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        console.log("API Response:", data);
        // if (!data?.success) {
        //   throw new Error("Invalid API response");
        // }
        
        const normalized = normalizeProjects(data);

        sessionStorage.setItem(PROJECTS_CACHE_KEY, JSON.stringify(normalized));

        if (isMounted) {
          setAllProjects(normalized);
          setError("");
          setLoading(false);
        }
      } catch (err) {
        if (err.name === "AbortError") return;

        console.error("API Error:", err);

        if (!hadCache) {
          try {
            // const retryRes = await fetch("/proxy-api/api/projects", {
                const retryRes = await fetch("https://back-bulding-code.onrender.com/projects", {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
              signal: controller.signal,
            });

            if (!retryRes.ok) {
              throw new Error(`Retry HTTP ${retryRes.status}`);
            }

            const retryData = await retryRes.json();

            if (!retryData?.success || !Array.isArray(retryData)) {
              throw new Error("Retry invalid API response");
            }
    console.log("Retry API Response:", retryData);
            const normalizedRetry = normalizeProjects(retryData.data);

            sessionStorage.setItem(
              PROJECTS_CACHE_KEY,
              JSON.stringify(normalizedRetry)
            );

            if (isMounted) {
              setAllProjects(normalizedRetry);
              setError("");
              setLoading(false);
            }
          } catch (retryErr) {
            if (retryErr.name === "AbortError") return;

            console.error("Retry API Error:", retryErr);

            if (isMounted) {
              setError("Failed to load projects.");
              setLoading(false);
            }
          }
        } else {
          if (isMounted) {
            setError("");
            setLoading(false);
          }
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleTabClick = (cat) => {
    setActiveTab(cat);

    navigate(`/projects?category=${encodeURIComponent(cat)}#project-tabs`, {
      replace: true,
    });

    if (tabsSectionRef.current) {
      const headerOffset = 130;
      const elementTop =
        tabsSectionRef.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - headerOffset,
        behavior: "smooth",
      });
    }
  };

  const filtered = useMemo(() => {
    return allProjects
      .filter((p) => p.category === activeTab)
      .filter((p) => locFilter === "ALL" || p.location === locFilter)
      .filter((p) => statusFilter === "ALL" || p.status === statusFilter)
      .filter((p) => priceFilter === "ALL" || p.priceRange === priceFilter)
      .reverse();
  }, [allProjects, activeTab, locFilter, statusFilter, priceFilter]);

  // console.log("filtered projects ", filtered,activeTab);

  const filteredy = allProjects
  .filter((p) => {
    console.log("PROJECT CATEGORY =", p.category);
    return p.category === activeTab;
  });

  console.log("ACTIVE TAB =", activeTab);
console.log("data->",allProjects?.find(p => p.slug === "testima8"));
  return (
    <>  
      <Header />
 
      <div className="w-full bg-white pt-24">
        <h1 className="mb-20 text-4xl font-light tracking-widest text-center mt-20">
          OUR PROJECTS
        </h1>

        <div className="relative overflow-hidden max-w-6xl mx-auto mb-20">
          <div
            className="flex gap-20 w-max"
            style={{ animation: "marquee 100s linear infinite" }}
          >
            {repeatedLogos.map((logo, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={logo.image}
                  alt="logo"
                  className="h-14 object-contain opacity-100 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div
          id="project-tabs"
          ref={tabsSectionRef}
          className="scroll-mt-[140px]"
        >
          <div className="flex justify-center gap-10 mb-10 text-sm font-medium tracking-wide flex-wrap px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabClick(cat)}
                className={`pb-1 transition duration-200 ${
                  activeTab === cat
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FILTERS */}
          <div className="grid max-w-xl grid-cols-1 gap-5 px-6 mx-auto mb-12 sm:grid-cols-3">
            <CustomSelect
              options={locations}
              value={locFilter}
              onChange={setLocFilter}
              placeholder="Location"
            />
            <CustomSelect
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
              placeholder="Status"
            />
            <CustomSelect
              options={priceRanges}
              value={priceFilter}
              onChange={setPriceFilter}
              placeholder="Budget"
            />
          </div>
        </div>

        {/* STATES */}
        {loading && (
          <div className="text-center py-16 text-gray-600">
            Loading projects...
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-16 text-red-600">{error}</div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            No projects found in this category/filter.
          </div>
        )}

        {/* PROJECT GRID */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-y-14 gap-x-8 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project._id}
                className="group block"
              >
                <article className="bg-white">
                  <div className="relative overflow-hidden bg-[#f4efe8]">
                    <img
                      src={project.heroImage1 || FALLBACK_IMAGE}
                      alt={project.name || "Project"}
                      className="w-full h-[520px] md:h-[600px] object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>

                  <div className="pt-6 md:pt-7">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b8074]">
                        {project.category || "Project"}
                      </p>

                      {project.status && (
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[#8b8074] whitespace-nowrap">
                          {project.status}
                        </p>
                      )}
                    </div>

                    <h3 className="text-[24px] md:text-[28px] font-light leading-[1.15] text-[#2f2a26] mb-3 transition-colors duration-300 group-hover:text-[#8b6f56]">
                      {project.name}
                    </h3>

                    {(project.location || project.address) && (
                      <p className="text-[14px] md:text-[15px] text-[#7a7066] leading-7 mb-4">
                        {project.location || project.address}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        <Newsletter />
        <InstagramSection />
      </div>

      <Footer />

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </>
  );
}