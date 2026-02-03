"use client";
import React from "react";
import Link from "next/link";

const Footer2: React.FC = () => {
  return (
      <footer className="main-footer home-2" style={{backgroundImage: 'url(/assets/images/home-1/footer-bg.jpg)'}}>
        <div className="widgets-section style_two">
          <div className="other-box">
            <div className="marquee-three pb-130">
              <div className="marquee-group">
                <div className="text">LET’S CONECT</div>
                <div className="text">LET’S CONECT</div>
                <div className="text">LET’S CONECT</div>
                <div className="text">LET’S CONECT</div>
              </div>
              <div className="marquee-group">
                <div className="text">LET’S CONECT</div>
                <div className="text">LET’S CONECT</div>
                <div className="text">LET’S CONECT</div>
                <div className="text">LET’S CONECT</div>
              </div>
            </div>
          </div>
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInUp">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link href="#"><img src="/assets/images/logo/white-logo.png" alt="img"/></Link>
                  </div>
                  <h5 className="footer-main-title">
                    Helping Marketing Sales and Growing Business
                  </h5>
                  <ul className="social-icon-two">
                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="footer-widget">
                  <h5 className="widget-title">Company</h5>
                  <ul className="user-links">
                    <li><Link href="#">Home <i className="fa-solid fa-arrow-right"></i></Link></li>
                    <li><Link href="/page-about">About <i className="fa-solid fa-arrow-right"></i></Link></li>
                    <li><Link href="/page-team">Our Team <i className="fa-solid fa-arrow-right"></i></Link></li>
                    <li><Link href="/page-contact">Contact Us <i className="fa-solid fa-arrow-right"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                <div className="footer-widget contact-widget">
                  <h5 className="widget-title">Contact Us</h5>
                  <div className="widget-content">
                    <div className="address">
                      <p>Our Address</p>
                      <Link href="#"> 130/B alexon market street <br/>
                        Sandigo - USA </Link>
                    </div>
                    <div className="address">
                      <p>Send E-Mail</p>
                      <Link href="#">info.theme@gmail.com </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container justify-content-center">
              <div className="copyright-text">© Nexella 2026 . All rights reserved by <Link href="#">Thememascot</Link></div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer2;
