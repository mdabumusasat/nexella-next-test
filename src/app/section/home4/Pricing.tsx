"use client";
import React, { useState } from "react";
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
            <h3 className="popular">{title}</h3>
            <div className="price-box">
              <h4 className="price">{price}</h4>
              <span className="validaty">{period}</span>
            </div>
            <p className="pricing-text">
              Growing your business select our {title} plan for what you need
            </p>
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
            <div className="pricing-btn mt-40">
              <Link href="/page-pricing">
                Get Started Now <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection4() {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  const monthlyPlans = [
    {
      title: "Basic Plan",
      price: "$49",
      period: "Per Month",
      features: [
        "24/7 system monitoring & alerting",
        "Email & Ticket support",
        "Managed Antivirus & Anti-Malware",
        "Automated updates for OS",
        "Basic file-level backup & recovery",
      ],
    },
    {
      title: "Premium Plan",
      price: "$99",
      period: "Per Month",
      features: [
        "24/7/365 Dedicated Phone Support",
        "Information & Event Management",
        "Full management of servers",
        "Bi-annual deep planning sessions",
        "Custom Monthly Retainer",
      ],
      delay: "300ms",
    },
    {
      title: "Standard Plan",
      price: "$69",
      period: "Per Month",
      features: [
        "Chat & Email support",
        "Endpoint Detection & Response",
        "Disaster Recovery Orchestration",
        "Basic SEO Optimization",
        "Assistance for standards",
      ],
      delay: "500ms",
    },
  ];

  const yearlyPlans = [
    {
      title: "Basic Plan",
      price: "$490",
      period: "Per Year",
      features: ["Installation Free Software", "Essential Free Supports", "Solving Troubleshooting", "100 GB Free Hosting"],
    },
    {
      title: "Premium Plan",
      price: "$990",
      period: "Per Year",
      features: ["Installation Free Software", "Essential Free Supports", "Solving Troubleshooting", "100 GB Free Hosting"],
      delay: "300ms",
    },
    {
      title: "Standard Plan",
      price: "$690",
      period: "Per Year",
      features: ["Installation Free Software", "Essential Free Supports", "Solving Troubleshooting", "100 GB Free Hosting"],
      delay: "500ms",
    },
  ];

  return (
    <section
      className="pricing-section-4 fix section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/images/home-4/pricing-bg.jpg')" }}>
      <div className="pricing-shape">
        <img src="/assets/images/home-4/pricing-shape.png" alt="img" />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center mb-0">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <span className="sub-title">
                <img src="/assets/images/main-home/sub-title-shape.svg" alt="" />
                Pricing Plans
              </span>
              <h2 className="hero_title text-reveal-anim">
                Start Small or Go Big – We’ve <br />Got You Covered
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
        {/* Tab content */}
        <div className="pricing__tab-content">
          <div className="row">
            {(activeTab === "monthly" ? monthlyPlans : yearlyPlans).map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
