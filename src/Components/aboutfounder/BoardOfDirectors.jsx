import React from "react";
import AutoReveal from "../../Components/AutoReveal";

import dir1 from "../../assets/img/director1.png";
import dir2 from "../../assets/img/director2.png";

export default function BoardOfDirectors() {
  return (
    <AutoReveal>
      <section className="pb-40">
        <h2 className="mb-12 text-xl font-light text-center md:text-4xl">
          Board Of Directors
        </h2>

        <div className="grid max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">
          <AutoReveal>
            <div className="text-center">
              <img src={dir1} className="object-cover w-full" alt="" />
              <h3 className="mt-4 font-medium text-gray-800">
                Mr. Abhishek Pal Singh
              </h3>
              <h4 className="text-gray-800">Vice Chairman</h4>
              {/* <p className="mt-2 text-sm text-gray-600">
                Driving financial strength and strategic growth.
              </p> */}
            </div>
          </AutoReveal>

          <AutoReveal>
            <div className="text-center">
              <img src={dir2} className="object-cover w-full" alt="" />
              <h3 className="mt-4 font-medium text-gray-800">
                Mr. Vibhishek Pal Singh
              </h3>
              <h4 className="text-gray-800">Managing Director</h4>
              {/* <p className="mt-2 text-sm text-gray-600">
                Visionary leader with extensive real estate expertise.
              </p> */}
            </div>
          </AutoReveal>
        </div>
      </section>
    </AutoReveal>
  );
}
