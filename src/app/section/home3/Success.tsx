"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";


const counters = [
  { value: 25 },  
  { value: 300 }, 
  { value: 67 }, 
  { value: 65 }, 
  { value: 87 }, 
];

const SuccessSection = () => {
  return (
      <section className="success-section-3 section-padding bg-cover" style={{
        backgroundImage: "url(/assets/images/home-3/success-bg.jpg)"}}>
        <div className="suceess-shape">
          <img src="/assets/images/home-3/success-shape.png" alt="img"/>
        </div>
        <div className="auto-container">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="sec-title mb-0">
                  <span className="sub-title theme-color-black"><img src="/assets/images/main-home/sub-title-shape2.svg" alt="Image"/>Nexella Success</span>
                  <h2 className="theme-color-black text-reveal-anim">
                    Expert-Led Strategies <br/>
                      Online Success
                  </h2>
              </div>
              <div className="success-counter-items wow fadeInUp" data-wow-delay=".3s">
                <div className="success-counter">
                  <div className="count-box"><span className="count-text"><CounterUp end={counters[0].value} /></span><span className="plus">Year</span></div>
                  <p>
                    We have won 40+ awards
                    believe in quality.
                  </p>
                </div>
                <div className="award-image">
                  <img src="/assets/images/home-3/award.png" alt="img"/>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="success-box-items-3">
                <div className="circle-icon d-none d-sm-block">
                  <div className="icon">
                    <img src="/assets/images/home-3/vec-icon.png" alt="img"/>
                  </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-sm-6">
                      <div className="success-box-counter">
                        <h3 className="count-box">
                          <span className="count-text" data-speed="3000" data-stop="300"><CounterUp end={counters[1].value} /></span>+
                        </h3>
                        <p>
                          Projects Completed
                        </p>
                      </div>
                    </div>
                      <div className="col-md-6 col-sm-6">
                      <div className="success-box-counter">
                        <h3 className="count-box">
                          <span className="count-text"><CounterUp end={counters[2].value} /></span>%
                        </h3>
                        <p>
                         client success rate
                        </p>
                      </div>
                    </div>
                      <div className="col-md-6 col-sm-6">
                      <div className="success-box-counter">
                        <h3 className="count-box">
                          <span className="count-text"><CounterUp end={counters[3].value} /></span>+
                        </h3>
                        <p>
                          Expert Members
                        </p>
                      </div>
                    </div>
                      <div className="col-md-6 col-sm-6">
                      <div className="success-box-counter">
                        <h3 className="count-box">
                          <span className="count-text"><CounterUp end={counters[4].value} /></span>%
                        </h3>
                        <p>
                          Trusted clients  28k
                        </p>
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

export default SuccessSection;
