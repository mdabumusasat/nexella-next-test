"use client";

import React from "react";
import Link from "next/link";
import ProgressBar from "../../components/elements/ProgressBar";


const TeamDetails = () => {
  return (
	<>
    <section className="team-details">
      <div className="container pt-120 pb-100">
        <div className="team-details__top pb-70">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__top-left">
                <div className="team-details__top-img"> 
                  <img
                    src="/assets/images/inner/team-details.jpg"
                    alt="Team Details"
                  />
                  <div className="team-details__big-text"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="team-details__top-name">
                    Aleesha Brown
                  </h3>
                  <p className="team-details__top-title">
                    Managing Director & CEO
                  </p>
                  <p className="team-details__top-text-1">
                    I help my clients stand out and they help me grow.
                  </p>
                  <div className="team-details-contact mb-30">
                    <h5 className="mb-0">Email Address</h5>
                    <span>needhelp@yourdomain.com</span>
                  </div>
                  <div className="team-details-contact mb-30">
                    <h5 className="mb-0">Phone Number</h5>
                    <span>+012-3456-789</span>
                  </div>
                  <div className="team-details-contact">
                    <h5 className="mb-0">Web Address</h5>
                    <span>www.yourdomain.com</span>
                  </div>
                  <div className="team-details__social"> <Link href="#"><i className="fab fa-twitter"></i></Link> <Link href="#"><i className="fab fa-facebook"></i></Link> <Link href="#"><i className="fab fa-pinterest-p"></i></Link> <Link href="#"><i className="fab fa-instagram"></i></Link> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-details__bottom pt-100">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__bottom-left">
                <h4 className="team-details__bottom-left-title">
                  Personal Experience
                </h4>
                <p className="team-details__bottom-left-text">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries architecto dolorem ipsum quia.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__bottom-right">
                <div className="team-details__progress">
                  <ProgressBar title="Technology" percent={90} />
                  <ProgressBar title="Marketing" percent={80} />
                  <ProgressBar title="Business" percent={75} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	<section className="team-contact-form">
        <div className="container pt-120 pb-120">
          <div className="sec-title text-center">
            <h2 className="section-title__title" style={{ color: "var(--headings-color)" }}>Feel Free to Write Our <br /> Tecnology Experts</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form id="contact_form" name="contact_form" action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message"></textarea>
                </div>
                <div className="mb-3 text-center">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="theme-btn btn-style-submit" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                  <button type="reset" className="theme-btn btn-style-submit"><span className="btn-title">Reset</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
	</>
  );
};

export default TeamDetails;
