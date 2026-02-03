"use client";
import React from "react";
import Link from "next/link";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  { value: 30 },  
];

const AboutSection2 = () => {
  return (
      <section className="about-section-two section-padding fix">
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-xl-6 col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/assets/images/home-2/about-img1.jpg" alt="Image"/></figure>
                <figure className="image-2 overlay-anim wow fadeInUp"><img src="/assets/images/home-2/about-img2.jpg" alt="Image"/></figure>
                <div className="about-campaign bounce-animate3">
                  <span className="campaign-badge">Audience Growth</span>
                </div>
                <div className="about-icon-box">
                  <div className="about-count">
                    <div className="count-box"><span className="count-text"></span><CounterUp end={counters[0].value} /><span className="plus">+</span></div>
                    <h6 className="counter-title">
                      Years of 
                      Experience
                    </h6>
                  </div>
                </div>
                <figure className="image-shape bounce-animate4"><img src="/assets/images/home-2/shapes.png" alt="Image"/></figure>
              </div>
            </div>
            <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title"><img src="/assets/images/main-home/sub-title-shape.svg" alt="Image"/>About Company</span>
                  <h2 className="hero_title text-reveal-anim">
                    Grow your presence with seo social media and performance campaigns
                  </h2>
                </div>
                <p className="about-qute">Nexella adopt a client-centric approach, focusing understanding business's unique goals and challenges. By leveraging analytics latest digital tools, the agency formulates</p>
                <div className="main-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img src="/assets/images/home-2/about-icon.png" alt="Image"/>
                    </div>
                    <h3 className="title">Freelance Design Solutions</h3>
                  </div>
                  <div className="icon-box two">
                    <div className="icon">
                      <img src="/assets/images/home-2/about-icon.png" alt="Image"/>
                    </div>
                    <h3 className="title">Innovative Growth Solutions</h3>
                  </div>
                </div>
                 <Link className="theme-btn-main mt-50" href="/page-about">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="theme-btn theme-bg theme-color-white">More About Us </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape2 bounce-animate4">
          <img src="/assets/images/main-home/about-sp.png" alt="Image"/>
        </div>
        <div className="buler-bg"></div>
      </section>
  );
};

export default AboutSection2;
