"use client";
import React from "react";
import Link from "next/link";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  {
    value: 6398,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section
      className="why-choose-us-section-1 section-padding theme-color1-bg bg-cover"
      style={{
        backgroundImage: "url('/assets/images/main-home/choose-us-shape.jpg')",
      }}>
      <div className="wcu-sp-right">
        <img src="/assets/images/main-home/wcu-sp1.png" alt="img"/>
      </div>
      <div className="auto-container">
        <div className="row g-4">
          <div className="col-xl-6">
            <div className="why-choose-us-content-1">
              <div className="sec-title">
                <span className="sub-title theme-color-black">
                  <img
                    src="/assets/images/main-home/sub-title-shape2.svg"
                    alt="Image"/>
                  Why Choose Us?
                </span>
                <h2 className="theme-color-black text-reveal-anim">
                  Empowering our Brands Innovation Data-Driven Digital solutions
                </h2>
              </div>
              <ul className="icon-box-list wow fadeInUp" data-wow-delay=".3s">
                <li>
                  <div className="icon">
                    <img src="/assets/images/home-1/icon/icon1.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">24 Hours Support</h4>
                    <p>Nexella adopts client-centric approach business's unique goals</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/assets/images/home-1/icon/icon2.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">Super Expert Team</h4>
                    <p>Nexella adopts client-centric approach business's unique goals</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/page-about"
                className="theme-btn-main header-style-btn theme-color-white2 wow fadeInUp"
                data-wow-delay=".5s">
                <span className="theme-btn-arrow-left theme-bg">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg">Explore More</span>
                <span className="theme-btn-arrow-right theme-bg">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="choose-us-image-items">
              <div className="row g-4">
                <div className="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="choose-us-image">
                    <img
                      src="/assets/images/home-1/choose-us/choose-us-1.jpg"
                      alt="choose-us-1"/>
                  </div>
                  <div className="counter-box-1">
                    <div className="check-icon">
                      <img src="/assets/images/home-1/icon/icon3.svg" alt="icon" />
                    </div>
                    <div className="count-box">
                      <h4 className="title">
                        <span className="count-text">
                          <CounterUp end={counters[0].value} />
                        </span>
                        +
                      </h4>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                  <div className="choose-us-image2">
                    <img
                      src="/assets/images/home-1/choose-us/choose-us-2.jpg"
                      alt="choose-us-2"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUsSection;
