import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navigation, Frame } from "@shopify/polaris";

const Header = () => {
  const history = useHistory();

  function NavigateTo(url, history) {
    history.push(url);
  }

  const topBarComponent = <div>testing..</div>;
  const navigationComponent = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/products",
            label: "Home",
            exactMatch: true,
            onClick: () => NavigateTo("/products", history),
          },
          {
            url: "/favourites",
            label: "Products",
            onClick: () => NavigateTo("/favourites", history),
          },
        ]}
        fill
        title="navigation"
      />
    </Navigation>
  );
  return (
    <Frame topBar={topBarComponent} navigation={navigationComponent}></Frame>
  );
};

export default Header;
