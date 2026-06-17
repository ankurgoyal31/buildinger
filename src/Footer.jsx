import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF size={14} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={14} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn size={14} />, href: "#", label: "LinkedIn" },
    { icon: <FaYoutube size={14} />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#f8f8f6] text-gray-700 border-t border-black/5">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Left Section */}
          <div>
            <div className="mb-5">
              <img
                src="https://realestate.bizsquared.com/wp-content/uploads/2025/11/UB-logo-1.png"
                alt="UB Logo"
                className="h-20 w-auto object-contain ml-[-14px]"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-600">
              Every structure we build is a promise of trust, innovation, and
              comfort — made to last for generations ahead.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="group h-11 w-11 flex items-center justify-center text-[#1a1a1a]  transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:pl-10">
            <h3 className="mb-5 text-[26px] font-medium tracking-wide text-black">
              LINKS
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="/"
                  className="inline-block transition-all duration-300 hover:text-black hover:translate-x-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="inline-block transition-all duration-300 hover:text-black hover:translate-x-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/ourstory"
                  className="inline-block transition-all duration-300 hover:text-black hover:translate-x-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/real-estate-journal"
                  className="inline-block transition-all duration-300 hover:text-black hover:translate-x-1"
                >
                  News & Blogs
                </a>
              </li>
              <li>
                <a
                  href="/media"
                  className="inline-block transition-all duration-300 hover:text-black hover:translate-x-1"
                >
                  Media
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[26px] font-medium tracking-wide text-black">
              CONTACT
            </h3>

            <p className="max-w-sm mb-5 text-sm leading-7 text-gray-600">
              Unique Builders, 4th Floor, Unique Destination,<br/>Laxmi Mandir
              Crossing, Tonk Road,<br/>Jaipur &#x2013; 302015 Rajasthan, India
            </p>

            <a
              href="tel:+911414090777"
              className="inline-block text-sm font-medium text-black transition-opacity duration-300 hover:opacity-70"
            >
              +91 141 4090777
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-black/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-500">
          <p>
            © 2025 Unique Builders. Created and managed by{" "}
            <a href="https://bizsquared.com/" className="text-gray-800">Bizsquared</a>
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="/privacy" className="transition-colors hover:text-black">
              Privacy Policy
            </a>
            <a href="/t&c" className="transition-colors hover:text-black">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}