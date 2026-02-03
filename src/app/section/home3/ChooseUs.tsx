"use client";

import React from "react";
import Link from "next/link";

export default function ChooseUsSectionThree() {
  return (
    <section className="choose-us-section-3 fix section-padding">
      <div className="bg-shape">
        <img
          src="/assets/images/home-3/choose-us-bg.png"
          alt="Background Shape"
        />
      </div>
      <div className="choose-right-shape d-none d-xxl-block">
        <img
          src="/assets/images/home-3/choose-us-right1.png"
          alt="Right Shape"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title">
          <div className="row g-4 align-items-end justify-content-between">
            <div className="col-lg-5 col-md-6">
                <span className="sub-title">
                    <img src="/assets/images/main-home/sub-title-shape.svg"
                    alt="Shape"/>
                    Why Choose Us
                </span>
                <h2 className="hero_title text-reveal-anim">
                    What Makes Us Stand Out
                </h2>
            </div>
            <div
              className="col-lg-5 col-md-6 text-start text-md-end wow fadeInUp"
              data-wow-delay=".3s">
                <Link href="/page-about" className="theme-btn-main">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                        <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span className="theme-btn theme-bg theme-color-white">
                        Nexella Features
                    </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white">
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
                </Link>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="choose-us-image-style-3">
                <div className="choose-us-circle d-none d-xxl-block">
                    <img src="/assets/images/home-3/choose-circle.png"
                    alt="Circle"
                    className="rotate"/>
                </div>
                <div className="choose-marketing-box bounce-animate">
                    <div className="marketing-icon">
                    <img src="/assets/images/home-2/vector-icon.svg"
                        alt="Icon"/>
                    </div>
                    <h6 className="marketing-title">
                    Your Best Marketing Partner
                    </h6>
                </div>
                <div className="thumb-1 wow img-custom-anim-left">
                    <img src="/assets/images/home-3/choose-us-image.jpg"
                    alt="Choose Us"/>
                </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="choose-us-box-style-3 wow fadeInUp"
              data-wow-delay=".3s">
                <div className="choose-us-box-3">
                    <span className="number">01</span>
                    <div className="icon">
                        <img src="/assets/images/home-3/choose-icon.svg"
                        alt="Icon"/>
                    </div>
                    <div className="content">
                        <h4 className="title">Innovation & Adaptability</h4>
                        <p>
                            Nexella is a dynamic best socialmedia marketing pros dedicated
                            businesses innovative.
                        </p>
                    </div>
                </div>
            </div>
            <div
              className="choose-us-box-style-3 wow fadeInUp"
              data-wow-delay=".5s">
                <div className="choose-us-box-3">
                    <span className="number">02</span>
                    <div className="icon">
                        <img src="/assets/images/home-3/choose-icon-2.svg"
                        alt="Icon"/>
                    </div>
                    <div className="content">
                        <h4 className="title">Expertise & Experience</h4>
                        <p>
                            Nexella is a dynamic best socialmedia marketing pros dedicated
                            businesses innovative.
                        </p>
                    </div>
                </div>
            </div>
            <div
              className="choose-us-box-style-3 mb-0 wow fadeInUp"
              data-wow-delay=".7s">
                <div className="choose-us-box-3">
                    <span className="number">03</span>
                    <div className="icon">
                        <img src="/assets/images/home-3/choose-icon-3.svg"
                        alt="Icon"/>
                    </div>
                    <div className="content">
                        <h4 className="title">Creative & Engaging Content</h4>
                        <p>
                            Nexella is a dynamic best socialmedia marketing pros dedicated
                            businesses innovative.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
