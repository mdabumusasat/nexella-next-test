"use client";
import React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "Do you provide support after the project launch?",
    answer:
      "We strive to provide solutions that offer the best value for your investment. We are happy to discuss your budget constraints upfront and propose.",
  },
  {
    question: "Do you provide training or documentation?",
    answer:
      "We strive to provide solutions that offer the best value for your investment. We are happy to discuss your budget constraints upfront and propose.",
  },
  {
    question: "What is your response time for support issues?",
    answer:
      "We strive to provide solutions that offer the best value for your investment. We are happy to discuss your budget constraints upfront and propose.",
  },
  {
    question: "What is your development process?",
    answer:
      "We strive to provide solutions that offer the best value for your investment. We are happy to discuss your budget constraints upfront and propose.",
  },
  {
    question: "Can you work within our budget?",
    answer:
      "We strive to provide solutions that offer the best value for your investment. We are happy to discuss your budget constraints upfront and propose.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(faqData.length - 1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section fix pb-0 section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/images/home-4/faq-bg.jpg')" }}>
      <div className="auto-container">
        <div className="sec-title">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6 col-md-12">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="Image"
                />
                Nexella FAQ’s
              </span>
              <h2 className="hero_title text-reveal-anim">
                Helping You Understand <br /> Tech Solution
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              Nexella is a dynamic best digital marketing agency dedicated 
                to empowering businesses through innovative online presence
                modern technology we have used
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="faq-image-style-1">
              <img
                src="/assets/images/home-4/faq-image.jpg"
                alt="FAQ"
              />
              <div className="counter-box-items">
                <div className="count-box">
                  <span className="count-text">18</span>
                  <span className="plus">+</span>
                </div>
                <p>YEARS OF EXPERIENC</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <ul className="accordion-box">
              {faqData.map((item, index) => (
                <li
                  className={`accordion block ${
                    activeIndex === index ? "active-block mb-0" : ""
                  }`}
                  key={index}>
                  <div
                    className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                    onClick={() => toggleAccordion(index)}>
                    {item.question} <i className="icon fa fa-plus"></i>
                  </div>
                  <div
                    className={`acc-content ${
                      activeIndex === index ? "current" : ""
                    }`}>
                    <div className="content">
                      <div className="text">{item.answer}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
