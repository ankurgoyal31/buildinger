import React from "react";
import img1 from "../assets/img/instagram1.webp";
import img2 from "../assets/img/instagram7.jpg";
import img3 from "../assets/img/instagram3.webp";
import img4 from "../assets/img/instagram4.webp";
import img5 from "../assets/img/instagram5.webp";

const instagramPosts = [
  { id: 1, image: img1, link: "https://www.instagram.com/uniquebuilders_jaipur/" },
  { id: 2, image: img2, link: "https://www.instagram.com/uniquebuilders_jaipur/" },
  { id: 3, image: img3, link: "https://www.instagram.com/uniquebuilders_jaipur/" },
  { id: 4, image: img4, link: "https://www.instagram.com/uniquebuilders_jaipur/" },
  { id: 5, image: img5, link: "https://www.instagram.com/uniquebuilders_jaipur/" },
];

const loopPosts = [...instagramPosts, ...instagramPosts];

const InstagramSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#f8f6f2] overflow-hidden">
      <style>
        {`
          @keyframes instaLoop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .insta-track {
            width: max-content;
            animation: instaLoop 28s linear infinite;
          }

          .insta-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-black/40">
            Social Presence
          </p>

          <h2 className="text-[36px] md:text-[42px] font-light leading-[1.05] text-[#171717] mb-4">
            Join our world!
          </h2>

          <p className="text-[16px] md:text-[17px] leading-tight text-black/55">
            Explore moments, project visuals, construction updates, and brand
            stories through our social gallery.
          </p>
        </div>

        {/* INFINITE LOOP */}
        <div className="relative overflow-hidden">
          <div className="insta-track flex gap-4 md:gap-5">
            {loopPosts.map((post, index) => (
              <a
                key={`${post.id}-${index}`}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white shrink-0 w-[260px] sm:w-[300px] md:w-[340px] xl:w-[360px] aspect-[4/5]"
              >
                <img
                  src={post.image}
                  alt="Instagram"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm text-black flex items-center justify-center rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;