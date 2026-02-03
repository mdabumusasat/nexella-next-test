"use client";
import React from "react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const leftFaqs: FaqItem[] = [
  {
    question: "How much do your services cost?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Why is digital marketing important?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Can I do digital marketing myself?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Can I do digital marketing myself?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Why is digital marketing important?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Nexella is a dynamic best digital marketing dedicated in to empowerin businesses through innovative presence modern technology we have used",
  },
];

const Accordion = ({
  items,
  defaultActive = 0,
}: {
  items: FaqItem[];
  defaultActive?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultActive);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className="accordion-box">
      {items.map((item, index) => (
        <li
          key={index}
          className={`accordion block ${
            activeIndex === index ? "active-block" : ""
          } ${index === items.length - 1 ? "mb-0" : ""}`}
        >
          <div
            className={`acc-btn ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggle(index)}
          >
            {item.question}
            <i className="icon fa fa-plus"></i>
          </div>

          <div
            className={`acc-content ${
              activeIndex === index ? "current" : ""
            }`}
          >
            <div className="content">
              <div className="text">{item.answer}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const FaqSectionFour = () => {
  return (
    <section
      className="faq-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('images/home-4/faq-bg.jpg')",
      }}
    >
      <div className="auto-container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <Accordion items={leftFaqs} defaultActive={0} />
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <Accordion items={rightFaqs} defaultActive={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSectionFour;
