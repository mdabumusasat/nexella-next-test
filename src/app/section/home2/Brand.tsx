"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const brandImages = [
    "/assets/images/home-2/brand1.png",
    "/assets/images/home-2/brand2.png",
    "/assets/images/home-2/brand3.png",
    "/assets/images/home-2/brand4.png",
    "/assets/images/home-2/brand5.png",
    "/assets/images/home-2/brand1.png",
    "/assets/images/home-2/brand2.png",
];

export default function BrandSection() {
  return (
    <div className="brand-section section-padding">
      <div className="auto-container">
        <div className="sponsors-outer">
          <div className="customar-service d-flex align-items-center">
            <div className="customer-stats">
              Our Happy Customers all over the World
            </div>
            <div className="highlighted-number">
              6000+ <span>Clients</span>
            </div>
          </div>
          <div className="brand-slider">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1200: { slidesPerView: 5 },
              }}
              modules={[Autoplay]}>
              {brandImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-item">
                    <img src={src} alt={`Brand ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="shape bounce-animate4">
        <img src="/assets/images/home-2/up-shape.png" alt="Decorative Shape" />
      </div>
    </div>
  );
}
