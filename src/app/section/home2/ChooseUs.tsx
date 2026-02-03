'use client';
import React from "react";
import Link from "next/link";

const WhyChooseUsSection = () => {
  return (
    <section
      className="why-choose-us-section why-choose-us-style section-padding"
      style={{
        backgroundImage: "url(/assets/images/home-2/choose-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="auto-container">
        <div className="sec-title mb-70">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="shape"
                  />
                  Why Choose Us
                </span>
                <h2 className="hero_title text-reveal-anim">
                  Solutions Designed <br />
                  For Your Success
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 text-start text-md-end">
              <Link href="/contact" className="theme-btn-main">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">
                  Get In Touch
                </span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="choose-single-box">
              <div className="choose-icon">
                <i className="fal fa-user"></i>
              </div>
              <div className="choose-content">
                <h4 className="title">Experienced Team</h4>
                <p>
                  Nexella adopt client-centric approach, focusing business&apos;s
                  unique goals
                </p>
              </div>
            </div>
            <div className="choose-single-box">
              <div className="choose-icon">
                <i className="far fa-lightbulb-on"></i>
              </div>
              <div className="choose-content">
                <h4 className="title">End to end Solutions</h4>
                <p>
                  Nexella adopt client-centric approach, focusing business&apos;s
                  unique goals
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 choose-img wow fadeInUp" data-wow-delay=".5s">
            <div className="choose-thumb">
              <figure className="image1">
                <img
                  src="/assets/images/home-2/choose-img.png"
                  alt="Why Choose Us"
                />
              </figure>
              <div className="image-bg-shape1"></div>
              <div className="image-bg-shape2"></div>
              <div className="dote-shape bounce-animate2">
                <img
                  src="/assets/images/home-2/dot.png"
                  alt="dot"
                />
              </div>
            </div>
          </div>
          <div
            className="column-right col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".7s">
            <div className="choose-single-box">
              <div className="choose-icon">
                <i className="fa-regular fa-circle-dollar"></i>
              </div>
              <div className="choose-content">
                <h4 className="title">Competitive Pricing</h4>
                <p>
                  Nexella adopt client-centric approach, focusing business&apos;s
                  unique goals
                </p>
              </div>
            </div>
            <div className="choose-single-box">
              <div className="choose-icon">
                <i className="fal fa-user-headset"></i>
              </div>
              <div className="choose-content">
                <h4 className="title">24 Hours Supports</h4>
                <p>
                  Nexella adopt client-centric approach, focusing business&apos;s
                  unique goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-shape bounce-animate3">
        <img
          src="/assets/images/home-2/choose-shape.png"
          alt="shape"
        />
      </div>
      <div className="buler-bg"></div>
    </section>
  );
};

export default WhyChooseUsSection;
