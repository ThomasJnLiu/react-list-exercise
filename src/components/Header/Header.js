import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/Products">Products</NavLink>
      <NavLink to="/Cart">Cart</NavLink>
    </header>
  );
};

export default Header;
