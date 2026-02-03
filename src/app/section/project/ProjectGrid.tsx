"use client";
import React from "react";
import Link from "next/link";

type ProjectItem = {
  title: string;
  category: string;
  image: string;
  delay: string;
};

const projects: ProjectItem[] = [
  {
    title: "Build a Custom Plugin",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-01.jpg",
    delay: ".2s",
  },
  {
    title: "Nexa - Branding Design",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-02.jpg",
    delay: ".4s",
  },
  {
    title: "Technology Process",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-03.jpg",
    delay: ".6s",
  },
  {
    title: "Nexa - Web application",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-04.jpg",
    delay: ".8s",
  },
  {
    title: "Nexa - Web application",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-04.jpg",
    delay: ".8s",
  },
  {
    title: "Build a Custom Plugin",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-01.jpg",
    delay: ".2s",
  },
  {
    title: "Nexa - Branding Design",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-02.jpg",
    delay: ".4s",
  },
  {
    title: "Technology Process",
    category: "DEVELOPMENT",
    image: "/assets/images/home-4/project/project-03.jpg",
    delay: ".6s",
  },
];

const ProjectSectionFour = () => {
  return (
    <section className="project-section-4 section-padding">
      <div className="auto-container">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={project.delay}>
              <div className="project-box-style-4">
                <div className="images-box">
                  <div className="thumb">
                    <Link href="/page-project-details">
                      <img src={project.image} alt={project.title} />
                    </Link>
                  </div>
                  <div className="icon">
                    <Link href="/page-project-details">
                      <img
                        src="/assets/images/home-4/project/arrow-project-1.svg"
                        alt="arrow"
                      />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/page-project-details">{project.title}</Link>
                  </h4>
                  <Link
                    href="/page-project-details"
                    className="post-box">
                    {project.category}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionFour;
