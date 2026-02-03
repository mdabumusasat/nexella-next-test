import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import BlogDetails from "../section/blog/BlogDetails";

export const metadata = {
  title: `News Details || ${SITE_NAME}`,
};

const NewsDetailsPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="three">
            <PageTitle pageName="Blog Details" />
            <BlogDetails />
        </LayoutWrapper>
        </>
    );
};

export default NewsDetailsPage;