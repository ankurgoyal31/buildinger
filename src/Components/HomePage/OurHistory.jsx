import React, { useEffect, useRef, useState } from "react";
import img1 from '../../assets/history/1.png'
import img2 from '../../assets/history/2.png'
import img3 from '../../assets/history/3.png'
import img4 from '../../assets/history/4.png'
import img5 from '../../assets/history/5.png'
const timelineData = [
  {
    // year: "2003",
    title: "The Beginning: A Solid Foundation",
    description:
      "Our journey didn't start with skyscrapers, but with a single, honest brick. Back in 2002, we branched out from Rajasthan’s largest brick manufacturer to build something bigger. We wanted to move beyond materials and start creating actual homes where families could thrive, grounded in ethics and real quality.",
    image: img1,
    imageStyle: "portrait",
    variant: "standard",
  },
  {
    // year: "2008",
    title: "A Vision for Everyone",
    description:
      "Real estate shouldn't just be for the few. In 2008, we launched 'Unique Shree' because we believe everyone deserves a front door to call their own. Our 'Hamara Sapna' initiative is all about making quality housing affordable, ensuring that the dream of homeownership is within reach for every family.",
    image: img2,
    imageStyle: "landscape",
    variant: "standard",
  },
  {
    // year: "2014",
    title: "Innovation Meets Tradition",
    description:
      "We don’t just build concrete boxes; we design spaces that feel like home. By blending world-class technology with local sensibilities, we’ve delivered over 50 landmark projects. Whether it’s a luxury apartment or a professional workspace, our goal is to bring international living standards to your very own neighborhood.",
    image: img3,
    imageStyle: "feature",
    variant: "featured",
  },
  {
    // year: "2018",
    title: "Growing Roots in Rajasthan",
    description:
      "In just a few years, we went from a new name to a trusted household brand. By focusing on what people actually needed reliability and transparency we quickly became Rajasthan’s top developer. We’ve always believed that if you build with integrity, the community will grow right alongside you.",
    image: img4,
    imageStyle: "square",
    variant: "standard",
  },
  {
    // year: "2024",
    title: "Looking Toward the Future",
    description:
      "After 22 years and 13,000 happy families, we’re just getting started. From Jaipur to Mumbai, we’re expanding our footprint while staying true to our roots. As we venture into healthcare and hospitality, our mission remains the same: creating spaces that inspire joy, professionalism, and a better tomorrow.",
    image: img5,
    imageStyle: "portraitLarge",
    variant: "standard",
  },
];

