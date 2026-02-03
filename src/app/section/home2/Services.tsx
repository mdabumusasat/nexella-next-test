'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    id: "001.",
    title: "Social Media",
    highlight: "Marketing",
    icon: "/assets/images/home-2/service-icon1.png",
    image: "/assets/images/home-2/service-img1.jpg",
  },
  {
    id: "002.",
    title: "Branding And",
    highlight: "Identity",
    icon: "/assets/images/home-2/service-icon2.png",
    image: "/assets/images/home-2/service-img2.jpg",
  },
  {
    id: "003.",
    title: "Product Design",
    highlight: "Solutions",
    icon: "/assets/images/home-2/service-icon3.png",
    image: "/assets/images/home-2/service-img3.jpg",
  },
    {
    id: "004.",
    title: "Social Media",
    highlight: "Marketing",
    icon: "/assets/images/home-2/service-icon1.png",
    image: "/assets/images/home-2/service-img1.jpg",
  },
  {
    id: "005.",
    title: "Branding And",
    highlight: "Identity",
    icon: "/assets/images/home-2/service-icon2.png",
    image: "/assets/images/home-2/service-img2.jpg",
  },
];

const ServicesSectionTwo = () => {
  return (
    <section
      className="services-section-two section-padding"
      style={{
        backgroundImage: "url(/assets/images/home-2/service-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="auto-container">
        <div className="row pb-60 align-items-end wow fadeInUp">
          <div className="section-title-column col-lg-7 col-md-12">
            <div className="sec-title">
              <span className="sub-title">
                <Image
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="shape"
                  width={20}
                  height={20}
                />
                Creative Services
              </span>
              <h2 className="hero_title text-reveal-anim">
                Complete Freelance <br />
                Services for You
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <p className="sec-descrption">
              Nexella is a dynamic best digital marketing agency dedicated to
              empowering businesses through innovative online presence modern
              technology we have used
            </p>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{
            el: ".swiper-dot-2 .dot",
            clickable: true,
          }}
          breakpoints={{
            554: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="service-slider-2"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service_single_item-2">
                <div className="service-single-inner">
                  <div className="service_icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                    />
                  </div>

                  <div className="service_content">
                    <h4 className="title">
                      <Link href="/page-service-details">
                        {service.title} <br />
                        <span>{service.highlight}</span>
                      </Link>
                    </h4>
                  </div>

                  <figure className="service-img">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                    />
                  </figure>

                  <h6 className="service-no">{service.id}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-dot-2 text-center pt-5">
          <div className="dot"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="shape rotate">
        <Image
          src="/assets/images/home-2/skill-rotate.png"
          alt="shape"
          width={150}
          height={150}
        />
      </div>
      <div className="buler-bg"></div>
    </section>
  );
};

export default ServicesSectionTwo;
