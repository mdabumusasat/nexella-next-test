"use client";
import React,{useState} from "react";
import ModalVideo from 'react-modal-video';

export default function CtaVideoSection() {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="cta-video-section bg-black">
        <div className="vec-cup-shape d-none d-xl-block">
            <img
            src="/assets/images/home-4/vec-cup.png"
            alt="cup shape"
            className="rotate"
            />
        </div>
        <div className="auto-container">
            <div className="cta-video-thumb wow fadeInUp" data-wow-delay=".3s">
                <div className="vec-left-shape d-none d-xl-block">
                    <img
                    src="/assets/images/home-4/vec-left-shape.png"
                    alt="left shape"
                    />
                </div>
                <div className="vec-right-shape d-none d-xl-block">
                    <img
                    src="/assets/images/home-4/vec-right-shape.png"
                    alt="right shape"
                    />
                </div>
                <img
                    src="/assets/images/home-4/cta-video.jpg"
                    alt="cta video"
                    className="img-fluid"
                />
                <a
                    className="video-btn playbtnanim"
                    onClick={() => setOpen(true)}
                    data-fancybox="gallery"
                    data-caption="">
                    <i className="fa-sharp fa-solid fa-play"></i>
                </a>
                <h2 className="title">
                    Most trusted IT Company in your town
                </h2>
            </div>
        </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}
