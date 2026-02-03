"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="main-footer bg-cover"
      style={{ backgroundImage: "url('/assets/images/home-1/footer-bg.jpg')" }}>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-upper col-lg-12">
              <h2 className="footer-title text-reveal-anim">
                LET’S — DISCUSS <br /> NEW PROJECT
              </h2>
              <div className="footer-icon">
                <img
                  src="/assets/images/main-home/brand-logo.png"
                  alt="brand"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logo/white-logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                <p className="footer-des">
                  Nexella is a dynamic creative digital marketing dedicated
                  to empowering businesses through
                </p>
                <ul className="social-icon-two">
                  <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                  <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                  <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                  <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="user-links">
                  <li><Link href="/">Home <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/page-about">About <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/page-team">Our Team <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/page-contact">Contact Us <i className="fa-solid fa-arrow-right" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Useful Links</h5>
                <ul className="user-links">
                  <li><Link href="/page-pricing">Pricing Plans <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/page-services">Our Service <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/page-testimonials">Testimonials <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/page-blog">Latest Blog <i className="fa-solid fa-arrow-right" /></Link></li>
                </ul>
              </div>
            </div>
            {/* Contact */}
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h5 className="widget-title">Contact Us</h5>
                <div className="widget-content">
                  <div className="address">
                    <p>Our Address</p>
                    <Link href="#">
                      130/B alexon market street
                      <span className="d-block"> Sandigo - USA</span>
                    </Link>
                  </div>
                  <div className="address">
                    <p>Send E-Mail</p>
                    <Link href="#">
                      info.theme@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Nexella 2026 . All rights reserved by <span>Kodesolution</span>
            </div>
            <div className="footer-links-wrapper">
              <Link href="#">Privacy and Policy</Link>
              <Link href="#">Sitemap</Link>
              <Link href="#">FAQ’s</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
