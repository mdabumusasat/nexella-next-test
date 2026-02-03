'use client';
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  { value: 18 },  
];

const processSteps = [
  { number: "01", title: "Understand Client Needs", delay: ".3s" },
  { number: "02", title: "Strategy and Planning", delay: ".5s" },
  { number: "03", title: "Execution & Optimizations", delay: ".7s" },
  { number: "04", title: "Finished & Reporting", delay: ".9s" },
];

const ProcessSectionTwo = () => {
  return (
    <section
      className="process-section-two section-padding"
      style={{
        backgroundImage: "url(/assets/images/home-2/proses-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 wow fadeInUp">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="shape"
                  />
                  Working Process
                </span>
                <h2 className="hero_title text-reveal-anim">
                  Proven Marketing Process <br />
                  for Results
                </h2>
              </div>
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="process-bx wow fadeInUp"
                  data-wow-delay={step.delay}>
                  <div className="process-conten">
                    <div className="content">
                      <span className="number">{step.number}</span>
                      <h4 className="title">{step.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="process-img wow fadeInRight">
              <div className="image-box">
                <img
                  src="/assets/images/home-2/process-img.png"
                  alt="Process"
                />
              </div>
              <figure className="process-sp rotate">
                <img
                  src="/assets/images/home-2/circle.png"
                  alt="circle"/>
              </figure>
              <div className="process-icon-box">
                <div className="process-count">
                  <div className="count-box">
                    <span className="count-text"><CounterUp end={counters[0].value} /></span>
                    <span className="plus">+</span>
                  </div>
                  <h6 className="counter-title">YEARS OF EXPERIENCE</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionTwo;
