'use client';
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const works = [
  {
    title: "Nexa - Web application",
    category: "DESIGNING",
    image: "/assets/images/home-2/work1.jpg",
    bottom: false,
  },
  {
    title: "3D Mockup Design",
    category: "DESIGNING",
    image: "/assets/images/home-2/work2.jpg",
    bottom: true,
  },
  {
    title: "Appy - Mobile Apps",
    category: "DEVELOPMENT",
    image: "/assets/images/home-2/work3.jpg",
    bottom: false,
  },
  {
    title: "Dexa - Packaging Design",
    category: "DESIGNING",
    image: "/assets/images/home-2/work4.jpg",
    bottom: true,
  },
    {
    title: "Nexa - Web application",
    category: "DESIGNING",
    image: "/assets/images/home-2/work1.jpg",
    bottom: false,
  },
  {
    title: "3D Mockup Design",
    category: "DESIGNING",
    image: "/assets/images/home-2/work2.jpg",
    bottom: true,
  },
];

const WorkSectionTwo = () => {
  return (
    <section className="work-section-two section-padding">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-5 wow fadeInUp">
            <div className="inner-column text-center">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="shape"
                  />
                  Latest Works
                </span>
                <h2 className="hero_title text-reveal-anim">
                  Browse Our Latest Finished <br />
                  Creative projects
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                514: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              className="work-list-slider">
              {works.map((work, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`work-single-box-two ${
                      work.bottom ? "bottom" : ""
                    }`}>
                    <div
                      className={`work-box-inner ${
                        work.bottom ? "style-two" : ""
                      }`}>
                      {!work.bottom && (
                        <div className="work-content">
                          <h4 className="title">
                            <Link href="/page-service-details">{work.title}</Link>
                          </h4>
                          <p>{work.category}</p>
                        </div>
                      )}
                      <div className="work-img overlay-anim">
                        <img
                          src={work.image}
                          alt={work.title}/>
                        <div className="work-buton">
                          <Link href="/page-service-details">
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                      {work.bottom && (
                        <div className="work-content">
                          <h4 className="title">
                            <Link href="/page-service-details">{work.title}</Link>
                          </h4>
                          <p>{work.category}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="shape-1 bounce-animate2">
        <img
          src="/assets/images/main-home/about-sp.png"
          alt="shape"
        />
      </div>
      <div className="shape-2 dance">
        <img
          src="/assets/images/home-2/dance-shape.png"
          alt="shape"
        />
      </div>
    </section>
  );
};

export default WorkSectionTwo;
