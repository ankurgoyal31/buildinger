import React, { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 60, suffix: "+", label: "Landmarks Authored" },
    { value: 40, suffix: "+", label: "Completed" },
    { value: 13000, suffix: "+", label: "Lives Transformed" },
    { value: 24, suffix: "", label: "Years of Architectural Stewardship" },
    {
      value: 35,
      suffix: "+",
      label: (
        <>
          Million Sq.Ft.
          <br />
          Of Meticulously Planned Space
        </>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fffbec] py-16 md:py-20 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start w-full gap-y-10 lg:gap-y-0">
          {stats.map((item, index) => (
            <StatItem
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              isVisible={isVisible}
              delay={index * 120}
              showDivider={index !== stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, isVisible, delay, showDivider }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 900;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div
      className="relative w-full text-center px-4 md:px-5 lg:px-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* <div className="w-7 h-[1px] bg-[#0095e6]/45 mx-auto mb-4"></div> */}

      <h2 className="text-[34px] sm:text-[40px] md:text-[48px] lg:text-[48px] font-light tracking-[-0.03em] leading-none text-black whitespace-nowrap">
        {count.toLocaleString()}
        {suffix}
      </h2>

      <h5 className="text-[14px] md:text-[14px] lg:text-[14px] text-black/80 mt-3 leading-[1.6] uppercase tracking-[0.12em] max-w-[220px] mx-auto">
        {label}
      </h5>

      {showDivider && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[62px] md:h-[72px] w-px bg-[#0095e6]/18 hidden lg:block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(-50%) scaleY(1)"
              : "translateY(-50%) scaleY(0)",
            transformOrigin: "center",
            transition: "all 0.6s ease",
            transitionDelay: `${delay + 150}ms`,
          }}
        />
      )}
    </div>
  );
}