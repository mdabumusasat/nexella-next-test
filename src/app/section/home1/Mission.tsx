"use client";
import React from "react";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInUp">
            <div className="mission-icon-box">
              <div className="icon-box">
                <img
                  src="/assets/images/main-home/mission-icon.svg"
                  alt="Image"/>
                <h4 className="icon-bx-title hero_title tv_hero_title hero_title_1">
                  Company Mission
                </h4>
              </div>
              <p className="mission-description">
                Nexella adopts a client-centric approach, focusing on
                understanding business&apos;s unique goals and challenges.
                By leveraging data analytics latest digital tools, the agency
                formulates
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
            <div className="mission-list-item">
              <div className="misssion-list">
                <ul>
                  <li>
                    <img
                      src="/assets/images/main-home/right-icon.svg"
                      alt=""
                    />
                    Digital Marketing
                  </li>
                  <li>
                    <img
                      src="/assets/images/main-home/right-icon.svg"
                      alt=""
                    />
                    Branding Solution
                  </li>
                </ul>
              </div>
              <div className="misssion-list-two">
                <ul>
                  <li>
                    <img
                      src="/assets/images/main-home/right-icon.svg"
                      alt=""
                    />
                    Growth Tracking
                  </li>
                  <li>
                    <img
                      src="/assets/images/main-home/right-icon.svg"
                      alt=""
                    />
                    Google Rankings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
