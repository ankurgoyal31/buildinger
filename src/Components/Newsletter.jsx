import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Newsletter() {
  const [type, setType] = useState("Real Estate");
  const [open, setOpen] = useState(false);

  const options = ["Real Estate", "Career Updates"];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-black/6">
  <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">

    {/* TOP LABEL */}
    <p className="text-[12px] uppercase tracking-[0.32em] text-black/40 mb-3">
      Newsletter
    </p>

    {/* TITLE */}
    <h2 className="text-[36px] md:text-[36px] font-light leading-[1.06] text-[#171717] mb-4">
      Stay informed. Stay ahead.
    </h2>

    {/* SUBTEXT */}
    <p className="text-[16px] md:text-[16px] text-black/55 leading-tight max-w-xl mx-auto mb-8">
      Receive curated updates, project insights, and career opportunities — thoughtfully delivered.
    </p>

    {/* FORM */}
    <form className="max-w-2xl mx-auto">

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">

        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 bg-transparent border-b border-black/20 px-1 py-2 text-[15px] outline-none focus:border-black transition"
        />

        <div className="relative min-w-[180px] text-left">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between border-b border-black/20 px-1 py-2 text-[15px] text-black/70 hover:text-black transition"
          >
            {type}
            <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white border border-black/10 shadow-sm z-10">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setType(option);
                    setOpen(false);
                  }}
                  className="px-4 py-2 text-[16px] hover:bg-black hover:text-white cursor-pointer transition"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* BUTTON */}
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[0.22em] text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300"
        >
          Subscribe
          <span>+</span>
        </button>
      </div>

    </form>

  </div>
</section>
  );
}