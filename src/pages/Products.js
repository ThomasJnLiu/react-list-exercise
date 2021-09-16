import React, { useState, useCallback } from "react";
import Search from "../components/Search/Search";
import SearchResultsList from "../components/SearchResultsList/SearchResultsList";

const Products = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Prevents Search.js from rerendering and calling the api repeatedly
  const receiveSearchResults = useCallback((results) => {
    setSearchResults(results.data);
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      <Search sendSearchResults={receiveSearchResults} />
      <SearchResultsList searchResults={searchResults} />
    </div>
  );
};

export default Products;
