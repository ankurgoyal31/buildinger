import React from 'react';
import img from '../../assets/img/new-img/Section 6 top centre.jpg';

const blogFeatures = [
  {
    img: img,
    title: 'RARITY, ELEGANCE AND ITALIA',
  },
  {
    img: img,
    title: 'JOINING THE DOTS',
  },
  {
    img: img,
    title: 'TEXTILE ARTISTRY',
  },
];

export default function BlogFeatureGrid() {
  return (
    <section className="bg-[#f7f3ef] px-4 py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogFeatures.map((item, i) => (
          <div key={i} className="group">
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-xs tracking-wider font-medium text-[#1a1a1a] uppercase">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
