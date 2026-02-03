"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  { icon: "service-icon1.png", title: "Market Growth Optimization" },
  { icon: "service-icon2.png", title: "Online Reputation Management" },
  { icon: "service-icon3.png", title: "Growth & Development Consulting" },
  { icon: "service-icon2.png", title: "Online Reputation Management" },
];

const ServicesSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Ensure Swiper initializes after refs exist
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section
      className="services-section"
      style={{
        backgroundImage: "url(/assets/images/main-home/service-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="service-sp-right bounce-animate4">
        <img src="/assets/images/main-home/service-sp.png" alt="img" />
      </div>
      <div className="container pt-0 pb-0">
        <div className="sec-title mb-0 mx-0 wow fadeInUp">
          <div className="row g-0 align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 mt-0">
              <div className="service_img">
                <img
                  className="w-100"
                  src="/assets/images/main-home/service-img.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="section-title-column col-lg-6 col-md-12 mt-0">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt=""
                  />
                  Creative Services
                </span>
                <h2 className="hero_title text-reveal-anim">
                  We deliver versatile end to <br />
                  end digital services
                </h2>
              </div>
            </div>
            <div className="col-lg-2 mt-0">
              <div className="array-button d-flex align-items-center justify-content-end">
                <button ref={prevRef} className="array-prev">
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button ref={nextRef} className="array-next">
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center">
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-ms-12 mt-0 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="icon-single-box">
              <div className="icon">
                <img src="/assets/images/main-home/hero-icon.svg" alt="" />
              </div>
              <p>
                Nexella is a dynamic best digital marketing agency dedicated to
                empowering businesses through innovative online
              </p>
              <Link
                className="theme-btn-main border-style-btn"
                href="/page-services">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">
                  Explore all Services
                </span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="service-column col-xl-8 col-lg-8 col-md-12 mt-0 wow fadeInUp">
            <div className="inner-column">
              {swiperReady && (
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={3}
                  loop={true}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                  }}>
                  {services.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="service_single_item">
                        <div className="service_icon">
                          <img
                            src={`/assets/images/main-home/${item.icon}`}
                            alt="Image"/>
                        </div>
                        <div className="service_content">
                          <h4 className="title">
                            <Link href="/page-service-details">{item.title}</Link>
                          </h4>
                          <p>
                            Nexella adopts client-centric approach business&apos;s
                            unique goals and
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="service-bg-blur"></div>
    </section>
  );
};

export default ServicesSection;
