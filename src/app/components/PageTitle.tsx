import React from "react";
import Link from "next/link";

interface PageTitleProps {
  pageName: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return (
    <section
      className="page-title"
      style={{backgroundImage:"url(/assets/images/inner/page-title-bg.png)",
      }}>
        <div className="auto-container">
            <div className="title-outer text-center">
              <h1 className="title">{pageName}</h1>
              <ul className="page-breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{pageName}</li>
              </ul>
            </div>
        </div>
    </section>
  );
};

export default PageTitle;
