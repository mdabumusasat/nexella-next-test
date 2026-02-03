"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  price: string;
  period: string;
  features: string[];
  delay?: string;
};

function PricingCard({ title, price, period, features, delay }: PricingCardProps) {
  return (
    <div className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
      <div className="pricing-main-bx">
        <div className="pricing-single-bx">
          <div className="inner-box">
            <h3 className="popular">Popular</h3>
            <h4 className="title">{title}</h4>
            <div className="price-box">
              <h4 className="price">{price}</h4>
              <span className="validaty">{period}</span>
            </div>
            <p className="pricing-text">
              Growing your business select our {title} plan for what you need
            </p>
            <div className="pricing-btn">
              <Link href="/page-pricing">
                Get Started Now <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="feature">
              <h4 className="feature-title">Features</h4>
              <ul>
                {features.map((f, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  const features = [
    "Installation Free Software",
    "Essential Free Supports",
    "Solving Troubleshooting",
    "100 GB Free Hosting",
  ];

  return (
    <section className="pricing-section section-padding bg-cover pb-0">
      <div className="bg bg-image">
        <img
          src="/assets/images//home-2/pricing-bg.png"
          alt="Pricing Background"
        />
      </div>
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-xl-8 wow fadeInLeft">
            <div className="sec-title text-center mb-0">
              <span className="sub-title">
                <img
                  src="/assets/images//main-home/sub-title-shape.svg"
                  alt="Subtitle Shape"
                />
                Pricing Plans
              </span>
              <h2 className="hero_title text-reveal-anim">
                Flexible Pricing Packages Tailored to <br />
                Your Marketing Goals
              </h2>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 mt-md-0">
          <div className="pricing-two__tab wow fadeInUp" data-wow-delay=".4s">
            <nav>
              <div className="nav nav-tabs" role="tablist">
                <button
                  className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
                  onClick={() => setActiveTab("monthly")}>
                  Monthly
                </button>
                <button
                  className={`nav-link ${activeTab === "yearly" ? "active" : ""}`}
                  onClick={() => setActiveTab("yearly")}>
                  Yearly
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="pricing__tab-content">
          {activeTab === "monthly" && (
            <div className="tab-pane fade show active">
              <div className="row">
                <PricingCard
                  title="Basic Plan"
                  price="$49"
                  period="Per Month"
                  features={features}
                />
                <PricingCard
                  title="Business Plan"
                  price="$98"
                  period="Per Month"
                  features={features}
                  delay="300ms"
                />
                <div
                  className="pricing-img-column col-lg-4 wow fadeInRight"
                  data-wow-delay="600ms"
                >
                  <div className="pricing-img1"></div>
                  <figure className="pricing-shape">
                    <img
                      src="/assets/images//home-2/pricing-img.png"
                      alt="Pricing Illustration"
                    />
                  </figure>
                </div>
              </div>
            </div>
          )}
          {activeTab === "yearly" && (
            <div className="tab-pane fade show active">
              <div className="row">
                <PricingCard
                  title="Basic Plan"
                  price="$490"
                  period="Per Year"
                  features={features}
                />
                <PricingCard
                  title="Business Plan"
                  price="$980"
                  period="Per Year"
                  features={features}
                  delay="300ms"
                />
                <div className="pricing-img-column col-lg-4">
                  <div className="pricing-img1"></div>
                  <figure className="pricing-shape">
                    <img
                      src="/assets/images//home-2/pricing-img.png"
                      alt="Pricing Illustration"
                    />
                  </figure>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Shape */}
      <figure className="pricing-left-sp bounce-animate2">
        <img
          src="/assets/images//main-home/about-sp.png"
          alt="Decorative Shape"
        />
      </figure>
    </section>
  );
}