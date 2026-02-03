"use client";
import React,{useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';

export default function HeroSectionFour() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section
      className="hero-section-4 hero-4 bg-cover"
      style={{
        backgroundImage: "url('/assets/images/home-4/hero/hero-bg.jpg')",
      }}>
      <div className="circle-shape">
        <img
          src="/assets/images/home-4/hero/circle-shape.png"
          alt="Circle Shape"
          className="rotate"
        />
      </div>
      <div className="social-icon-list1">
        <span>FOLLOW US -</span>
        <Link href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="#" aria-label="Pinterest">
          <i className="fab fa-pinterest-p"></i>
        </Link>
        <Link href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
      <Link href="#" className="get-text">
        GET IN TOUCH
      </Link>
      <div className="auto-container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1
                className="hero-title wow fadeInUp"
                data-wow-delay=".3s">
                Design, tech &amp; magic{" "}
                <img
                  src="/assets/images/home-4/hero/small-img.png"
                  alt="Decoration"/>
                Transform your <span>ideas into reality</span>
              </h1>
              <h4
                className="sub-title wow fadeInUp"
                data-wow-delay=".5s">
                Your Best Marketing Partner
              </h4>
              <div
                className="video-items wow fadeInUp"
                data-wow-delay=".7s">
                <a
                  className="video-btn playbtnanim"
                  onClick={() => setOpen(true)}
                  data-fancybox="gallery"
                  aria-label="Play Video">
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
                <p>
                  Today’s market demands more than just creativity — it
                  requires relevance. We blend design thinking with
                  data-driven marketing to create purposeful, innovative
                  strategies.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="hero-image">
              <img
                src="/assets/images/home-4/hero/hero-image.jpg"
                alt="Hero"/>
              <div className="circle-box">
                <div className="text-circle">
                  <img
                    src="/assets/images/home-4/text-circle.svg"
                    alt="Text Circle"
                    className="rotate"
                  />
                </div>
                <Link href="#" className="icon" aria-label="Scroll Down">
                  <i className="fa-regular fa-arrow-down"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}
