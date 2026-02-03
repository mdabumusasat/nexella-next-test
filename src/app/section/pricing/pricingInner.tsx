"use client";
import React from "react";
import Link from "next/link";

const pricingData = [
  {
    badge: "Popular",
    title: "Basic Plan",
    price: "$49",
    period: "Per Month",
    delay: "",
    features: [
      "Installation Free Software",
      "Essential Free Supports",
      "Solving Troubleshooting",
      "100 GB Free Hosting",
    ],
  },
  {
    badge: "Popular",
    title: "Premium Plan",
    price: "$99",
    period: "Per Month",
    delay: "300ms",
    features: [
      "Installation Free Software",
      "Essential Free Supports",
      "Solving Troubleshooting",
      "100 GB Free Hosting",
    ],
  },
  {
    badge: "Standard Plan",
    title: "Premium Plan",
    price: "$69",
    period: "Per Month",
    delay: "500ms",
    features: [
      "Installation Free Software",
      "Essential Free Supports",
      "Solving Troubleshooting",
      "100 GB Free Hosting",
    ],
  },
];

const PricingSectionFour = () => {
  return (
    <section
      className="pricing-section-4 fix inner-page section-padding bg-cover"
      style={{
        backgroundImage: "url('images/home-4/pricing-bg.jpg')",
      }}>
      <div className="auto-container">
        <div className="row">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}>
              <div className="pricing-main-bx">
                <div className="pricing-single-bx">
                  <div className="inner-box">
                    <h3 className="popular">{item.badge}</h3>
                    <h4 className="title">{item.title}</h4>
                    <div className="price-box">
                      <h4 className="price">{item.price}</h4>
                      <span className="validaty"> {item.period}</span>
                    </div>
                    <p className="pricing-text">
                      Growing your business select our Basic plans what you need
                    </p>
                    <div className="pricing-btn">
                      <Link href="/page-pricing">
                        Get Started Now{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="feature">
                      <h4 className="feature-title">Features</h4>
                      <ul>
                        {item.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionFour;
