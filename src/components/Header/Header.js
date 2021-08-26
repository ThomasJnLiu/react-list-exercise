import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </header>
  );
};

export default Header;
