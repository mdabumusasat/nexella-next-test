"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BrandSectionThree() {
  return (
    <div className="brand-section-3 theme-color-bg mt-0">
      <div className="line-shape">
        <img
          src="/assets/images/home-3/line-shape.png"
          alt="Line Shape"
        />
      </div>
      <div className="vec-line">
        <img
          src="/assets/images/home-3/vec-line.png"
          alt="Vector Line"
        />
      </div>
      <div className="vec-line-2">
        <img
          src="/assets/images/home-3/vec-line-2.png"
          alt="Vector Line"
        />
      </div>

      <div className="auto-container">
        <div className="brand-wrapper-3">
          <div className="brand-wrapper-inner-3">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <div className="brand-icon">
                  <div className="icon">
                    <img
                      src="/assets/images/home-3/icon-1.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="title">
                    Trusted by 1200+ founders &amp; business owners
                  </h4>
                </div>
              </div>
              <div className="col-lg-7">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={3}
                  spaceBetween={30}
                  loop
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                  }}
                  className="brand-slider-3"
                >
                  {[
                    "/assets/images/home-3/brand-1.png",
                    "/assets/images/home-3/brand-2.png",
                    "/assets/images/home-3/brand-3.png",
                    "/assets/images/home-3/brand-1.png",
                  ].map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand-image-3 text-center">
                        <img
                          src={src}
                          alt={`Brand ${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
