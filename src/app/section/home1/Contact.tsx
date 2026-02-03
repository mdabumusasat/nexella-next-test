"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
            <div className="contact-right-warp">
              <div className="sec-title style_color">
                <span className="sub-title">
                  <img src="/assets/images/main-home/sub-titls.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="hero_title text-reveal-anim">
                  Feel free to ask anything <br />
                  Anytime Just Contact with <br />
                  Support Center
                </h2>
              </div>
              <p className="contact-desc">
                Nexella is a dynamic best digital marketing dedicated to
                empowering businesses through
              </p>
              <div className="contact-info">
                <p>nexella@yourdomain.com</p>
                <h4 className="info-title">+12 (4567) 8750</h4>
              </div>
              <div className="shape bounce-animate">
                <img src="/assets/images/main-home/dance-sp.png" alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contact-forms wow fadeInRight">
              <h2 className="service-info__badge">24 Hours availablitiy</h2>
              <form id="contact-form">
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="email"
                      name="form_email"
                      placeholder="Enter E-Mail*"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
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
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="theme-btn-main">
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
              </form>
              <div className="contact-sps bounce-animate3">
                <img src="/assets/images/main-home/contact-sp.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-sp rotate">
        <img src="/assets/images/main-home/sp-contact.png" alt="shape" />
      </div>
    </section>
  );
}

