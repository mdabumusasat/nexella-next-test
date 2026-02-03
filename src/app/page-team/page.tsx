import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TeamGrid from "../section/team/TeamGrid";

export const metadata = {
  title: `Our Teams || ${SITE_NAME}`,
};

const TeamPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="three">
            <PageTitle pageName="Our Teams" />
            <TeamGrid />
        </LayoutWrapper>
        </>
    );
};

export default TeamPage;