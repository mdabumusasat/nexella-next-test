"use client";

import Link from "next/link";

type ServiceItem = {
  title: string;
  highlight: string;
  icon: string;
  image: string;
  number: string;
  delay: string;
};

const services: ServiceItem[] = [
  {
    title: "Social Media",
    highlight: "Marketing",
    icon: "/assets/images/home-2/service-icon1.png",
    image: "/assets/images/home-2/service-img1.jpg",
    number: "001.",
    delay: ".3s",
  },
  {
    title: "Branding And",
    highlight: "Identity",
    icon: "/assets/images/home-2/service-icon2.png",
    image: "/assets/images/home-2/service-img2.jpg",
    number: "002.",
    delay: ".5s",
  },
  {
    title: "Product Design",
    highlight: "Solutions",
    icon: "/assets/images/home-2/service-icon3.png",
    image: "/assets/images/home-2/service-img3.jpg",
    number: "003.",
    delay: ".7s",
  },
  {
    title: "Branding And",
    highlight: "Identity",
    icon: "/assets/images/home-2/service-icon2.png",
    image: "/assets/images/home-2/service-img3.jpg",
    number: "006.",
    delay: ".5s",
  },
  {
    title: "Social Media",
    highlight: "Marketing",
    icon: "/assets/images/home-2/service-icon1.png",
    image: "/assets/images/home-2/service-img1.jpg",
    number: "005.",
    delay: ".3s",
  },
  {
    title: "Product Design",
    highlight: "Solutions",
    icon: "/assets/images/home-2/service-icon3.png",
    image: "/assets/images/home-2/service-img2.jpg",
    number: "004.",
    delay: ".7s",
  },
];

const ServiceSectionTwo = () => {
  return (
    <section className="services-section-two section-padding">
      <div className="auto-container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 col-ms-12 wow fadeInUp"
              data-wow-delay={service.delay}>
              <div className="service_single_item-2">
                <div className="service-single-inner">
                  <div className="service_icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="service_content">
                    <h4 className="title">
                      <Link href="/page-service-details">
                        {service.title} <br />
                        <span>{service.highlight}</span>
                      </Link>
                    </h4>
                  </div>
                  <figure className="service-img">
                    <img src={service.image} alt={service.title} />
                  </figure>
                  <h6 className="service-no">{service.number}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionTwo;
