"use client";
import React from "react";
import Link from "next/link";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  {
    value: 30,
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="large-container">
        <div className="row">
          <div className="image-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image-1 about-style-img-1">
                <img
                  src="/assets/images/home-1/about-1.jpg"
                  alt=""
                  className="wow img-custom-anim-left"
                />
              </figure>
            </div>
          </div>
          <div
            className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 order-2 wow fadeInRight"
            data-wow-delay="600ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt=""
                  />
                  About Company
                </span>
                <h2 className="text-reveal-anim">
                  Reimagining the brand <br />
                  potential best digital <br />
                  marketing
                </h2>
              </div>
              <div className="about-icon-box">
                <div className="about-count">
                  <div className="count-box">
                    <span
                      className="count-text"
                    ><CounterUp end={counters[0].value} /></span>
                    <span className="plus">+</span>
                  </div>
                  <h6 className="counter-title">
                    Industrial Years of Experience
                  </h6>
                </div>
                <div className="about-content">
                  <img
                    src="/assets/images/main-home/iconss.png"
                    alt=""
                  />
                  <p>
                    Nexella is a dynamic digital marketing agency dedicated to
                    empowering businesses through innovative and results-driven
                    online
                  </p>
                  <Link
                    className="theme-btn-main border-style-btn"
                    href="/page-about">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span className="theme-btn theme-bg theme-color-white">
                      More About
                    </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="dance-sp bounce-animate2">
                  <img
                    src="/assets/images/main-home/dance-sp2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blur"></div>
      <div className="bg-blur2"></div>
      <div className="about-shape rotate">
        <img
          src="/assets/images/main-home/icon-rt.png"
          alt=""
        />
      </div>
      <div className="about-shape2 bounce-animate4">
        <img
          src="/assets/images/main-home/about-sp.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutSection;
