"use client";
import React from "react";
import Image from "next/image";
const marqueeItems = ["DESIGNING", "INNOVATION"];

const MarqueeSection = () => {
  return (
    <div className="marquee-section">
      <div className="marquee">
        <div className="marquee-group">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="text" key={`marquee-1-${index}`}>
              <Image
                className="rotate"
                src="/assets/images/main-home/marque-shap.png"
                alt="shape"
                width={40}
                height={40}
              />
              <h2 className="title">{marqueeItems[index % 2]}</h2>
            </div>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="text" key={`marquee-2-${index}`}>
              <Image
                className="rotate"
                src="/assets/images/main-home/marque-shap.png"
                alt="shape"
                width={40}
                height={40}
              />
              <h2 className="title">{marqueeItems[index % 2]}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
