"use client";
import React from "react";
import Link from "next/link";


const AboutSectionThree = () => {
  return (
      <section className="about-section-3 fix section-padding">
        <div className="shape-1 bounce-animate2 d-none d-xl-block">
          <img src="/assets/images/home-3/about/shape-1.png" alt="img"/>
        </div>
        <div className="shape-2 dance d-none d-xl-block">
          <img src="/assets/images/home-3/about/shape-2.png" alt="img"/>
        </div>
        <div className="shape-3 d-none d-xl-block">
          <img src="/assets/images/home-3/about/shape-3.png" alt="img"/>
        </div>
        <div className="auto-container">
          <div className="row g-4">
            <div className="col-lg-5 col-md-9">
              <div className="about-images-style-3 wow img-custom-anim-left">
                <img src="/assets/images/home-3/about/about-1.jpg" alt="img"/>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content-style-3">
                <div className="sec-title mb-0">
                  <span className="sub-title"><img src="/assets/images/main-home/sub-title-shape.svg" alt="Image"/>About Company</span>
                  <h2 className="hero_title text-reveal-anim">
                      Elevating Your Brand’s Influence Through Bold, Innovative Social Media Solutions
                  </h2>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                    Nexella we transformative digital experiences captivate audiences
                    design solutions  are not only visually
                </p>
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="about-list-items wow fadeInUp" data-wow-delay=".5s">
                        <ul>
                          <li>
                            <span></span>
                              Driving Progress Intelligent Innovation
                          </li>
                          <li>
                            <span></span>
                              Powering Change Partnership
                          </li>
                          <li>
                            <span></span>
                            Paths to Real Success
                          </li>
                        </ul>
                        <Link className="theme-btn-main" href="/page-about">
                              <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                              <span className="theme-btn theme-bg theme-color-white">More About Us</span>
                              <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                          </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="about-image-2 wow img-custom-anim-right">
                      <img src="/assets/images/home-3/about/about-2.jpg" alt="img"/>
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

export default AboutSectionThree;
