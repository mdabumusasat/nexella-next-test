"use client";

import React from "react";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section className="work-section section-padding">
        <div className="right-shape1">
            <img
            src="/assets/images/home-3/work/right-shape1.png"
            alt="Shape"
            />
        </div>
        <div className="auto-container">
            <div className="row">
                <div className="col-lg-12 wow fadeInUp">
                    <div className="inner-column">
                        <div className="sec-title text-center">
                            <h2 className="work-title hero_title tv_hero_title hero_title_1">
                            WORKS
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row service-pin">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="work-box-items-3 service-panel">
                    <div className="work-content">
                        <div className="top-title">
                        <span>01</span>
                        <p>JANUARY 2026</p>
                        </div>
                        <div className="content">
                        <h2 className="title">
                            <Link href="/page-services">
                            Conduct audience research
                            </Link>
                        </h2>
                        <p>
                            Nexella adopts client-centric approach main business&apos;s
                            pro and challenge latest digital agency design.
                        </p>
                        <Link
                            href="/page-services"
                            className="header-btn-main btn-theme border-style-btn">
                            <span className="header-theme-btn">Get a quote</span>
                            <span className="header-btn-arrow-right">
                            <i className="fa-regular fa-arrow-right"></i>
                            </span>
                        </Link>
                        </div>
                    </div>
                    <div className="thumb">
                        <img
                        src="/assets/images/home-3/work/work-1.jpg"
                        alt="Work"
                        />
                    </div>
                </div>
                <div className="work-box-items-3 service-panel">
                <div className="shape-1 bounce-animate2 d-none d-xxl-block">
                    <img
                    src="/assets/images/home-3/work/shape1.png"
                    alt="Shape"
                    />
                </div>
                <div className="work-content">
                    <div className="top-title">
                    <span>02</span>
                    <p>JANUARY 2026</p>
                    </div>
                    <div className="content">
                    <h2 className="title">
                        <Link href="/page-services">
                        Set up social media profiles
                        </Link>
                    </h2>
                    <p>
                        Nexella adopts client-centric approach main business&apos;s
                        pro and challenge latest digital agency design.
                    </p>
                    <Link
                        href="/page-services"
                        className="header-btn-main btn-theme border-style-btn">
                        <span className="header-theme-btn">Get a quote</span>
                        <span className="header-btn-arrow-right">
                        <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </Link>
                    </div>
                </div>
                <div className="thumb">
                    <img
                    src="/assets/images/home-3/work/work-2.jpg"
                    alt="Work"/>
                </div>
                </div>
                <div className="work-box-items-3 mb-0 service-panel">
                <div className="shape-1 bounce-animate2 d-none d-xxl-block">
                    <img
                    src="/assets/images/home-3/work/shape2.png"
                    alt="Shape"/>
                </div>
                <div className="work-content">
                    <div className="top-title">
                    <span>03</span>
                    <p>JANUARY 2026</p>
                    </div>
                    <div className="content">
                    <h2 className="title">
                        <Link href="/page-services">
                        Branded hashtag challenge
                        </Link>
                    </h2>
                    <p>
                        Nexella adopts client-centric approach main business&apos;s
                        pro and challenge latest digital agency design.
                    </p>
                    <Link
                        href="/page-services"
                        className="header-btn-main btn-theme border-style-btn">
                        <span className="header-theme-btn">Get a quote</span>
                        <span className="header-btn-arrow-right">
                        <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </Link>
                    </div>
                </div>
                <div className="thumb">
                    <img
                    src="/assets/images/home-3/work/work-3.jpg"
                    alt="Work"
                    />
                </div>
                </div>

            </div>
            </div>
        </div>
        <div className="work-shapes">
            <img
            src="/assets/images/home-3/work/circle.png"
            alt="Circle"
            />
        </div>
        <div className="shape-3 d-none d-xxl-block">
            <img
            src="/assets/images/home-3/work/shape-3.png"
            alt="Shape"
            />
        </div>
        <div className="work-bg-blur2 d-none d-xxl-block"></div>
    </section>
  );
}
