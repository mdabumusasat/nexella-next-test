"use client";
import React from "react";
import Link from "next/link";

const NewsSectionTwo = () => {
  return (
      <section className="news-section style_two section-padding">
        <div className="auto-container">
          <div className="sec-title">
            <div className="row g-4 align-items-center fadeInUp justify-content-between">
            <div className="col-lg-6">
              <span className="sub-title"><img src="/assets/images/main-home/sub-title-shape.svg" alt="Image"/>Latest Blog</span>
                <h2 className="hero_title text-reveal-anim">
                  Read Our Recent Blog Post <br/>Form Update news
                </h2>
            </div>
            <div className="col-lg-4 text-md-right">
               <Link className="theme-btn-main" href="/page-blog-details">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="theme-btn theme-bg theme-color-white">All Blog Post</span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="blog-single-box style_two">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-blog-details"><img src="/assets/images/home-2/blog1.jpg" alt="Image"/></Link>
                  </figure>
                </div>
                <div className="content-box">
                  <span className="date">05 February, 2026</span>
                  <h4 className="title">
                    <Link href="/page-blog-details">Top 10 new marketing tools for business - 2025</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="blog-single-box style_two">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-blog-details"><img src="/assets/images/home-2/blog2.jpg" alt="Image"/></Link>
                  </figure>
                </div>
                <div className="content-box">
                  <span className="date">05 February, 2026</span>
                  <h4 className="title">
                    <Link href="/page-blog-details">Most popular google chrome extension for marketing</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
              <div className="blog-single-box style_two">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-blog-details"><img src="/assets/images/home-2/blog3.jpg" alt="Image"/></Link>
                  </figure>
                </div>
                <div className="content-box">
                  <span className="date">05 February, 2026</span>
                  <h4 className="title">
                    <Link href="/page-blog-details">How to Install wordpress theme on c-Panel Properly </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default NewsSectionTwo;
