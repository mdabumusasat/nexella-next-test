"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    icon: "/assets/images/main-home/service-icon1.png",
    title: "Social Marketing Automation",
    description: "Nexella adopts client-centric approach business's unique",
    link: "/page-service-details",
  },
  {
    icon: "/assets/images/main-home/service-icon2.png",
    title: "Content Creation & Design",
    description: "Nexella adopts client-centric approach business's unique",
    link: "/page-service-details",
  },
  {
    icon: "/assets/images/main-home/service-icon3.png",
    title: "Social Media Strategy & Planning",
    description: "Nexella adopts client-centric approach business's unique",
    link: "/page-service-details",
  },
];

const ServiceSectionThree = () => {
  return (
    <section className="service-section-3 fix section-padding">
      <div className="service-bg-blur d-none d-xxl-block"></div>
      <div className="auto-container">
        <div className="sec-title">
          <div className="row g-4 align-items-end justify-content-between">
            <div className="col-lg-5 col-md-6">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="Image"
                />
                Nexella Services
              </span>
              <h2 className="hero_title text-reveal-anim">
                Social Media Marketing <br />
                Gets You Noticed
              </h2>
            </div>
            <div
              className="col-lg-5 col-md-6 text-start text-md-end wow fadeInUp"
              data-wow-delay=".3s">
              <Link className="theme-btn-main" href="/page-service-details">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">
                  Nexella Services
                </span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="service-bg-color-3">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".swiper-dot-2" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card-style-3">
                  <div className="icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href={service.link}>{service.title}</Link>
                    </h4>
                    <p>{service.description}</p>
                    <div className="service-btn">
                      <Link href={service.link}>
                        Explore More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-dot-2 text-center pt-5">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThree;
