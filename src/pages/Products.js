import React, { useState } from "react";
import Search from "../components/Search/Search";
import SearchResultsList from "../components/SearchResultsList/SearchResultsList";

const Products = () => {
  const [searchResults, setSearchResults] = useState([]);

  const receiveSearchResults = (results) => {
    console.log("receiving results...");
    setSearchResults(results.data);
  };

  return (
    <div>
      <h1>Products Page</h1>
      <Search sendSearchResults={receiveSearchResults} />
      <SearchResultsList searchResults={searchResults} />
    </div>
  );
};

export default Products;
