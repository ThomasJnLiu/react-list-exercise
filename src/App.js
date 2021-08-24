import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
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
