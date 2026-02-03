import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home4/Banner";
import Marquee from "../section/home4/Marquee";
import Service from "../section/home4/Service";
import About from "../section/home4/About";
import Project from "../section/home4/Project";
import Video from "../section/home4/Video";
import Testimonial from "../section/home4/Testimonial";
import Faqs from "../section/home4/Faqs";
import Pricing from "../section/home4/Pricing";
import News from "../section/home4/News";
import Contact from "../section/home4/Contact";

export const metadata = {
  title: `Home Layout4 || ${SITE_NAME}`,
};
 
const Home4: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="three" FooterStyle="four">
      <Banner />
      <Marquee />
      <Service />
      <About />
      <Project />
      <Video />
      <Testimonial />
      <Faqs />
      <Pricing />
      <News />
      <Contact />
    </LayoutWrapper>
  );
};
 
export default Home4;