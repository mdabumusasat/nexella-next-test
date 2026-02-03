"use client";
import React from "react";
import Link from "next/link";

export default function NewsSectionThree() {
  return (
    <section className="news-section-3 section-padding theme-color-bg">
      <div className="shape-1 d-none d-xxl-block">
        <img
          src="/assets/images/home-3/news-shape1.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2 d-none d-xxl-block">
        <img
          src="/assets/images/home-3/news-shape2.png"
          alt="Shape"
        />
      </div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="sec-title text-center">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="Shape"
                />
                Latest Blog
              </span>
              <h2 className="hero_title text-reveal-anim">
                Read Our Recent Blog Post <br />
                Form Update news
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="news-block mb-0 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="blog-single-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-blog-details">
                    <img
                      src="/assets/images/main-home/blog1.png"
                      alt="Blog"
                    />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <span className="date">FEBRUARY 05, 2026</span>
                <h4 className="title">
                  <Link href="/page-blog-details">
                    Social Media Marketing Trends Every Business
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="news-block mb-0 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay=".5s">
            <div className="blog-single-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-blog-details">
                    <img
                      src="/assets/images/main-home/blog2.png"
                      alt="Blog"
                    />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <span className="date">FEBRUARY 05, 2026</span>
                <h4 className="title">
                  <Link href="/page-blog-details">
                    How Social Medias Ignite Business Growth
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="news-block mb-0 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay=".7s">
            <div className="blog-single-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-blog-details">
                    <img
                      src="/assets/images/main-home/blog3.png"
                      alt="Blog"
                    />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <span className="date">FEBRUARY 05, 2026</span>
                <h4 className="title">
                  <Link href="/page-blog-details">
                    How AI Boosts Efficiency in Social Media
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
