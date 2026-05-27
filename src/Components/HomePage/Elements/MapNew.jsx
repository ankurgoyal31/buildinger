import React, { useState } from "react";
import "./RajasthanProjects.css";

export default function RajasthanProjects() {
  const [activeType, setActiveType] = useState("RESIDENTIAL");
  const [activeCity, setActiveCity] = useState("JAIPUR");

  const cities = [
    "JAIPUR",
    "KISHANGARH",
    "AJMER",
    "BHILWARA",
    "JODHPUR",
    "UDAIPUR",
    "BARMER",
    "MUMBAI",
  ];

  const projectData = {
    JAIPUR: {
      ongoing: [
        "Unique New Town",
        "Unique Sapphire",
        "My Haveli",
        "Unique Life Plots",
        "Unique Vidyadeep",
        "Unique Emporia",
        "IS Paradise",
        "Unique Green Meadows",
        "Unique City",
        "Unique Prestige",
      ],
      completed: [
        "Unique Aravali",
        "Garden Residency",
        "Unique Boulevard",
        "Umang",
        "Unique Luxuria",
        "Unique Towers",
        "Royal Paradise Janki",
        "Unique Shardool",
        "Unique Pristine",
        "Unique Sanghi",
        "Samanvay Latanagar",
        "Royal Paradise Krishna",
        "Unique Aura",
        "Unique Prime",
        "Royal Paradise Rama",
        "Unique Shree & Navya",
      ],
    },

    // Other cities – Add dummy data or repeat above
    KISHANGARH: { ongoing: ["Coming Soon"], completed: [] },
    AJMER: { ongoing: ["Coming Soon"], completed: [] },
    BHILWARA: { ongoing: ["Coming Soon"], completed: [] },
    JODHPUR: { ongoing: ["Coming Soon"], completed: [] },
    UDAIPUR: { ongoing: ["Coming Soon"], completed: [] },
    BARMER: { ongoing: ["Coming Soon"], completed: [] },
    MUMBAI: { ongoing: ["Coming Soon"], completed: [] },
  };

  return (
    <div className="rp-wrapper">

      {/* Tabs */}
      <div className="rp-tabs">
        <span
          className={activeType === "RESIDENTIAL" ? "active" : ""}
          onClick={() => setActiveType("RESIDENTIAL")}
        >
          RESIDENTIAL
        </span>

        <span
          className={activeType === "COMMERCIAL" ? "active" : ""}
          onClick={() => setActiveType("COMMERCIAL")}
        >
          COMMERCIAL
        </span>
      </div>

      {/* City Buttons */}
      <div className="rp-city-row">
        {cities.map((city) => (
          <button
            key={city}
            className={`rp-city-btn ${
              activeCity === city ? "active" : ""
            }`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Project Lists */}
      <div className="rp-two-col">

        {/* Ongoing */}
        <div>
          <h3 className="rp-title">ONGOING</h3>
          {projectData[activeCity].ongoing.map((p, i) => (
            <p key={i} className="rp-item">{p}</p>
          ))}
        </div>

        {/* Completed */}
        <div>
          <h3 className="rp-title">COMPLETED</h3>
          {projectData[activeCity].completed.map((p, i) => (
            <p key={i} className="rp-item">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
