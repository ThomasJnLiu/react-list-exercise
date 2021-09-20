import {
  Route,
  Switch,
  Redirect,
  useHistory,
  Link as ReactRouterLink,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Favourites from "./pages/Favourites";
import Products from "./pages/Products";
import { Navigation, Frame, Topbar, TopBar } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import { useState, useCallback } from "react";

function App() {
  const location = useLocation();
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const toggleMobileNav = useCallback(
    () => setMobileNavActive((mobileNavActive) => !mobileNavActive),
    []
  );

  const navigationComponent = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: "/products",
            label: "Home",
            exactMatch: true,
          },
          {
            url: "/favourites",
            label: "Products",
          },
        ]}
        fill
        title="navigation"
      />
    </Navigation>
  );

  // solution from: https://github.com/Shopify/polaris-react/issues/2978
  const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

  function Link({ children, url = "", external, ref, ...rest }) {
    // react-router only supports links to pages it can handle itself. It does not
    // support arbirary links, so anything that is not a path-based link should
    // use a reglar old `a` tag
    if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
      rest.target = "_blank";
      rest.rel = "noopener noreferrer";
      return (
        <a href={url} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <ReactRouterLink to={url} {...rest}>
        {children}
      </ReactRouterLink>
    );
  }

  return (
    <AppProvider i18n={enTranslations} linkComponent={Link}>
      <div className="App">
        <Frame
          navigation={navigationComponent}
          showMobileNavigation={mobileNavActive}
          onNavigationDismiss={toggleMobileNav}
          topBar={
            <TopBar showNavigationToggle onNavigationToggle={toggleMobileNav} />
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/products" />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
          </Switch>
        </Frame>
      </div>
    </AppProvider>
  );
}

export default App;

// import React from "react";
// import { NavLink, useHistory } from "react-router-dom";
// import { Navigation, Frame } from "@shopify/polaris";

// const Header = () => {
//   const history = useHistory();

//   function NavigateTo(url, history) {
//     history.push(url);
//   }

//   const topBarComponent = <div>testing..</div>;
//   const navigationComponent = (
//     <Navigation location="/">
//       <Navigation.Section
//         items={[
//           {
//             url: "/products",
//             label: "Home",
//             exactMatch: true,
//             onClick: () => NavigateTo("/products", history),
//           },
//           {
//             url: "/favourites",
//             label: "Products",
//             onClick: () => NavigateTo("/favourites", history),
//           },
//         ]}
//         fill
//         title="navigation"
//       />
//     </Navigation>
//   );
//   return (
//     <Frame topBar={topBarComponent} navigation={navigationComponent}></Frame>
//   );
// };
