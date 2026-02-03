"use client";
import React from "react";
import Link from "next/link";

const teamData = [
  {
    name: "John D. Alexon",
    role: "Web Developer",
    img: "/assets/images/main-home/team01.png",
    delay: ".3s",
  },
  {
    name: "Anjelina Watson",
    role: "Digital Marketer",
    img: "/assets/images/main-home/team02.png",
    delay: ".5s",
  },
  {
    name: "David T. Larner",
    role: "SEO Specialist",
    img: "/assets/images/main-home/team03.png",
    delay: ".7s",
  },
  {
    name: "David T. Larner",
    role: "SEO Specialist",
    img: "/assets/images/main-home/team03.png",
    delay: ".7s",
  },
  {
    name: "John D. Alexon",
    role: "Web Developer",
    img: "/assets/images/main-home/team01.png",
    delay: ".3s",
  },
  {
    name: "Anjelina Watson",
    role: "Digital Marketer",
    img: "/assets/images/main-home/team02.png",
    delay: ".5s",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section pb-90">
      <div className="auto-container">
        <div className="row">
          {teamData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={item.delay}>
              <div className="team-single-box mb-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image1">
                      <img
                        src="/assets/images/main-home/team-bg01.jpg"
                        alt="Team Background"
                        className="team-bg"/>
                    </figure>
                    <figure className="image2">
                      <img
                        src={item.img}
                        alt={item.name}
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
                      <Link href="/page-team-details">{item.name}</Link>
                    </h4>
                    <span className="designation">{item.role}</span>
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
};

export default TeamSection;
