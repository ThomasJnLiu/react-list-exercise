import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from "./components/Header/Header";
import Favourites from "./pages/Favourites";
import Products from "./pages/Products";
import { Navigation, Frame } from "@shopify/polaris";

function App() {
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
    <div className="App">
      <Frame topBar={topBarComponent} navigation={navigationComponent}>
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
