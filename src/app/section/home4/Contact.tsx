"use client";
import React from "react";
import Link from "next/link";

const ContactSectionTwo = () => {
  return (
    <section
      className="contact-section-two style-h4 section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/images/home-4/contact-bg.jpg')" }}>
      <div className="auto-container">
        <div className="row g-4 align-items-center">
          {/* Form Column */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contact-forms-two mt-0 wow fadeInRight">
              <h2 className="service-info__badge hero_title tv_hero_title hero_title_1">
                Free Consultation Available
              </h2>
              <p className="contact-des">
                We've been doing this for a while now and great news for deliver
                results that matter
              </p>
              <form method="post" action="#" id="contact-form">
                <div className="row">
                  <div className="form-group col-lg-12">
                    <input type="text" name="full_name" placeholder="Name" required />
                  </div>

                  <div className="form-group col-lg-12">
                    <input type="email" name="Email" placeholder="Email Address" required />
                  </div>

                  <div className="form-group col-lg-12">
                    <input type="text" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <textarea name="message" placeholder="Message" required />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button className="theme-btn" type="submit" name="submit-form">
                      <span className="btn-title">Submit Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Form Column */}

          {/* Info Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
            <div className="contact-right-warp">
              <div className="sec-title">
                <span className="sub-title">
                  <img
                    src="/assets/images/main-home/sub-title-shape.svg"
                    alt="Sub Title Shape"
                  />
                  Contact Us
                </span>
                <h2 className="font-weight-400 text-reveal-anim">
                  Let’s Make Your Website <br />Work Smarter — Contact for <br />SEO Help
                </h2>
              </div>
              <div className="contact-info">
                <Link className="email-link" href="#">
                  nexella@gmail.com
                </Link>
                <p>Email Address Urgently</p>
              </div>
              <div className="contact-btn">
                <button type="submit" className="theme-btn-main wow fadeInUp" data-wow-delay=".3s">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="theme-btn theme-bg theme-color-white">Contact Nexellar</span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionTwo;
