"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "IT Infrastructure & Networking",
    icon: "/assets/images/main-home/service-icon1.png",
    image: "/assets/images/home-4/service/service1.jpg",
  },
  {
    title: "Specialized Enterprise Solutions",
    icon: "/assets/images/main-home/service-icon2.png",
    image: "/assets/images/home-4/service/service1.jpg",
  },
  {
    title: "IT Consulting & Strategy",
    icon: "/assets/images/main-home/service-icon3.png",
    image: "/assets/images/home-4/service/service1.jpg",
  },
];

export default function ServiceSectionFour() {
  return (
    <section
      className="service-section-4 fix section-padding bg-shape bg-cover"
      style={{
        backgroundImage: "url('/assets/images/home-4/service-bg-bg.jpg')",
      }}>
      <div className="vec-bg d-none d-xl-block" />
      <div className="vec-bg-2 d-none d-xl-block" />
      <div className="vec-circle d-none d-xl-block">
        <img
          src="/assets/images/home-4/vec-circle.png"
          alt="img"
          className="rotate"
        />
      </div>
      <div className="vec-shape d-none d-xl-block">
        <img
          src="/assets/images/home-4/vec-shape.png"
          alt="img"
          className="rotate"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-5 col-md-7">
              <span className="sub-title">
                <img src="/assets/images/main-home/sub-title-shape.svg" alt="Image" />
                Nexella Services
              </span>
              <h2 className="hero_title text-reveal-anim">
                The Tech Solution for <br /> Your Success
              </h2>
            </div>
            <div
              className="col-lg-5 col-md-5 wow fadeInUp"
              data-wow-delay=".3s">
              Nexella is a dynamic best digital marketing agency dedicated to
              empowering businesses through innovative online presence modern
              technology we have used
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ el: ".dot", clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="service-slider-2">
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card-style-3 style-2">
                <div
                  className="service-image bg-cover"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />
                <div className="icon">
                  <img
                    src={service.icon}
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/page-service-details">{service.title}</Link>
                  </h4>
                  <p>
                    Nexella adopts client-centric approach business&apos;s unique
                  </p>
                  <div className="service-btn">
                    <Link href="/page-service-details">
                      Explore More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-dot-2 text-center pt-5">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
}
