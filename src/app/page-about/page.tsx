import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../section/home1/About";
import Success from "../section/home3/Success";
import Services from "../section/about/Services";
import Testimonial from "../section/home1/Testimonial";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="three">
            <PageTitle pageName="About Us" />
            <About />
            <Success />
            <Services />
            <Testimonial />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;