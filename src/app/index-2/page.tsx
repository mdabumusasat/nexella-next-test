import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import Marquee from "../section/home2/Marquee";
import About from "../section/home2/About";
import Services from "../section/home2/Services";
import ChooseUs from "../section/home2/ChooseUs";
import Work from "../section/home2/Work";
import Process from "../section/home2/Process";
import Teams from "../section/home2/Teams";
import Skill from "../section/home2/Skill";
import Testimonial from "../section/home2/Testimonial";
import Pricing from "../section/home2/Pricing";
import Brand from "../section/home2/Brand";
import News from "../section/home2/News";

export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};
 
const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two">
      <Banner />
      <Marquee />
      <About />
      <Services />
      <ChooseUs />
      <Work />
      <Process />
      <Teams />
      <Skill />
      <Testimonial />
      <Pricing />
      <Brand />
      <News />
    </LayoutWrapper>
  );
};
 
export default Home2;