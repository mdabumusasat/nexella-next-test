"use client";
import React,{useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';

const HeroSectionThree = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="hero-section hero-3 bg-cover" style={{
        backgroundImage: "url(/assets/images/home-3/hero-bg.jpg)"}}>
        <div className="email-line">
          <img src="/assets/images/main-home/line.png" alt="line shape"/>
        </div>
        <div className="hero-shape">
          <img src="/assets/images/home-3/hero-shape.png" alt="img"/>
        </div>
        <div className="email-link">
          <Link href="#">example@gmail.com</Link>
        </div>
        <div className="auto-container">
          <div className="row g-4">
            <div className="col-xl-9 mt-0">
              <div className="hero-content">
                <h1 className="title hero_title tv_hero_title hero_title_1">
                  Social <span className="text-1">Media</span> <br/>
                  <span className="arrow-icon"><img src="/assets/images/home-3/arrow.svg" alt="img"/></span>Marketing
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  We don't just build websites or launch campaigns <br/>
                  — we build relationships and drive success. Let's create
                  something great together.
                </p>
                <div className="hero-button-items wow fadeInUp" data-wow-delay=".5s">
                   <Link className="theme-btn-main" href="/page-about">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="theme-btn theme-bg theme-color-white">Discover More </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
                   <div className="client-item">
                      <div className="client-image">
                        <img src="/assets/images/home-3/client-1.jpg" alt="img" className="icon-1"/>
                        <img src="/assets/images/home-3/client-2.jpg" alt="img" className="icon-2"/>
                        <img src="/assets/images/home-3/client-3.jpg" alt="img" className="icon-3"/>
                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="6"></span>K<span className="plus">+</span></div>
                      </div>
                      <h6 className="happy-title">
                        <span>200 +</span>
                        Happy Customer's
                      </h6>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="hero-image">
                    <img src="/assets/images/home-3/hero-image.jpg" alt="img"/>
                    <a className="video-btn playbtnanim" onClick={() => setOpen(true)} data-fancybox="gallery" data-caption=""><i className="fa-sharp fa-solid fa-play"></i></a>
                    <div className="hero-marketing-box bounce-animate">
                        <div className="marketing-icon">
                        <img src="/assets/images/home-2/vector-icon.svg" alt="Image"/>
                        </div>
                        <h6 className="marketing-title">Social Media Marketing</h6>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
      </>
  );
};

export default HeroSectionThree;
