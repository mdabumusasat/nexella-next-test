'use client';
import React from "react";
import Link from "next/link";

const BannerSectionTwo = () => {
  return (
    <section
      className="banner-section style_two d-flex align-items-center"
      style={{
        backgroundImage: "url(/assets/images/home-2/hero-bgt.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="auto-container">
        <div className="row hero_upper d-flex align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="content-box">
              <h1 className="title animate-2 hero_title tv_hero_title hero_title_1">
                Discreet teams{" "}
                <span className="color1">driving strategic</span> growth
              </h1>
              <div className="banner_icon-bx">
                <div className="banner-icon rotate">
                  <img
                    src="/assets/images/main-home/hero-icon.svg"
                    alt="Hero Icon"
                  />
                </div>
                <div className="banner-text">
                  <p>
                    Nexella adopts a client-centric approach, focusing on creative
                    business&apos;s unique goals and challenges
                  </p>
                </div>
              </div>
              <Link href="/page-about" className="theme-btn-main">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">
                  Discover More
                </span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
              <div className="hero-campaign bounce-animate2">
                <span className="campaign-badge">Paid Campaign</span>
              </div>
              <div className="hero-marketing-box bounce-animate">
                <div className="marketing-icon">
                  <img
                    src="/assets/images/home-2/vector-icon.svg"
                    alt="Marketing Icon"
                  />
                </div>
                <h6 className="marketing-title">Social Media Marketing</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-thumb">
          <figure>
            <img
              src="/assets/images/home-2/hero-thumb.png"
              alt="Hero Thumb"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionTwo;
