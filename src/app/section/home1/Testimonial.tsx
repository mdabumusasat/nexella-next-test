"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  {
    value: 6,
  },
];

const testimonials = [
  {
    name: "David T. Alex",
    role: "HR Manager — Nexella IT",
    text: "At Nexella, we don't just run campaigns—we build digital relationships that grow brands and delivered measurable impact. Our success lies in making our clients unforgettable online",
  },
  {
    name: "David T. Alex",
    role: "HR Manager — Nexella IT",
    text: "At Nexella, we don't just run campaigns—we build digital relationships that grow brands and delivered measurable impact. Our success lies in making our clients unforgettable online",
  },
  {
    name: "David T. Alex",
    role: "HR Manager — Nexella IT",
    text: "At Nexella, we don't just run campaigns—we build digital relationships that grow brands and delivered measurable impact. Our success lies in making our clients unforgettable online",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="testimonial-section-two"
      style={{
        backgroundImage: "url(/assets/images/main-home/testimonial-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 wow fadeInUp">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".array-next",
                prevEl: ".array-prev",
              }}
              loop
              className="testimonial-slider">
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-single_box-two">
                    <div className="inner-single_box">
                      <div className="tesimonial-thumb">
                        <img
                          src="/assets/images/main-home/testi-img2.png"
                          alt="testimonial"
                        />
                      </div>
                      <div className="testi_content">
                        <figure className="testi_aroow">
                          <img
                            src="/assets/images/main-home/testi-icon.png"
                            alt="icon"
                          />
                          <span className="top-title">Creative Works!</span>
                        </figure>
                        <p>{item.text}</p>
                        <div className="testimonial-author">
                          <div className="testi-bio">
                            <h4 className="title-info">{item.name}</h4>
                            <p>{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="array-button">
                <button className="array-prev">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="array-next">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Swiper>
          </div>
          <div
            className="column-right col-lg-5 col-md-12 wow fadeInUp"
            data-wow-delay="300ms">
            <div className="sec-title">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="Image"
                />
                Testimonial
              </span>
              <h2 className="hero_title text-reveal-anim">
                Real Stories from Happy Customer’s drive here <br />
                Success Business
              </h2>
            </div>
            <div className="counter_box-testi">
              <div className="count-box">
                <span className="count-text"><CounterUp end={counters[0].value} /></span>K
                <span className="plus">+</span>
                <img
                  className="counter-icn"
                  src="/assets/images/main-home/autor-img.png"
                  alt="Image"
                />
              </div>
              <h6 className="counter-title">Happy Customers</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="testi-sp bounce-animate3">
        <img
          src="/assets/images/main-home/animat-shape.png"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
