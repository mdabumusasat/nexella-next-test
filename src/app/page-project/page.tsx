import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ProjectGrid from "../section/project/ProjectGrid";

export const metadata = {
  title: `Project Page || ${SITE_NAME}`,
};


const ProjectPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="three">
            <PageTitle pageName="our project" />
            <ProjectGrid />
        </LayoutWrapper>
        </>
    );
};

export default ProjectPage;