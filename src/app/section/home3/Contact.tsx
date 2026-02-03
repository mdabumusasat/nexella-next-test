"use client";
import React from "react";

export default function ContactSectionThree() {
  return (
    <section
      className="contact-section-3 section-padding pb-5 bg-cover"
      style={{
        backgroundImage: "url('/assets/images/home-3/contact-shape-bg.png')",
      }}>
      <div className="auto-container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-content-style-3">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="Shape"
                  />
                  Have Questions ?
                </span>
                <h2 className="hero_title text-reveal-anim">
                  Start Your Digital Journey
                  <br />
                  Get in Touch Now
                </h2>
              </div>
              <div className="contact-shape1 bounce-animate2 mt-30 d-none d-xl-block">
                <img
                  src="/assets/images/home-3/contact-shape1.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="contact-form-style-3">
              <form id="contact-form">
                <div className="row g-4">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="tel"
                      placeholder="Phone No"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="email"
                      placeholder="Enter E-Mail *"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      placeholder="Subject *"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      name="message"
                      placeholder="Write Message..."
                      required
                    ></textarea>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="nexella-buton">
                      <button
                        className="theme-btn-main"
                        type="submit">
                        <span className="theme-btn-arrow-left theme-bg theme-color-white">
                          <i className="fa-solid fa-arrow-left"></i>
                        </span>
                        <span className="theme-btn theme-bg theme-color-white">
                          Send Message
                        </span>
                        <span className="theme-btn-arrow-right theme-bg theme-color-white">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
