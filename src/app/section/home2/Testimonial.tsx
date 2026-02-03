'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
    {
        name: "David X. Lunar",
        role: "Social Marketer",
        img: "/assets/images/home-2/autor1.jpg",
    },
    {
        name: "Donnette Castillon",
        role: "UI/UX Designer",
        img: "/assets/images/home-2/autor2.jpg",
    },
    {
        name: "Anjelina Watson",
        role: "Web Developer",
        img: "/assets/images/home-2/autor3.jpg",
    },
    {
        name: "David X. Lunar",
        role: "Social Marketer",
        img: "/assets/images/home-2/autor1.jpg",
    },
    {
        name: "Donnette Castillon",
        role: "UI/UX Designer",
        img: "/assets/images/home-2/autor2.jpg",
    },
];

const TestimonialSectionThree = () => {
  return (
    <section className="testimonial-section-three section-padding">
      <div className="auto-container">
        <div className="sec-title text-center">
            <span className="sub-title">
                <img src="/assets/images/main-home/sub-title-shape.svg" alt="Image" />
                Testimonial
            </span>
            <h2 className="hero_title text-reveal-anim">
                Real Stories from Happy <br /> Business Partners
            </h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="swiper-slide">
                    <div className="testimonial-single_box-three">
                        <div className="testi-inner">
                            <figure className="testimonial-author"><img src={item.img} alt={item.name} /></figure>
                            <figure className="testi_ads"><img src="/assets/images/home-2/google.png" alt="Image"/></figure>
                            <figure className="testi_aroow"><img src="/assets/images/home-2/arrow.png" alt="Image"/></figure>
                            <div className="testi_content">
                            <p>While undeniably compellings The reason considered the leading Of author world. Transparency To Our ability generate substantial</p>
                            <div className="testi-bio">
                                <h4 className="title">{item.name}</h4>
                                <p>{item.role}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSectionThree;
