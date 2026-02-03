"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "N. Dowson",
    role: "HR Manager",
    image: "/assets/images/home-4/client-1.png",
    text: `At Nexella, we don't just run campaigns—we build our no
    digital relationships that grow brands and delivered creative
    measurable success lies in making our profession
    clients unforgettable online design.`,
  },
  {
    id: 2,
    name: "Devid Mellar",
    role: "HR Manager",
    image: "/assets/images/home-4/client-2.png",
    text: `At Nexella, we don't just run campaigns—we build our no
    digital relationships that grow brands and delivered creative
    measurable success lies in making our profession
    clients unforgettable online design.`,
  },
    {
    id: 3,
    name: "N. Dowson",
    role: "HR Manager",
    image: "/assets/images/home-4/client-1.png",
    text: `At Nexella, we don't just run campaigns—we build our no
    digital relationships that grow brands and delivered creative
    measurable success lies in making our profession
    clients unforgettable online design.`,
  },
];

export default function TestimonialSliderFour() {
  return (
    <section
      className="testimonial-section-4 fix section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/images/home-4/testimonial-bg.jpg')" }}>
      <div className="vec-bg d-none d-xl-block"></div>
      <div className="vec-bg-2 d-none d-xl-block"></div>
      <div className="vec-video-shape d-none d-xl-block">
        <img
          src="/assets/images/home-4/vec-video-shape.png"
          alt="video shape"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6 col-md-12">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="Image"/>
                Client Feedback
              </span>
              <h2 className="hero_title text-reveal-anim">
                Results-Driven Marketing <br />Client Feedback
              </h2>
            </div>
            <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay=".3s">
              Nexella is a dynamic digital marketing agency dedicated to empowering businesses through innovative online presence.
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="testimonial-box-slider-4">
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-box-style-4">
                <div className="quote-icon">
                  <img
                    src="/assets/images/home-4/quote-icon.svg"
                    alt="quote"
                    width={40}
                    height={40}
                  />
                  <div className="star">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
                <p>{t.text}</p>
                <div className="info-item">
                  <div className="info-thumb">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle"
                    />
                  </div>
                  <h4 className="title">
                    {t.name} <span>— {t.role}</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
