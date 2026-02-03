"use client";

import React from "react";

const testimonials = [
  {
    name: "David X. Lunar",
    role: "Social Marketer",
    authorImg: "/assets/images/home-2/autor1.png",
  },
  {
    name: "Donnette Castillon",
    role: "UI/UX Designer",
    authorImg: "/assets/images/home-2/autor2.png",
  },
  {
    name: "Anjelina Watson",
    role: "Web Developer",
    authorImg: "/assets/images/home-2/autor3.png",
  },
  {
    name: "Anjelina Watson",
    role: "Web Developer",
    authorImg: "/assets/images/home-2/autor3.png",
  },
  {
    name: "David X. Lunar",
    role: "Social Marketer",
    authorImg: "/assets/images/home-2/autor1.png",
  },
  {
    name: "Donnette Castillon",
    role: "UI/UX Designer",
    authorImg: "/assets/images/home-2/autor2.png",
  },
];

const TestimonialSectionThree = () => {
  return (
    <section className="testimonial-section-three section-padding">
      <div className="container p-0">
        <div className="row">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 mb-20">
              <div className="testimonial-single_box-three">
                <div className="testi-inner">
                  <figure className="testimonial-author">
                    <img
                      src={item.authorImg}
                      alt={item.name}
                    />
                  </figure>
                  <figure className="testi_ads">
                    <img
                      src="/assets/images/home-2/google.png"
                      alt="Google"
                    />
                  </figure>
                  <figure className="testi_aroow">
                    <img
                      src="/assets/images/home-2/arrow.png"
                      alt="Arrow"
                    />
                  </figure>
                  <div className="testi_content">
                    <p>
                      While undeniably compellings The reason considered the
                      leading Of author world. Transparency To Our ability
                      generate substantial
                    </p>
                    <div className="testi-bio">
                      <h4 className="title">{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionThree;
