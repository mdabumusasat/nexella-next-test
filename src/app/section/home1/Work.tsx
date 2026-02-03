"use client";
import React from "react";
import Link from "next/link";

const works = [
  {
    title: "Axior Webflow Solutions",
    description:
      "Nexella adopts client-centric approach main business's and challenge latest digital technology",
    date: "29 January, 2026",
    img: "/assets/images/main-home/work-img1.png",
    delay: ".3s",
    number: "01",
  },
  {
    title: "3D Mockup Design",
    description:
      "Nexella adopts client-centric approach main business's and challenge latest digital technology",
    date: "29 January, 2026",
    img: "/assets/images/main-home/work-img2.png",
    delay: ".5s",
    number: "02",
  },
  {
    title: "Neon Website Design",
    description:
      "Nexella adopts client-centric approach main business's and challenge latest digital technology",
    date: "29 January, 2026",
    img: "/assets/images/main-home/work-img3.png",
    delay: ".3s",
    number: "03",
  },
];

const WorkSection = () => {
  return (
    <section className="work-section ks-project-area section-padding pb-90">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp">
            <div className="inner-column">
              <div className="sec-title text-center">
                <h2 className="work-title hero_title tv_hero_title hero_title_1">WORKS</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {works.map((work, index) => (
              <div
                key={index}
                className="work-single-box ks-project-panel wow fadeInUp"
                data-wow-delay={work.delay}>
                <div className="work-content">
                  <h2 className="title">{work.title}</h2>
                  <p>{work.description}</p>
                  <span className="work-date d-block">{work.date}</span>
                  <Link href="/page-about" className="theme-btn-main header-style-btn">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span className="theme-btn theme-bg theme-color-white">
                      Click to See Details
                    </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="work-img overlay-anim">
                  <img src={work.img} alt={work.title} />
                  <div className="work-shape">
                    <img src="/assets/images/main-home/work-bx-shape.png" alt="Image" />
                  </div>
                </div>
                <h3 className="wokr-number">{work.number}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="work-shapes">
        <img src="/assets/images/main-home/work-shape.png" alt="Image" />
      </div>
      <div className="work-bg-blur"></div>
    </section>
  );
};

export default WorkSection;
