import React from "react";
import AutoReveal from "../../Components/AutoReveal";

import Management1 from "../../assets/img/Management.jpg";
import Management2 from "../../assets/img/Management2.jpg";
import Management3 from "../../assets/img/Management3.jpg";
import Management4 from "../../assets/img/m4.jpg";

export default function ManagementSection() {
  const managementImages = [
    Management1,
    Management2,
    Management3,
    Management4,
  ];

  const managementNames = ["Iqbal Singh", "Rahul", "Aashita", "Aasish"];
  return (
    <AutoReveal>
      <section className="pb-20">
        <h2 className="mb-12 text-xl font-light text-center md:text-4xl">
          Management
        </h2>

        <div className="grid max-w-6xl grid-cols-2 gap-4 px-6 mx-auto md:grid-cols-4">
          {managementNames.map((name, i) => (
            <AutoReveal key={i}>
              <div className="text-center">
                <img
                  src={managementImages[i]}
                  className="w-full h-[400px] object-cover"
                  alt={name}
                />
                <p className="mt-3 text-sm text-gray-700">
                  Mr. {name}
                </p>
              </div>
            </AutoReveal>
          ))}
        </div>
      </section>
    </AutoReveal>
  );
}
