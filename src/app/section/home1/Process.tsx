"use client";
import React from "react";

const ProcessSection = () => {
  const processes = [
    {
      img: "/assets/images/main-home/process-img1.jpg",
      title: "Start Planning",
      description:
        "Dynamically administrate low-risk highly energistically reconceptualize",
      number: "01",
      delay: ".3s",
    },
    {
      img: "/assets/images/main-home/process-img2.jpg",
      title: "Execute Works",
      description:
        "Dynamically administrate low-risk highly energistically reconceptualize",
      number: "02",
      delay: ".5s",
    },
    {
      img: "/assets/images/main-home/process-img3.jpg",
      title: "Finished Process",
      description:
        "Dynamically administrate low-risk highly energistically reconceptualize",
      number: "03",
      delay: ".7s",
    },
  ];

  return (
    <section
      className="process-section section-padding fix"
      style={{
        backgroundImage: "url('/assets/images/main-home/process-bgs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-sm-12 wow fadeInUp">
            <div className="inner-column">
              <div className="sec-title text-center">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="Image"
                  />
                  Working Process
                </span>
                <h2 className="text-reveal-anim">
                  Follow easy working steps for <br />
                  Finished Projects
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row process-border">
          {processes.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className="process-single-box wow fadeInUp"
                data-wow-delay={item.delay}>
                <div className="process-thumb">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="process-content">
                  <h4 className="title">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <h3 className="process-number">{item.number}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="process-shape bounce-animate3">
        <img src="/assets/images/main-home/2.png" alt="Image" />
      </div>
      <div className="process-shape2 bounce-animate4">
        <img src="/assets/images/main-home/about-sp.png" alt="Image" />
      </div>
    </section>
  );
};

export default ProcessSection;
