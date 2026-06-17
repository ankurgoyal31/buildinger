import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import video from "../assets/GreenMeadows.mov";


// ─── Responsive hook ─────────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return w;
}

const BASE_URL = "/proxy-api";

const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const isTablet = vw < 1024;
  const [project, setProject] = useState(null);
  const [activeMedia, setActiveMedia] = useState("Location");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openEnquireModal = () => { setModalOpen(true); setFormSubmitted(false); };
  const closeEnquireModal = () => setModalOpen(false);
  const handleFormChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleFormSubmit = () => {
    if (!formData.name || !formData.phone) return;
    console.log("Enquiry submitted:", { project: project?.name, ...formData });
    setFormSubmitted(true);
  };
  console.log(slug, project);

  // useEffect(() => {
  //    fetch(`${BASE_URL}/api/projects/${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Project fetch response:", data);
  //       if (data.success) setProject(data.data);
  //     })
  //     .catch((err) => console.error("Project fetch error:", err));
  // }, [slug]);

  useefect(() => {  
    fetch(`${BASE_URL}/apiprojects/${slug}`)

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const heroImages = useMemo(() => {
    if (!project) return [];
    return [project.heroImage1, project.heroImage2, project.heroImage3]
      .filter(Boolean)
      .map(getImageUrl);
  }, [project]);

  const mediaTabs = useMemo(() => {
    if (!project) return [];
    return [
      { label: "Location", img: getImageUrl(project.locationImage) },
      { label: "Master Plan", img: getImageUrl(project.masterPlanImage) },
      { label: "Floor Plan", img: getImageUrl(project.floorPlanImage) },
      { label: "Clubhouse", img: getImageUrl(project.exclusiveClubImage) },
      { label: "Nearby Facilities", img: getImageUrl(project.facilitiesNearbyImage) },
      { label: "Construction Update", img: getImageUrl(project.constructionUpdateImage) },
    ].filter((tab) => tab.img);
  }, [project]);

  useEffect(() => {
    if (mediaTabs.length > 0 && !mediaTabs.some((item) => item.label === activeMedia)) {
      setActiveMedia(mediaTabs[0].label);
    }
  }, [mediaTabs, activeMedia]);

  const activeMediaItem = useMemo(
    () => mediaTabs.find((item) => item.label === activeMedia) || mediaTabs[0] || null,
    [mediaTabs, activeMedia]
  );

  const activeMediaIndex = useMemo(
    () => mediaTabs.findIndex((item) => item.label === activeMedia),
    [mediaTabs, activeMedia]
  );

  const featureGroups = useMemo(() => {
    if (!project) return [];
    return [
      { title: "Area & Planning", items: project.areaAndLot || project.area_and_lot || project.areaPlanning || project.area_and_planning || project.areaLot || [] },
      { title: "Interior Features", items: project.interior || project.interiorFeatures || project.interior_features || [] },
      { title: "Exterior Features", items: project.exterior || project.exteriorFeatures || project.exterior_features || [] },
    ].filter((g) => Array.isArray(g.items) && g.items.length > 0);
  }, [project]);

  const highlights = useMemo(() => {
    const raw = project?.highlights || project?.projectHighlights || project?.project_highlights || [];
    return Array.isArray(raw) ? raw : [];
  }, [project]);

  const faqs = useMemo(() => {
    const raw = project?.faqs || [];
    return Array.isArray(raw) ? raw : [];
  }, [project]);

  // Hero facts — RERA shown in full, no truncation
  const heroFacts = [
    { label: "Location", value: project?.address || "V. Kallahalli, Bengaluru" },
    { label: "Price", value: project?.startingPrice || project?.price || "₹ 1.29* Cr onwards" },
    { label: "Type", value: project?.projectType || "Apartment" },
    { label: "Bedrooms", value: project?.bedrooms || project?.bhk || "2 & 3 BHK" },
    { label: "Area", value: project?.developmentSize || project?.acreage || "4.38 Acres" },
    { label: "RERA No.", value: project?.reraNumber || project?.rera_no || "PRM/KA/RERA/1251/308/PR/110326/008519" },
  ];

  if (!project) {
    return (
      <div style={S.loadingWrap}>
        <div style={S.loadingBar} />
        <p style={S.loadingText}>Loading project</p>
      </div>
    );
  }

  return (
    <>
      <style>{css}</style>
      <Header />

      <main style={{ background: C.bg, color: C.text, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

        {/* ── HERO ── */}
        <section className="pd-hero">
          <div className="pd-hero-img">
            {heroImages.length > 0 ? (
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                style={{ width: "100%", height: "100%" }}
              >
                {heroImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(${img})`,
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "#1a1a1a" }} />
            )}
          </div>

          <div className="pd-hero-content">
            <div style={S.heroTop}>
              {/* <span style={S.heroEyebrow}>Residential Project</span> */}
              {project.logoImage ? (
                <img src={getImageUrl(project.logoImage)} alt={project.name} style={S.heroLogo} />
              ) : (
                <h1 style={S.heroTitle}>{project.name || "Project Details"}</h1>
              )}
              <p style={S.heroDesc}>
                {project.aboutDescription
                  ? project.aboutDescription.slice(0, 200) + (project.aboutDescription.length > 200 ? "…" : "")
                  : project.address}
              </p>
            </div>

            <div className="pd-facts-grid">
              {heroFacts.map((f, i) => (
                <div key={i} style={S.factCell}>
                  <span style={S.factLabel}>{f.label}</span>
                  <span style={S.factValue}>{f.value}</span>
                </div>
              ))}
            </div>

            {project.brochureFile && (
              <div style={S.heroCTAs}>
                <a
                  href={getImageUrl(project.brochureFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={S.btnDark}
                  className="pd-btn-dark"
                >
                  Download Brochure
                </a>
              </div>
            )}

            {/* <div style={S.heroAddress}>
              <span style={S.heroAddressText}>{project.address || "Prime Location"}</span>
            </div> */}
          </div>
        </section>

        {/* ── NAV ── */}
        <nav style={S.nav} className="pd-nav">
          <div style={S.navInner}>
            {["overview", "showcase", "amenities", "highlights", "walkthrough", "faq", "enquire"].map((sec, i) => (
              <button key={sec} onClick={() => scrollToSection(sec)} style={S.navBtn} className="pd-nav-btn">
                <span style={S.navNum}>{String(i + 1).padStart(2, "0")}</span>
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* ── OVERVIEW ── */}
        <section id="overview" style={S.section}>
          <div className="pd-overview-grid">
            <div>
              <span style={S.label}>01 — Overview</span>
              <h2 style={S.heading}>Crafted for elevated living.</h2>
              <p style={S.body}>
                {project.aboutDescription ||
                  "This project is designed to offer a premium residential lifestyle through thoughtful planning, strong visual identity, and a better balance of architecture, comfort, and everyday convenience."}
              </p>
              <div style={S.overviewActions}>
                {project.brochureFile && (
                  <a
                    href={getImageUrl(project.brochureFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={S.btnDark}
                    className="pd-btn-dark"
                  >
                    Get Brochure
                  </a>
                )}
              </div>
            </div> 
            <div style={S.overviewImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop"
                alt="Project"
                style={S.overviewImg}
              />
              <div style={S.overviewImgTag}>Luxury Residences</div>
            </div>
          </div>
        </section>

        {/* ── SHOWCASE ── */}
        {mediaTabs.length > 0 && activeMediaItem && (
          <section id="showcase" style={S.showcase}>
            <div style={S.showcaseShell}>
              <div style={S.showcaseHeader}>
                <span style={S.label}>02 — Plans & Media</span>
                <h2 style={S.heading}>Project Showcase</h2>
              </div>

              <div className="pd-showcase-layout">
                <div className="pd-showcase-menu">
                  <div style={S.menuMeta}>
                    <span style={S.menuMetaText}>Browse</span>
                    <span style={S.menuMetaText}>
                      {String(activeMediaIndex + 1).padStart(2, "0")} / {String(mediaTabs.length).padStart(2, "0")}
                    </span>
                  </div>
                  {mediaTabs.map((tab, i) => {
                    const active = activeMedia === tab.label;
                    return (
                      <button
                        key={tab.label}
                        onClick={() => setActiveMedia(tab.label)}
                        style={{ ...S.menuItem, ...(active ? S.menuItemActive : {}) }}
                        className={`pd-menu-item${active ? " pd-menu-item--active" : ""}`}
                      >
                        <span style={S.menuItemNum}>{String(i + 1).padStart(2, "0")}</span>
                        <span style={S.menuItemLabel}>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div style={S.visual}>
                  <div style={S.visualFrame}>
                    <img
                      key={activeMediaItem.label}
                      src={activeMediaItem.img}
                      alt={activeMediaItem.label}
                      style={S.visualImg}
                      className="pd-visual-img"
                    />
                    <div style={S.visualFooter}>
                      <span style={S.visualFooterLabel}>{activeMediaItem.label}</span>
                      <span style={S.visualFooterCount}>
                        {String(activeMediaIndex + 1).padStart(2, "0")} / {String(mediaTabs.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── AMENITIES ── */}
        {featureGroups.length > 0 && (
          <section id="amenities" style={S.section}>
            <span style={S.label}>03 — Features & Amenities</span>
            <h2 style={{ ...S.heading, marginBottom: 48 }}>Comfort and lifestyle — organised.</h2>
            <div className="pd-amenities-grid">
              {featureGroups.map((group, idx) => (
                <div key={group.title} className="pd-amenity-group">
                  <div style={S.amenityGroupHead}>
                    <span style={S.amenityNum}>{String(idx + 1).padStart(2, "0")}</span>
                    <h3 style={S.amenityTitle}>{group.title}</h3>
                  </div>
                  <div style={S.divider} />
                  <ul style={S.amenityList}>
                    {group.items.map((item, i) => (
                      <li key={i} style={S.amenityItem}>
                        <span style={S.amenityDash}>—</span>
                        <span style={S.amenityText}>{item?.title || item?.name || item?.label || item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── HIGHLIGHTS ── */}
        {highlights.length > 0 && (
          <section id="highlights" style={S.highlights}>
            <div style={S.highlightsHead}>
              <span style={{ ...S.label, color: "#555" }}>04 — Signature Highlights</span>
              <h2 style={{ ...S.heading, color: "#f0ede8", maxWidth: 600 }}>
                Moments that define the project.
              </h2>
            </div>
            <div className="pd-highlights-grid">
              {highlights.map((item, i) => (
                <div key={i} className="pd-hl-card">
                  <div style={S.hlImgWrap}>
                    <img
                      src={getImageUrl(item?.image || item?.img || item?.photo)}
                      alt={item?.title || "Highlight"}
                      style={S.hlImg}
                      className="pd-hl-img"
                    />
                    <div style={S.hlOverlay} />
                  </div>
                  <div style={S.hlBody}>
                    <span style={S.hlNum}>Highlight {String(i + 1).padStart(2, "0")}</span>
                    <h3 style={S.hlTitle}>{item?.title || item?.name || `Highlight ${String(i + 1).padStart(2, "0")}`}</h3>
                    <p style={S.hlDesc}>{item?.description || item?.desc || ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── WALKTHROUGH ── */}
        <section id="walkthrough" style={S.section}>
  {/* Title ABOVE video */}
  <span style={S.label}>05 — Walkthrough</span>
  <h2 style={{ ...S.heading, marginBottom: 32 }}>
    Project Walkthrough
  </h2>

  {/* Video */}
  <div style={S.walkthrough}>
    <video
      style={S.walkthroughVideo}
      src={video}
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
</section>

        {/* ── FAQ ── */}
        {faqs.length > 0 && (
          <section id="faq" style={S.section}>
            <div className="pd-faq-grid">
              <div style={S.faqLeft}>
                <span style={S.label}>06 — FAQ</span>
                <h2 style={{ ...S.heading, maxWidth: 320 }}>Questions buyers usually ask.</h2>
              </div>
              <div style={S.faqRight}>
                {faqs.map((faq, i) => {
                  const open = openFAQ === i;
                  return (
                    <div key={i} style={S.faqItem}>
                      <button onClick={() => setOpenFAQ(open ? null : i)} style={S.faqQ}>
                        <span style={S.faqQText}>{faq.question}</span>
                        <span style={{ ...S.faqIcon, transform: open ? "rotate(45deg)" : "none" }}>+</span>
                      </button>
                      {open && (
                        <div style={S.faqA}>
                          <p style={S.faqAText}>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── CLOSING STRIP ── */}
        <section id="enquire" className="pd-closing-strip">
          <div className="pd-closing-left">
            <span style={S.label}>07 — Get In Touch</span>
            <h2 style={{ ...S.heading, maxWidth: 480, marginBottom: 12 }}>
              Ready to take the next step?
            </h2>
            <p style={{ ...S.body, marginBottom: 36 }}>
              Our team is available to walk you through the project, answer your questions, and help you find the right home.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={openEnquireModal} style={S.btnDark} className="pd-btn-dark">
                Enquire Now
              </button>
              {project.brochureFile && (
                <a
                  href={getImageUrl(project.brochureFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={S.btnOutline}
                  className="pd-btn-outline"
                >
                  Download Brochure
                </a>
              )}
            </div>
          </div>
          <div className="pd-closing-right">
            <img
              src={heroImages[1] || heroImages[0] || "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1932&auto=format&fit=crop"}
              alt="Project"
              style={S.closingImg}
            />
          </div>
        </section>

        {/* ── ENQUIRE MODAL ── */}
        {modalOpen && (
          <div style={S.modalBackdrop} onClick={closeEnquireModal}>
            <div style={S.modalBox} onClick={(e) => e.stopPropagation()}>
              <button onClick={closeEnquireModal} style={S.modalClose} className="pd-modal-close">✕</button>

              {formSubmitted ? (
                <div style={S.modalSuccess}>
                  <div style={S.modalSuccessTick}>✓</div>
                  <h3 style={S.modalSuccessTitle}>We'll be in touch.</h3>
                  <p style={S.modalSuccessText}>
                    Thank you for your interest in {project.name || "this project"}. Our sales team will reach out within 24 hours.
                  </p>
                  <button onClick={closeEnquireModal} style={{ ...S.btnDark, marginTop: 24 }} className="pd-btn-dark">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div style={S.modalHeader}>
                    <span style={S.modalEyebrow}>Enquire Now</span>
                    <h3 style={S.modalTitle}>Schedule a Consultation</h3>
                    <p style={S.modalSubtitle}>Fill in your details and we'll get back to you within 24 hours.</p>
                  </div>
                  <div style={S.modalForm}>
                    <div className="pd-field-row">
                      <div style={S.fieldGroup}>
                        <label style={S.fieldLabel}>Full Name *</label>
                        <input name="name" value={formData.name} onChange={handleFormChange} placeholder="Your name" style={S.fieldInput} className="pd-field-input" />
                      </div>
                      <div style={S.fieldGroup}>
                        <label style={S.fieldLabel}>Phone Number *</label>
                        <input name="phone" value={formData.phone} onChange={handleFormChange} placeholder="+91 00000 00000" style={S.fieldInput} className="pd-field-input" />
                      </div>
                    </div>
                    <div style={S.fieldGroup}>
                      <label style={S.fieldLabel}>Email Address</label>
                      <input name="email" value={formData.email} onChange={handleFormChange} placeholder="your@email.com" style={S.fieldInput} className="pd-field-input" />
                    </div>
                    <div style={S.fieldGroup}>
                      <label style={S.fieldLabel}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Any specific questions or requirements…"
                        rows={3}
                        style={{ ...S.fieldInput, resize: "vertical", minHeight: 80 }}
                        className="pd-field-input"
                      />
                    </div>
                    <button
                      onClick={handleFormSubmit}
                      style={{
                        ...S.btnDark,
                        width: "100%",
                        justifyContent: "center",
                        padding: "16px 28px",
                        fontSize: 11,
                        opacity: !formData.name || !formData.phone ? 0.5 : 1,
                        cursor: !formData.name || !formData.phone ? "not-allowed" : "pointer"
                      }}
                    >
                      Submit Enquiry
                    </button>
                    <p style={S.modalDisclaimer}>By submitting you agree to be contacted by the sales team regarding this project.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

// ─── Constants ───────────────────────────────────────────────────────────────
const C = {
  bg: "#f5f2ed",
  bgAlt: "#edeae4",
  bgDark: "#141412",
  text: "#1a1a1a",
  textMid: "#555",
  textMute: "#999",
  border: "#d8d4cc",
  borderDark: "#2a2a28",
  white: "#ffffff",
};

// ─── Styles ──────────────────────────────────────────────────────────────────
const S = {
  walkthrough: {
  position: "relative",
  height: "70vh",
  minHeight: 400,
  overflow: "hidden",
},

walkthroughVideo: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
},
  loadingWrap: { minHeight: "100vh", background: "#f5f2ed", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 },
  loadingBar: { width: 40, height: 1, background: "#1a1a1a", animation: "pd-pulse 1.4s ease-in-out infinite" },
  loadingText: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", margin: 0 },

  heroTop: {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 12,
  marginTop: "80px"
},
  heroEyebrow: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", borderTop: "1px solid #d8d4cc", paddingTop: 12 },
  heroLogo: { height: 90, width: "auto", objectFit: "contain", alignItems: 'left' },
  heroTitle: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, lineHeight: 1, color: "#1a1a1a", margin: 0 },
  heroDesc: {
  fontFamily: "'Helvetica Neue', sans-serif",
  fontSize: 13,
  lineHeight: 1.8,
  color: "#555",
  margin: "0",
  maxWidth: "100%",
},

  factCell: { padding: "14px 16px", borderBottom: "1px solid #d8d4cc", borderRight: "1px solid #d8d4cc", display: "flex", flexDirection: "column", gap: 6 },
  factLabel: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", color: "#999" },
  factValue: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 1.35, color: "#1a1a1a", wordBreak: "break-all", whiteSpace: "normal" },
  heroCTAs: { display: "flex", gap: 14, flexWrap: "wrap" },
  heroAddress: { borderTop: "1px solid #d8d4cc", paddingTop: 18 },
  heroAddressText: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#999" },

  btnDark: { display: "inline-flex", alignItems: "center", background: "#1a1a1a", color: "#f5f2ed", padding: "13px 28px", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none", border: "none", cursor: "pointer", transition: "background 0.2s" },
  btnOutline: { display: "inline-flex", alignItems: "center", background: "transparent", color: "#1a1a1a", padding: "13px 28px", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", border: "1px solid #d8d4cc", cursor: "pointer", transition: "all 0.2s", textDecoration: "none" },
  btnGhost: { display: "inline-flex", alignItems: "center", background: "transparent", color: "#555", padding: "12px 0", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", borderBottom: "1px solid #d8d4cc", cursor: "pointer" },

  nav: { position: "sticky", top: 76, zIndex: 30, background: "#ffffff", borderBottom: "1px solid #d8d4cc" },
  navInner: { maxWidth: 1400, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto" },
  navBtn: { display: "flex", alignItems: "center", gap: 8, padding: "14px 18px", background: "transparent", border: "none", borderRight: "1px solid #d8d4cc", color: "#555", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.2s" },
  navNum: { color: "#999", fontSize: 9 },

  section: { maxWidth: 1400, margin: "0 auto", padding: "80px 48px", borderBottom: "1px solid #d8d4cc" },
  label: { display: "block", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#999", marginBottom: 20 },
  heading: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.04, color: "#1a1a1a", margin: "0 0 24px", letterSpacing: "-0.01em" },
  body: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 14, lineHeight: 1.85, color: "#555", margin: 0 },
  divider: { height: 1, background: "#d8d4cc", marginBottom: 24 },

  overviewActions: { display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", marginTop: 36 },
  overviewImgWrap: { position: "relative" },
  overviewImg: { width: "100%", height: 520, objectFit: "cover", display: "block" },
  overviewImgTag: { position: "absolute", bottom: 0, right: 0, background: "#ffffff", padding: "14px 20px", borderTop: "1px solid #d8d4cc", borderLeft: "1px solid #d8d4cc", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" },

  showcase: { background: "#f1ece5", borderTop: "1px solid #d8d4cc", borderBottom: "1px solid #d8d4cc" },
  showcaseShell: { maxWidth: 1400, margin: "0 auto", padding: "80px 48px" },
  showcaseHeader: { marginBottom: 44 },
  menuMeta: { display: "flex", justifyContent: "space-between", paddingBottom: 14, marginBottom: 8, borderBottom: "1px solid rgba(26,26,26,0.12)", paddingLeft: 20 },
  menuMetaText: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999" },
  menuItem: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "36px 1fr",
    textTransform: "uppercase",
    alignItems: "center",
    gap: 12,
    width: "100%",
    textAlign: "left",
    background: "transparent",
    border: "none",
    padding: "8px 0 8px 20px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    color: "#555"
  },
  menuItemActive: { color: "#1a1a1a" },
  menuItemNum: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#999" },
  menuItemLabel: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 300, lineHeight: 1.05 },

  visual: {},
  visualFrame: { position: "relative", overflow: "hidden", background: "#ddd" },
  visualImg: { width: "100%", height: 520, objectFit: "cover", display: "block", transition: "transform 0.7s ease, opacity 0.3s ease" },
  visualFooter: { position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 100%)" },
  visualFooterLabel: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f3eee8" },
  visualFooterCount: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f3eee8" },

  amenityGroupHead: { display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 },
  amenityNum: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 9, color: "#999", letterSpacing: "0.2em", paddingTop: 4 },
  amenityTitle: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 300, color: "#1a1a1a", margin: 0 },
  amenityList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 },
  amenityItem: { display: "flex", alignItems: "flex-start", gap: 10 },
  amenityDash: { color: "#999", fontSize: 11, lineHeight: 1.9, flexShrink: 0 },
  amenityText: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555" },

  highlights: { background: "#141412", borderTop: "1px solid #2a2a28" },
  highlightsHead: { maxWidth: 1400, margin: "0 auto", padding: "64px 48px 40px", borderBottom: "1px solid #2a2a28", display: "flex", flexDirection: "column", gap: 14 },
  hlImgWrap: { position: "relative", overflow: "hidden" },
  hlImg: { width: "100%", height: 260, objectFit: "cover", display: "block", transition: "transform 0.7s ease" },
  hlOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,14,12,0.6) 0%, transparent 55%)" },
  hlBody: { padding: "24px 28px 32px", borderTop: "1px solid #2a2a28" },
  hlNum: { display: "block", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", color: "#555", marginBottom: 10 },
  hlTitle: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, fontWeight: 300, color: "#f0ede8", margin: "0 0 8px" },
  hlDesc: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", margin: 0 },

  walkthrough: { position: "relative", height: "70vh", minHeight: 400, overflow: "hidden" },
  walkthroughVideo: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },

  faqLeft: { position: "sticky", top: 130 },
  faqRight: { display: "flex", flexDirection: "column" },
  faqItem: { borderBottom: "1px solid #d8d4cc" },
  faqQ: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "24px 0", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" },
  faqQText: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 300, color: "#1a1a1a", lineHeight: 1.4 },
  faqIcon: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 22, color: "#999", flexShrink: 0, transition: "transform 0.2s", display: "block" },
  faqA: { paddingBottom: 24 },
  faqAText: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 14, lineHeight: 1.85, color: "#555", margin: 0 },

  closingImg: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },

  modalBackdrop: { position: "fixed", inset: 0, zIndex: 1000, background: "rgba(20,20,18,0.72)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" },
  modalBox: { position: "relative", background: "#f5f2ed", width: "100%", maxWidth: 560, maxHeight: "92vh", overflowY: "auto", boxShadow: "0 32px 80px rgba(0,0,0,0.28)" },
  modalClose: { position: "absolute", top: 18, right: 18, background: "transparent", border: "none", cursor: "pointer", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 14, color: "#999", lineHeight: 1, padding: 4, zIndex: 2 },
  modalHeader: { padding: "40px 40px 28px", borderBottom: "1px solid #d8d4cc" },
  modalEyebrow: { display: "block", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#999", marginBottom: 14 },
  modalTitle: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 300, color: "#1a1a1a", margin: "0 0 10px", lineHeight: 1.05 },
  modalSubtitle: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", margin: 0 },
  modalForm: { padding: "28px 40px 40px", display: "flex", flexDirection: "column", gap: 20 },
  fieldGroup: { display: "flex", flexDirection: "column", gap: 8 },
  fieldLabel: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#999" },
  fieldInput: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 14, color: "#1a1a1a", background: "#ffffff", border: "1px solid #d8d4cc", padding: "12px 14px", outline: "none", width: "100%", boxSizing: "border-box", transition: "border-color 0.2s" },
  modalDisclaimer: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 11, color: "#999", lineHeight: 1.65, margin: 0 },
  modalSuccess: { padding: "56px 40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16 },
  modalSuccessTick: { width: 48, height: 48, border: "1px solid #d8d4cc", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 18, color: "#1a1a1a" },
  modalSuccessTitle: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 30, fontWeight: 300, color: "#1a1a1a", margin: 0 },
  modalSuccessText: { fontFamily: "'Helvetica Neue', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0, maxWidth: 340 },
};

// ─── CSS ─────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

  @keyframes pd-pulse {
    0%, 100% { opacity: 0.2; transform: scaleX(0.4); }
    50% { opacity: 1; transform: scaleX(1); }
  }

  .pd-btn-dark:hover { background: #333 !important; }
  .pd-btn-outline:hover { background: #1a1a1a !important; color: #f5f2ed !important; }
  .pd-btn-ghost:hover { color: #1a1a1a !important; border-color: #999 !important; }
  .pd-nav-btn:hover { color: #1a1a1a !important; }
  .pd-nav { backdrop-filter: blur(8px); }

  .pd-hero {
    display: grid;
    grid-template-columns: 55% 45%;
    height: 100vh;
    min-height: 700px;
    overflow: hidden;
    margin-top: 50px;
  }

  .pd-hero-img {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .pd-hero-img .swiper,
  .pd-hero-img .swiper-wrapper,
  .pd-hero-img .swiper-slide {
    height: 100% !important;
  }

  .pd-hero-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 48px 30px;
  background: #f5f2ed;
  border-left: 1px solid #d8d4cc;
  overflow-y: auto;
  gap: 24px;
}

  .pd-facts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #d8d4cc;
  border-left: 1px solid #d8d4cc;
  margin-top: 4px;
}

  .pd-overview-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: center;
  }

  .pd-showcase-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 48px;
    align-items: start;
  }

  .pd-showcase-menu {
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba(26,26,26,0.14);
  }

  .pd-amenities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #d8d4cc;
    background: #ffffff;
  }

  .pd-amenity-group {
    padding: 32px 28px;
    border-right: 1px solid #d8d4cc;
  }

  .pd-amenity-group:last-child { border-right: none; }

  .pd-highlights-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #2a2a28;
  }

  .pd-hl-card {
    overflow: hidden;
    border-right: 1px solid #2a2a28;
  }

  .pd-hl-card:last-child { border-right: none; }
  .pd-hl-card:hover .pd-hl-img { transform: scale(1.04); }

  .pd-faq-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 72px;
    align-items: flex-start;
  }

  .pd-closing-strip {
    display: grid;
    grid-template-columns: 55% 45%;
    min-height: 520px;
    background: #edeae4;
    border-top: 1px solid #d8d4cc;
  }

  .pd-closing-left {
    padding: 72px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pd-closing-right {
    position: relative;
    overflow: hidden;
    border-left: 1px solid #d8d4cc;
    min-height: 360px;
  }

  .pd-menu-item:hover { color: #1a1a1a !important; transform: translateX(5px); }

  .pd-menu-item::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 50%;
    width: 20px;
    height: 1px;
    background: transparent;
    transform: translateY(-50%);
    transition: background 0.25s;
  }

  .pd-menu-item:hover::before,
  .pd-menu-item--active::before {
    background: rgba(26,26,26,0.8);
  }

  .pd-visual-img:hover { transform: scale(1.025); }
  .pd-modal-close:hover { color: #1a1a1a !important; }
  .pd-field-input:focus { border-color: #1a1a1a !important; outline: none; }
  .pd-field-input::placeholder { color: #bbb; }

  .pd-field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .pd-section-pad { padding: 80px 48px; }

  @media (max-width: 1024px) {
    .pd-hero {
      grid-template-columns: 1fr 1fr;
      min-height: 600px;
    }

    .pd-hero-content { padding: 36px 36px 28px; gap: 18px; }
    .pd-overview-grid { gap: 48px; }
    .pd-showcase-layout { grid-template-columns: 200px 1fr; gap: 36px; }
    .pd-faq-grid { grid-template-columns: 240px 1fr; gap: 48px; }
    .pd-highlights-grid { grid-template-columns: repeat(2, 1fr); }
    .pd-hl-card:nth-child(2) { border-right: none; }
    .pd-amenities-grid { grid-template-columns: repeat(2, 1fr); }
    .pd-amenity-group:nth-child(2) { border-right: none; }
  }

  @media (max-width: 768px) {
    .pd-hero {
      grid-template-columns: 1fr;
      height: auto;
      min-height: unset;
    }

    .pd-hero-img {
      height: 55vw;
      min-height: 260px;
      max-height: 420px;
    }

    .pd-hero-content {
      border-left: none;
      border-top: 1px solid #d8d4cc;
      padding: 28px 24px 30px;
      gap: 18px;
      overflow-y: visible;
    }

    .pd-facts-grid { grid-template-columns: 1fr 1fr; }

    .pd-overview-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .pd-showcase-layout {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .pd-showcase-menu {
      flex-direction: row;
      overflow-x: auto;
      border-left: none;
      border-bottom: 1px solid rgba(26,26,26,0.12);
      padding-bottom: 0;
      gap: 0;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .pd-showcase-menu::-webkit-scrollbar { display: none; }
    .pd-showcase-menu > div:first-child { display: none; }

    .pd-menu-item {
      display: flex !important;
      flex-direction: column;
      align-items: flex-start;
      padding: 12px 16px !important;
      min-width: max-content;
      border-bottom: 2px solid transparent;
      gap: 2px;
    }

    .pd-menu-item--active {
      border-bottom-color: #1a1a1a !important;
      color: #1a1a1a !important;
    }

    .pd-menu-item:hover { transform: none; }
    .pd-menu-item::before { display: none; }

    .pd-menu-item > span:first-child {
      font-size: 8px;
      letter-spacing: 0.2em;
    }

    .pd-menu-item > span:last-child {
      font-size: 14px !important;
    }

    .pd-amenities-grid { grid-template-columns: 1fr; }
    .pd-amenity-group { border-right: none; border-bottom: 1px solid #d8d4cc; }
    .pd-amenity-group:last-child { border-bottom: none; }

    .pd-highlights-grid { grid-template-columns: 1fr; }
    .pd-hl-card { border-right: none !important; border-bottom: 1px solid #2a2a28; }
    .pd-hl-card:last-child { border-bottom: none; }

    .pd-faq-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .pd-faq-grid > div:first-child { position: static; }

    .pd-closing-strip {
      grid-template-columns: 1fr;
      min-height: unset;
    }

    .pd-closing-left { padding: 48px 24px; }
    .pd-closing-right { min-height: 280px; border-left: none; border-top: 1px solid #d8d4cc; }

    .pd-field-row { grid-template-columns: 1fr; }
    .pd-section-pad { padding: 56px 24px; }
  }

  @media (max-width: 480px) {
    .pd-hero-img { height: 65vw; min-height: 240px; }
    .pd-facts-grid { grid-template-columns: 1fr; }
    .pd-closing-left { padding: 40px 20px; }
    .pd-highlights-grid { padding: 0 0; }
  }
`;