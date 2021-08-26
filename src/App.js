import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
