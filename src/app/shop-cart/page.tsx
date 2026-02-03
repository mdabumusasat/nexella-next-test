import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopCart from "../section/shop/ShopCart";

export const metadata = {
  title: `Shopping Cart || ${SITE_NAME}`,
};

export default function ShopCartPage() {
  return (
    <LayoutWrapper FooterStyle="three">
      <PageTitle pageName="Shopping Cart" />
      <ShopCart />
    </LayoutWrapper>
  );
}

