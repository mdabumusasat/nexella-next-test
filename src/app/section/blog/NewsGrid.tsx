"use client";

import React from "react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    image: "/assets/images/home-2/blog1.jpg",
    date: "03 February, 2026",
    title: "Top 10 new marketing tools for business - 2025",
    author: "John D. Alexon",
    delay: "0ms",
  },
  {
    id: 2,
    image: "/assets/images/home-2/blog2.jpg",
    date: "03 February, 2026",
    title: "Most popular google chrome extension for marketing",
    author: "Anjelina Watson",
    delay: "300ms",
  },
  {
    id: 3,
    image: "/assets/images/home-2/blog3.jpg",
    date: "03 February, 2026",
    title: "How to Install wordpress theme on c-Panel Properly",
    author: "John D. Alexon",
    delay: "600ms",
  },
  {
    id: 4,
    image: "/assets/images/home-2/blog3.jpg",
    date: "03 February, 2026",
    title: "How to Install wordpress theme on c-Panel Properly",
    author: "John D. Alexon",
    delay: "600ms",
  },
  {
    id: 5,
    image: "/assets/images/home-2/blog1.jpg",
    date: "03 February, 2026",
    title: "Top 10 new marketing tools for business - 2025",
    author: "John D. Alexon",
    delay: "0ms",
  },
  {
    id: 6,
    image: "/assets/images/home-2/blog2.jpg",
    date: "03 February, 2026",
    title: "Most popular google chrome extension for marketing",
    author: "Anjelina Watson",
    delay: "300ms",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section style_two section-padding pb-90">
      <div className="auto-container">
        <div className="row">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="news-block col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}>
              <div className="blog-single-box style_two">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-service-details">
                      <img src={item.image} alt={item.title} />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <span className="date">{item.date}</span>
                  <h4 className="title">
                    <Link href="/page-service-details">{item.title}</Link>
                  </h4>
                  <div className="blog-author">
                    <span>
                      By -{" "}
                      <Link href="/page-service-details" className="read-more">
                        {item.author}
                      </Link>
                    </span>
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

export default NewsSection;
