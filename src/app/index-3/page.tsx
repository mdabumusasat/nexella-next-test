import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home3/Banner";
import About from "../section/home3/About";
import Marquee from "../section/home3/Marquee";
import Service from "../section/home3/Service";
import Success from "../section/home3/Success";
import ChooseUs from "../section/home3/ChooseUs";
import Work from "../section/home3/Work";
import Testimonial from "../section/home3/Testimonial";
import Contact from "../section/home3/Contact";
import Brand from "../section/home3/Brand";
import News from "../section/home3/News";

export const metadata = {
  title: `Home Layout3 || ${SITE_NAME}`,
};
 
const Home3: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="three" FooterStyle="three">
      <Banner />
      <About />
      <Marquee />
      <Service />
      <Success />
      <ChooseUs />
      <Marquee />
      <Work />
      <Testimonial />
      <Contact />
      <Brand />
      <News />
    </LayoutWrapper>
  );
};
 
export default Home3;