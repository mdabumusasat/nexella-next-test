"use client";
import React from "react";
import Link from "next/link";


export default function NewsSectionFour() {
  return (
      <section className="news-section-4 section-padding bg-cover" style={{backgroundImage: "url(/assets/images/home-4/news/news-bg.png)"}}>
        <div className="vec-left d-none d-xl-block">
          <img src="/assets/images/home-4/news/vec-left.png" alt="img"/>
        </div>
        <div className="vec-arrow d-none d-xl-block">
          <img src="/assets/images/home-4/news/arrow-vec.png" alt="img"/>
        </div>
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="sec-title text-center wow fadeInUp">
                <span className="sub-title"><img src="/assets/images/main-home/sub-title-shape.svg" alt="Image"/>Latest Blog</span>
                <h2 className="hero_title text-reveal-anim">
                   Read Our Recent Blog Post <br/>Form Update news
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="news-card-style-4">
                <div className="thumb">
                  <img src="/assets/images/home-4/news/news-01.jpg" alt="img"/>
                </div>
                <div className="content">
                  <div className="post-date">
                    <div className="post-box">
                      <h6 className="date-title">27</h6>
                      <p className="mb-0">July</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                        Nexella
                    </li>
                    <li>
                      0 Comments
                    </li>
                  </ul>
                  <h4 className="title">
                      <Link href="/page-blog-details">Why We Use React Native for Cross-Platform Apps
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="news-card-style-4">
                <div className="thumb">
                  <img src="/assets/images/home-4/news/news-02.jpg" alt="img"/>
                </div>
                <div className="content">
                  <div className="post-date">
                    <div className="post-box">
                      <h6 className="date-title">15</h6>
                      <p className="mb-0">Aug</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                        Nexella
                    </li>
                    <li>
                      0 Comments
                    </li>
                  </ul>
                  <h4 className="title">
                      <Link href="/page-blog-details">
                        5 Cybersecurity Trends to Watch in 2025
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="news-card-style-4">
                <div className="thumb">
                  <img src="/assets/images/home-4/news/news-03.jpg" alt="img"/>
                </div>
                <div className="content">
                  <div className="post-date">
                    <div className="post-box">
                      <h6 className="date-title">08</h6>
                      <p className="mb-0">July</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                        Nexella
                    </li>
                    <li>
                      0 Comments
                    </li>
                  </ul>
                  <h4 className="title">
                      <Link href="/page-blog-details">
                        The True ROI of Investing in Custom Software
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
