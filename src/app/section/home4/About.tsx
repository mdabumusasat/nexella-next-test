"use client";
import React from "react";
import Link from "next/link";

export default function AboutSectionFour() {
  return (
    <section
      className="about-section-four fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/images/home-4/about-bg.jpg')",
      }}>
      <div className="anim-icons">
        <div className="image-1">
          <img
            src="/assets/images/home-4/about-shape.png"
            alt="shape"
          />
        </div>
      </div>
      <div className="bg-left-shape">
        <img
          src="/assets/images/home-4/left-shape.png"
          alt="img"
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div
            className="image-column col-lg-6 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="inner-column">
              <figure className="image-one">
                <img
                  src="/assets/images/home-4/about-image2.jpg"
                  alt="about"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div className="content-column col-lg-6">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="Image"/>
                  Our strategy
                </span>
                <h2 className="title text-reveal-anim">
                  Driving Growth Through <br /> Freelance Excellence
                </h2>
                <p className="text wow fadeInUp" data-wow-delay=".3s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="row">
                <div
                  className="col-md-6 wow fadeInUp"
                  data-wow-delay=".3s">
                  <div className="info-box">
                    <div className="inner">
                      <div className="icon-box">
                        <img
                          src="/assets/images/home-4/about-icon-1.svg"
                          alt="icon"
                        />
                      </div>
                      <h4 className="info-title">Company Mission</h4>
                      <div className="text">
                        Our mission is to empower busi with cutting-edge digital
                        solu
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 wow fadeInUp"
                  data-wow-delay=".5s">
                  <div className="info-box">
                    <div className="inner">
                      <div className="icon-box">
                        <img
                          src="/assets/images/home-4/about-icon-2.svg"
                          alt="icon"
                        />
                      </div>
                      <h4 className="info-title">
                        Company Vision & Goals
                      </h4>
                      <div className="text">
                        We are dedicated to crafting digi experiences that
                        seamlessly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-box wow fadeInUp" data-wow-delay=".7s">
                <Link href="/page-about" className="theme-btn-main">
                  <span className="theme-btn-arrow-left theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  <span className="theme-btn theme-bg theme-color-white">
                    Read More
                  </span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
