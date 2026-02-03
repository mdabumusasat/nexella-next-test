'use client';

import React from "react";
import Link from "next/link";
import ProgressBar2 from "../../components/elements/ProgressBar2";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  { value: 6398 },  
];

const SkillSectionTwo = () => {
  return (
    <section
        className="skill-section section-padding bg-cover"
        style={{
            backgroundImage: "url(/assets/images/home-2/skill-bg.jpg)",
        }}>
        <div className="outer-box">
            <div className="row">
            <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="skill-img wow fadeInUp" data-wow-delay=".3s">
                <figure><img className="images-one" src="/assets/images/home-2/skill-img.jpg" alt=""/></figure>
                <figure className="skill-img2"><img className="images-two" src="/assets/images/home-2/skill-img2.jpg" alt=""/></figure>
                <figure className="skill-dot bounce-animate2"><img src="/assets/images/home-2/dots.png" alt=""/></figure>
                <div className="skill-icon-box">
                  <div className="skill-coun-icon">
                    <figure><img src="/assets/images/home-2/check.png" alt=""/></figure>
                  </div>
                  <div className="skill-count">
                    <div className="count-box"><span className="count-text"><CounterUp end={counters[0].value} /></span><span className="plus">+</span></div>
                    <h6 className="counter-title">Projects Completed</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
              <div className="inner-column">
                <div className="sec-title mt-10">
                  <span className="sub-title"><img src="/assets/images/main-home/sub-title-shape.svg" alt="Image"/>Skills & Abilities</span>
                  <h2 className="hero_title text-reveal-anim">
                    Freelance solutions designed <br/>to boost your visibility and <br/>engagement  growth
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".3s">Nexella is a dynamic best digital marketing agency dedicated to empowering businesses hrough innovative online presence modern technology we have used</p>
                </div>
                <div className="skills wow fadeInUp" data-wow-delay=".5s">
                  <div className="skill-item">
                    <div className="skill-header">
                      <div className="skill-title">Marketing Solution</div>
                    </div>
                     <ProgressBar2 percentage={85} duration={2000} />
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <div className="skill-title">Development</div>
                    </div>
                    <ProgressBar2 percentage={90} duration={2000} />
                  </div>
                </div>
                <Link className="theme-btn-main wow fadeInUp" data-wow-delay=".7s" href="/page-about">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="theme-btn theme-bg theme-color-white">Explore More</span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            </div>
        </div>
        <figure className="skill-rotate rotate">
            <img
            src="/assets/images/home-2/skill-rotate.png"
            alt="rotate"/>
        </figure>
        <figure className="skill-sp2 bounce-animate">
            <img
            src="/assets/images/main-home/about-sp.png"
            alt="shape"/>
        </figure>
    </section>
  );
};

export default SkillSectionTwo;
