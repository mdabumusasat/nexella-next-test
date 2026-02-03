"use client";
import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    name: "John D. Alexon",
    role: "Web Developer",
    image: "/assets/images/main-home/team01.png",
  },
  {
    name: "Anjelina Watson",
    role: "Digital Marketer",
    image: "/assets/images/main-home/team02.png", 
  },
  {
    name: "David T. Larner",
    role: "SEO Specialist",
    image: "/assets/images/main-home/team03.png",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title">
          <div className="row g-4 our-team-intro align-items-center">
            <div className="col-lg-5 wow fadeInUp">
              <span className="sub-title">
                <img src="/assets/images/main-home/sub-title-shape.svg" alt="shape" />
                Our Team
              </span>
              <h2 className="hero_title text-reveal-anim">
                Meet Professional <br /> Team members
              </h2>
            </div>
            <div
              className="team-culmn d-flex col-lg-7 wow fadeInUp"
              data-wow-delay="300ms">
              <p className="team-des">
                Nexella is a dynamic digital marketing agency dedicated to
                empowering businesses through innovative online modern
                technology we have used.
              </p>
              <Link className="theme-btn-main" href="/page-team">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">
                  All Member
                </span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}>
              <div className="team-single-box">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image1">
                      <img
                        src="/assets/images/main-home/team-bg01.jpg"
                        alt="background"
                        className="team-bg"
                      />
                    </figure>

                    <figure className="image2">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-img"
                      />
                    </figure>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <span className="share-icon fa fa-share-alt"></span>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href="/team-details">{member.name}</Link>
                    </h4>
                    <span className="designation">{member.role}</span>
                    <div className="nexella-hover-bx hover-bx"></div>
                    <div className="nexella-hover-bx hover-bx2"></div>
                    <div className="nexella-hover-bx hover-bx3"></div>
                    <div className="nexella-hover-bx hover-bx4"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
