'use client';

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const teamMembers = [
  {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/home-2/team1.jpg",
    bottom: false,
  },
  {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/home-2/team2.jpg",
    bottom: true,
  },
  {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/home-2/team3.jpg",
    bottom: false,
  },
  {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/home-2/team4.jpg",
    bottom: true,
  },
    {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/home-2/team1.jpg",
    bottom: false,
  },
  {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/home-2/team2.jpg",
    bottom: true,
  },
];

const TeamSectionTwo = () => {
  return (
    <section className="team-section style-two section-padding">
      <div className="auto-container">
        <div className="row our-team-intro align-items-center">
          <div className="col-lg-5 wow fadeInUp">
            <div className="sec-title">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="shape"
                />
                Our Team
              </span>
              <h2 className="hero_title text-reveal-anim">
                Meet Our Expert <br />
                Professionals
              </h2>
            </div>
          </div>
          <div
            className="team-culmn col-lg-7 wow fadeInUp"
            data-wow-delay="300ms">
            <p className="team-des">
              Nexella is a dynamic best digital marketing dedicated to empowering
              businesses through innovative online modern technology we have
              used
            </p>
            <Link href="/page-team" className="theme-btn-main">
              <span className="theme-btn-arrow-left theme-bg theme-color-white">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <span className="theme-btn theme-bg theme-color-white">
                All Member
              </span>
              <span className="theme-btn-arrow-right theme-bg theme-color-white">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="outer-bx">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              className="team-list-slider">
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`team-single-box-two ${
                      member.bottom ? "bottom" : ""
                    }`}>
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/team-details">
                          <img
                            src={member.image}
                            alt={member.name}
                          />
                        </Link>
                      </figure>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </div>
                      <span className="share-icon fa fa-share-alt"></span>
                    </div>
                    <div className="info-box">
                      <h4 className="name">
                        <Link href="/page-team-details">{member.name}</Link>
                      </h4>
                      <span className="designation">{member.role}</span>
                    </div>
                    <div className="nexella-hover-bx hover-bx"></div>
                    <div className="nexella-hover-bx hover-bx2"></div>
                    <div className="nexella-hover-bx hover-bx3"></div>
                    <div className="nexella-hover-bx hover-bx4"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionTwo;
