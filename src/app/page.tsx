
import React from 'react';
import { SITE_NAME } from "../app/Head";
import LayoutWrapper from './LayoutWrapper';
import Banner from "./section/home1/Banner";
import About from "./section/home1/About";
import Mission from "./section/home1/Mission";
import Service from "./section/home1/Service";
import ChooseUs from "./section/home1/ChooseUs";
import Process from "./section/home1/Process";
import Work from "./section/home1/Work";
import Marquee from "./section/home1/Marquee";
import Testimonial from "./section/home1/Testimonial";
import Teams from "./section/home1/Teams";
import Contact from "./section/home1/Contact";
import News from "./section/home1/News";

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
            <About />
            <Mission />
            <Service />
            <ChooseUs />
            <Process />
            <Work />
            <Marquee />
            <Testimonial />
            <Teams />
            <Contact />
            <News />
        </LayoutWrapper>
        </>
    );
};

export default Home;