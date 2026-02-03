"use client";
import React from "react";
import Link from "next/link";

const FooterThree = () => {
  return (
      <footer className="footer-section-3 theme-color-bg pb-60">
        <div className="footer-main-wrapper">
          <div className="footer-circle-shape">
            <img src="/assets/images/home-3/footer-circle.png" alt="img"/>
          </div>
          <div className="auto-container">
            <div className="footer-widget-wrapper-3">
                <div className="row g-4">
                  <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="footer-widget-single-items">
                        <div className="widget-head">
                          <Link href="#" className="footer-logo"><img src="/assets/images/logo/white-logo.png" alt="img"/></Link>
                        </div>
                        <div className="footer-content">
                          <p className="footer-text">
                              Nexella is a dynamic creative digital marketing dedicated to empowering businesses through
                          </p>
                          <ul className="social-icon-two mt-5">
                              <li>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                              </li>
                              <li>
                                <Link href="#"><i className="fab fa-facebook"></i></Link>
                              </li>
                              <li>
                                <Link href="#"><i className="fab fa-pinterest"></i></Link>
                              </li>
                              <li>
                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                              </li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="footer-widget-single-items">
                      <div className="widget-head">
                          <h4 className="widget-title">Quick Link</h4>
                      </div>
                       <ul className="list-area">
                          <li>
                              <Link href="/page-about">
                                 About Us
                              </Link>
                          </li>
                          <li>
                              <Link href="/page-team">
                                 Our Team
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                Our Portfolio
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                 Careers
                              </Link>
                          </li>
                          <li>
                              <Link href="/page-contact">
                                 Contact Us
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                 Case Study
                              </Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 ps-xl-5 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="footer-widget-single-items">
                      <div className="widget-head">
                          <h4 className="widget-title">Our Solutions</h4>
                      </div>
                       <ul className="list-area">
                          <li>
                              <Link href="#">
                                Web Development
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                  UI/UX Design
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                Mobile Application
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                 Cloud Service
                              </Link>
                          </li>
                          <li>
                              <Link href="#">
                                 Cyber Security 
                              </Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                   <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                    <div className="footer-widget-single-items">
                      <div className="widget-head">
                          <h4 className="widget-title">Contact Us</h4>
                      </div>
                       <div className="widget-content">
                            <div className="contact-info-box">
                              <div className="icon-box">
                                <span className="icon fa fa-envelope"></span>
                              </div>
                              <div className="content-box">
                                <h6 className="title">Mail Us:</h6>
                                <div className="text"><Link href="#" className="link">hanson@example.com</Link></div>
                              </div>                  
                            </div>
                            <div className="contact-info-box">
                              <div className="icon-box">
                                <span className="icon fa fa-map-marker-alt"></span>
                              </div>
                              <div className="content-box">
                                <h6 className="title">Address :</h6>
                                <div className="text">4517 Washington Ave. Newyork  39495</div>
                              </div>                  
                            </div>
                            <div className="contact-info-box mb-0">
                              <div className="icon-box">
                                <span className="icon fa fa-phone"></span>
                              </div>
                              <div className="content-box">
                                <h6 className="title">Phone:</h6>
                                <div className="text"><Link href="#" className="link">(123) 456-7890</Link></div>
                              </div>                  
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <p className="copyright-text wow fadeInUp" data-wow-delay=".3s">
              © Copyright Reserved by Nexella.com
            </p>
          </div>
        </div>
      </footer>
  );
};

export default FooterThree;
