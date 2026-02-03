"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSectionThree() {
  return (
    <section
      className="testimonial-section-3 fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/images/home-3/testimonial-bg.png')",
      }}>
      <div className="testimonial-right-shape">
        <img
          src="/assets/images/home-3/testimoniak-right-shape1.png"
          alt="Shape"/>
      </div>
      <div className="auto-container">
        <div className="row g-4">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="testimonial-image-style-3">
              <img
                src="/assets/images/home-3/testimonial-image.jpg"
                alt="Testimonial"/>
              <div className="testi-campaign bounce-animate2">
                <span className="campaign-badge">Paid Campaign</span>
              </div>
              <div className="testi-marketing-box bounce-animate">
                <div className="marketing-icon">
                  <img
                    src="/assets/images/home-2/vector-icon.svg"
                    alt="Icon"/>
                </div>
                <h6 className="marketing-title">
                  Social Media Marketing
                </h6>
              </div>
              <div className="testi-circle d-none d-xxl-block">
                <img
                  src="/assets/images/home-3/testi-circle.png"
                  alt="Circle"
                  className="rotate"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-content-style-3">
              <div className="sec-title">
                <span className="sub-title theme-color-black">
                  <img
                    src="/assets/images/main-home/sub-title-shape2.svg"
                    alt="Shape"
                  />
                  Our Testimonials
                </span>
                <h2 className="theme-color-black text-reveal-anim">
                  Hear what others say about <br />
                  partnering with us
                </h2>
              </div>
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop
                navigation={{
                  nextEl: ".array-prev",
                  prevEl: ".array-next",
                }}
                className="testimonial-slider-3">
                {[1, 2, 3].map((item) => (
                  <SwiperSlide key={item}>
                    <div className="testimonial-box-items-3">
                      <div className="content">
                        <div className="client-info">
                          <div className="client-img">
                            <img
                              src="/assets/images/home-3/client-img.jpg"
                              alt="Client"
                            />
                          </div>
                          <div className="info-title">
                            <h4 className="title">
                              John D. Alexon
                            </h4>
                            <span>— Nexella IT</span>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <img
                            src="/assets/images/home-3/quote-icon.svg"
                            alt="Quote"
                          />
                        </div>
                        <p>
                          Nexella, we don&apos;t just run campaigns—we
                          build digital relationships that grow brands
                          and deliver measurable impact. Our success
                          lies in making clients unforgettable online.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="array-button">
                <button className="array-next">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="array-prev">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
