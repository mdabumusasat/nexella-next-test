import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import PricingInner from "../section/pricing/pricingInner";

export const metadata = {
  title: `Pricing Page || ${SITE_NAME}`,
};

const Pricing: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="three">
            <PageTitle pageName="Pricing" />
            <PricingInner />
        </LayoutWrapper>
        </>
    );
};

export default Pricing;