"use client";
import React from "react";
import Link from "next/link";

const FooterFour = () => {
  return (
      <footer className="footer-section-3 theme-color-bg">
        <div className="footer-main-wrapper-4">
          <div className="left-shape">
            <img src="/assets/images/home-4/footer-left-shape1.png" alt="img"/>
          </div>
          <div className="right-shape">
            <img src="/assets/images/home-4/footer-right-shape.png" alt="img"/>
          </div>
          <div className="auto-container">
            <div className="row">
              {/* <!-- Footer Column --> */}
              <div className="footer-column col-lg-6">
                <div className="footer-widget about-widget wow fadeInLeft">
                  <h2 className="title">Let’s Talk</h2>
                  <div className="footer-widget subscribe-widget wow fadeInLeft animated" data-wow-delay="200ms">
                    <h5 className="text">Get the latest inspiration &amp; insights</h5>
                    <div className="subscribe-form-one">
                      <form method="post" action="#">
                        <div className="form-group">
                          <input type="email" name="email" className="email" placeholder="Enter your email" />
                          <button type="button" className="circle-btn">
                          <i className="fa-light fa-paper-plane"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="widget-content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing <br className="d-none d-lg-block"/>
                      elit sed diam nonummy.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li>
                          <Link href="#"><i className="fab fa-twitter"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-xl-1">
                <div className="footer-right-clomun">
                  <div className="row g-4">
                    <div className="col-xl-12">
                      <div className="contacts-widget mt-0 wow fadeInLeft animated" data-wow-delay="100ms">
                        <div className="text">
                          <Link className="mail" href="#">needhelp@company.com</Link><br/>
                          <Link className="phone" href="#">(+123) 456789 00</Link>
                        </div>
                        <Link href="/page-contact" className="contact-us wow fadeInUp animated animated">
                          <span className="title">Contact <br/>
                            with us</span>
                          <br/>
                          <i className="icon 
                          fa-regular fa-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                    {/* <!-- footer column --> */}
                    <div className="footer-column3 col-xl-6 col-lg-6 col-md-6">
                      <div className="footer-widget3 links-widget wow fadeInLeft animated" data-wow-delay="200ms">
                        <h4 className="widget-title">Quick Link</h4>
                        <div className="widget-content">
                          <ul className="user-links3">
                            <li><Link href="/page-about">About Us</Link></li>
                            <li><Link href="/page-team">Our Team</Link></li>
                            <li><Link href="/index-4">Our Portfolio</Link></li>
                            <li><Link href="/index-4">Careers</Link></li>
                            <li><Link href="/page-contact">Contact Us</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- footer column --> */}
                    <div className="footer-column3 col-xl-6 col-lg-6 col-md-6">
                      <div className="footer-widget3 links-widget wow fadeInLeft animated" data-wow-delay="200ms">
                        <h4 className="widget-title">Our Solutions</h4>
                        <div className="widget-content">
                          <ul className="user-links3">
                            <li><Link href="/index-4">Web Development</Link></li>
                            <li><Link href="/index-4">UI/UX Design</Link></li>
                            <li><Link href="/index-4">Mobile Application</Link></li>
                            <li><Link href="/index-4">Cloud Service</Link></li>
                            <li><Link href="/index-4">Cyber Security</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-bottom-text mb-0">
          © Copyright Reserved by Nexella.com
        </p>
      </footer>
  );
};

export default FooterFour;
