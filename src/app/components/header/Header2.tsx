"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
  handleToggle?: () => void;
  searchToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }): JSX.Element => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (

      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        {/* <!-- Header Lower --> */}
        <div className="header-lower">
          {/* <!-- Main box --> */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="#"><img src="/assets/images/logo/white-logo.png" alt="Image" title="nexella"/></Link>
              </div>
            </div>
            <div className="nav-outer">
              <nav className="nav main-menu">
                <NavLinks/>
              </nav>
              {/* <!-- Main Menu End--> */}
            </div>
              <div className="outer-box">
                <div className="header-btn d-none d-xxl-block">
                  <Link className="header-btn-main" href="/page-contact">
                    <span className="header-theme-btn">Get a quote</span>
                    <span className="header-btn-arrow-right"><i className="fa-regular fa-arrow-right"></i></span>
                  </Link>
                </div>
                {/* <!-- Mobile Nav toggler --> */}
                <div className="mobile-nav-toggler d-blocks" onClick={handleOpen}><span className="menu-text">Menu</span> <img src="/assets/images/home-2/mobile-nav-icon.png" alt="Image"/></div>
              </div>
          </div>
        </div>
        {/* <!-- End Header Lower --> */}

        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={() => { handleRemove(); handleRemove2(); }} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="#"><img src="/assets/images/logo/white-logo.png" alt="Image"/></Link>
              </div>
              <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}><i className="icon fa fa-times"></i></div>
            </div>
            <ul className="navigation clearfix">
              <MobileMenu/>
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* <!-- Contact Info Box --> */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset"></i>
                  <span className="title">Call Now</span>
                  <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                </div>
              </li>
              <li>
                {/* <!-- Contact Info Box --> */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1"></span>
                  <span className="title">Send Email</span>
                  <Link href="mailto:help@company.com">help@company.com</Link>
                </div>
              </li>
              <li>
                {/* <!-- Contact Info Box --> */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock"></span>
                  <span className="title">Send Email</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

        {/* <!-- Header Search --> */}
        <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
          <span className="search-back-drop" onClick={handleToggle} />
          <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
          <div className="search-inner">
            <form method="post" action="#">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search..." />
                <button type="submit"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- End Header Search --> */}

        {/* <!-- Sticky Header  --> */}
       <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="#"><img src="/assets/images/logo/white-logo.png" alt="Image"/></Link>
              </div>
              {/* <!--Right Col--> */}
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      <NavLinks/>
                    </ul>
                  </div>
                </nav>
                {/* <!-- Main Menu End--> */}

                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Sticky Menu --> */}
      </header>
  );
}

export default Header;