export default function HistoryEditorialTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2eb] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16 lg:mb-20 animate-fade-up">
          <p className="mb-3 text-[17px] font-medium uppercase tracking-[0.34em] text-[#93887d]">
            Our Journey
          </p>

          <h2 className="font-serif text-[30px] leading-[0.98] text-[#1f1a17] sm:text-[38px] md:text-[48px] lg:text-[56px]">
            A legacy shaped
            <br className="hidden sm:block" /> through time
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] leading-6 text-[#6d655d] md:text-[18px] md:leading-7">
            A refined editorial timeline that balances story, structure and
            imagery while introducing standout moments that break repetition.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-0 h-full w-px bg-[#ddd3c8] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {timelineData.map((item, index) =>
              item.variant === "featured" ? (
                <FeaturedTimelineRow key={index} item={item} index={index} />
              ) : (
                <TimelineRow key={index} item={item} index={index} />
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUpSoft {
          0% {
            opacity: 0;
            transform: translateY(36px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealMask {
          0% {
            clip-path: inset(0 0 100% 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }

        .animate-fade-up {
          animation: fadeUpSoft 0.9s ease both;
        }

        .timeline-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .timeline-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-image-wrap {
          overflow: hidden;
        }

        .timeline-image-inner {
          transition: transform 0.9s ease;
          will-change: transform;
        }

        .timeline-card:hover .timeline-image-inner {
          transform: scale(1.04);
        }

        .timeline-text-stagger > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.08s;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.16s;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.24s;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(4) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.32s;
        }

        .timeline-dot-inner {
          transition: transform 0.5s ease, border-color 0.5s ease, background-color 0.5s ease;
        }

        .timeline-reveal.is-visible .timeline-dot-inner {
          transform: scale(1.12);
          border-color: #b8aa9b;
          background-color: #fbf7f1;
        }
      `}</style>
    </section>
  );
}

function TimelineRow({ item, index }) {
  const imageLeft = index % 2 === 0;
  const { ref, isVisible, parallaxY } = useReveal();

  return (
    <div
      ref={ref}
      className={`timeline-reveal relative pl-8 md:pl-0 ${isVisible ? "is-visible" : ""}`}
    >
      <TimelineDot />

      <div className="relative z-10 grid items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div
          className={`w-full ${
            imageLeft ? "md:order-1 md:justify-self-start" : "md:order-2 md:justify-self-end"
          } ${index === 0 ? "md:-mt-3" : ""} ${index === 3 ? "md:mt-6" : ""}`}
        >
          <ImageBlock
            src={item.image}
            alt={item.title}
            styleType={item.imageStyle}
            align={imageLeft ? "left" : "right"}
            parallaxY={parallaxY}
          />
        </div>

        <div
          className={`w-full ${
            imageLeft ? "md:order-2 md:pl-6 lg:pl-12" : "md:order-1 md:pr-6 lg:pr-12"
          }`}
        >
          <div className={`${imageLeft ? "md:mr-auto" : "md:ml-auto"} max-w-[440px] timeline-text-stagger`}>
            <p className="mb-2 text-[80px] leading-none text-[#b0a79c] font-['Cormorant_Garamond',serif] font-light">
              {item.year}
            </p>

            <h3 className="font-serif text-[22px] leading-[1.05] text-[#1f1a17] sm:text-[26px] md:text-[31px] lg:text-[36px]">
              {item.title}
            </h3>

            <div className="mt-4 h-[1px] w-14 bg-[#cfc4b8]" />

            <p className="mt-4 text-[18px] leading-6 text-[#665d55] md:text-[18px] md:leading-7">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedTimelineRow({ item }) {
  const { ref, isVisible, parallaxY } = useReveal();

  return (
    <div
      ref={ref}
      className={`timeline-reveal relative pl-8 md:pl-0 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <TimelineDot />

      <div className="relative z-10 mt-2">
        <div className="relative overflow-visible px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 lg:gap-12">
            
            {/* IMAGE */}
            <div className="relative timeline-card">
              <div className="timeline-image-wrap overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="timeline-image-inner h-[260px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px]"
                  style={{
                    transform: `translateY(${parallaxY * 0.35}px) scale(${isVisible ? 1 : 1.06})`,
                    transition: "transform 0.9s ease",
                  }}
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="max-w-[420px] md:pl-4 timeline-text-stagger">
              
              {/* YEAR (moved here instead of glass box) */}
              <p className="mb-2 text-[70px] leading-none text-[#b0a79c] font-light font-['Cormorant_Garamond',serif]">
                {item.year}
              </p>

              <h3 className="font-serif text-[24px] leading-[1.02] text-[#1f1a17] sm:text-[28px] md:text-[34px] lg:text-[40px]">
                {item.title}
              </h3>

              <div className="mt-4 h-[1px] w-16 bg-[#cfc4b8]" />

              <p className="mt-4 text-[18px] leading-6 text-[#665d55] md:text-[18px] md:leading-7">
                {item.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#bcae9f]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function ImageBlock({ src, alt, styleType, align, parallaxY = 0 }) {
  const styles = {
   portrait:
  "max-w-[340px] sm:max-w-[360px] md:max-w-[340px] lg:max-w-[380px] h-[320px] sm:h-[360px] md:h-[380px] lg:h-[420px]",

landscape:
  "max-w-[500px] sm:max-w-[560px] md:max-w-[480px] lg:max-w-[540px] h-[240px] sm:h-[270px] md:h-[280px] lg:h-[310px]",

square:
  "max-w-[350px] sm:max-w-[380px] md:max-w-[350px] lg:max-w-[390px] h-[300px] sm:h-[340px] md:h-[340px] lg:h-[380px]",

portraitLarge:
  "max-w-[380px] sm:max-w-[420px] md:max-w-[380px] lg:max-w-[420px] h-[360px] sm:h-[420px] md:h-[430px] lg:h-[480px]",
  };

  return (
    <div
      className={`timeline-card group relative overflow-hidden shadow-[0_18px_45px_rgba(40,28,18,0.08)] ${
        styles[styleType]
      } ${align === "left" ? "mr-auto" : "ml-auto"}`}
    >
      <div className="timeline-image-wrap h-full w-full">
        <img
          src={src}
          alt={alt}
          className="timeline-image-inner h-full w-full object-cover"
          style={{
            transform: `translateY(${parallaxY * 0.3}px)`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent opacity-70" />
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute left-[15px] top-7 z-20 -translate-x-1/2 md:left-1/2">
      <div className="timeline-dot-inner h-4 w-4 md:h-5 md:w-5 rounded-full border border-[#d9cec2] bg-[#f7f2eb]" />
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const offset = (clamped - 0.5) * 40;
      setParallaxY(offset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, isVisible, parallaxY };
}