"use client";
import React from "react";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="news-section section-padding pb-90">
      <div className="auto-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="sec-title text-center">
              <span className="sub-title">
                <img
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt="shape"
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
        <div className="row">
          <div
            className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="blog-single-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-blog-details">
                    <img
                      src="/assets/images/main-home/blog1.jpg"
                      alt="blog"
                    />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <span className="date">JANUARY 29, 2026</span>
                <h4 className="title">
                  <Link href="/page-blog-details">
                    Digital Marketing Trends Every Business
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay=".5s">
            <div className="blog-single-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-blog-details">
                    <img
                      src="/assets/images/main-home/blog2.jpg"
                      alt="blog"
                    />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <span className="date">JANUARY 29, 2026</span>
                <h4 className="title">
                  <Link href="/page-blog-details">
                    How Digital Agencies Ignite Business Growth
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay=".7s">
            <div className="blog-single-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-blog-details">
                    <img
                      src="/assets/images/main-home/blog3.jpg"
                      alt="blog"
                    />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <span className="date">JANUARY 29, 2026</span>
                <h4 className="title">
                  <Link href="/page-blog-details">
                    How AI Boosts Efficiency in Digital Agencies
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-sp1 bounce-animate4">
        <img
          src="/assets/images/main-home/news-sp.png"
          alt="shape"
        />
      </div>
      <div className="news-sp2 bounce-animate3">
        <img
          src="/assets/images/main-home/animat-shape.png"
          alt="shape"
        />
      </div>
    </section>
  );
}
