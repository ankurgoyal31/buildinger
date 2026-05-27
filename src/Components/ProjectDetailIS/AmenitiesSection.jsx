// src/Components/AmenitiesSection.jsx
import React from "react";
import img2 from "../../assets/img/is/ame5.png"; 
import img1 from "../../assets/img/is/ame6.png"; 

const data = [
  {
    title: "Amenities ",
    desc: `From relaxing gardens and a refreshing pool to a cheerful kid's play area and a cozy game room, every amenity is designed to make daily life happier and easier. `,
    img: img1,
  },
  {
    title: "Community lounge ",
    desc: `Unique Green Meadows offers a refreshing lifestyle with a spacious, beautifully designed clubhouse, open green areas, and landscaped spaces that bring comfort, community, and everyday joy together in one place.`,
    img: img2,
  },
];

export default function AmenitiesSection() {
return (
  <div className="w-full mx-auto px-4 py-20 space-y-28 bg-[#f9f9f9]">

    {data.map((item, index) => (
      <div
        key={index}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
      
        <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
          <img
            src={item.img}
            className="w-full h-[550px] md:h-[650px] object-cover rounded-xl shadow-sm"
          />
        </div>

  
        <div
          className={`${index % 2 === 1 ? "md:order-1" : ""} 
                      md:w-[50%] md:mx-auto`}
        >
          <h3 className="text-4xl font-light mb-4">{item.title}</h3>

          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {item.desc}
          </p>

          {/* <button className="bg-black text-white px-7 py-2 font-light  transition">
            {item.button}
          </button> */}
        </div>
      </div>
    ))}

  </div>
);

}
